---
layout: default
title: Expressões
nav_exclude: true
---

## 8.3. Expressões

Em C, uma expressão é uma combinação de operadores e operandos––tem como resultado um único valor e pode ser guardado em uma variável. O operador denota a ação ou operação a ser realizada e os operandos são os valores aos quais aplicamos a operação. Na expressão `3 * 4`, os valores `3` e `4` são operandos e `*` é o operador de multiplicação.

Há quatro tipos de expressões em C que estudaremos no nosso curso: aritméticas, relacionais, lógicas e condicionais. Ainda há outros dois tipos, bit a bit e de ponteiro, que não iremos estudar.

O tipo do valor resultante de uma expressão depende do tipo dos operandos e do operador. Por exemplo, o resultado da operação de divisão `3/2` é `1` e não `1.5`, pois a parte fracional é ignorada. Se um dos ou ambos os operandos forem um números decimais, o resultado será um número decimal. `3.0/2`, `3/2.0` ou `3.0/2.0` resultam em `1.5`, assim como `3.0/3.0` resulta em `1.0` e não `1`.

## 8.3.1. Expressões aritméticas

A avaliação de expressões aritméticas ocorre da esquerda para a direita, respeitando a prioridade de operações e parênteses. Considere a expressão `6 * 2 / (2 + 1 * 2 / 3 + 6) + 8 * (8 / 4)`. A Tabela 1 mostra o passo a passo da avaliação da expressão.

| Avaliação da expressão                      | Descrição do passo                                                                                                                                       |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `6 * 2 / (2 + 1 * 2 / 3 + 6) + 8 * (8 / 4)` | Dentro dos parênteses mais à esquerda, é resolvida a operação prioritária mais à esquerda (`1 * 2`, que é `2`).                                          |
| `6 * 2 / (2 + 2 / 3 + 6) + 8 * (8 / 4)`     | `2 / 3` é `0`, uma vez que os dois operandos são `int` e a parte fracional é ignorada.                                                                   |
| `6 * 2 / (2 + 0 + 6) + 8 * (8 / 4)`         | Em `2 + 0 + 6`, `2 + 0` é avaliado primeiro, seguido de `2 + 6`, que é igual a `8` - as expressões são avaliadas um operador com seus operandos por vez. |
| `6 * 2 / 8 + 8 * (8 / 4)`                   | `8 / 4` é igual a `2`                                                                                                                                    |
| `6 * 2 / 8 + 8 * 2`                         | `6 * 2` é igual a `12`                                                                                                                                   |
| `12 / 8 + 8 * 2`                            | `12 / 8` é igual a `1` (parte fracional ignorada)                                                                                                        |
| `1 + 8 * 2`                                 | `8 * 2` é igual a `16`                                                                                                                                   |
| `1 + 16`                                    | `1 + 16` é igual a `17`                                                                                                                                  |
| `17`                                        | O resultado é `17`                                                                                                                                       |

A Tabela 2 mostra os cinco operadores aritméticos presentes na linguagem C.

| Operador | Significado               |
| -------- | ------------------------- |
| `+`      | adição                    |
| `-`      | subtração                 |
| `*`      | multiplicação             |
| `/`      | divisão                   |
| `%`      | resto da divisão (módulo) |

O resto da divisão (`%`) funciona exatamente como o nome diz. Retorna o resto da divisão de um número por outro. Por exemplo, `5 % 2` é `1`, `11 % 7` é `4`. O outros operadores funcionam da forma como você já conhece na matemática.

## 8.3.2. Expressões relacionais

Em desenvolvimento.

## 8.3.3. Expressões lógicas

Em desenvolvimento.

## 8.3.4. Expressões condicionais

Em desenvolvimento.

## 8.3.5. Exercícios

**Exercício 1.** Você precisa estimar quanto **tempo** durará uma viagem, baseado na **velocidade** do veículo e **distância** entre a cidade de partida e a cidade destino. Escreva um programa que pede ao usuário os valores de velocidade e distância e calcula o tempo estimado de viagem.

**Exercício 2.** Crie um programa que converta uma temperatura fornecida em **Celsius** para **Fahrenheit**.
