---
title: "1. Fundamentos essenciais da linguagem"
weight: 1
---

# 1. Fundamentos essenciais da linguagem

## Execução no navegador (console do DevTools)

Nem sempre é necessário criar arquivos ou abrir uma IDE para testar código JavaScript. Uma das grandes vantagens da linguagem é poder executá-la diretamente no navegador, por meio do console do **DevTools**.

Para abrir o console:

- **Chrome / Edge**: `F12` ou `Ctrl + Shift + J`
- **Firefox**: `F12` ou `Ctrl + Shift + K`

O console permite:

- Executar código JavaScript de forma imediata
- Testar expressões isoladas
- Experimentar funções e estruturas da linguagem
- Inspecionar valores, variáveis e objetos
- Observar erros e comportamentos inesperados

Ao longo desta revisão, o console será nossa principal ferramenta de experimentação.

**Exemplo prático:**

```javascript
console.log("Olá, mundo!");
let soma = 10 + 5;
console.log("A soma é:", soma);
```

Observe que:

- `console.log` exibe informações no console;
- o JavaScript executa cada linha imediatamente após você pressionar **Enter**.

## `let`, `const` e escopo de bloco

JavaScript possui três formas de declarar variáveis: `var`, `let` e `const`.

Nesta disciplina, não utilizaremos `var`, pois ela ignora escopo de bloco e pode gerar comportamentos confusos.

### Escopo de bloco

Variáveis declaradas com `let` e `const` só existem dentro do bloco `{}` onde foram declaradas.

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i); // 0, 1, 2
}
// console.log(i); // Erro! 'i' não existe fora do for
```

Isso evita conflitos e efeitos colaterais, algo essencial quando trabalhamos com sistemas maiores

### `let`

- Usado quando o valor da variável pode mudar
- Possui escopo de bloco

```javascript
let idade = 25;
idade = 26; // OK - pode reatribuir

if (true) {
  let nome = "Maria";
  console.log(nome); // "Maria"
}
// console.log(nome); // Erro! 'nome' só existe dentro do bloco if
```

### `const`

- Usado quando a variável não deve ser reatribuída
- Também possui escopo de bloco

```javascript
const PI = 3.14159;
// PI = 3.14; // Erro! Não pode reatribuir uma constante

const numeros = [1, 2, 3];
numeros[0] = 4; // OK - pode modificar os valores
// numeros = [5, 6]; // Erro! Não pode reatribuir a constante
```

> [!IMPORTANT]
> **Regra prática:**
> Use `const` sempre que possível. Use `let` apenas quando precisar reatribuir.

## Tipos primitivos: `number`, `string`, `boolean`, `undefined`, `null`

JavaScript possui tipos primitivos, que representam valores simples e imutáveis. Use `typeof` para inspecionar o tipo de um valor; por exemplo, para descobrir qual o tipo do resultado de uma expressão.

### `number`

Representa todos os números, inteiros ou decimais.

```javascript
let inteiro = 42;
let decimal = 3.14;
let negativo = -10;
let infinito = Infinity;
let naoNumero = NaN; // Not a Number

console.log(typeof inteiro); // "number"
```

> [!WARNING]
> Em JavaScript, não existe `int` ou `float`. Todo tipo numérico é `number`.

### `string`

Representa texto. Pode ser declarada com aspas simples, duplas ou acento grave (crase).

```javascript
let nome = "João";
let sobrenome = "Silva";
let frase = `Olá, ${nome} ${sobrenome}!`; // Template literal

console.log(typeof nome); // "string"
```

> [!IMPORTANT]
> O uso de _template literals_ (crase) facilita a composição de strings dinâmicas.

### `boolean`

Representa valores lógicos.

```javascript
let ativo = true;
let bloqueado = false;

console.log(typeof ativo); // "boolean"
```

### `undefined`

Variável declarada mas não inicializada (ou seja, não recebeu valor).

```javascript
let x;
console.log(x); // undefined
console.log(typeof x); // "undefined"
```

### `null`

Representa ausência intencional de valor.

```javascript
let usuario = null; // Nenhum usuário selecionado
console.log(typeof null); // "object" (comportamento histórico do JS)
```

> [!IMPORTANT]
> Apesar do `typeof`, `null` não é um objeto.

## Operadores aritméticos, relacionais e lógicos

### Operadores aritméticos

Realizam operações matemáticas.

```javascript
let a = 10,
  b = 3;

console.log(a + b); // 13 - Adição
console.log(a - b); // 7  - Subtração
console.log(a * b); // 30 - Multiplicação
console.log(a / b); // 3.333... - Divisão
console.log(a % b); // 1  - Resto da divisão (módulo)
console.log(a ** b); // 1000 - Exponenciação

