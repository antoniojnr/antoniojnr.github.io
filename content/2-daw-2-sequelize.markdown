---
layout: default
title: Sequelize
nav_exclude: true
---
## Sequelize
{: .no_toc }

Sequelize é uma biblioteca ORM (Mapeamento objeto-relacional) para Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server.  Mapeamento objeto-relacional (ou ORM, do inglês: Object-relational mapping) é uma técnica de desenvolvimento utilizada para converter dados entre a aplicação e o banco de dados utilizando programação orientada aos objetos. As tabelas do banco de dados são representadas através de classes e os registros de cada tabela são representados como instâncias das classes correspondentes.

Desta forma, o programador o programador utiliza uma interface de programação para fazer o trabalho de persistência, sem se preocupar com os comandos em linguagem SQL.

1. TOC
{:toc}

### Configurando o MySQL

Antes de prosseguir, configure o MySQL de acordo com [os passos listados aqui](/content/2-daw-2-mysql.html).

### Criando o projeto

Para criar o seu projeto e conseguir usar o Sequelize como ORM para se comunicar com o banco de dados, você precisará usar o pacote `sequelize-cli` da seguinte forma.

1. Certifique-se de que o seu diretório de trabalho é o projeto no qual você irá utilizar o Sequelize.
2. Instale os pacotes `sequelize-cli` e `sequelize` com o comando `npm i sequelize sequelize-cli --save`. O pacote `sequelize-cli` poderá ser instalado globalmente (`npm i sequelize-cli -g`), enquanto que o `sequelize` pode ser instalado somente no projeto atual (`npm i sequelize --save`).
3. Agora você poderá rodar o comando `sequelize init` para inicializar o seu projeto. Se você não conseguiu rodar o `sequelize init` porque instalou o `sequelize-cli` localmente, precisará executar o seu binário (executável) de uma forma diferente para prosseguir. Os binários de pacotes Node.js ficam localizados no diretório `node_modules/.bin` dentro de seu projeto. Para executar no Windows, digite no terminal `node_modules\.bin\sequelize init` e aperte Enter.

Foram criados alguns diretórios e agora você terá a seguinte árvore de diretórios:
```
projeto
 |- src
 |- config
 |- migrations
 |- models
 |- node_modules
 |- seeders
 |- package-lock.json
 |- package.json
```

4. Neste momento, você precisará configurar o acesso ao banco de dados.

### Configurando o projeto

1. Com o usuário e base de dados criados, iremos inserir as configurações no arquivo `config/config.json`. O valor inserido em `username` é o nome do usuário que você criou ao configurar o MySQL [nesta etapa](/content/2-daw-2-mysql.html). Use a senha que você inseriu para o usuário em `password` e o `database` é o nome da base de dados que você criou também naquela etapa. O campo `hostname` deve conter o IP de ua máquina, mas use "localhost" para fins de desenvolvimento. Finalmente, o `dialect` é `mysql2`. Por enquanto, preencha apenas as configurações do ambiente `development`.

Suas configurações devem ficar como as listadas a seguir:

```
"development": {
  "username": "[NOME DE USUÁRIO]",
  "password": "[SUA SENHA]",
  "database": "[BASE DE DADOS]",
  "host": "localhost",
  "dialect": "mysql"
}
```

2. Agora é hora de testar se as configurações estão corretas e se seu projeto consegue se comunicar com o banco de dados. Antes de continuar, instale o módulo NPM do MySQL, usando `npm i mysql2`.

3. Para facilitar seu trabalho, eu criei um arquivo index.js com a chamada de função para o Sequelize funcionar corretamente. Baixe-o [aqui](/content/data/index.js).

4. Execute sua aplicação.

### Referências

1. [Object-relational mapping](https://en.wikipedia.org/wiki/Object-relational_mapping)
