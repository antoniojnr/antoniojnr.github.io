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
  constructor() {
    this.odometro = 0
  }

  getOdometro() {
    return this.odometro
  }
}

class Aviao {

}

class Carro extends Veiculo {

}

var car = new Carro();
var av1 = new Aviao();
console.log(car.getOdometro());
console.log(av1.getOdometro());
```