// Operadores de incremento/decremento
let contador = 5;
contador++; // contador = 6
contador--; // contador = 5
```

### Operadores relacionais

Comparam valores e retornam `boolean`.

```javascript
let x = 10,
  y = 5;

console.log(x > y); // true  - Maior que
console.log(x < y); // false - Menor que
console.log(x >= 10); // true  - Maior ou igual
console.log(x <= 5); // false - Menor ou igual
console.log(x == y); // false - Igual (com conversão de tipo)
console.log(x === y); // false - Estritamente igual
console.log(x != y); // true  - Diferente (com conversão)
console.log(x !== y); // true  - Estritamente diferente
```

### Operadores lógicos

Combinam expressões booleanas.

```javascript
let temCNH = true;
let maiorDeIdade = true;
let estaCansado = false;

// AND (&&) - Retorna true se AMBOS forem true
console.log(temCNH && maiorDeIdade); // true
console.log(temCNH && estaCansado); // false

// OR (||) - Retorna true se PELO MENOS UM for true
console.log(temCNH || estaCansado); // true
console.log(false || false); // false

// NOT (!) - Inverte o valor booleano
console.log(!estaCansado); // true
console.log(!temCNH); // false
```

## Conversão implícita vs explícita (`Number()`, `String()`)

### Conversão implícita (coerção)

JavaScript converte automaticamente tipos em certas operações.

```javascript
// String + Number = String (concatenação)
console.log("10" + 5); // "105"
console.log("Idade: " + 25); // "Idade: 25"

// Operações matemáticas convertem para number
console.log("10" - 5); // 5
console.log("10" * "2"); // 20
console.log("10" / "2"); // 5

// Boolean em contexto numérico
console.log(true + 1); // 2
console.log(false + 1); // 1
```

> [!WARNING]
> Essas conversões automáticas são uma fonte comum de bugs.

### Conversão explícita

Você força a conversão usando funções.

```javascript {linenos=table}
// Converter para Number
console.log(Number("42")); // 42
console.log(Number("3.14")); // 3.14
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Alternativas para converter para número
console.log(parseInt("42")); // 42 (inteiro)
console.log(parseFloat("3.14")); // 3.14 (decimal)
console.log(+"42"); // 42 (operador unário +)

// Converter para String
console.log(String(42)); // "42"
console.log(String(true)); // "true"
console.log(String(null)); // "null"

// Alternativas para converter para string
console.log((42).toString()); // "42"
console.log(42 + ""); // "42"

// Converter para Boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("texto")); // true
console.log(Boolean("")); // false
console.log(!!42); // true (dupla negação)
```

Na linha 11, você vê uma menção a um **operador unário**. Este é um operador que atua sobre um único operando (um único valor).
Em JavaScript, alguns operadores unários são usados com frequência para conversão de tipos.

#### Operador unário `+` (conversão para número)

O operador `+`, quando usado antes de um valor, tenta converter esse valor para o tipo `number`.

```javascript
+"42"; // 42
+"3.14"; // 3.14
+"abc"; // NaN
+true; // 1
+false; // 0
```

Esse operador funciona de forma semelhante a `Number()`:

```javascript
Number("42"); // 42
```

#### Operador unário `!!` (conversão explícita para `boolean`)

O `!!` não é um operador próprio da linguagem.
Ele é o resultado da aplicação do operador unário de negação (`!`) duas vezes seguidas.

```javascript
!valor; // nega o valor lógico
!!valor; // nega a negação, forçando um boolean
```

**Passo a passo do que acontece**

{{% steps %}}

1. ## Considere o valor

   ```javascript
   let x = "texto";
   ```

1. ## Primeira negação (`!x`)
   - "texto" é um valor _truthy_ (interpretado como `true`)
   - `!x` resulta em `false`

   ```javascript
   !x; // false
   ```

1. ## Segunda negação (`!!x`)
   - `false` é negado novamente
   - o resultado final é `true`

   ```javascript
   !!x; // true
   ```

   Ou seja, o JavaScript converte o valor para `boolean` e retorna esse `boolean` explícito.

{{% /steps %}}

Exemplos comuns

```javascript
!!42; // true
!!0; // false
!!"texto"; // true
!!""; // false
!!null; // false
!!undefined; // false
```

Esses resultados seguem as regras de valores _truthy_ e _falsy_ do JavaScript.

**Comparação com `Boolean()`**

O efeito de `!!valor` é o mesmo que `Boolean(valor)`

Exemplo:

```javascript
Boolean(10); // true
!!10; // true
```

A diferença está apenas na forma, não no resultado. Quando o `!!` aparece em código real, é frequentemente usado:

- para garantir que uma expressão resulte em `true` ou `false`
- em validações rápidas
- em condições complexas

Exemplo:

```javascript
if (!!usuario) {
  console.log("Usuário existe");
}
```

Esse código poderia ser escrito de forma mais legível como:

```javascript
if (usuario !== null) {
  console.log("Usuário existe");
}
```

Apesar de comum em código JavaScript real, o uso de `!!` não é obrigatório, pode reduzir a legibilidade para iniciantes e não deve ser usado como "atalho" sem entendimento.

O `!!` foi apresentado aqui apenas como algo que o estudante precisa reconhecer e compreender, não necessariamente usar. Por simplicidade e clareza, prefira `Boolean(valor)`.

## Atividades sugeridas

As atividades a seguir devem ser feitas primeiro no papel ou mentalmente, e só depois testadas no console.

### 1. Prever o valor final de expressões

Analise as expressões abaixo e preveja o resultado antes de executar no console:

```javascript
// Exercício 1
let resultado1 = "5" + 3;

