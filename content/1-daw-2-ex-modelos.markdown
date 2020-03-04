---
layout: default
title: Exercício - Modelos
nav_exclude: true
---
## Exercício - Modelos

1. Modifique o código da calculadora disposto a seguir.
1. Crie um modelo de página para exibir o resultado. Nesta página, você deverá exibir os dois operandos, operador e resultado em um `<h1>`.

Por exemplo, se a URL chamada for `/calc/div/4/2`, exiba: "4 / 2 = 2".

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
