---
title: "3. Funções"
weight: 3
bookHidden: false
---

# 3. Funções

Em JavaScript, funções vão além de simples blocos de código reutilizável. Elas são **valores**: podem ser armazenadas em variáveis, passadas como argumento para outras funções e retornadas como resultado. Por isso, diz-se que funções são _cidadãs de primeira classe_ na linguagem — elas têm os mesmos "direitos" que números, strings ou qualquer outro valor.

Essa característica tem consequências práticas importantes. Ela é o que torna possível trabalhar com _callbacks_, entender como métodos funcionam dentro de classes e perceber que o **encapsulamento** — a ideia de esconder detalhes internos e expor apenas o necessário — começa muito antes da orientação a objetos.

---

## O que é uma função?

Uma função é um bloco de código com um propósito definido. Ela pode receber dados de entrada (os parâmetros), executar uma sequência de instruções e devolver um resultado (o retorno). Mas não precisa fazer tudo isso; uma função pode não receber nada, não retornar nada, ou ambos.

```javascript
function saudacao() {
  console.log("Olá!");
}
```

Para executar a função, o que chamamos de "invocar uma função, basta usar parênteses.

```javascript
saudacao();
```

## Formas de declarar funções

### Declaração de função

A forma mais tradicional. Tem nome, pode usar parâmetros e retorna um valor com `return`.

```javascript
function soma(a, b) {
  return a + b;
}

let resultado = soma(2, 3);
console.log(resultado); // 5
```

Uma característica particular da declaração de função é o **hoisting**. Não se espante com o nome complexo, ele significa que o JavaScript lê as declarações antes de executar o código, então é possível chamar uma função antes mesmo de ela aparecer no arquivo. Na prática, isso raramente importa, mas explica por que a ordem das declarações é mais flexível do que parece.

### Função anônima

Uma função sem nome, armazenada em uma variável. Quem dá identidade a ela é a variável.

```javascript
let saudacao = function () {
  console.log("Olá!");
};

saudacao();
```

### Função seta (_arrow function_)

Uma sintaxe mais concisa, introduzida no ES6 (ECMAScript 6 - a versão 2015 de JavaScript que trouxe melhorias significativas para a sintaxe da linguagem). É muito usada para funções curtas e para _callbacks_.

```javascript
let soma = (a, b) => {
  return a + b;
};
```

Quando o corpo da função é uma única expressão, o `return` pode ser omitido:

```javascript
let soma = (a, b) => a + b;
```

Se houver apenas um parâmetro, os parênteses também são opcionais:

```javascript
let dobro = (x) => x * 2;
```

> As funções seta têm uma diferença importante em relação às funções tradicionais no comportamento da palavra-chave `this`. Isso ficará evidente quando chegar o momento de estudar orientação a objetos — por ora, vale apenas saber que elas não substituem as declarações ja apresentadas em todos os contextos.

### Parâmetros e retorno

Parâmetros são as variáveis que a função espera receber. Eles funcionam como variáveis locais, definidas no momento da chamada.

```javascript
function dobro(numero) {
  return numero \* 2;
}

dobro(4); // 8
```

Se a função for chamada sem o argumento esperado, o parâmetro recebe `undefined`:

```javascript
dobro(); // NaN — porque undefined * 2 é NaN
```

O `return` encerra a execução da função imediatamente e define o valor que ela devolve. Uma função pode ter múltiplos `return`, mas apenas um será executado por chamada, geralmente em diferentes ramos de uma condição:

```javascript
function verificaIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  }
  return "Menor de idade";
}
```

Quando uma função não tem `return`, ela retorna `undefined` por padrão.

```javascript
function imprime(valor) {
  console.log(valor);
}

let x = imprime(10); // 10 é impresso no console
console.log(x); // undefined, porque estamos imprimindo o retorno de imprime(), guardado em x
```

### Escopo de função

Variáveis declaradas dentro de uma função só existem dentro dela. Elas nascem quando a função começa a executar e desaparecem quando ela termina.

