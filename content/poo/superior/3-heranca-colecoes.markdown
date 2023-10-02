---
layout: default
title: Exercícios - Herança e coleções
nav_exclude: true
---

## Exercícios

**Tema:** Herança e coleções

### Exercício 1

Crie a seguinte hierarquia de classes, que representa o modelo de armas de um jogo e como estas são estruturadas.

![Diagrama de classes](/content/images/arma.svg)

- `Arma` é uma classe abstrata que reune atributos e métodos comuns a todas as armas.
  - O construtor `Arma(String, int)` recebe o nome da arma do tipo `String` e a quantidade de dano máxima causada pela arma do tipo `int`, respectivamente.
  - O método `disparar()` é **abstrato** e retorna um `int`, que é a quantidade de dano causado pela arma. A quantidade de dano causado deverá sempre ser obtida a partir deste método, pois alguns tipos de armas podem causar menos dano que o dano máximo.
- `ArmaLancavel` é um tipo de arma que pode ser lançada, como uma lança ou uma _shuriken_.
  - Existe a chance menor que 100% de essa arma acertar o oponente e, por isso, o método `disparar()` nessa classe deve ser implementado para que o acerto seja probabilistico.
  - O construtor `ArmaLancavel(String, int, int)` recebe o nome da arma do tipo `String`, a quantidade de dano máxima causada pela arma do tipo `int` e a chance de acerto, um **número** `int` tal que 0 <= **número** <= 100, respectivamente.
  - Use a classe `java.util.Random` para gerar números aleatórios e simular eventos probabilisticos. Você deve deixar a instância de `Random` da classe acessíveis através de getter e setter, como especificado no diagrama, para que seja possível testar seu código.
- `ArmaRecarregavel` é um tipo de arma lançável que dispara projéteis, como um arco-e-flecha ou um revólver.
  - O construtor `ArmaRecarregavel(String, int, int, int)` recebe o nome da arma do tipo `String`, a quantidade de dano máxima causada pela arma do tipo `int`, a chance de acerto um **número** `int` tal que 0 <= **número** <= 100 e quantidade inicial de projéteis, do tipo `int`.
  - A cada disparo, o número de projéteis é reduzido em 1.
  - O método `disparar()` deve ser implementado assim como na classe `ArmaLancavel` e, além disso, deve retornar 0 caso o número de projéteis seja 0.

### Exercício 2

As classes a seguir representam parte de um sistema de mercado.

![Diagrama de classes](/content/images/compra.svg)

- `Produto` um código (`int`) que deve ser único entre outros produtos, um nome (`String`) e uma unidade (`String`), que representa a forma como o produto é vendido (`"un"`, para unidade, `"kg"` para quilo).
  - O preço é encapsulado pelos _getter_ e _setter_, que devem retornar e receber `double`, respectivamente, mas provavelmente precisará ser representado internamente de outra forma.
- `Item` representa uma determinada quantidade (`double`) de um produto.
  - O valor de um item é obtido pela multiplicação da quantidade pelo valor do produto.
- `Compra` representa uma lista de `itens` comprados por um cliente.
  - O construtor de `Compra` é vazio.
  - `Compra` possui uma lista de itens (`Item`), que podem ser adicionados através do método `adicionarItem(Produto, double)`, que recebe um produto e uma quantidade (`double`).
  - Não existirão dois itens na lista com códigos iguais.
  - Itens são removidos através do método `removerItem(int)`, para o qual é passado o código do produto a ser removido.
  - `getItem(int)` recebe o índice na lista de um determinado item e retorna esse item.
  - `contaritens()` conta a quantidade de itens na lista. Produtos cuja unidade é 'kg' sempre são contados como 1, independentemente da quantidade; mas se a unidade do produto for 'un', o valor da quantidade é o retornado por `getQuantidade()`.
  - O valor total da compra é a soma do valor de todos os itens.
