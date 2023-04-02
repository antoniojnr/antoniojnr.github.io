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

## 8.1.2. Strings

Strings são cadeias de caracteres. Em C, são representadas como um array de `char`. Um array é uma lista de valores. Neste caso, uma lista de caracteres. A declaração de uma string em C é demonstrada no Código 3.

**Código 3.** Declaração de uma string em C.

```c
char minhaString[] = "Antonio";
```

## 8.1.3. O tipo `int`

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

## 8.1.4. Os tipos `float` e `double`

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

## 8.1.5. `signed` ou `unsigned`

Como você viu, cada tipo precisa de uma quantidade específica de memória para ser armazenado. O tipo `char`, por exemplo, ocupa 1 byte de memória. Veja a seção 8.1.1 para relembrar a explicação do tipo `char`. Naquela seção, você também viu que o tipo `char` pode ser usado para representar inteiros no intervalo de -127 até 128. Isso se dá devido à forma como valores com sinal são representados internamente.

Então, se o valor binário máximo representável em 8 bits (1 byte) é 256, que corresponde a 11111111, por que só é possível representar inteiros de -127 a 128 em um `char`? Para responder essa pergunta, é necessário explicar primeiro como valores negativos são representados no computador.

No computador, é usado **complemento de dois** para representar valores positivos e negativos. Em complemento de dois, o bit mais significativo––aquele mais à esquerda––indica um número negativo caso seja 1 ou positivo, caso seja 0.

## 8.1.6. Especificadores de formatação

Em algum momento, seu programa precisará exibir valores na saída padrão ou ler valores da entrada padrão. C necessita que você especifique o tipo de valor que deseja exibir ou ler e isso é feito com o auxílio de um especificador de formatação. Seja um caractere, string, número inteiro, ou número decimal (`float`), o valor precisa de um especificador de formatação para ser impresso na saída padrão ou lido da entrada padrão. Um especificador de formatação é um valor especial inserido em uma string para definir o tipo de dado que será impresso na saída padrão (caso esteja usando `printf()`) ou lido da entrada padrão (caso esteja usando `scanf()`).

Os especificadores de formatação para os tipos estudados nesta seção são mostrados na Tabela 2.

**Tabela 1.** Especificadores de formatação.

| Tipo     | Especificador de formatação |
| -------- | --------------------------- |
| `char`   | `%c`                        |
| String   | `%s`                        |
| `int`    | `%d`                        |
| `float`  | `%f`                        |
| `double` | `%lf`                       |

Os especificadores de formatação são usados nas funções `printf()`, que imprime valores na saída padrão, e `scanf()`, que lê valores da entrada padrão. O programa do Código 6 demonstra o uso dos especificadores de formatação e funções `printf()` e `scanf()`. Veja os comentários e execute o código para entender melhor seu funcionamento.

**Código 6.** Usando especificadores de formatação.

```c
#include <stdio.h>

int main(void) {
  printf("Digite seu nome: "); // Imprime a string na saída padrão
  char nome = scanf("%s"); // Lê uma string da entrada padrão - o teclado
  printf("Digite sua idade: "); // Imprime a string na saída padrão
  int idade = scanf("%d"); // Lê um inteiro da entrada padrão - o teclado

  printf("Voce se chama %s e tem %d anos."); // Caracteres acentuados são exibidos incorretamente

  return 0;
}
```

## 8.1.6.1. Especificador de formatação para `float`

O especificador de formatação para `float` possui algumas configurações adicionais para exibição personalizada dos valores. Essas configurações permitem, por exemplo, definir a quantidade de casas decimais exibidas, o alinhamento do número, exibição do sinal, etc.

Um especificador de formatação para `float` possui o seguinte formato: `[flags][largura][.precisão]estilo`. Cada seção entre colchetes (`[]`) é opcional. São elas: _flags_, _largura_ e _precisão_. A única seção obrigatória é _estilo_. Vamos ver o que é cada uma destas detalhadamente.

**Flags** configuram os valores conforme demonstrado na Tabela 2.

**Tabela 2.** Flags.

| Flag | Significado                                                                                                                                                                                                                           | Exemplo  | Explicação                                                                                                                                                 |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-`  | Alinha o número à esquerda dentro da largura especificada.                                                                                                                                                                            | `%-7.2f` | Alinha o número de `2` casas decimais à esquerda dentro de `7` espaços.                                                                                    |
| `+`  | Sempre mostra o sinal do número.                                                                                                                                                                                                      | `%+f`    | Mostra o sinal do número, seja ele positivo ou negativo.                                                                                                   |
| `#`  | Sempre mostra o separador decimal (`.`), mesmo que não haja parte decimal.                                                                                                                                                            | `%#f`    |                                                                                                                                                            |
| `0`  | Se a largura especificada for maior que a quantidade de espaço necessária para imprimir o número e a flag `-` não for especificada, precede o número com zeros suficientes à esquerda para fazer o número ter a largura especificada. | `%08.2f` | Precede o número de `2` casas decimais com `0`s até a largura de `8` caracteres ser preenchida. O valor `23.0` seria exibido como `00023.00`, por exemplo. |

Mais de uma flag pode ser usada, como demonstrado no Código 6.

**Código 6.** Exemplos de configuração para o especificador de formato de `float`.

```c
#include <stdio.h>

int main(void) {
  printf("%-8.3f\n", 3.572); // Imprime "3.572   ", sem aspas
  printf("%+.2f\n", 4.567); // Imprime +4.57
  printf("%+08.2f\n", 4.567); // Imprime +0004.57
  printf("%+#08.2f\n", 34.0); // Imprime +0034.00

  return 0;
}
```

Depois das _flags_ opcionais, é definido um valor de _largura_, também opcional. Esse valor indica o número mínimo de caracteres que devem ser usados para imprimir o número. Se esse valor é maior que o espaço necessário para imprimir o número, então o número é preenchido com espaços à esquerda para fazê-lo ocupar a largura especificada. Se a _flag_ `0` for usada, então o valor é preenchido com `0`s à esquerda––a menos que a flag `-` seja usada, o que faz com que o valor seja preenchido com espaços à direita.

**Código 7.** Configurando a largura.

```c
#include <stdio.h>

int main(void) {
  printf("%10f\n", 3.0); // Especifica que o número será impresso num espaço de 10 caracteres. Imprime "  3.000000", sem aspas. São mostrados 6 zeros após o ponto porque essa é geralmente a precisão padrão.

  return 0;
}
```

## 8.1.7. Exercícios

**Exercício 1.** Execute o programa a seguir e observe a saída. Os valores exibidos após "Meu float" e "Meu double" são diferentes? Se sim, por quê?

```c
#include <stdio.h>

int main(void) {
  float f = 2.83719283718237182;
  double d = 2.83719283718237182;
  printf("Meu float:  %.10f\n", f);
  printf("Meu double: %.10f\n", d);

  return 0;
}
```

**Exercício 2.** No programa a seguir, modifique o especificador de formatação para exibir o número conforme é pedido.

```c
#include <stdio.h>

int main(void) {
  printf("%f\n", 23.456789); // Deve imprimir +0023.46

  return 0;
}
```

**Exercício 3.** No programa a seguir, use os especificadores de formatação corretos para exibir os valores das variáveis.

```c
#include <stdio.h>

int main(void) {
  char nome[] = "Antonio"; // Imprimir "Antonio"
  char valor = 92; // Imprimir o caractere correspondente
  int numero = 1827; // Imprimir o valor 1827
  float numero2 = 4.789; // Imprimir o valor 4.789
  return 0;
}
```
