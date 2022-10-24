---
layout: default
title: Introdução à Linguagem C
nav_exclude: true
---

## 8. Introdução à Linguagem C

C é uma linguagem de programação inicialmente desenvolvida por Dennis Ritchie em 1972 para ser usada como uma linguagem de programação para a escrita de um sistema operacional. Os principais recursos da linguagem C incluem acesso de baixo nível à memória, um conjunto simples de palavras-chave e um estilo de código limpo. Muitas linguagens desenvolvidas posteriormente reutilizaram a sintaxe e recursos de C, direta ou indiretamente. Java, PHP, JavaScript, entre outras são baseadas na linguagem C.

## 8.1. Estrutura de um programa em C

Em C ou em qualquer linguagem de programação, os programas precisam ser escritos em uma estrutura seguindo regras estritas de sintaxe. Isso significa que não respeitar essa sintaxe levará a **erros de compilação**, o que significa que seu código não pode ser transformado em uma aplicação executável. A estrutura de um programa em C é mostrada no Código 1.

A função de cada linha é indicada em um comentário e detalhada logo abaixo do código. Comentários são precedidos por `//` e são trechos no código que não são interpretados pelo compilador, ou seja, não são efetivamente código.

**Código 1.** Programa C básico.

```c
#include <stdio.h>  // Cabeçalho

int main(void) {  // Declaração do método principal
  printf("Ola, mundo!");  // Corpo da função

  return 0;  // Comando de retorno
}
```

### Cabeçalho
