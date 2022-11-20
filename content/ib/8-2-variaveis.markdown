---
layout: default
title: Variáveis e identificadores
nav_exclude: true
---

## 8.2. Variáveis e identificadores

Uma variável é uma área de armazenamento para guardar dados. Para identificar essa área de armazenamento, cada variável deve ter seu próprio nome, que deve ser único, chamado de identificador. Nomes de variáveis são uma representação simbólica de um local de memória. Por exemplo, no Código 1, `x` é uma variável do tipo `int` à qual foi atribuído um valor inteiro igual a _57_.

**Código 1.** Declaração e inicialização de uma variável.

```c
int x = 57;
```

Uma vez declarada, podemos modificar o valor da variável para outro de mesmo tipo. No Código 2 a seguir, o valor de `x` é modificado de _57_ para _82_. Perceba que não é necessário fazer `int x` novamente ao modificar o valor. Isso se chama inicialização e só pode ser feito uma vez no código, ou ocasionará um erro.

**Código 2.** Modificando o valor de `x`.

```c
int x = 57;
// algumas linhas depois...
x = 82;
```

## 8.2.1. Identificadores

Há algumas regras para nomear uma variável:

1. O nome de uma variável só pode ter letras (maiúsculas ou minúsculas), números e _underscore_ (\_).
2. A primeira letra de uma variável deve ser uma letra ou _underscore_.
3. Não existe uma regra para o tamanho máximo do nome de uma variável. Entretanto, você pode ter problemas em alguns casos se o nome de sua variável exceder 31 caracteres.

A próxima regra é mais uma convenção do que uma regra: você sempre deve dar nomes significativos a variáveis. Por exemplo, `pontoInicial` é um nome melhor que `pi`, porque descreve bem o valor guardado ali.

Além disso, você não pode ter duas variáveis com o mesmo identificador. Veja o Código 3 a seguir.

**Código 3.** Uso incorreto de identificador.

```c
int numero = 5;      // variável int
numero = 5.5;        // erro
double numero;       // erro
```

## 8.2.2. Exercícios

**Exercício 1.** Declare 3 variáveis para armazenar os valores listados a seguir e utilize a função apropriada para imprimir os valores das variáveis.

- `"Introducao a programacao"`
- `'g'`
- `37.674`

**Exercício 2.** O que acontece se você atribuir a string `"teste"` a uma variável do tipo `int`? Explique o que e porque acontece.
