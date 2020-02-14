---
layout: default
title: Iniciando com Node.js
nav_exclude: true
---
## Iniciando com Node.js

Node.js é um ambiente de execução que permite executar código JavaScript fora do navegador. É o que utilizaremos para desenvolver o lado servidor (*backend*). Esta seção aborda a criação de seu primeiro projeto Node.js.

### Estrutura do diretório

Antes de iniciar, vejamos como um projeto Node.js é normalmente estruturado.

    RAIZ DO PROJETO
     |- package.json
     |- src
         |- index.js
    
Na raiz do seu projeto (o diretório onde estarão guardados os arquivos do seu projeto), deverão existir um diretório **src** (*source*) e um arquivo **package.json**. No diretório **src**, ficarão todos os arquivos de código que criarmos, separados em subdiretórios, se necessário. O arquivo **package.json** guarda informações do seu projeto, como detalhado a seguir.

#### O arquivo **package.json**

O arquivo