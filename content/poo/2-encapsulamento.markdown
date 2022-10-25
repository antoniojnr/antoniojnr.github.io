---
layout: default
title: Encapsulamento
nav_exclude: true
---

## 2. Encapsulamento

{: .no_toc }

Em linguagens de programação orientadas a objetos, **encapsulamento** é o empacotamento de dados em uma única unidade, junto com os métodos que operam nestes dados. Essas unidades de dados e métodos são representadas por **classes** na maioria das linguagens de programação. Ao encapsular dados, também restringe-se alguns atributos e métodos de uma classe, de forma que usuários – programadores, neste caso – não possam acessar todos os elementos da classe.

Usar encapsulamento ao programar traz uma série de benefícios:

- **Reúso:** é fácil mudar a implementação e adaptá-la a novos requisitos. Uma vez que a implementação fica escondida e o usuário somente tem acesso aos métodos expostos, é mais simples disponibilizar a classe sem se preocupar sobre o impacto de mudanças em código já existente.
- **Flexibilidade:** dados podem facilmente ser definidos como somente leitura ou somente escrita, ao disponibilizar somente métodos de leitura (**getters**) ou escrita (**setters**).
- **Ocultação de informação:** usuários não saberão detalhes sobre a implementação das classes. Todo seu conhecimento estará restrito aos métodos e atributos expostos.

O Código 1 contém a classe `Televisao`, que encapsula o funcionamento de uma televisão hipotética, que pode ser ligada, desligada e ter seu volume alterado. Os métodos expostos da classe são `setLigado(ligado)`, que permite definir se a televisão está ligada ou desligada, `isLigado()`, que retorna se a televisão está ligada ou desligada, `setVolume(novoValor)`, que permite definir o volume da televisão e `getVolume()`, que retorna o valor do volume atual da televisão.

Perceba que, no método `setVolume(novoValor)`, somente é permitido alterar o valor do volume se a televisão estiver ligada e este valor deve ser entre 0 e 100. Uma vez que a implementação está encapsulada na classe, um usuário desta somente terá conhecimento do método `setVolume(novoValor)` e que deve ser passado um valor como parâmetro.

**Código 1.** Classe `Televisao`.

```javascript
class Televisao {
  constructor() {
    this.ligado = false;
    this.volume = 0;
  }

  setLigado(ligado) {
    this.ligado = ligado;
  }

  isLigado() {
    return this.ligado;
  }

  setVolume(novoValor) {
    if (this.ligado === false) {
      throw new Error("Impossível alterar volume com televisão desligada.");
    }

    if (novoValor >= 0 && novoValor <= 100) {
      this.volume = novoValor;
    } else {
      throw new Error("Valor inválido para volume: " + novoValor);
    }
  }

  getVolume() {
    return this.volume;
  }
}
```

Na [Parte 1](/content/poo/1-introducao.html), eu falei sobre os métodos `get` e `set`, que servem para impedir o acesso direto a atributos, o que evita que estados inconsistentes destes sejam acessados.

Um estado inconsistente seria um valor de um atributo que não passou por validação, por exemplo. Imagine um atributo chamado `anoDeNascimento` que guarda o ano de nascimento de uma pessoa para calcular sua idade. Uma validação simples para esse valor seria verificar que ele é maior que 0 e menor ou igual ao ano atual. Assim, no Código 2 temos a implementação dos métodos `getAnoDeNascimento` e `setAnoDeNascimento`. A validação é feita no `set` e o valor validado sempre poderá sempre ser acessado pelo `get`.

**Código 2.** Métodos `getAnoDeNascimento` e `setAnoDeNascimento`.

```javascript
setAnoDeNascimento(ano) {
  var anoAtual = (new Date()).getFullYear()

  if (ano <= 0 || ano > anoAtual) {
    throw new Error(`Valor inválido para ano: ${ano}`)
  }

  this.anoDeNascimento = ano
}

getAnoDeNascimento() {
  return this.anoDeNascimento
}
```

