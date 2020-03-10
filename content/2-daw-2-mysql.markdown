---
layout: default
title: MySQL
nav_exclude: true
---
## MySQL
{: .no_toc }

Esta seção descreve os passos para configurar o MySQL para o nosso uso durante a aula.

1. TOC
{:toc}

### Aumentando a segurança da instância do MySQL

O comando `mysql_secure_installation` irá assegurar que a sua instalação do MySQL não apresente algumas brechas de segurança básicas. Esta etapa servirá para definir uma senha para o usuário `root`, que é o administrador geral do banco de dados, além de remover algumas coisas que não utilizaremos.

Ao executar o comando, você será guiado por uma lista de perguntas:

#### Validar senhas

Esta parte pergunta se você deseja verificar a força das senhas dos usuários cadastrados no banco de dados.

Responda: `y` ou `Y` (yes).

```
VALIDATE PASSWORD COMPONENT can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD component?

Press y|Y for Yes, any other key for No:
```

#### Nível de complexidade das senhas

Esta parte define qual será o nível de complexidade utilizado pela validação.

Responda `0`, correspondente a `LOW` (baixo). Para fins de aprendizado, é melhor usar senhas mais simples, pois são mais fáceis de digitar. Mas jamais use senhas simples para aplicações em produção.

```
There are three levels of password validation policy:

LOW    Length >= 8
MEDIUM Length >= 8, numeric, mixed case, and special characters
STRONG Length >= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: 0
```

#### Definindo a senha do usuário `root`

Defina a senha do usuário `root`. Se você estiver seguindo esses passos no seu computador pessoal, defina a senha que desejar, mas anote-a para não esquecer. Se você estiver seguindo esses passos no computador do laboratório, o professor irá definir uma senha para todos usarem.

Insira a senha e repita, para confirmar.

```
Please set the password for root here.

New password:

Re-enter new password:
```

O MySQL mostrará um número representando a força da senha e perguntará se deseja continuar. Responda: `y` ou `Y` (yes).

```
Estimated strength of the password: 50
Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : y
```

#### Remova usuários anônimos

Não precisaremos dos usuários anônimos. Remova-os.

Responda: `y` ou `Y` (yes).

```
By default, a MySQL installation has an anonymous user,
allowing anyone to log into MySQL without having to have
a user account created for them. This is intended only for
testing, and to make the installation go a bit smoother.
You should remove them before moving into a production
environment.

Remove anonymous users? (Press y|Y for Yes, any other key for No) : y
```

#### Desabilitando acesso externo para `root`

É mais seguro desabilitar o acesso externo para `root`. Ou seja, este usuário deve poder acessar o banco de dados somente a partir da máquina local.

Responda: `y` ou `Y` (yes).

```
Normally, root should only be allowed to connect from
'localhost'. This ensures that someone cannot guess at
the root password from the network.

Disallow root login remotely? (Press y|Y for Yes, any other key for No) : y
```

#### Remova a base de dados `test`

Não usaremos a base de dados `test`. Remova-a.

Responda: `y` ou `Y` (yes).

```
By default, MySQL comes with a database named 'test' that
anyone can access. This is also intended only for testing,
and should be removed before moving into a production
environment.


Remove test database and access to it? (Press y|Y for Yes, any other key for No) : y
```

#### Recarregar tabelas de privilégios

Recarregue as tabelas de privilégios para que as modificações que fizemos tenham efeito.

Responda: `y` ou `Y` (yes).

```
Reloading the privilege tables will ensure that all changes
made so far will take effect immediately.

Reload privilege tables now? (Press y|Y for Yes, any other key for No) : y
```

### Conecte-se ao banco de dados

Utilize o comando `mysql -u root -p` para conectar-se ao banco de dados como usuário (`-u`) `root`. O parâmetro `-p` fará com que o MySQL peça a senha do usuário.

### Crie um novo usuário

Quando sua aplicação estiver conectada ao banco de dados, precisará executar consultas para manipular os dados. Para isso, a aplicação precisa agir como um usuário, uma entidade que o banco de dados usa para representar aquele que manipula os dados sob determinadas permissões.

O comando a seguir cria um novo usuário chamado `myappuser` que pode se conectar a partir de qualquer máquina (`%`) com a senha `myapplicationpassword`. Mude o nome de usuário e senha de acordo com o que você desejar definir para sua aplicação.

Para permitir que o usuário conecte-se somente a partir da máquina local, use `localhost` em vez de `%`.

```sql
CREATE USER 'myappuser'@'%' IDENTIFIED BY 'myapplicationpassword';
```

### Crie uma nova base de dados

O comando a seguir é usado para criar uma nova base de dados. As partes entre colchetes `[]` são opcionais.

```
CREATE DATABASE [IF NOT EXISTS] database_name
[CHARACTER SET charset_name]
[COLLATE collation_name]
```

O comando `IF NOT EXISTS` faz com que a tabela seja criada somente se não existir.

Precisaremos definir o nome do conjunto de caracteres que usaremos, além do *collation*, que é um conjunto de regras para comparar caracteres em um determinado conjunto de caracteres.

O `CHARACTER SET` que usaremos é o `latin1`, suficiente para representar dados com caracteres do alfabeto latino e acentos que usamos em português. Este conjunto de caracteres já possui um *collation* padrão, que é o `latin1_swedish_ci`, então não precisamos defini-lo.

Insira o comando abaixo e modifique o nome da base de dados de acordo com sua necessidade.

```sql
CREATE DATABASE IF NOT EXISTS myapplication
CHARACTER SET latin1
```

### Defina as permissões do usuário criado

Uma vez criado o usuário e a base de dados, vamos fazer com que esse usuário tenha permissão de manipular somente a base de dados da aplicação. Isso faz com que o usuário não possa ler e alterar dados de outras aplicações.

Atente para os parâmetros do comando:

- `myapplication` deve ser o nome da base de dados que você criou na seção anterior.
- `myappuser` deve ser o nome do usuário que você criou na seção anterior.

`myapplication.*` faz com que essas permissões valham para todas as tabelas (`*`) da base de dados `myapplication`.

```sql
GRANT ALL PRIVILEGES ON myapplication.* TO 'myappuser'@'%';
```

### Verificar as permissões de um usuário

Para verificar as permissões de um usuário, use:

```sql
SHOW GRANTS FOR 'database_user'@'localhost';
```

### Referências

1. [How to Create MySQL Users Accounts and Grant Privileges](https://linuxize.com/post/how-to-create-mysql-user-accounts-and-grant-privileges/)
1. [MySQL Collation](https://www.mysqltutorial.org/mysql-collation/)