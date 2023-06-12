---
layout: default
title: Roteiro de laboratório 3
nav_exclude: true
---

# Roteiro de laboratório 2

## Instruções

Desenvolva, utilizando a linguagem de programação de sua preferência, a solução para as questões a seguir.

## Questões

1. Escreva um programa em Python que receba dois números inteiros como entrada e troque seus valores sem usar uma variável temporária, utilizando operadores bit a bit.
2. Dado um número inteiro, escreva uma função em Python para determinar se ele é uma potência de dois ou não, usando operadores bit a bit.
3. Escreva um programa em Python para contar o número de bits definidos como 1 na representação binária de um número inteiro dado, utilizando operadores bit a bit.
4. Implemente uma função em Python para verificar se dois números inteiros têm sinais opostos ou não, utilizando operadores bit a bit.
5. Escreva uma função em Python para alternar (inverter) o k-ésimo bit de um número inteiro dado, onde k é um número inteiro positivo menor ou igual ao número de bits no inteiro, utilizando operadores bit a bit.

## Soluções

### Questão 1

O resultado da operação XOR entre dois valores, *a* e *b*, representa um mapa de diferenças entre os dois valores. Com esse mapa de diferenças, podemos recuperar *a* a partir de *b* e vice-versa, pois cada bit igual a 1 nesse valor indica que o bit na posição correspondente é diferente. Vejamos no exemplo a seguir:

Considere a = 53 e b = 27, 53 ^ 27 = 46. 

```
  110101 (53)
^ 011011 (27)
--------
  101110 (46)
```

1. Sem usar uma variável temporária, podemos guardar esse mapa de diferenças (o resultado do XOR) em *a*. Perdemos o valor de *a*, mas ainda temos o valor de *b* que usaremos, junto com o mapa de diferenças, para recuperar o valor de *a*: `a = a ^ b`
2. Recuperamos o valor de *a* e guardamos em *b*: `b = a ^ b`
3. Agora recuperamos o valor de *b* e guardamos em *a*: `a = a ^ b`

O código a seguir implementa, em Python, essa solução.

```python
def troca_valores(a, b):
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return a, b

# Exemplo de uso
x = 5
y = 10
x, y = troca_valores(x, y)
print("x =", x)  # Saída: 10
print("y =", y)  # Saída: 5
```

### Questão 2

Um valor é potência de 2 quando há somente um bit igual a 1 em sua representação binária. Por exemplo: 2 (10), 4 (100), 8 (1000), 16 (10000) e assim por diante.

Podemos fazer um AND do *valor* e *valor - 1*: `valor & (valor - 1)`. Se o resultado for 0, *valor* é uma potência de 2.

Isso nos leva ao código a seguir.

```python
def eh_potencia_de_dois(n):
    return n > 0 and (n & (n - 1)) == 0

# Exemplo de uso
print(eh_potencia_de_dois(16))  # Saída: True
print(eh_potencia_de_dois(17))  # Saída: False
```

### Questão 3

Repetidamente, faremos um AND do número com 1, `n & 1`, somando o resultado a um contador e deslocando os bits do número em uma posição pra direita, até que o número seja 0. Assim temos o código a seguir.

```python
def conta_bits_um(n):
    count = 0
    while n:
        count += n & 1
        n >>= 1
    return count

# Exemplo de uso
print(conta_bits_um(10))  # Saída: 2 (representação: 1010)
print(conta_bits_um(7))   # Saída: 3 (representação: 111)
```

### Questão 4

Caso o XOR dos dois valores (`r = a ^ b`) retorne um número negativo, isso significa que os valores possuiam sinais distintos. O bit mais significativo armazena o sinal e um 1 no bit mais significativo de `r` indicará que o bit do sinal era diferente em *a* e *b*. Temos, assim, a seguinte solução

```python
def tem_sinais_opostos(a, b):
    return (a ^ b) < 0

# Exemplo de uso
print(tem_sinais_opostos(5, -10))  # Saída: True
print(tem_sinais_opostos(5, 10))   # Saída: False
```

### Questão 5

Ao fazer um XOR entre o número e uma máscara onde apenas o k-ésimo bit será 1, teremos o bit naquela posição mudado no número.

```python
def trocar_kesimo(num, k):
    return num ^ (1 << (k - 1))

# Exemplo de uso
print(trocar_kesimo(5, 2))   # Saída: 7 (representação: 111)
print(trocar_kesimo(10, 4))  # Saída: 2 (representação: 10)
```