---
layout: default
title: Exercícios complementares
nav_exclude: true
---

## Exercícios complementares

Os exercícios abaixo podem ser desenvolvidos de forma livre. Envie suas respostas por email, caso deseje que eu comente e avalie seu código. Utilize os comandos já estudados para ler e escrever valores na entrada padrão (Ver slides _1.4.1. Entrada e saída de dados_, disponíveis no Classroom).

### Exercício 1

Crie uma classe `Pessoa` com atributos para nome, idade e endereço. Em seguida, crie objetos `Pessoa` e exiba suas informações.

### Exercício 2

Crie uma classe `Calculadora` com métodos para realizar operações matemáticas simples (soma, subtração, multiplicação e divisão). Não é necessário criar atributos internos. O objetivo é observar como você implementará os métodos. Crie objetos `Calculadora` e execute operações com eles.

### Exercício 3

Crie uma classe `Estudante` com atributos para nome, matrícula e três notas. Implemente métodos para calcular a média das notas e determinar se o aluno foi aprovado ou reprovado, considerando que a média para ser aprovado é 70. Crie objetos `Estudante` e imprima informações dos objetos.

- A classe `Estudante` deve possuir o construtor `Estudante(String nome, int matricula, double n1, double n2, double n3)`
- A classe `Estudante` deve possuir o método `double getMedia()` que retorna o cálculo da média das notas do estudante
- A classe `Estudante` deve possuir um método `void setNotas(double n1, double n2, double n3)` para definir as três notas de uma vez
- A classe `Estudante` deve possuir métodos `double getNota1()`, `double getNota2()` e `double getNota3()`
- Crie uma exceção `NotaInvalidaException`, que deve ser lançada quando uma nota negativa é passada para os métodos que recebem nota
- Crie um caso de teste para testar o método `double getMedia()`
- Crie um caso de teste para testar os métodos `void setNotas(double n1, double n2, double n3)`, `double getNota1()`, `double getNota2()` e `double getNota3()`

### Exercício 4

Crie uma classe `Livro` com atributos para título, autor e preço. Crie objetos `Livro` e exiba informações sobre os livros.

### Exercício 5

Crie uma classe `ContaCorrente` com atributos para número da conta, saldo e titular da conta. Implemente métodos para depósito, saque e exibição do saldo. Crie objetos `ContaCorrente` e realize transações bancárias.

### Exercício 6

Crie uma classe `Triangulo` que represente um triângulo com atributos para os comprimentos dos lados. Implemente um método para determinar o tipo de triângulo (equilátero, isósceles ou escaleno). Crie objetos `Triangulo` de forma a obter triângulos de tipos diferentes.
