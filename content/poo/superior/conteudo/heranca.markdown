---
layout: default
title: Polimorfismo
nav_exclude: true
---

# Herança

Como já vimos, em programação orientada a objetos, o código é escrito em classes que são instanciadas como objetos. Às vezes, é interessante reusar métodos ou classes, ou ainda construir código que estenda um código existente. Uma das formas de estender o funcionamento de uma classe é através de **herança**.

Herança é um tipo de relacionamento entre classes que permite que código seja reusado. Nesse relacionamento, é criado uma hierarquia entre classes, em que uma classe **herda de** outra. Existem dois tipos de classes nesse relacionamento: a **superclasse**, **classe mãe** ou **base** e a **subclasse** ou **classe filha**, que herda os atributos e métodos da classe base. Ao herdar as propriedades e métodos da classe base, a classe filha também pode estendê-los.

Em Java, herança é **transitiva** — se `Faca` estende `Arma` e `Arma` estende `Item`, então `Arma` também estende `Item`. `Item` será a superclasse para `Arma` e `Faca`. Herança é amplamente usada em aplicações Java. Por exemplo, para criar uma exceção específica para determinados problemas, é preciso estender a classe `Exception`, como é o caso de `NullPointerException`. De forma similar, toda classe criada em Java implicitamente estende a classe `Object`

Observe, no Código 1 a seguir, as classes `Item`, `Arma` e `Escudo`. Observe a palavra especial `extends` na definição das classes `Arma` e `Escudo`. A declaração `Arma extends Item` significa que a classe `Arma` herda da classe `Item`. Dessa forma, a classe `Item` será a classe base e as classes `Arma` e `Escudo` serão as classes filhas nesse relacionamento. A classe `Item` compartilhará com as classes `Arma` e `Escudo` os seus métodos e atributos.

```java
// Início - Classe Item
public class Item {
    private String nome;
    private int pontos;

    public Item(String nome, int pontos) {
        this.nome = nome;
        this.pontos = pontos;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getPontos() {
        return pontos;
    }

    public void setPontos(int pontos) {
        this.pontos = pontos;
    }
}
// Fim - Classe Item

// Início - Classe Arma
public class Arma extends Item {

    public Arma(String nome, int dano) {
        super(nome, dano);
    }

    public int getDano() {
        return getPontos();
    }

    public void setDano(int dano) {
        setPontos(dano);
    }
}
// Fim - Classe Arma

// Início - Classe Escudo
public class Escudo extends Item {

    public Escudo(String nome, int dano) {
        super(nome, dano);
    }

    public int getProtecao() {
        return getPontos();
    }

    public void setProtecao(int protecao) {
        setPontos(protecao);
    }
}
// Fim - Classe Escudo
```

Os métodos `getNome`, `setNome`, `getPontos` e `setPontos` estão disponíveis nas classes `Arma` e `Escudo`, mesmo sem estas implementarem os métodos, porque `Arma` e `Escudo` herdam de `Veiculo`.

Perceba como os métodos `getPontos` e `setPontos` foram reaproveitados na implementação dos métodos `getDano`, `setDano`, `getProtecao` e `setProtecao`.

No código a seguir, é demonstrado o uso das classes `Arma` e `Escudo`. O método `getNome` está presente nos dois objetos, mas em cada objeto, os métodos `getPontos` e `setPontos` foram usados de forma diferente.

```java
public class Main {
    public static void main(String[] args) {
        Arma faca = new Arma("Faca", 20);
        Escudo escudo = new Escudo("Escudo de madeira", 40);

        System.out.printf("%s possui %d pontos de dano%n", faca.getNome(), faca.getDano());
        System.out.printf("%s possui %d pontos de defesa%n", escudo.getNome(), escudo.getDefesa());
    }
}
```

A saída do código anterior é a seguinte.

```
Faca possui 20 pontos de dano
Escudo de madeira possui 40 pontos de defesa
```

