---
layout: default
title: Exercícios - Encapsulamento, parte 1
nav_exclude: true
---

## Exercícios

**Tema:** Encapsulamento

1. Esses exercícios deverão ser implementados de forma livre em um primeiro momento.
2. Em um segundo momento, os 4 primeiros estudante que concluírem escreverão os casos de teste para os exercícios e complementarão a descrição das regras de cada exercício.
3. Cada estudante avaliará o código de outros 3 estudantes de acordo com os critérios definidos a seguir:

### Critérios de avaliação

Cada critério deve ser avaliado com uma nota de 1 a 3. O significado da nota é dado em cada critério.

1. **Legibilidade** - facilidade de entender o código. O código possui nomes de variáveis claros e está bem indentado. **Nota relativa às ocorrências de problemas de legibilidade:** 1 - muitas ocorrências, 2 - poucas ocorrências e 3 - nenhuma ocorrência)
2. **Estilo e consistência** - boas práticas de programação foram utilizadas no código: i. convenção de nomenclatura (camelCase), ii. tipos de dados apropriados (não usar um tipo quando outro é mais apropriado), iii. evitar código duplicado, iv. comentar código, quando necessário, e não usar comentários supérfluos, v. indicar erros com exceções e não `System.out.println()`. **Nota relativa às ocorrências de problemas de estilo:** 1 - muitas ocorrências, 2 - poucas ocorrências e 3 - nenhuma ocorrência)
3. **Complexidade** - o código resolve o problema da forma mais simples possível. Nesse caso, verifique a existência de condições ou operações muito complexas, quantidade de métodos desnecessária, laços e condições aninhadas desnecessariamente. **Nota relativa à complexidade:** 1 - muito complexo, difícil de entender, 2 - complexidade média, pode ser mais simples e 3 - baixa complexidade, fácil de entender)

### Exercício 1

Crie uma classe `ContaBancaria` representando uma conta bancária com métodos para depositar, sacar e verificar o saldo.

- Use encapsulamento para proteger o saldo.
- Ao tentar sacar um valor quando o saldo é zero, esse valor é descontado do cheque especial.

#### Extra

Crie métodos de validação para usar nos métodos de depositar e sacar. Exemplos de possíveis validações:

- Saques acima de x reais não podem ser feitos a partir de determinado horário. Use a criatividade para representar o conceito de horário.
- Crie testes de unidade para as validações que você implementar.

### Exercício 2

Crie a classe `Reserva`, que pertenceria a um sistema de reservas de hotel. A classe possui os atributos: número do quarto, nome do hóspede, valor por diária, data de check-in e data de check-out. Implemente métodos para reservar, cancelar a reserva, calcular o número de diárias entre as datas de reserva.

1. Implemente descontos para um determinado número de diárias: 5 a 9 diárias -> 5%, 10 ou mais diárias -> 10%

#### Extra

2. Determine a quantidade mínima e máxima de diárias para a reserva.
3. Determine o horário de check-out, para que seja possível determinar o número de diárias de forma mais clara.

### Exercício 3

Implemente a classe `Personagem`, que representa um personagem de jogo. Crie os atributos encapsulados para: nome, pontos de saúde e experiência. Além disso, implemente os métodos para sofrer dano,recuperar saúde e ganhar experiência.

- A saúde máxima do personagem é 100.
- Ganhar experiência aumenta a experiência do personagem em 100 pontos. O limite é 1000. O valor da experiência não é mais incrementado ao atingir 1000.
- O dano sofrido do personagem segue a seguinte regra: inicialmente, o dano sofrido é 10 e vai sendo reduzido de 1 em 1, conforme a experiência cresce: para experiência 0 -> dano 10, 100 -> dano 9, 200 -> dano 8, ..., 1000 -> dano 1.

#### Extra

Crie uma regra para sofrer menos dano conforme a experiência do personagem aumenta. Obviamente, o dano nunca pode atingir zero e a experiência deve ter um limite máximo.

### Exercício 4

Crie a classe `Postagem`, que representa uma postagem de uma rede social textual. Os atributos de uma postagem são: texto, data, autor e número de curtidas. Os atributos texto, data e autor poderão ser manipulados somente através dos respectivos getters e setters, mas o número de curtidas terá somente o método acessor getCurtidas. O número de curtidas poderá ser alterado através dos métodos curtir() e descurtir(), que incrementará ou decrementará o número de curtidas em 1, respectivamente. O número mínimo de curtidas que uma postagem pode ter é 0. Descurtir além desse limite não causará nenhuma mudança.

#### Extra

Pense em como garantir que um usuário somente pode curtir uma postagem uma única vez.