// Exercício 2
let resultado2 = "5" - 3;

// Exercício 3
let resultado3 = "10" * "2";

// Exercício 4
let resultado4 = true + true + false;

// Exercício 5
let resultado5 = "20" / "4" + 5;

// Exercício 6
let resultado6 = 10 > 5 && 3 < 2;

// Exercício 7
let resultado7 = "abc" - 1;

// Exercício 8
let resultado8 = null + 10;

// Exercício 9
let resultado9 = undefined + 5;

// Exercício 10
let resultado10 = "5" === 5;
```

<details>
<summary>Ver respostas</summary>

1. `"53"` (concatenação)
2. `2` (subtração numérica)
3. `20` (multiplicação numérica)
4. `2` (true=1, false=0)
5. `10` (5 + 5)
6. `false` (10>5 é true, mas 3<2 é false)
7. `NaN` (não é possível subtrair de string)
8. `10` (null vira 0)
9. `NaN` (undefined não converte bem)
10. `false` (tipos diferentes)

</details>

### 2. Corrigir códigos com erros de escopo

Identifique e corrija os erros nos códigos abaixo:

**Exercício 1:**

```javascript
// Código com erro
if (true) {
  var mensagem = "Olá";
}
console.log(mensagem); // Funciona com var, mas não é boa prática
```

<details>
<summary>Ver correção do <b>Exercício 1</b></summary>

```javascript
// Código corrigido
let mensagem;
if (true) {
  mensagem = "Olá";
}
console.log(mensagem);
```

</details>

**Exercício 2:**

```javascript
// Código com erro
for (let i = 0; i < 3; i++) {
  // ...
}
console.log(i); // Erro! 'i' não existe fora do for
```

<details>
<summary>Ver correção do <b>Exercício 2</b></summary>

```javascript
// Código corrigido
let i;
for (i = 0; i < 3; i++) {
  // ...
}
console.log(i); // Agora funciona
```

</details>

**Exercício 3:**

```javascript
// Código com erro
const nome = "João";
nome = "Maria"; // Erro! Não pode reatribuir const
```

<details>
<summary>Ver correção do <b>Exercício 3</b></summary>

```javascript
// Código corrigido - use let se precisar reatribuir
let nome = "João";
nome = "Maria"; // OK
```

</details>

### 3. Comparar `==` vs `===`

O operador `==` faz conversão de tipos antes de comparar (coerção), enquanto `===` compara valor E tipo.

**Exemplos comparativos:**

```javascript
// Igualdade com conversão (==)
console.log(5 == "5"); // true - converte "5" para número
console.log(true == 1); // true - converte true para 1
console.log(false == 0); // true - converte false para 0
console.log(null == undefined); // true - caso especial
console.log("" == 0); // true - string vazia vira 0

// Igualdade estrita (===)
console.log(5 === "5"); // false - tipos diferentes
console.log(true === 1); // false - tipos diferentes
console.log(false === 0); // false - tipos diferentes
console.log(null === undefined); // false - tipos diferentes
console.log("" === 0); // false - tipos diferentes

// Casos curiosos
console.log([1] == 1); // true - array é convertido
console.log([1] === 1); // false - tipos diferentes
```

**Recomendação**: Use sempre `===` e `!==` para evitar bugs causados por conversões inesperadas.

**Exercícios práticos:**

Preveja o resultado (`true` ou `false`):

```javascript
1. "0" == 0         // ?
2. "0" === 0        // ?
3. 0 == false       // ?
4. 0 === false      // ?
5. null == 0        // ?
6. undefined == null // ?
7. [] == false      // ?
8. [] === false     // ?
```

<details>
<summary>Ver respostas</summary>

1. `true` (conversão)
2. `false` (tipos diferentes)
3. `true` (conversão)
4. `false` (tipos diferentes)
5. `false` (null não converte para número em ==)
6. `true` (caso especial)
7. `true` (conversão complexa)
8. `false` (tipos diferentes)

</details>
