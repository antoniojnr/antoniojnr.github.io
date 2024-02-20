---
layout: default
title: Exercícios complementares
nav_exclude: true
---

## Exercícios complementares

Os exercícios abaixo podem ser desenvolvidos de forma livre. Envie suas respostas por email, caso deseje que eu comente e avalie seu código. Utilize os comandos já estudados para ler e escrever valores na entrada padrão (Ver slides _1.4.1. Entrada e saída de dados_, disponíveis no Classroom).

### Exercício 1

Crie uma classe `Estudante` com atributos para nome, matrícula e três notas. Implemente métodos para calcular a média das notas e determinar se o aluno foi aprovado ou reprovado, considerando que a média para ser aprovado é 70. Crie objetos `Estudante` e imprima informações dos objetos.

- A classe `Estudante` deve possuir o construtor `Estudante(String nome, int matricula, double n1, double n2, double n3)`
- A classe `Estudante` deve possuir o método `double getMedia()` que retorna o cálculo da média das notas do estudante
- A classe `Estudante` deve possuir um método `void setNotas(double n1, double n2, double n3)` para definir as três notas de uma vez
- A classe `Estudante` deve possuir métodos `double getNota1()`, `double getNota2()` e `double getNota3()`
- Crie uma exceção `NotaInvalidaException`, que deve ser lançada quando uma nota negativa é passada para os métodos que recebem nota
- Crie um caso de teste para testar o método `double getMedia()`
- Crie um caso de teste para testar os métodos `void setNotas(double n1, double n2, double n3)`, `double getNota1()`, `double getNota2()` e `double getNota3()`

### Exercício 2

Crie uma classe `Calculadora` com métodos para realizar operações matemáticas simples (soma, subtração, multiplicação e divisão). Não é necessário criar atributos internos. O objetivo é observar como você implementará os métodos. Crie objetos `Calculadora` e execute operações com eles.

### Exercício 3

Crie uma classe `Pessoa` com atributos para nome, idade e endereço. Em seguida, crie objetos `Pessoa` e exiba suas informações.

### Exercício 4

Crie uma classe `Livro` com atributos para título, autor e preço. Crie objetos `Livro` e exiba informações sobre os livros.

### Exercício 5

Crie uma classe `ContaCorrente` com atributos para número da conta, saldo e titular da conta. Implemente métodos para depósito, saque e exibição do saldo. Crie objetos `ContaCorrente` e realize transações bancárias.

### Exercício 6

Crie uma classe `Triangulo` que represente um triângulo com atributos para os comprimentos dos lados. Implemente: (i) um método para determinar o tipo de triângulo (equilátero, isósceles ou escaleno) e (ii) um método para determinar se os comprimentos passados formam um triângulo válido. Crie objetos `Triangulo` de forma a obter triângulos de tipos diferentes.

### Exercício 7

Crie uma classe `Jogador` com os atributos: nome, nível e pontos. Implemente métodos para subir de nível e ganhar pontos.

### Exercício 8

Crie uma classe `Funcionário` com os atributos nome, cargo e salário. Implemente um método para dar um aumento no salário com base em um percentual.

### Exercício 9

Crie a classe `Estudante` com os atributos int matricula e String nome e seus respectivos getters e setters. Crie um construtor `Estudante(int matricula, String nome, int ano, int mes, int dia)`, onde ano, mes e dia representam a data de nascimento do estudante. Além disso, crie o método `getIdade()`, que retorna a idade em anos do usuário, com base na data de nascimento.

No construtor, lance uma exceção `ValorInvalidoException` quando as seguintes situações ocorrerem:

1. Um dia menor que 1 ou maior que 31 for passado;
2. Um mês menor que 1 ou maior que 12 for passado;
3. Um ano maior que o ano atual for passado.

### Exercício 10

Escreva um programa em Java que lê dois valores `a` e `b` da entrada padrão, efetua a divisão `a / b` e exibe o resultado, com precisão de 2 casas decimais. Prepare o seu código para tratar a possibilidade de acontecer a divisão por zero.

### Exercício 11

Crie a classe `Usuario`, com dois atributos, email e senha. Valide o email e senha, para que o email esteja no formato `aaa@bbb.com` (não precisa testar outras terminações de domínio, como _.net_ ou _.com.br_) e a senha seja numérica (sem letras ou símbolos).

Lance uma exceção `EmailInvalidoException` quando um email em formato inválido for passado através do construtor ou método `setEmail` e `SenhaInvalidaException` quando uma senha em formáto inválido for passada através do construtor ou método `setSenha`.
