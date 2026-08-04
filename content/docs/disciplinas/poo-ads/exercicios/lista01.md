---
title: "Lista 01"
weight: 1
bookCollapseSection: true
bookHidden: false
---

# Lista 01

## Instruções

Neste ponto da disciplina, ainda não vimos operações de entrada e saída. Por isso, para simular a entrada dos programas, você deverá declarar variáveis e inicializá-las com os valores que seriam lidos na entrada.

> [!IMPORTANT]
> Todos os exercícios devem ser feitos em um único programa Java, seguindo a estrutura fornecida no link a seguir. Essa estrutura consiste de um programa com um menu inicial para escolha do exercício que será executada e um método separado para cada exercício. Você preencherá apenas o corpo desses métodos, implementando a lógica pedida em cada questão. Não crie arquivos separados nem coloque toda a lógica dentro do main.
>
> A correção será feita presencialmente, com o professor executando o programa na sua máquina. Algumas questões serão escolhidas na hora e testadas com valores também escolhidos na hora. A avaliação levará em conta se o programa compila e se a lógica das questões está correta. Detalhes de formatação não serão avaliados, mas respostas fixas, ausência das estruturas pedidas ou desrespeito à estrutura combinada implicam perda de pontuação.
>
> Baixe a estrutura para preenchimento do código das questões {{< button href="/docs/disciplinas/poo-ads/exercicios/Lista01.java" >}}aqui{{< /button >}}

## Exercícios

1. Declare duas variáveis: `idade` e `possuiCarteira` (boolean). Use uma estrutura `if` para verificar se a pessoa pode dirigir.
   1. Imprima `"Pode dirigir"` quando a pessoa tiver 18 anos ou mais **e** possuir carteira de habilitação. Caso contrário, imprima `"Não pode dirigir"`.

2. Declare uma variável contendo a **nota de um aluno** (de 0 a 10). Utilize uma estrutura `if/else if` para determinar o conceito do aluno.
   1. Mostre `"A"` para notas a partir de 9, `"B"` para notas entre 8 e 8,9, `"C"` para notas entre 7 e 7,9, `"D"` para notas entre 6,8 e 6,9 e `"F"` para notas menores que 6,8.

3. Declare uma variável contendo a **nota de um aluno** (de 0 a 10). Se a nota for **6,8 ou mais**, mostre `"Aprovado"`. Senão, mostre `"Reprovado"`.

4. Declare duas variáveis contendo dois números inteiros. Calcule e imprima o resultado da divisão inteira entre elas.

5. Escreva um programa que utilize dois laços `for` para imprimir a seguinte figura:

   ```text
   *****
   *****
   *****
   *****
   *****
   ```

6. Crie um programa que use um laço `while` para somar todos os números pares de 1 a 100.

7. Declare uma variável contendo um número e imprima a tabuada desse número, de 1 a 10. Use um laço `for`.

8. Declare uma variável contendo um número inteiro e escreva um programa para verificar se ele é primo.

9. Declare uma variável contendo uma única letra. Use uma estrutura `switch` para verificar se a letra é uma vogal ou uma consoante.

10. Declare uma variável contendo uma frase e conte quantas vezes a letra `'a'` (minúscula ou maiúscula) aparece na frase.

11. Crie um `array` de `double` para armazenar 5 notas. Busque como preencher o `array` na inicialização e, em seguida, calcule e imprima a média das notas.

12. Crie um `array` de `String` com os nomes de 5 frutas. Percorra o `array` e imprima cada nome.

13. Considere o código desenvolvido na questão 13. Imprima apenas as frutas que começam com a letra `'M'`.

14. Crie um `array` de inteiros pré-definido. Percorra todos os elementos do `array` e determine qual é o maior valor armazenado nele.

15. Crie um `array` de inteiros pré-definido. Percorra todos os elementos do `array` e conte quantos deles são números positivos.

16. Crie um `array` de inteiros pré-definido. Declare uma variável contendo um número e percorra o `array` até encontrar esse número.
    1. Interrompa o laço assim que ele for encontrado e imprima a mensagem `"Encontrado"`. Caso o número não esteja presente, imprima `"Não encontrado"`.

17. Declare uma variável contendo uma frase. Percorra seus caracteres e conte quantos deles são dígitos (`0` a `9`).

18. Crie um `array` de inteiros pré-definido. Percorra todos os seus elementos e calcule a soma apenas dos números pares.
