---
title: "2. Estruturas de controle"
weight: 1
---

# 2. Estruturas de controle

As estruturas de controle determinam **como e quando** determinadas partes do código são executadas.

Elas são fundamentais para expressar lógica, tomar decisões e repetir ações.

O objetivo desta seção é reforçar o raciocínio lógico e a capacidade de acompanhar o fluxo de execução de um programa.

---

## Estruturas condicionais: `if`, `else`, `else if`

### `if`

A estrutura `if` permite executar um bloco de código **apenas se uma condição for verdadeira**.

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
}
```

Se a condição for falsa, o bloco não é executado.

### `if` + `else`

```javascript
let nota = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}
```

Nesse caso apenas um dos blocos será executado. O `else` é executado quando a condição do `if` é falsa.

### `else if`

Usado quando existem várias condições possíveis, mas apenas uma deve ser executada.

```javascript
let nota = 8;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}
```

> [!IMPORTANT]
> A avaliação ocorre de cima para baixo.
> Assim que uma condição é verdadeira, as demais são ignoradas.

## Estrutura `switch`

O `switch` é uma alternativa ao uso de vários `else if` quando se deseja comparar um mesmo valor contra diferentes opções.

```javascript
let dia = 3;

switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia inválido");
}
```

### Papel do `break`

O `break` interrompe a execução do switch. Sem ele, ocorre o chamado `fall-through`.

```javascript
let valor = 1;

switch (valor) {
  case 1:
    console.log("Um");
  case 2:
    console.log("Dois");
}

// Resultado:
// Um
// Dois
```

> [!INFORMATION]
> Em geral, use `break` em cada `case`, salvo quando o efeito de queda for intencional.

### _Fall-through_ no `switch`

No JavaScript, o `switch` não interrompe automaticamente a execução ao final de um `case`.

Se não houver um break, o fluxo de execução "cai" para o próximo `case`, mesmo que ele não corresponda ao valor testado.

Esse comportamento é chamado de `fall-through`.

O `switch` funciona assim:

1. O valor da expressão é avaliado uma única vez.
2. O JavaScript procura o primeiro `case` que corresponde a esse valor.
3. A partir desse ponto, todas as instruções são executadas em sequência, até que:
   - um `break` seja encontrado, ou
   - o `switch` termine.

Ou seja, o `case` apenas define o ponto de entrada, não o ponto de saída.

**Uso intencional de _fall-through_**

Apesar de frequentemente causar erros, o _fall-through_ pode ser usado de forma intencional, quando vários casos devem executar o mesmo código.

```javascript
let dia = 6;

switch (dia) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Dia útil");
    break;
  case 6:
  case 7:
    console.log("Fim de semana");
    break;
}
```

Nesse exemplo, os casos 1 a 5 "caem" no mesmo bloco. O comportamento é controlado e desejado.

## Laços de repetição

Laços permitem repetir um bloco de código enquanto uma condição for satisfeita.

### `for`

Usado quando o número de repetições é conhecido ou controlado por um contador.

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

A estrutura do `for` possui três partes:

- inicialização (`let i = 0`)
- condição (`i < 5`)
- atualização (`i++`)

> [!IMPORTANT]
> A variável `i` existe apenas dentro do laço.

### `while`

Executa enquanto a condição for verdadeira. A condição é verificada antes da execução do bloco.

```javascript
let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
}
```

> [!IMPORTANT]
> Se a condição nunca se tornar falsa, o laço será infinito.

### `do...while`

Semelhante ao `while`, mas a condição é verificada após a execução do bloco. Isso garante que o código seja executado pelo menos uma vez.

```javascript
let numero = 5;

do {
  console.log(numero);
  numero++;
} while (numero < 3);
```

Mesmo com a condição falsa, o bloco executa uma vez.

### `break` e `continue` em laços

#### `break`

Interrompe completamente o laço.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// Resultado:
// 0 1 2 3 4
```

#### `continue`

Interrompe apenas a iteração atual, passando para a próxima.

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

// Resultado:
// 0 1 3 4
```

## Atividades sugeridas

### 1. Simuladores simples

**Contador controlado**

Crie um programa que:

- comece em um número inicial
- termine em um número final
- mostre apenas os números pares

```javascript
let inicio = 1;
let fim = 10;

// complete o código
```

**Menu textual simples**

Simule um menu usando `switch`. Exiba mensagens diferentes conforme a opção escolhida.

```javascript
// 1 - Cadastrar
// 2 - Listar
// 3 - Sair
// Opção: 2
//
// Opção escolhida: 2 - Listar
// Listando...
```

### 2. Exercícios de rastreamento de execução (_trace_)

Antes de executar, anote o que será impresso no console.

```javascript
let x = 0;

for (let i = 1; i <= 3; i++) {
  x += i;
}

console.log(x);
```

---

```javascript
let i = 0;

while (i < 5) {
  if (i === 3) {
    break;
  }
  console.log(i);
  i++;
}
```

---

```javascript
let valor = 2;

switch (valor) {
  case 1:
    console.log("A");
  case 2:
    console.log("B");
  case 3:
    console.log("C");
    break;
  default:
    console.log("D");
}
```
