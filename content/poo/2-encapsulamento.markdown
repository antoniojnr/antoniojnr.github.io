---
layout: default
title: Encapsulamento
nav_exclude: true
---
## 1. Introdução
{: .no_toc }

What does encapsulation mean: In object-oriented computer programming (OOP) languages, the notion of encapsulation (or OOP Encapsulation) refers to the bundling of data, along with the methods that operate on that data, into a single unit. Many programming languages use encapsulation frequently in the form of classes. A class is a program-code-template that allows developers to create an object that has both variables (data) and behaviors (functions or methods). A class is an example of encapsulation in computer science in that it consists of data and methods that have been bundled into a single unit.

Encapsulation may also refer to a mechanism of restricting the direct access to some components of an object, such that users cannot access state values for all of the variables of a particular object. Encapsulation can be used to hide both data members and data functions or methods associated with an instantiated class or object.

Benefits of Encapsulation Programming

Encapsulation in programming has a few key benefits. These include:

Hiding Data: Users will have no idea how classes are being implemented or stored. All that users will know is that values are being passed and initialized.
More Flexibility: Enables you to set variables as red or write-only. Examples include: setName(), setAge() or to set variables as write-only then you only need to omit the get methods like getName(), getAge() etc. 
Easy to Reuse: With encapsulation it's easy to change and adapt to new requirements. 
Encapsulation in Java

Object oriented programming is one of the key pillars of Java. The concepts here refer to object oriented programming as a whole and Java development. To be come a Java developer it is essential to understand the concepts of encapsulation, inheritance, abstraction, and polymorphism.

JANSSEN 

By definition, encapsulation describes the idea of bundling data and methods that work on that data within one unit, like a class in Java. This concept is also often used to hide the internal representation, or state of an object from the outside. This is called information hiding.

The general idea of this mechanism is simple. For example, you have an attribute that is not visible from the outside of an object. You bundle it with methods that provide read or write access. Encapsulation allows you to hide specific information and control access to the internal state of the object.

wikipedia 

Encapsulamento é um conceito de programação orientada a objetos que liga os atributos e métodos,sem que haja interferência direta entre eles. Isto é, uma classe pode utilizar recursos de outra classe sem a necessidade de conhecer o código fonte destes recursos, mesmo reimplementando-os. As entradas, os processamentos e as saídas de um objeto não influenciam os dos outros, pois os seus relacionamentos são apenas referenciados.

Livro

Em linguagens de POO, os dados e funções são encapsulados em uma única entidade – o objeto. O encapsulamento de dados e a ocultação de dados (ou data hiding) são as- pectos importantes na descrição de linguagens orientada a objetos. O que isso implica?
Considere a situação em que você quer modificar o(s) dado(s) de um objeto; é preciso saber exatamente quais funções interagem com esse objeto (isto é, as funções-membros do objeto). Outras funções não podem ter acesso ao(s) dado(s). Isso evita alterações indevidas, além de simplificar a elaboração, a depuração e a manutenção do programa.
Tipicamente, um programa C++ consiste em muitos objetos, os quais se co- municam entre si através da chamada às funções-membros do(s) outro(s) objeto(s). Aqui, chamar a função-membro de um objeto pode ser entendido como enviar uma mensagem para o objeto. A Figura 1.4 mostra a organização de um programa C++.

## Referências

1. WIKIPÉDIA. Programação orientada a objetos - Encapsulamento. <https://pt.wikipedia.org/wiki/Programação_orientada_a_objetos> Acesso em 30 de março de 2022.
2. FILHO, Antonio Mendes da Silva. Introdução à programação orientada a objetos com C++. Brazil, Elsevier, 2010.
3. JANSSEN, Thorben. OOP Concept for Beginners: What is Encapsulation. <https://stackify.com/oop-concept-for-beginners-what-is-encapsulation/> Acesso em 30 de março de 2022.