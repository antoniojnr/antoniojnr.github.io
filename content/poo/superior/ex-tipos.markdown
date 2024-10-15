---
layout: default
title: Exercícios - Encapsulamento, parte 1
nav_exclude: true
---

## Exercícios

**Tema:** Tipos primitivos e _wrapper classes_

Para questões que requerem a construção de uma implementação, crie seu código dentro de um projeto no IntelliJ. Crie um pacote `respostas` e, dentro desse pacote, crie uma classe para cada exercicio que requerer implementação. Por exemplo, **Exercicio1.java**, **Exercicio2.java**, etc. Utilize o método main das classes para rodar seu código.

### Exercício 1

Considere o código a seguir. O que será impresso? Explique detalhadamente a diferença entre `==` e `.equals()` no contexto de tipos primitivos e _classes wrapper_.

```java
Integer num1 = 100;
Integer num2 = 100;
Integer num3 = 200;
Integer num4 = 200;
System.out.println(num1 == num2); // (1)
System.out.println(num3 == num4); // (2)
System.out.println(num1.equals(num2)); // (3)
```

### Exercício 2

O código abaixo imprime o valor `true` ou `false`? Explique o que ocorre no caso de comparação entre classes _wrapper_ de valores maiores que 127.

```java
Integer num1 = 128;
Integer num2 = 128;
System.out.println(num1 == num2);
```

### Exercício 3

Crie um programa que receba um valor inteiro do usuário, use a classe `Integer` para convertê-lo em uma representação binária, octal e hexadecimal, e imprima os resultados.

### Exercício 4

Implemente uma função que receba um número `Double` e retorne seu valor convertido para `int`, `long`, `float` e `byte`.

Em cada conversão, imprima o valor original e o convertido, discutindo possíveis perdas de precisão.

### Exercício 5

Escreva um código que leia dois números inteiros do usuário e compare-os usando tanto `==` quanto `.equals()`. Explique o comportamento das comparações no caso de _autoboxing_ e como isso afeta os resultados quando os valores estão dentro e fora do intervalo de -128 a 127.

### Exercício 6

Implemente um método que compare a soma dos valores de dois arrays de números primitivos `int[]`, utilizando as classes _wrapper_. A função deve retornar `true` se a soma dos dois arrays for a mesma, e `false` caso contrário.
