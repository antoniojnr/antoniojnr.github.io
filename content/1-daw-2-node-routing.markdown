---
layout: default
title: Rotas
nav_exclude: true
---
## Rotas
{: .no_toc }

Na seção anterior, escrevemos uma aplicação básica utilizando Node.js e um *framework* chamado Express. Atualmente, o Express é um dos *frameworks* mais utilizados para construir aplicações em Node.js.

Na aplicação básica que criamos, definimos a seguinte rota.

```javascript
app.get('/', function(req, res) {
  res.send('Hello World!')
})
```

Uma rota determina como a aplicação responderá a uma requisição do cliente para um *endpoint*, que é um caminho e um método HTTP específico(GET ou POST, por exemplo).

### Criando novas rotas

Em Express, a definição de uma rota tem o seguinte formato:

```javascript
app.MÉTODO(CAMINHO, HANDLER)
```

- `app` é uma instância do Express (variável onde você guardou o retorno da chamada `express()`).
- `MÉTODO` é um método HTTP, em letras minúsculas (ex.: GET, POST, PUT, DELETE).
- `CAMINHO` é o caminho da rota no servidor.
- `HANDLER` é a função que é executada quando a rota é chamada.

Observe que o caminho da rota deve iniciar com "/". Além disso, duas rotas não podem ter o mesmo método e caminho. Assim, podemos ter uma rota `GET /login` e outra `POST /login`, porque os métodos diferenciam as duas, mas não podemos ter duas rotas `GET /login`. 

Vamos criar uma nova rota para tratar requisições GET para o caminho "/sobre".

```javascript
app.get('/sobre', function(req, res) {
  res.send('Esta página foi desenvolvida por Antonio Dias')
})
```

### Obtendo parâmetros

Até o momento, criamos rotas que não recebem nenhuma entrada e, portanto, não processam nenhum dado. Para receber dados de entradas, é necessário capturar parâmetros do caminho da URL ou da query como veremos nesta seção, ou através do corpo de uma requisição, que será abordado mais adiante.

#### Obtendo parâmetros do caminho da URL

Estes parâmetros aparecem na URL separados por "/". Considere a URL a seguir.

    https://minhaaplicacao.com/usuarios/antonio/posts/1234

URLs neste formato são utilizadas para endereçar recursos identificados por porções do caminho da URL. Esta URL endereça a postagem de identificador 1234 do usuário "antonio".

Para capturar os valores nas posições específicas da URL, especificamos parâmetros ao definir o caminho de uma rota no Express. Assim, podemos acessar esses parâmetros através do objeto `req.params`. Considere a rota a seguir.

```javascript
app.get('/usuarios/:userName/posts/:postId', function (req, res) {
  res.send(req.params)
})
```

Ao inserir a URL "http://localhost:3000/usuarios/antonio/posts/1234" no navegador e pressionar Enter, você verá o resultado a seguir.

```
{ "userName": "antonio", "postId": "1234" }
```

#### Obtendo parâmetros da query

A query é parte de uma URL após o ponto de interrogação (?). É utilizada para enviar pequenas quantidades de informação para o servidor através da URL: geralmente parâmetros para a base de dados (ordenação, paginação, filtragem), mas seu uso é especificado pelo programador.

Diferentemente dos parâmetros da URL, não é necessário especificar os parâmetros da query ao definir a rota.

```javascript
app.get('/usuarios', function (req, res) {
  res.send(req.query)
})
```

Sendo assim, ao inserir a URL "http://localhost:3000/usuarios?ord=asc&page=2&lang=pt-BR" no navegador e pressionar Enter, você verá o resultado a seguir.

```
{ "ord": "asc", "page": "2", "lang": "pt-BR" }
```

### Exemplo de código

O código a seguir necessita das seguintes dependências:

- express

Essa aplicação é uma calculadora que recebe os operandos e operador através do caminho da URL. A calculadora é capaz de realizar 4 operações básicas, representadas pelos códigos, passados pelo parâmetro `oper`:

- `som`: soma
- `sub`: subtração
- `mul`: multiplicação
- `div`: divisão

Os operandos são valores númericos, passados pelos parâmetros `op1` e `op2`.

```javascript
const express = require("express")
const app = express()
const port = 3000

let funcoes = {
  soma: (a, b) => a + b,
  mult: (a, b) => a * b,
  sub: (a, b) => a - b,
  div: (a, b) => a / b,
}

app.get("/calc/:oper/:op1/:op2", function(req, res) {
  let n1 = parseInt(req.params.op1, 10)
  let n2 = parseInt(req.params.op2, 10)
  let resultado = funcoes[req.params.oper](n1, n2);

  res.send("Resultado: " + resultado)
})

app.listen(port, function() {
  console.log(`Rodando na porta ${port}`)
})
```