```javascript
function exemplo() {
  let x = 10;
  console.log(x);
}

exemplo();
console.log(x); // Erro: x não está definido fora
```

Isso é encapsulamento na sua forma mais direta: os detalhes internos da função não vazam para o escopo externo. Quem chama a função não precisa saber como ela funciona por dentro. Precisa saber apenas o que ela recebe e o que ela devolve.

### Funções como valores

Funções sendo "cidadãs de primeira classe" significa, na prática, que podem ser manipuladas como qualquer outro valor: serem atribuídas a uma variável, passadas como argumento ou até retornadas por outra função.

**Função como argumento** (_callback_)

```javascript
function executar(funcao) {
  funcao();
}

function mensagem() {
  console.log("Executando função");
}

executar(mensagem);
```

Note que `mensagem` é passada sem parênteses — ela não é executada no momento da passagem. Quem decide quando chamá-la é a função `executar`. Essa ideia de "passar uma função para ser chamada mais tarde" é o que chamamos de _callback_.

Um exemplo mais concreto:

```javascript
function processar(valor, operacao) {
  return operacao(valor);
}

let dobro = (x) => x * 2;
let triplo = (x) => x * 3;

processar(5, dobro); // 10
processar(5, triplo); // 15
```

A função `processar` não sabe (e não precisa saber) o que `operacao` faz. Ela apenas a chama com o valor recebido. Isso torna o código flexível: o comportamento muda dependendo de qual função é passada.

### Funções retornando funções

Uma função também pode produzir outra função como resultado:

```javascript
function criarMultiplicador(fator) {
  return function (numero) {
    return numero * fator;
  };
}

let duplicar = criarMultiplicador(2);
let triplicar = criarMultiplicador(3);

duplicar(5); // 10
triplicar(5); // 15
```

A função interna "lembra" o valor de `fator` mesmo depois de `criarMultiplicador` ter terminado de executar. Esse comportamento tem nome: **closure**. É um mecanismo poderoso que reaparecerá ao longo da disciplina.

## Atividades sugeridas

**(Questão 01)** Acompanhe o fluxo do código abaixo passo a passo e determine o valor final impresso.

```javascript
function teste(x) {
  return x \* 2;
}

let y = teste(3);
console.log(y);
```

Qual é o valor final de y?

---

**(Questão 02)** Analise o código a seguir.

```javascript
function imprime(valor) {
  console.log(valor);
}

let resultado = imprime(10);
console.log(resultado);
```

a. O que será impresso?\
b. Qual é o valor de resultado?

---

**(Questão 03)** Analise o código a seguir.

```javascript
function executar(a, b, operacao) {
  return operacao(a, b);
}

let soma = (x, y) => x + y;
let sub = (x, y) => x - y;

executar(10, 5, soma);
executar(10, 5, sub);
```

a. Quais são os resultados de cada chamada?\
b. Por que o parâmetro `operacao` precisa ser uma função e não um número ou string?

---

**(Questão 04)** Reescreva a função abaixo como função seta:

```javascript
function quadrado(x) {
  return x * x;
}
```

Depois, reescreva novamente na forma mais compacta possível.

---

**(Questão 05)** Escreva uma função chamada `aplicar` que receba um número e uma função, e retorne o resultado de aplicar essa função ao número. Em seguida, use `aplicar` para:

- calcular o dobro de 7;
- calcular a raiz quadrada de 49 (use `Math.sqrt`).

---

**(Questão 06)** Escreva uma função `criarSomador(n)` que retorne outra função. A função retornada deve receber um número e somar `n` a ele.

Exemplo de uso esperado:

```javascript
let soma5 = criarSomador(5);
soma5(3); // 8
soma5(10); // 15
```

---

**(Questão 07)** Responda com suas palavras:

a. O que significa dizer que funções são "cidadãs de primeira classe" em JavaScript?\
b. Qual é a diferença prática entre passar `mensagem` e passar `mensagem()` como argumento para outra função?\
c. O escopo de função é uma forma de encapsulamento? Justifique.
