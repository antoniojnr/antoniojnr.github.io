---
layout: default
title: POO - Polimorfismo
nav_exclude: true
---

## Polimorfismo

{: .no_toc }

Polimorfismo significa "muitas formas" e ocorre de múltiplas formas: _i._ quando uma única função pode ser aplicada a argumentos de diferentes tipos, situação conhecida como **sobrecarga** (ou _overloading_); ii. quando uma subclasse herda um método de uma superclasse, podendo modificá-lo ou manter seu comportamento, o que é conhecido como **sobreposição** (ou _overriding_), _iii._ quando uma variável polimórfica pode guardar valores de diferentes tipos, _iv._ quando um array é declarado como recipiente de valores da superclasse, mas, de fato, mantém valores de diferentes subclasses da superclasse, ou ainda **v.** quando temos diversas classes que são relacionadas uma à outra por herança.

Na sobrecarga, o nome do método é polimórfico. Há uma única função que recebe diferentes tipos de argumentos. O código a ser executado depende dos parâmetros. Sobrecarga é um exemplo de método de polimorfismo de tempo de compilação, porque os diferentes tipos de parâmetros são determinados ao escrever o código.

O tipo de polimorfismo implementado através da sobreposição é resolvido pela JVM, não pelo compilador. Por isso, esse tipo de polimorfismo é chamado de polimorfismo de tempo de execução.

Um método declarado como abstrato pode ser pensado como a definição de um método que é deferida. É especificado que na classe mãe, mas deve ser implementado na classe que a herda. Uma interface pode ser vista como uma forma de definir classes deferidas.

Como já especificado na parte [anterior](/content/poo/superior/conteudo/heranca.html), herança permite que uma classe herde atributos e métodos de outra classe. Polimorfismo usa esses métodos para executar tarefas diferentes. Através de polimorfismo, uma ação pode ser executada de múltiplas formas.

## Interfaces

Interfaces são bastante semelhante a classes, com um porém. Podem possuir constantes, métodos abstratos, métodos padrão, métodos estáticos e tipos aninhados. Há diversas situações em equipes de desenvolvimento em que é importante que grupos diferentes de programadores sigam um contrato que dita como seu código vai interagir. Cada grupo deve secrever seu código sem qualquer conhecimento sobre a forma como o código do outro grupo está sendo escrito. Interfaces são coleções de operações usadas para especificar o tal contrato que uma classe deve cumprir.

Uma das vantagens no uso de interface é a possibilidade de implementar _herança múltipla_, que permite que uma classe implemente várias interfaces diferentes. Dessa forma, uma classe pode herdar comportamentos (ou seja, assinaturas de métodos) de várias fontes diferentes, mas ainda herda a implementação apenas de uma única classe mãe.

A herança múltipla em Java não permite que uma classe herde a implementação real de múltiplas classes. Isso evita os problemas de ambiguidade que podem surgir na herança múltipla de classes, onde duas classes base podem ter implementações conflitantes para o mesmo método. Com interfaces, não há implementação real nos métodos da interface, apenas as assinaturas, então não há ambiguidade.

No exemplo a seguir, temos duas interfaces: `Animal` e `Mamifero`. As classes `Cachorro`, `Gato` e `Boi` implementam ambas as interfaces. Isso significa que as classes devem fornecer implementações para os métodos `emitirSom()` e `amamentar()` definidos nas interfaces `Animal` e `Mamifero`. As interfaces determinam o contrato que todas as classes que as implementarem devem seguir e as classes vão implementar os métodos à sua própria maneira.

```java
public interface Animal {
  void emitirSom();
}

public interface Mamifero {
    void amamentar();
}

public class Cachorro implements Animal, Mamifero {
  @Override
  void emitirSom() {
    System.out.println("*Late*");
  }

  @Override
  void amamentar() {
    System.out.println("A cadela amamenta seus filhotes");
  }
}

public class Gato implements Animal, Mamifero {
  @Override
  void emitirSom() {
    System.out.println("*Mia*");
  }

  @Override
  void amamentar() {
    System.out.println("A gata amamenta seus filhotes");
  }
}

public class Boi implements Animal, Mamifero {
  @Override
  void emitirSom() {
    System.out.println("*Muge*");
  }

  @Override
  void amamentar() {
    System.out.println("A vaca amamenta seus filhotes");
  }
}
```

A API Java possui um grande número de interfaces, entre elas:

Claro! Aqui estão cinco exemplos de interfaces na API Java e suas funções:

1. **`List` (java.util.List):** define uma lista ordenada de elementos, permitindo acesso e manipulação de elementos por índices. Implementações comuns incluem `ArrayList` e `LinkedList`. Essa interface oferece métodos para adicionar, remover, pesquisar e iterar sobre elementos da lista.
2. **`Set` (java.util.Set):** representa uma coleção de elementos únicos, sem duplicatas. Implementações comuns incluem `HashSet`, `LinkedHashSet` e `TreeSet`. Ela é usada para armazenar e recuperar elementos distintos.
3. **`Map` (java.util.Map):** representa um mapeamento de chaves para valores. Implementações comuns incluem `HashMap`, `LinkedHashMap`, e `TreeMap`. Ela permite associar valores (valores) a chaves únicas e recuperá-los rapidamente usando essas chaves.
4. **`Comparable` (java.lang.Comparable):** é usada para fornecer uma ordem natural aos objetos de uma classe. Ela define o método `compareTo()`, que permite que objetos sejam comparados entre si. Isso é útil para ordenação de objetos em coleções, como `TreeSet` e `Arrays.sort()`.
5. **`Iterable` (java.lang.Iterable):** é usada em Java para permitir que objetos sejam iterados por meio de loops, como `for-each`. Ela define o método iterator(), que retorna um objeto `Iterator` que permite percorrer os elementos de um conjunto de dados. Isso é comumente usado em coleções, como listas e conjuntos, para suportar iteração.

## Exercícios

### Exercício 1

Implemente a interface `Stack`, que define o contrato de uma estrutura de dados chamada **pilha**.

```java
public interface Stack {
  void push(String item);   // insere um item no topo
  String pop();             // remove um item do topo
  String peek();            // retorna um item do topo sem removê-lo
  boolean isEmpty();        // determina se a pilha está vazia
  boolean isFull();         // determina se a pilha está cheia
  String toString();        // retorna a representação da pilha em String
}
```

### Exercício 2

Faça a classe `Inventario` implementar a interface `Iterable`. Implemente seu próprio `Iterator`.