Permitir o acesso direto ao atributo `anoDeNascimento` abre a possibilidade de atribuição de um valor inválido a esta, como um valor negativo ou maior que o ano atual, tornando seu **estado inconsistente**.

Para impedir o acesso direto a atributos ou métodos, podemos torná-los privados. Para isso, basta declarar o atributo ou criar o método com `#` antes do nome. Considere a classe `Pessoa` no Código 3. Antes de usar o atributo privado `#anoDeNascimento`, precisamos declará-lo (linha 2) para, só depois, acessá-lo usando `this.#anoDeNascimento`. Caso deseje **declarar** e **inicializar** um atributo, basta fazer como foi feito para o atributo `#anoAtual`.

**Código 3.** Atributos privados na classe `Pessoa`.

```javascript
class Pessoa {
  #anoDeNascimento;
  #anoAtual = 2022;
  constructor(ano) {
    this.setAnoDeNascimento(ano);
  }

  setAnoDeNascimento(ano) {
    if (ano <= 0 || ano > this.#anoAtual) {
      throw new Error(`Valor inválido para ano: ${ano}`);
    }

    this.#anoDeNascimento = ano;
  }

  getAnoDeNascimento() {
    return this.#anoDeNascimento;
  }
}
```

Ainda há outra forma de proteger o código contra acesso a valores inconsistentes de propriedades: _getters_ e _setters_. Um _getter_ cria uma propriedade que tem o seu valor calculado somente quando é chamada e um _setter_ executa uma função antes de atribuir um valor a uma propriedade. A função do setter deve receber exatamente um atributo.

_Getters_ e _setters_ são como propriedades virtuais que podem ter seu valor acessado através do _getter_ e atribuído através do _setter_. Um _getter_ pode ser declarado independentemente de um _setter_ e vice-versa. Não é necessário declarar os dois de uma vez.

Para exemplificar a criação de _getters_ e _setters_, vamos criar, no Código 4, um _getter_ que retorna a idade da pessoa (já que temos seu ano de nascimento) e um _setter_ que modificará sua idade (na verdade, modificará o ano de nascimento, para que este reflita a idade atribuída).

**Código 4.** _Getter_ e _setter_ para `idade` classe `Pessoa`.

```javascript
class Pessoa {
  #anoDeNascimento;
  #anoAtual = 2022;
  constructor(ano) {
    this.setAnoDeNascimento(ano);
  }

  get idade() {
    return this.#anoAtual - this.#anoDeNascimento;
  }

  set idade(valor) {
    this.#anoDeNascimento = this.#anoAtual - valor;
  }

  setAnoDeNascimento(ano) {
    if (ano <= 0 || ano > this.#anoAtual) {
      throw new Error(`Valor inválido para ano: ${ano}`);
    }

    this.#anoDeNascimento = ano;
  }

  getAnoDeNascimento() {
    return this.#anoDeNascimento;
  }
}
```

Agora, no Código 5, acessamos ou modificamos o atributo `idade` como faríamos com um atributo normal.

**Código 5.** Exemplo de uso do _getter_ e _setter_ para `idade` classe `Pessoa`.

```javascript
let p = new Pessoa(1990);
console.log(p.idade); // imprime 32 - ano atual sendo 2022
console.log(p.getAnoDeNascimento()); // imprime 1990
p.idade = 20;
console.log(p.getAnoDeNascimento()); // imprime 2002
```

## 2.1. Exercícios

**Exercício 1.** Desenvolva o código para a classe mostrada na figura seguinte.

![Diagrama 1](/content/images/classe6.svg "Diagrama 1")

## 2.2. Referências

1. WIKIPÉDIA. Programação orientada a objetos - Encapsulamento. <https://pt.wikipedia.org/wiki/Programação_orientada_a_objetos> Acesso em 30 de março de 2022.
2. FILHO, Antonio Mendes da Silva. Introdução à programação orientada a objetos com C++. Brazil, Elsevier, 2010.
3. JANSSEN, Thorben. OOP Concept for Beginners: What is Encapsulation. <https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/> Acesso em 30 de março de 2022.
