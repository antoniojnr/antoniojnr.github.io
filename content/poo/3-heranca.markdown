---
layout: default
title: Polimorfismo
nav_exclude: true
---

## 3. Herança

{: .no_toc }

Como já vimos, em programação orientada a objetos, o código é escrito em classes que são instanciadas como objetos. Às vezes, é interessante reusar métodos ou classes, ou ainda construir código que estenda um código existente. Uma das formas de estender o funcionamento de uma classe é através de **herança**.

Herança é um tipo de relacionamento entre classes que permite que código seja reusado. Nesse relacionamento, existem dois tipos de classes: a **classe mãe** ou **base** e a **classe filha**, que herda as propriedades da classe base. Ao herdar as propriedades da classe base, a classe filha também pode estendê-las.

Observe, no Código 1 a seguir, as classes `Veiculo`, `Aviao` e `Carro`. Observe a palavra especial `extends` na definição da classe `Carro`. A declaração `Carro extends Veiculo` significa que a classe `Carro` herda a classe `Veiculo`. Dessa forma, a classe `Veiculo` será a classe base e a classe `Carro` será a classe filha nesse relacionamento. A classe Veiculo compartilhará com `Carro` os seus métodos e atributos.

```javascript
class Veiculo {
  constructor(odo) {
    this.odometro = odo;
  }

  getOdometro() {
    return this.odometro;
  }
}

class Aviao {}

class Carro extends Veiculo {}

var car = new Carro();
var av1 = new Aviao();
console.log(car.getOdometro());
console.log(av1.getOdometro());
```

O método `getOdometro()` está disponível na classe `Carro`, mesmo sem esta implementar o método, porque `Carro` herda de `Veiculo`. Mas `Aviao` não herda e, por isso, não possui esse método.

Agora, vamos criar uma nova classe, `Motocicleta`. Esta classe herdará de `Veiculo` e, portanto, terá acesso ao método `getOdometro()` e atributos `odometro`. Além disso, vamos criar o atributo `airbagsDisparados` em `Carro`, que informa se os airbags do carro já foram disparados alguma vez. Se formos escrever algum código no construtor da classe `Carro`, precisaremos chamar também o construtor de sua classe base, `Veiculo`. Isso é feito através da chamada `super()`.

Nesse caso, estamos passando os valores `odo` (odômetro) e `airbags` (que indica se os airbags foram disparados) para o construtor de `Carro`. Usando `super()`, chamamos o construtor de `Veiculo`, passando o valor de `odo`. A chamada para `super()` deve ser a primeira do construtor. Depois do `super()`, podemos escrever o restante do código do construtor.

```javascript
class Veiculo {
  constructor() {
    this.odometro = 0;
  }

  getOdometro() {
    return this.odometro;
  }
}

class Aviao {}

class Carro extends Veiculo {
  constructor(odo, airbags) {
    super(odo);
    this.airbagsDisparados = airbags;
  }
}

class Motocicleta extends Veiculo {}
```

## 3.1. Exercícios

**Exercício 1.** Crie as classes `Pessoa`, `Estudante` e `Funcionario`. Siga os passos abaixo para completar esse exercício. Desenvolva qualquer código necessário para o código funcionar completamente.

1. `Estudante` e `Funcionario` devem herdar de `Pessoa`
2. `Pessoa` possui os atributos: `nome` e `endereco`.
3. `Estudante` possui os atributos: `curso` e `ano`.
4. `Funcionario` possui os atributos `funcao` e `salario`.
5. Desenvolva os construtores de `Pessoa`, `Estudante` e `Funcionario` de forma que qualquer uma das classes seja instanciada com todas as informações necessárias. Por exemplo, `Pessoa` só necessita de `nome` e `endereco` para ser instanciada. Mas `Estudante` necessita de `curso`, `ano`, além de `nome` e `endereco`, uma vez que é uma subclasse de `Pessoa`.

**Exercício 2.** Desenvolva o código para as classes mostradas na figura seguinte.

![Diagrama 1](/content/images/diag1.svg "Diagrama 1")

**Exercício 3.** Desenvolva o código para as classes mostradas na figura seguinte.
![Diagrama 2](/content/images/diag2.svg "Diagrama 2")

**Exercício 4.** Desenvolva o código para as classes mostradas na figura seguinte.
![Diagrama 3](/content/images/classe4.svg "Diagrama 3")
