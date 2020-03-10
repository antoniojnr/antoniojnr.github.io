---
layout: default
title: Sequelize - Modelos
nav_exclude: true
---
## Sequelize - Modelos
{: .no_toc }

Modelos são a representação na linguagem de programação dos dados armazenados no banco de dados. Essa seção aborda como gerar modelos para sua aplicação.

1. TOC
{:toc}

### Criando modelo e migração
Com a conexão ao banco de dados configurada corretamente, é hora de criar nosso primeiro modelo. O `sequelize-cli` dispõe de um script que gera o *modelo* no arquivo apropriado e uma *migração*. Migrações são evoluções no seu esquema de dados, que serão feitas automaticamente pelo Sequelize.

Iremos gerar um modelo **User** com os seguintes atributos: **firstName**:*string*, **lastName**:*string* e **email**:*string*. Para isso, insira o comando a seguir, se o `sequelize-cli` está instalado localmente no projeto:

```
node_modules\.bin\sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

ou, se está instalado globalmente, faça:

```
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
```

O comando acima emite uma saída indicando que um novo modelo e uma nova migração foram criados nos diretórios `models` e `migrations`.

### Executando a migração
Para executar a migração e criar a(s) tabela(s) necessária(s) para armazenar o modelo criado, digite o comando:
<pre>
sequelize db:migrate
</pre>

Este comando rodará o script para criar a tabela `Users`, onde será armazenado cada `User`.

### Verificando as mudanças

Verifique se a tabela `Users` foi criada utilizando a interface cliente do MySQL. Conectado como o usuário que você criou na [configuração do MySQL](/content/2-daw-2-mysql.html), execute os comandos a seguir. Esse comando deve ser executado no terminal do sistema operacional instalado na sua máquina virtual.

Para abrir a interface cliente, digite `mysql -u [SEU_USUARIO] -p`.

Na interface cliente, você verá o prompt de comando `mysql>`. Digite o comando, substituindo `[SUA_BASE_DE_DADOS]` pelo nome da base de dados que você criou:

```
USE [SUA_BASE_DE_DADOS];
```

Você estará conectado à base de dados criada quando vir a saída `Database changed`. Liste as tabelas da base de dados com o comando:

```
SHOW TABLES;
```

Se a tabela `Users` for listada na saída, então ela foi criada.
```
+-----------------+
| Tables_in_myapp |
+-----------------+
| SequelizeMeta   |
| Users           |
+-----------------+
2 rows in set (0,01 sec)
```

### Desfazendo a migração

Caso tenha feito algo errado, você pode reverter essa migração. Isso irá desfazer tudo o que foi feito por ela que, no caso, é criar a tabela `Users`, insira o comando a seguir. Esse comando só desfaz a migração mais recente.

Para refazer a migração, execute o comando listado em [Executando a migração](https://github.com/antoniojnr/ipw/blob/master/aulas/sequelize-cli.md#executando-a-migração)

```
sequelize db:migrate:undo
```

### Criando outros modelos

O comando `sequelize model:generate` é usado para criar os modelos e migrações.

Use a opção `--name` para definir o nome do seu modelo.

Use a opção `--attributes` para definir os atributos do seu modelo, no formato `nome:tipo`.

Por exemplo:
```
sequelize model:generate --name Image --attributes userId:integer,fileId:string,text:string
```