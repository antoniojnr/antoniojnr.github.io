---
layout: default
title: Roteiro de laboratório 2
nav_exclude: true
---

# Roteiro de laboratório 2

## Instruções

1. Entregue as questões em papel, escritas à mão.
2. O trabalho poderá ser realizado individualmente ou em dupla.
3. Use o simulador de circuitos lógicos de sua preferência para ver os circuitos em funcionamento (sugestões: [Logic.ly](https://logic.ly/demo/) e [CircuitVerse](https://circuitverse.org/simulator))

## Mapa de Karnaugh

**(1)** Desenhe o mapa de Karnaugh para a expressão <img src="https://latex.codecogs.com/svg.image?Z = \overline{A} . B . \overline{C} + A.C"/>.

**(2)** Desenhe o mapa de Karnaugh para a expressão <img src="https://latex.codecogs.com/svg.image?Z = \overline{A} . \overline{B} . \overline{C} + A . \overline{B} . \overline{C}"/> e simplifique-a.

**(3)** A partir do mapa de Karnaugh a seguir, encontre a expressão simplificada.

| <img src="https://latex.codecogs.com/svg.image?Z"/>            | <img src="https://latex.codecogs.com/svg.image?\overline{A}.\overline{B}"/> | <img src="https://latex.codecogs.com/svg.image?\overline{A}B"/> | <img src="https://latex.codecogs.com/svg.image?AB"/> | <img src="https://latex.codecogs.com/svg.image?A\overline{B}"/> |
| -------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- | ---------------------------------------------------- | --------------------------------------------------------------- |
| <img src="https://latex.codecogs.com/svg.image?\overline{C}"/> | 1                                                                           | 0                                                               | 1                                                    | 1                                                               |
| <img src="https://latex.codecogs.com/svg.image?C"/>            | 0                                                                           | 0                                                               | 1                                                    | 1                                                               |

## Portas lógicas

**(4)** Implemente um inversor (NOT) usando uma porta NAND.

**(5.1)** Implemente um AND usando somente portas NAND.

**(5.2)** Implemente um AND usando somente portas NOR.

**(6.1)** Implemente um OR usando somente portas NAND.

**(6.2)** Implemente um OR usando somente portas NOR.

## Circuitos combinacionais

**(7)** Construa um multiplexador 2-para-1 implementando a seguinte expressão booleana: <img src="https://latex.codecogs.com/svg.image?Z=\overline{A}.D_0+A.D_1"/>, onde D<sub>0</sub> é a entrada 0 e D<sub>1</sub> é a entrada 1.

**(8)** Desenhe o circuito e escreva a equação descrevendo a saída de um multiplexador 4-para-1.

**(9)** Demultiplexadores implementam a operação reversa dos multiplexadores, uma vez que permitem que uma única entrada seja roteada para uma de _n_ saídas. Implemente um demultiplexador 1-para-4.

**(10)** Escreva a tabela verdade para um _half-adder_ e implemente o circuito.

**(11)** Escreva a tabela verdade para um _full-adder_ e implemente o circuito.

**(12)** Implemente um somador de 4 bits.

## Circuitos na prática

Para os exercícios a seguir, use o [Tinkercad](https://www.tinkercad.com/).

**(13)** Monte um circuito para demonstrar o funcionamento de uma porta AND.

**(14)** Monte um circuito para demonstrar a implementação de uma porta AND usando portas NAND.

**(15)** Monte um circuito para demonstrar a implementação de uma porta OR usando portas NAND.
