---
layout: default
title: Iniciando com Node.js
nav_exclude: true
---
## Iniciando com Node.js
{: .no_toc }

Node.js é um ambiente de execução que permite executar código JavaScript fora do navegador. É o que utilizaremos para desenvolver o lado servidor (*backend*). Esta seção aborda a criação de seu primeiro projeto Node.js.

1. TOC
{:toc}

### Estrutura do diretório

Antes de iniciar, vejamos como um projeto Node.js é normalmente estruturado.

    RAIZ DO PROJETO
     |- package.json
     |- src
         |- index.js
     |- node_modules
    
Na raiz do seu projeto (o diretório onde estarão guardados os arquivos do seu projeto), deverão existir um diretório **src** (*source*) e um arquivo **package.json**. No diretório **src**, ficarão todos os arquivos de código que criarmos, separados em subdiretórios, se necessário. O arquivo **package.json** guarda informações do seu projeto, como detalhado a seguir.

#### O arquivo **package.json**

Este arquivo contém metadados do seu projeto. Metadados são dados que descrevem dados. O conteúdo do arquivo é escrito em um formato chamado JSON (*JavaScript Object Notation*). JSON é um formato usado para troca de dados que fácil para humanos lerem e escreverem, assim como fácil para programas interpretarem e gerarem.

No **package.json** encontram-se informações usadas para identificar o projeto e tratar suas dependências. Um exemplo de conteúdo presente em um arquivo **package.json** é mostrado a seguir

    {
      "name": "node-http-server",
      "version": "1.0.0",
      "description": "Node.js example server starter project",
      "main": "src/index.js",
      "scripts": {
        "start": "nodemon src/index.js"
      },
      "dependencies": {
        "ejs": "3.0.1",
        "express": "4.17.1",
        "express-ejs-layouts": "2.5.0"
      },
      "devDependencies": {
        "nodemon": "1.18.4"
      }
    }

Os campos `name`, `version` and `description` são auto-explicativos. O campo `main` aponta para o arquivo principal do projeto, que será executado por um servidor.

`scripts` contém scripts que podem ser executados em várias etapas do ciclo de vida do seu projeto.

`dependencies` guarda as dependências, que são outros pacotes dos quais o seu projeto depende para executar.

`devDependencies` são módulos necessários somente durante o desenvolvimento do projeto.

#### O diretório **node_modules**

O diretório **node_modules** guarda as dependências do seu projeto, ou seja, aquilo de que o seu projeto depende para funcionar. Nesse diretório estão os arquivos contendo os pacotes e seu respectivo código.

O conteúdo do diretório **node_modules** é construído de acordo com as dependências especificadas no atributo `dependencies` no arquivo **package.json**. Veremos como isso é feito mais à frente.

#### O arquivo **index.js**

No arquivo **index.js**, você vai escrever o código que vai ser chamado primeiro quando o seu programa for executado.

### Fontes

1. https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/
2. https://docs.npmjs.com/files/package.json