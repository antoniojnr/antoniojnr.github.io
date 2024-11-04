---
layout: default
title: Exercícios - Encapsulamento
nav_exclude: true
---

## Exercícios

**Tema:** Encapsulamento

### Exercício 1

Crie uma classe `ContaBancaria` representando uma conta bancária com métodos para depositar, sacar e verificar o saldo.

- Use encapsulamento para proteger o saldo.
- Ao tentar sacar um valor quando o saldo é zero, esse valor é descontado do cheque especial.
- Crie testes de unidade para as validações que você implementar.

### Exercício 2

Crie a classe `Reserva`, que pertenceria a um sistema de reservas de hotel. A classe possui os atributos: número do quarto, nome do hóspede, valor por diária, data de check-in e data de check-out. Implemente métodos para reservar, cancelar a reserva, calcular o número de diárias entre as datas de reserva.

1. Implemente descontos para um determinado número de diárias: 5 a 9 diárias -> 5%, 10 ou mais diárias -> 10%
2. Determine a quantidade mínima e máxima de diárias para a reserva.
3. Determine o horário de check-out, para que seja possível determinar o número de diárias de forma mais clara. Por exemplo, se o horário de check-in e check-out é 13:00 e o hóspede chegou às 13:00 do dia 04/11 e saiu às 16:00 do dia 06/11, devem ser cobradas 3 diárias, porque o hóspede passou do horário de check-out no último dia.

### Exercício 3

Implemente a classe `Personagem`, que representa um personagem de jogo. Crie os atributos encapsulados para: nome, pontos de saúde e experiência. Além disso, implemente os métodos para sofrer dano, recuperar saúde e ganhar experiência.

- A saúde máxima do personagem é 100.
- Ganhar experiência aumenta a experiência do personagem em 100 pontos. O limite é 900. O valor da experiência não é mais incrementado ao atingir 900.
- O dano sofrido do personagem segue a seguinte regra: inicialmente, o dano sofrido é 10 e vai sendo reduzido de 1 em 1, conforme a experiência cresce: para experiência 0 -> dano 10, 100 -> dano 9, 200 -> dano 8, ..., 900 -> dano 1.

### Exercício 4

Crie a classe `Postagem`, que representa uma postagem de uma rede social textual. Os atributos de uma postagem são: texto, data, autor e número de curtidas. Os atributos texto, data e autor poderão ser manipulados somente através dos respectivos _getters_ e _setters_, mas o número de curtidas terá somente o método acessor `getCurtidas()`. O número de curtidas poderá ser alterado através dos métodos `curtir()` e `descurtir()`, que incrementará ou decrementará o número de curtidas em 1, respectivamente. O número mínimo de curtidas que uma postagem pode ter é 0. Descurtir além desse limite não causará nenhuma mudança.
