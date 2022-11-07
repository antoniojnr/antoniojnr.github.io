---
layout: default
title: Tipos de dados
nav_exclude: true
---

## 8.1. Tipos de dados

Um tipo de dados, ou simplesmente _tipo_, é o conjunto de possíveis valores e operações aplicáveis a estes. Um tipo de dados determina como um dado será usado ou armazenado, seu significado e quais valores uma expressão, variável ou função podem receber. A linguagem C suporta diversos tipos de dados: números inteiros, decimais, caracteres, dados textuais (chamados de _strings_), entre outros.

Os principais tipos de dados que iremos utilizar são listados na Tabela 1 a seguir. Outros tipos serão apresentados conforme formos avançando.

**Tabela 1.** Principais tipos de dados que utilizaremos.

| Tipo     | Descrição                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------------- |
| `char`   | Um único caractere                                                                                    |
| `int`    | Um número inteiro                                                                                     |
| `float`  | Um número decimal de precisão simples                                                                 |
| `double` | Um número decimal de precisão dupla (armazena um número com precisão duas vezes maior que um `float`) |

Cada tipo de dado é detalhado nas seções a seguir.

## 8.1.1. O tipo `char`

Representa um único caractere. Em C, uma variável do tipo `char` guarda um valor ASCII (um valor inteiro entre 0 e 127), em vez do próprio caractere. Esse valor inteiro é o código ASCII do caractere. Na tabela ASCII mostrada na Figura 1, os caracteres são exibidos ao lado de seus respectivos valores inteiros. O Código 1 mostra a declaração e inicialização de uma variável do tipo caractere. Observe que caracteres são representados entre aspas simples (`''`), nunca entre aspas duplas (`""`).

**Código 1.** Declaração e inicialização de uma variável do tipo `char`.

```c
char c = 'f';
```

**Figura 1.** Tabela ASCII.

![Figura 1](/content/images/ascii.png "ASCII table")

Um dado do tipo `char` ocupa 1 byte na memória.

Por exemplo, o valor ASCII de `'A'` ('A' maiúsculo) é 65. Isso significa que se você atribuir `'A'` a uma variável do tipo `char`, o valor 65 é armazenado em vez do valor `'A'`. Assim, esse valor seria na memória como é mostrado na Figura 2.

**Figura 2.** Representação interna do caractere `'A'`.

![Figura 2](/content/images/char_memory.svg "Char A")

Uma vez que, internamente, o valor inteiro é o que fica armazenado na memória, também podemos usar `char` para guardar valores inteiros na faixa de -128 a 127, como mostrado no Código 2 a seguir.

**Código 2.** Armazenando valores inteiros em uma variável `char`.

```c
char meuNumero = -128;
```

## 8.1.2. O tipo `int`

É usado para armazenar valores inteiros, ou seja, sem casas decimais. Pode guardar valores em octal, hexadecimal ou decimal. O tamanho de um `int` geralmente é de 4 bytes (32 bits), podendo armazenar valores inteiros de -2.147.483.648 até 2.147.483.647.

**Código 3.** Declaração e inicialização de uma variável do tipo `int`.

```c
int meuInt = 128547;
```

Valores octais e hexadecimais também podem ser passados para uma variável da forma descrita no Código 4. Use o sufixo `0x` antes de um número em hexadecimal para representá-lo no código e `0` antes de um número octal. Por padrão, o valores são impressos em decimal, mesmo que tenham sido declarados como hexadecimal ou octal. Execute o Código 4 para constatar isso.

**Código 4.** Declaração e inicialização de uma variável do tipo `int` com valores octais e hexadecimais.

```c
#include <stdio.h>

int main(void) {
  int meuIntHex = 0xF5; // hexadecimais são representados precedendo o número com o sufixo 0x
  int meuIntOct = 073; // octais são representados precedendo o número com um 0 (zero)

  printf("0xF5 corresponde ao decimal %d e 073 corresponde ao decimal %d", meuIntHex, meuIntOct);

  return 0;
}
```

## 8.1.3. Os tipos `float` e `double`

`float` e `double` são usados para guardar números reais. A diferença entre esses dois tipos está no tamanho e precisão em que os dados são armazenados. Enquanto com `float` tem tamanho de 4 bytes e permite armazenar valores com 6-7 dígitos de significância, antes ou depois da vírgula, `double` tem tamanho de 8 bytes e suporta 16 a 17 dígitos.

Uma variável `float` ou `double` pode ser inicializada com a representação do número decimal ou em notação científica. Veja exemplos no código a seguir:

**Código 5.** Usando `float` e `double`.

```c
#include <stdio.h>

int main(void) {
  float meuFloat1 = 5.47261; // Usa-se ponto (.) em vez de vírgula (,)
  float meuFloat2 = 3.9e3; // Notação científica: 3.9 x 10^3
  double meuDouble1 = 7.38172937172636192;
  double meuDouble2 = 0.5e-7 // Notação científica: 0.5 x 10^-7

  return 0;
}
```
