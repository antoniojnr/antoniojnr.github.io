---
layout: default
title: Modelos
nav_exclude: true
---
## Modelos
{: .no_toc }

Modelos permitem escrever páginas HTML e manipular seu conteúdo, injetando valores de variáveis vindas do código JavaScript do lado servidor. Para tanto, usa-se uma sintaxe especial para escrever o código JavaScript junto do código HTML.

1. TOC
{:toc}

### Definindo o mecanismo de visualização

Para usar modelos, é necessário definir o mecanismo de visualização da aplicação. Existem diversos mecanismos de visualização, mas nessa seção focaremos no que vamos utilizar, chamado EJS.

Para instalar o EJS, faça:

```
npm install ejs --save
```

Use a aplicação a seguir como referência para a implementação. Logo abaixo da declaração das constantes, adicione `app.set('view engine', 'ejs')`.

```javascript
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.listen(port, function() {
  console.log(`Rodando na porta ${port}!`)
})
```

### Definindo o arquivo de modelo

Os modelos ficam guardados em um diretório `views` na raiz do projeto. Você deverá criar o arquivo `views\index.ejs`. No código JavaScript, chamaremos esse modelo por "index". Não é necessário especificar o diretório ou extensão. Faça o mesmo para definir novos modelos.

O conteúdo do arquivo `views\index.ejs` não será diferente de código HTML já visto antes. Logo veremos como trazer valores de variáveis do código Node.js.

```
<h1>Hello world!</h1>
```

No código JavaScript, faça:

```javascript
const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render("index")
})

app.listen(port, function() {
  console.log(`Rodando na porta ${port}!`)
})
```

Em vez de chamar `res.send`, na rota "/", chamamos `res.render`, passando o nome do modelo ("index", nesse caso). Isso fará com que o conteúdo definido em `views/index/ejs` seja renderizado no navegador.