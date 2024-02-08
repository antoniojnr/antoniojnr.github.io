---
layout: default
title: Exercícios - Encapsulamento, parte 1
nav_exclude: true
---

## Exercícios

**Tema:** Encapsulamento

### Exercício 1

Crie a classe `Circulo`, contendo os seguintes métodos:

- `float getRaio()`, que retorna o raio do círculo;
- `void setRaio(float raio)`, que redefine o raio do círculo;
- `float getArea()`, que retorna o valor da área do círculo;
- `float getCircunferencia()`, que retorna o valor da circunferência do círculo.

Atenção

1. A classe deve possuir o construtor `Circulo(float raio)`;
2. Você pode assumir que o valor de PI é `3.14159`;
3. Não será testado nenhum caso com valores inválidos atribuídos a raio através do método _setter_.

### Exercício 2

Crie a classe `Estudante` com os atributos `int matricula` e `String nome` e seus respectivos _getters_ e _setters_. Crie um construtor `Estudante(int matricula, String nome, int ano, int mes, int dia)`, onde `ano`, `mes` e `dia` representam a data de nascimento do estudante. Além disso, crie o método `getIdade()`, que retorna a idade em anos do usuário, com base na data de nascimento.

### Exercício 3

Crie a classe `RelogioDigital`, contendo os seguintes atributos:

- `int hora`
- `int minuto`

Além disso:

1. A classe deve possuir apenas o construtor padrão `RelogioDigital()` que inicializa `hora = 12` e `minuto = 20`
2. Sua classe deve possuir os _getters_ e _setters_ para hora e minuto e, além disso, o método `tick()`,
   que avança o tempo atual em 1 minuto;
3. Atente para a situação em que o avanço de 1 minuto também ocasiona o avanço da hora. Por exemplo:

- 04:59 -> `tick()` -> 05:00
- 23:59 -> `tick()` -> 00:00

4. Não será testado nenhum caso com valores inválidos atribuídos a hora e minutos através dos métodos _setters_.

### Exercício 4

Crie a classe `CarroAluguel` com o construtor `CarroAluguel(float valorPorKm)`, onde o parâmetro `valorPorKm` define o valor cobrado por km.

A classe possui os seguintes métodos:

- `void setValorPorKm(float valor)`, que define o valor cobrado por km.
- `float getValorPorKm()`, que retorna o valor cobrado por km.
- `void setDistanciaPercorrida(int distancia)`, que define a distância percorrida pelo carro;
- `float getDistanciaPercorrida()`, que retorna a distância percorrida.
- `void alugar()`, que muda o estado de um carro de "disponivel" para "indisponível".
  - Um carro "indisponível" não pode ser alugado e, nesse caso, seu status de _indisponível_ não muda e nenhum erro ocorre.
- `void devolver()`, que devolve um carro alugado, tornando-o disponível novamente.
  - Um carro "disponível" não pode ser devolvido e, caso o usuário tente devolver um carro disponível, nada acontece.
  - Após ser devolvido, um carro não deve ter sinistro e deve ter sua distância percorrida zerada.
  - Antes de ser devolvido, o carro precisa ter seus débitos zerados. Caso não tenha, o status de devolução não muda.
- `boolean isDisponivel()`, que retorna o estado do carro: `true`, quando disponível e `false`, quando indisponível.
- `boolean hasSinistro()`, que retorna `true`, quando houve sinistro e o seguro precisa ser acionado e `false`, caso contrário.
- `boolean setSinistro(boolean sinistro)`, que define o estado do sinistro.
- `float getDebito()`, que retorna o valor a ser pago pelo aluguel do carro.
  - O valor é calculado multiplicando o `valorPorKm * distanciaPercorrida`. Se há sinistro, soma-se mais 60% do débito ao valor total.
  - Um carro que não teve distância percorrida, mas teve sinistro, precisará pagar multa de R$1600,00.
  - Após pago, não haverá mais sinistro no carro.
- `void pagar()`, que paga (zera) o valor devido pelo aluguel.
  - Um carro que não teve distância percorrida não terá débitos, a menos que tenha sinistro.
  - Um carro disponível não pode ser pago. Caso o usuário tente pagar um carro disponível, nada acontece.

Atenção:

1. Outros getters e setters não serão testados.
2. Um objeto `CarroAluguel` recém instanciado está disponível, tem R$0 de débito e não tem sinistro.

### Exercício 5

O diagrama a seguir representa uma composição, onde `Linha` possui dois `Ponto`s. Desenvolva o código para as classes mostradas.

![Diagrama 4](/content/images/class-linha-ponto.svg "Diagrama 4")

### Exercício 6

Crie a classe `Recibo`, que representa a fatura de um item vendido. Um `Recibo` deve incluir quatro variáveis de instância com as informações: (i) o código do item (String), (ii) a descrição (String), (iii) a quantidade comprada de um item (int) e (iv) o preço por item (double).

Inclua um construtor que inicializa as quatro variáveis de instância. Forneça métodos _getter_ e _setter_ para as variáveis de instância e um método `getTotal` que calcula o valor do recibo (isto é, multiplica a quantidade pelo preço por item) e depois retorna esse valor como `double`. Se a quantidade não for positiva, assuma que ela é 0. Se o preço por item não for positivo, assuma que ele é 0.0.
