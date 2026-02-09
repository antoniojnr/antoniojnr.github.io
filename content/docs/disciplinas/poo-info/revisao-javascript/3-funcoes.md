---
title: "3. Funções"
weight: 3
bookHidden: false
---

# 3. Funções

Em JavaScript, funções não servem apenas para organizar código.  
Elas são valores, podem ser armazenadas em variáveis, passadas como argumento e retornadas por outras funções. São consideradas "cidadãs de primeira classe" porque são tratadas como valores comuns da linguagem.

O objetivo desta seção é preparar o estudante para:

- entender métodos em classes;
- compreender _callbacks_;
- perceber como o **encapsulamento** começa antes mesmo da orientação a objetos.

**Encapsulamento** é a ideia de esconder detalhes internos de um código e expor apenas o que é necessário para usá-lo. No contexto de funções: quem usa uma função não precisa saber como ela funciona por dentro, precisa saber apenas o que ela faz e como chamá-la.

---

## O que é uma função?

Uma função é um bloco de código reutilizável que pode receber dados (parâmetros), executa uma sequência de instruções e pode ou não retornar um valor.

```javascript
function saudacao() {
  console.log("Olá!");
}
```

Para executar a função, usamos parênteses:

```javascript
saudacao();
```

### Declaração de funções

A forma mais tradicional de definir uma função é a declaração de função:

```javascript
function soma(a, b) {
  return a + b;
}

let resultado = soma(2, 3);
console.log(resultado); // 5
```

As características importantes a serem mencionadas são: funções geralmente têm um nome (às vezes podem não ter) e pode ser chamada antes ou depois da sua definição no código. É adequado usá-la, quando a função representa uma ação ou regra clara do sistema.

### Parâmetros e retorno

Parâmetros são variáveis locais que recebem valores no momento da chamada da função.

```javascript
function dobro(numero) {
  return numero \* 2;
}

dobro(4); // 8
```

Se nenhum valor for passado, o parâmetro recebe `undefined`.

```javascript
dobro(); // NaN
```

O `return` (retorno) encerra a execução da função e define o valor retornado.

```javascript
function verificaIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  }
  return "Menor de idade";
}
```

> [!IMPORTANT]
> Uma função pode ter vários `return`, mas apenas um será executado por chamada.

### Escopo de função

Variáveis declaradas dentro de uma função só existem dentro dela.

```javascript
function exemplo() {
  let x = 10;
  console.log(x);
}

exemplo();
// console.log(x); // Erro
```

> [!IMPORTANT]
> Isso é um primeiro contato com encapsulamento: dados internos não vazam para fora.

### Funções anônimas

Uma função não precisa ter nome. Funções sem nome são chamadas de funções anônimas.

```javascript
let saudacao = function () {
  console.log("Olá!");
};

saudacao();
```

Nesse caso, a função é armazenada em uma variável. Quem nomeia a função é a variável.

### Funções seta (_Arrow functions_)

Funções seta são uma forma mais concisa de escrever funções.

```javascript
let soma = (a, b) => {
  return a + b;
};
```

Quando o corpo tem apenas uma expressão, o `return` é implícito:

```javascript
let soma = (a, b) => a + b;
```

Outro exemplo:

```javascript
let dobro = x => x \* 2;
```

Funções seta tornam o código mais enxuto e são muito usadas como callbacks, mas não substituem completamente funções tradicionais (isso ficará claro quando avançarmos na disciplina de POO).

### Funções como valores

Em JavaScript, funções são valores como qualquer outro. Isso significa que uma função pode ser atribuída a uma variável, passada como argumento ou até retornada por outra função.

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

Nesse trecho de código, `mensagem` não é executada imediatamente. Ela é passada como valor e `executar` decide quando chamá-la.

Exemplo prático com lógica:

```javascript
function processar(valor, operacao) {
  return operacao(valor);
}

let dobro = (x) => x * 2;
let triplo = (x) => x * 3;

processar(5, dobro); // 10
processar(5, triplo); // 15
```

Esse padrão é a base de eventos e _callbacks_.

### Funções retornando funções

Uma função também pode retornar outra função:

```javascript
function criarMultiplicador(fator) {
  return function (numero) {
    return numero * fator;
  };
}

let duplicar = criarMultiplicador(2);
duplicar(5); // 10
```

Esse tipo de construção será importante para compreender encapsulamento funcional e interpretar código mais avançado em JavaScript.

## Atividades sugeridas

### 1. Rastreamento de execução

```javascript
function teste(x) {
  return x \* 2;
}

let y = teste(3);
console.log(y);
```

Qual é o valor final de y?

### 2. Função sem retorno

```javascript
function imprime(valor) {
  console.log(valor);
}

let resultado = imprime(10);
console.log(resultado);
```

1. O que será impresso?
2. Qual é o valor de resultado?

### 3. Função como argumento

```javascript
function executar(a, b, operacao) {
  return operacao(a, b);
}

let soma = (x, y) => x + y;
let sub = (x, y) => x - y;

executar(10, 5, soma);
executar(10, 5, sub);
```

Por que operacao precisa ser uma função?

### 4. Conversão de função

Reescreva a função abaixo como função seta (_arrow function_):

```javascript
function quadrado(x) {
  return x * x;
}
```

### 5. Exercício conceitual

Explique, com suas palavras:

a. Q que significa dizer que funções são “cidadãos de primeira classe”?
b. Por que isso é importante para a programação orientada a objetos em JavaScript?
