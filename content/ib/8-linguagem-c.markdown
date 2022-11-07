---
layout: default
title: Introdução à Linguagem C
nav_exclude: true
---

## 8.0. Introdução à Linguagem C

C é uma linguagem de programação inicialmente desenvolvida por Dennis Ritchie em 1972 para ser usada como uma linguagem de programação para a escrita de um sistema operacional. Os principais recursos da linguagem C incluem acesso de baixo nível à memória, um conjunto simples de palavras-chave e um estilo de código limpo. Muitas linguagens desenvolvidas posteriormente reutilizaram a sintaxe e recursos de C, direta ou indiretamente. Java, PHP, JavaScript, entre outras são baseadas na linguagem C.

## 8.0.1. Estrutura de um programa em C

Em C ou em qualquer linguagem de programação, os programas precisam ser escritos em uma estrutura seguindo regras estritas de sintaxe. Isso significa que não respeitar essa sintaxe levará a **erros de compilação**, o que significa que seu código não pode ser transformado em uma aplicação executável. A estrutura de um programa em C é mostrada no Código 1.

A função de cada linha é indicada em um comentário e detalhada logo abaixo do código. Comentários são precedidos por `//` e são trechos no código que não são interpretados pelo compilador, ou seja, não são efetivamente código. C também ignora linhas em branco. Essas são usadas para organizar o código e torná-lo mais legível.

**Código 1.** Programa C básico.

```c
#include <stdio.h>  // Cabeçalho

int main(void) {  // Declaração da função principal
  printf("Ola, mundo!");  // Corpo da função

  return 0;  // Comando de retorno
}
```

### Cabeçalho

Arquivos declarados no cabeçalho adicionam funcionalidade aos programas em C. A declaração `#include <stdio.h>` na primeira linha é uma biblioteca que nos permite trabalhar com funções de entrada e saída, como o `printf()` usado na linha 4. Não se preocupe se você não entender essa linha agora, pense nela como algo que você sempre precisará incluir em seus programas para poder usar funções.

### Declaração da função principal

A função principal é `main()`. Esta sempre aparecerá em um programa C e é a primeira função a ser chamada quando o programa é executado.

> Você viu que a declaração da função `main()` tem o seguinte formato: `int main(void) { ... }`.
>
> Nesse momento, não se preocupe em entender tudo que está escrito aí. Mas, para você saber o que isso significa: `int` é o tipo de retorno da função `main`, isto é, essa função retorna um número inteiro; `void`, entre parênteses, `()`, significa que a função `main` não recebe parâmetros, ou seja, valores sobre os quais vai trabalhar.
> O código que aparece dentro das chaves, `{}`, é o _corpo da função_. Essa parte é executada quando a função é chamada.

### Corpo da função

O corpo da função é todo o código que será executado quando a função (`main`, neste caso) for chamada. No nosso exemplo, existem apenas dois comandos no corpo da função:

```c
printf("Ola, mundo!");

return 0;
```

O comando `printf("Ola, mundo!");` imprime o texto "Ola, mundo" na saída padrão e o `return 0;` é explicado a seguir.

Inicialmente, nos nossos programas, raramente você precisará escrever código fora do corpo da função `main`.

### Comando de retorno

Logo acima, você viu que na declaração da função `main` (`int main(void) { ... }`), `int` é o tipo de retorno da função. Isso significa que, ao fim da função, um valor deve ser retornado. Em outras situações, esse valor retornado pode ou não ser usado no código. Veremos mais sobre isso quando estudarmos sobre funções.

O comando de retorno presente no exemplo é `return 0;`. O valor `0` é retornado na função `main`, nesse caso, para indicar que o programa foi executado e terminou com sucesso.

Nunca escreva código dentro de um corpo de função `{}` após um comando `return`. O `return`, quando declarado, deve ser o último comando do corpo da função e nada após ele é executado.

## 8.0.2. Exercícios

### Exercício 1

Com base no que você aprendeu neste capítulo, escreva um programa para imprimir o seu nome na tela.
