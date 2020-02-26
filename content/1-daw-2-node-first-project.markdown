---
layout: default
title: Primeiro projeto em Node.js
nav_exclude: true
---
## Primeiro projeto em Node.js
{: .no_toc }

Nesta seção veremos como criar o nosso primeiro projeto em Node.js, além de como usar o **npm**, que é o gerenciador de pacotes do Node.js, para instalar dependências.

1. TOC
{:toc}

### Passo 1: Crie um diretório para abrigar seu projeto

Crie um novo diretório e mude para este diretório. Todos os comandos descritos nessa seção deverão ser executados tendo esse diretório como *diretório de trabalho*, ou seja, o diretório selecionado. Se você já sabe criar diretórios e já se encontra no diretório vazio onde criará seu projeto, pule o restante desse passo e vá para o próximo passo.

No terminal do Windows, use o comando `mkdir` para criar um diretório e `cd` para mudar para aquele diretório.

Assim, considerando que o seu diretório de trabalho atual é, `C:\Users\voce\Desktop`, quando você digitar o comando `mkdir projeto-inicial` e apertar Enter, você criará um diretório `C:\Users\voce\Desktop`.

Tendo criado o diretório `projeto-inicial`, com o comando `cd projeto-inicial`, seu diretório de trabalho agora será `C:\Users\voce\Desktop\projeto-inicial`.

### Passo 2: Crie o arquivo **package.json**

Com o comando `npm init`, você será guiado a preencher as informações que ficarão no seu **package.json**. Nesta etapa, só é necessário apertar Enter em cada uma das informações para manter o valor padrão (o que aparece entre parênteses) **exceto para uma**: em `entrypoint` escreva `src/index.js`, como é mostrado a seguir.

![Preenchendo informações](/content/images/2-project-1.png "Preenchendo informações")

No fim desse processo, o **npm** lhe mostrará o conteúdo do **package.json**. Aperte Enter para confirmar que está tudo correto. O arquivo estará, então, criado.

![Confirme se está correto](/content/images/2-project-2.png "Confirme se está correto")

O conteúdo do seu arquivo **package.json** deve ser igual ao que é mostrado a seguir (a menos que você o tenha criado em um diretório com um nome diferente de "projeto-inicial").

    {
      "name": "projeto-inicial",
      "version": "1.0.0",
      "description": "",
      "main": "src/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }

### Passo 3: Crie o arquivo **index.js**

Crie o arquivo **index.js** dentro de um diretório **src**, de forma que o seu projeto tenha a seguinte estrutura.

    projeto-inicial
     |- package.json
     |- src
         |- index.js

### Passo 4: Escreva o código do projeto

É importante que não copie e cole o código, mas que *digite*, para que se acostume com as sintaxe da linguagem.

```javascript
const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Rodando na porta ${port}!`)
})
```

Agora, vamos entender o que esse código faz.

```javascript
const express = require('express')
const app = express()
const port = 3000
```

A primeira linha carrega o módulo chamado "express" na variável `express`. Na segunda linha, o módulo é inicializado na variável `app`. Assim, passaremos a ter acesso às suas funções, por exemplo. Finalmente, na terceira linha, inicializamos uma variável `port` com o valor inteiro 3000.

Você está criando uma aplicação para rodar do lado servidor. No seu código, você deve especificar como sua aplicação responderá às requisições do lado cliente. Você definirá um número de *rotas* em seu código. As rotas são caminhos através dos quais o lado cliente vai acessar o lado servidor de sua aplicação.

```javascript
app.get('/', function(req, res) {
  res.send('Hello World!')
})
```

No trecho de código acima, estamos definindo que, quando o lado servidor receber uma requisição GET no caminho "/", este responderá com o texto "Hello World!". Em termos práticos, se a sua aplicação estivesse rodando em "www.meuprojeto.com" e se você digitasse essa URL na barra de endereços do navegador e apertasse Enter, veria o texto "Hello world!". No navegador, tanto faz digitar "www.meuprojeto.com" e "www.meuprojeto.com/". A "/" significa que você está requisitando o ponto de entrada da aplicação ou site rodando naquele servidor.

Agora, para especificar como a nossa aplicação irá rodar, usamos o código a seguir.

```javascript
app.listen(port, function() {
  console.log(`Rodando na porta ${port}!`)
})
```

Como o valor definido na variável `port` foi 3000, isso significa que o servidor irá rodar na máquina local, na porta 3000. O texto "Rodando na porta 3000" será exibido no terminal e não no navegador.

Para acessar sua aplicação, vá ao navegador e digite `localhost:3000` ou `127.0.0.1:3000`. `localhost` é o nome que aponta para o endereço IP da máquina local. Veja que só é possível fazer isso na sua própria máquina. `localhost` em outra máquina estará apontando para o endereço daquela máquina.

### Passo 5: Instale dependências

No início do código escrito no passo 4, carregamos uma dependência chamada "express". Ela foi carregada, mas ainda não foi instalada. Para instalar, digite no terminal: `npm install express --save`. Este comando instalará o `express`, baixando os arquivos necessários no diretório **node_modules** e adicionará um item nas dependências, no arquivo **package.json**.

### Passo 6: Execute

Para ver a sua primeira aplicação em execução, insira o comando `node src/index.js` no terminal. No navegador, insira o endereço `localhost:3000` e aperte Enter.

No terminal, você verá o texto "Rodando na porta 3000" e, no navegador, o texto "Hello world!".

### Passo 7: Criando um script

Em vez de digitar o comando `node src/index.js` toda vez no terminal, você pode criar um script para chamar esse comando. Abra o arquivo **package.json**

No atributo `scripts`, você verá o seguinte.

    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },

O script `test` não é necessário no momento. O comando que ele executa apenas imprime na tela (é isso o que o `echo` faz) a mensagem que não foi especificado nenhum teste ("no test specified"). No terminal, insira `npm test` para ver isso acontecer.

Vamos substituí-lo pelo script `start`, que chamará `node src/index.js`. Assim, o atributo `scripts` deverá ficar assim:

    "scripts": {
      "start": "node src/index.js"
    },

Agora você pode iniciar sua aplicação com `npm start`. Também pode iniciar com `node src/index.js`, mas `npm start` é bem menor para escrever.

Pronto, você finalizou sua primeira aplicação em Node.js.

### Fontes

1. https://stackoverflow.com/questions/9901082/what-is-this-javascript-require
1. https://expressjs.com/en/starter/hello-world.html