O maior benefício do uso de herança é o reúso de código, porque subclasses herdam as variáveis e métodos da superclasse. Entretanto, membros privados da superclasse não são diretamente acessíveis para a subclasse (veja mais sobre [visibilidade](/content/poo/superior/conteudo/encapsulamento.html#visibilidade)).

Os construtores da superclasse não são herdados pela subclasse. Se a superclasse não possui um construtor padrão (sem argumentos), então a subclasse também precisa ter um construtor explícito definido. Caso contrário, uma exceção será lançada em tempo de compilação. No caso de a superclasse não ter um construtor padrão, o construtor da superclasse deve ser obrigatoriamente chamado usando `super()`, da forma que foi feito em `Arma` e `Escudo`. Esse deve ser o primeiro comando no construtor da subclasse.

Apesar de a herança em Java ser transitiva, uma subclasse somente pode estender uma classe.

Podemos criar uma instância de uma subclasse e, então, atribui-la a uma variável do tipo da superclasse. Isso é chamado de _upcasting_. Um exemplo de _upcasting_ é mostrado a seguir.

```java
Arma faca = new Arma("Faca", 20);
Item item = faca; // upcasting - até aqui tudo bem, Arma é um Item
```

_Downcasting_, é quando uma instância de uma superclasse é atribuída a uma variável do tipo da subclasse. Nesse caso, precisamos explicitamente fazer o cast para a subclasse. Um exemplo é dado no código a seguir.

```java
Arma faca = new Arma("Faca", 20);
Item item = faca;
Arma faca1 = (Arma) item; // casting explícito - funciona porque item é do tipo Arma
```

Devido ao _casting_ explícito, o compilador não irá reclamar se fizermos o _casting_ errado. Nesse caso, uma `ClassCastException` será lançada em tempo de execução. A seguir está um exemplo de código em que isso acontece.

```java
Arma faca = new Arma("Faca", 20);
Item item = faca;
Escudo escudo = (Escudo) item; // ClassCastException em tempo de execução

Item item = new Item("Item", 0);
Escudo escudo = (Escudo) item; // ClassCastException porque o tipo de item é Item em tempo de execução
```

Podemos sobrescrever métodos da superclasse na subclasse. Entretanto, devemos sempre anotar métodos sobrescritos com a anotação `@Override`. Assim, o compilador saberá que estamos sobrescrevendo um método e se algo mudar no método da superclasse, veremos o problema em tempo de compilação e não em tempo de execução.

Além dos construtores, também podemos chamar os métodos da superclasse ou acessar variáveis da superclasse usando a palavra `super`. Isso é útil quando temos a mesma variável ou método na subclasse, mas queremos acessar a variável ou método da superclasse.

A instrução `instanceof` é usada para verificar herança entre objetos. Veja os exemplos do código a seguir.

```java
Arma faca = new Arma("Faca", 20);
Escudo escudo = new Escudo("Escudo de madeira", 40);
Item i = faca;

System.out.println(faca instanceof Arma); // imprime true
System.out.println(i instanceof Escudo); // imprime false, i é do tipo Arma em tempo de execução
System.out.println(faca instanceof Item); // imprime true, faca também é um Item
System.out.println(i instanceof Arma); // imprime true, i é do tipo Arma em tempo de execução
```

Classes marcadas com `final` não podem ser estendidas em Java. Se a superclasse não vai ser usada no código, isto é, se ela é só uma base para manter o código reusável, o melhor é mantê-la como **abstrata** para evitar instanciações desnecessárias e restringir a criação de instâncias da classe base.

## Classes abstratas

Classes abstratas não podem ser instanciadas e são tipicamente usadas para prover um código base que as subclasses podem estender e implementar os métodos abstratos e sobrescrever ou usar os métodos implementados na classe abstrata. A palavra `abstract` é usada para criar classes e métodos abstratos.

**Métodos abstratos** são métodos sem implementação na superclasse, que devem possuir obrigatoriamente uma implementação na subclasse. **Métodos concretos** possuem implementação completa e provêm comportamento padrão que pode ser sobrescrito por subclasses, caso necessário. O exemplo a seguir inclui uma classe abstrata `Forma` e uma classe concreta `Circulo` que herda de `Forma`.

```java
// Início - Classe Forma
public abstract class Forma {
    // Método abstrato (sem implementação)
    abstract double calcularArea();

    abstract String getNome();

    // Método concreto
    public void mostrar() {
        System.out.printf("Este é um %s", getNome());
    }
}
// Fim - Classe Forma

// Início - Classe Circulo
public class Circulo extends Forma {
    private double raio;

    public Circulo(double raio) {
        this.raio = raio;
    }

    @Override
    double calcularArea() {
        return Math.PI * raio * raio;
    }

    @Override
    String getNome() {
        return "Círculo";
    }
}
// Fim - Classe Circulo
```

Nesse exemplo, `Forma` é uma classe abstrata que define um método abstrato `calcularArea()` e um método concreto `mostrar()`. Subclasses de `Forma` (por exemplo, `Circulo`) devem prover implementações para `calcularArea()` e também herdam o método `mostrar()`.
