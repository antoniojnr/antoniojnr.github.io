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

Veja outros mecanismos de visualização [aqui](https://expressjs.com/en/resources/template-engines.html).

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

Os modelos ficam guardados em um diretório `views` na raiz do projeto. Você deverá criar o arquivo `views\index.ejs`. No código JavaScript, chamaremos esse modelo por "index". No código JavaScript, não é necessário especificar o diretório ou extensão. Faça o mesmo para definir novos modelos.

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

Na rota "/", em vez de chamar `res.send`, chamamos `res.render`, passando o nome do modelo ("index", nesse caso). Isso fará com que o conteúdo definido em `views/index.ejs` seja renderizado, ou seja, mostrado no navegador.

### Passando variáveis para o modelo

Às vezes, é necessário passar valores do seu código node para o modelo. Isso pode ser feito através de variáveis locais passadas através da função `render()`. A função `render()` pode receber dois parâmetros: o nome do modelo criado no diretório "views" e um objeto com as variáveis locais que você acessará no modelo. Na chamada a seguir, a variável `name` estará disponível no modelo "usuario.ejs".

```javascript
res.render('usuario', { name: 'Antonio' })
```

Caso precise passar mais de uma variável local, basta adicionar um novo parâmetro.

```javascript
res.render('usuario', { name: 'Antonio', email: 'antonio@email.com' })
```

### Marcações EJS

No modelo, há uma sintaxe especial para exibir o valor de variáveis, bem como executar código JavaScript para montar a estrutura da página. Ainda é possível carregar um arquivo JavaScript que cumpra esse papel do lado cliente (através da marcação `<script>`). O código JavaScript escrito dentro das marcações EJS é controlado pelo servidor e por isso é diferente de um código carregado através de `<script>`.

Existem tipos diferentes de marcações de abertura e encerramento.

- Marcações de abertura 
  - `<%=`: Saída escapada
  - `<%-`: Saída não-escapada
  - `<%#`: Comentário
  - `<%`: Scriptlet
  - `<%_`: Scriptlet, remove os espaços em branco precedentes
- Marcações de encerramento
  - `%>`: Marcação de encerramento regular
  - `-%>`: Remove os caracteres de nova linha no fim
  - `_%>`: Remove todos os caracteres em branco no fim

Para mais informações sobre cada uma das marcações, veja ["EJS Syntax Reference" nas Referências](/content/1-daw-2-node-templates.html#refer%C3%AAncias).

No modelo "usuario.ejs", referenciado [acima](/content/1-daw-2-node-templates.html#passando-vari%C3%A1veis-para-o-modelo), para acessar as variáveis locais, podemos fazer como no código a seguir.

```
<h1>Página do usuário</h1>
<p>Nome: <%= name %></p>
<p>Email: <%= email %></p>
```
### Código completo

O código desenvolvido nesta seção encontra-se no Codesandbox a seguir.

<iframe
  src="https://codesandbox.io/embed/lingering-water-dssd2?fontsize=14&theme=dark&view=editor"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="usando-ejs"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>
   
### Referências

1. [EJS Syntax Reference](https://github.com/mde/ejs/blob/master/docs/syntax.md)
