---
layout: default
title: Polimorfismo
nav_exclude: true
---
## 4. Polimorfismo
{: .no_toc }

Polimorfismo significa "muitas formas" e ocorre quando tempos muitas classes que são relacionadas uma à outra por herança. No nosso cotidiano, utilizamos o conceito de classes e subclasses para criar classificações. Temos, por exemplo, a classe dos animais, que é dividida em mamíferos, moluscos, insetos, anfíbios, etc. E, também, a classe de funcionários de uma instituição, pode ser dividida em diretor, coordenador, pessoal administrativo e pessoal técnico. Todos aqueles integrantes de uma classe compartilham características em comum. Por exemplo, integrantes da classe dos animais não conseguem produzir seu próprio alimento e possuem organismo formado por múltiplas células.

Como já especificado na parte [anterior](/content/poo/3-heranca.html), herança permite que uma classe herde atributos e métodos de outra classe. Polimorfismo usa esses métodos para executar tarefas diferentes. Através de polimorfismo, uma ação pode ser executada de múltiplas formas.

Considere a classe `Animal` e as seguintes subclasses: `Cachorro`, `Gato` e `Boi`. `Animal` tem um método `emitirSom()`, que emite um som genérico e as outras classes, cada uma implementa `emitirSom()` da sua própria maneira.

```javascript
class Animal {
  emitirSom() {
    console.log('Emite som...')
  }
}

class Cachorro extends Animal {
  emitirSom() {
    console.log('*Late*')
  }
}

class Gato extends Animal {
  emitirSom() {
    console.log('*Mia*')
  }
}

class Boi extends Animal {
  emitirSom() {
    console.log('*Muge*')
  }
}
```

Polimorfismo permite que objetos que compartilham a mesma superclasse, direta ou indiretamente, sejam tratados como se fossem daquela superclasse. Por exemplo, `Cachorro`, `Gato` e `Boi` serão tratados como `Animal`, uma vez que possuem os métodos desta classe.

## 4.1. Exercícios

**Exercício 1** Considere o exercício da parte 3, em que você precisou definir as classes `Conta`, `ContaCorrente` e `ContaPoupanca`. Neste exercício, você fará as seguintes modificações:
1. Crie os métodos `getTarifas()` e `setTarifas(tarifas)`. Tarifa é o valor cobrado para manutenção da conta.
2. Crie o método `getLimite()` que define o limite de saque em reais que um usuário pode fazer. O método `getLimite()` será usado no método sacar para validação.
3. Crie as classes definidas no diagrama a seguir.

![Diagrama 1](/content/images/diag3.svg "Diagrama 1")

## 4.2. Referências

1. FILHO, Antonio Mendes da Silva. Introdução à programação orientada a objetos com C++. Brazil, Elsevier, 2010.
2. JOSEPH, Frank. Understanding Java Inheritance and Polymorphism. <https://www.section.io/engineering-education/understanding-java-inheritance-and-polymorphism/> Acesso em 11 de abril de 2022.