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
    this.ligado = false
    this.volume = 0
  }

  setLigado(ligado) {
    this.ligado = ligado
  }

  isLigado() { 
    return this.ligado
  }

  setVolume(novoValor) {
    if (this.ligado === false) {
      throw new Error("Impossível alterar volume com televisão desligada.");
    }

    if (novoValor >= 0 && novoValor <= 100) {
      this.volume = novoValor
    } else {
      throw new Error("Valor inválido para volume: " + novoValor);
    }
  }

  getVolume() {
    return this.volume
  }
}
```


## 2.1. Referências

1. WIKIPÉDIA. Programação orientada a objetos - Encapsulamento. <https://pt.wikipedia.org/wiki/Programação_orientada_a_objetos> Acesso em 30 de março de 2022.
2. FILHO, Antonio Mendes da Silva. Introdução à programação orientada a objetos com C++. Brazil, Elsevier, 2010.
3. JANSSEN, Thorben. OOP Concept for Beginners: What is Encapsulation. <https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/> Acesso em 30 de março de 2022.