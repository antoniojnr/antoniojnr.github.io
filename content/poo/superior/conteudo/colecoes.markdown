---
layout: default
title: POO - Coleções
nav_exclude: true
---

# Coleções

Java inclui uma arquitetura unificada para representar e manipular coleções, permitindo que sejam manipuladas independentemente dos detalhes de sua representação. Uma coleção é um objeto que representa um grupo de objetos em uma única unidade (como listas, em outras linguagens de programação).

O _Java Collections Framework_ permite a interoperabilidade entre APIs não relacionadas, reduz o esforço no design e aprendizado de novas APIs e promove a reutilização de software. O framework é baseado em mais de uma dúzia de interfaces de coleção e inclui implementações dessas interfaces com os algoritmos para manipulá-las.

Na Figura 1, é mostrada a hierarquia de interfaces e classes da Java Collections Framework, derivadas da interface Collection. O diagrama usa a notação UML, onde as linhas cheias representam `extends` e as linhas pontilhadas representam `implements`.

![**Figura 1.** Hierarquia de interfaces e classes do Collections Framework.](https://upload.wikimedia.org/wikipedia/commons/a/ab/Java.util.Collection_hierarchy.svg)

**Figura 1.** Hierarquia de interfaces e classes do Collections Framework.

Coleções são usadas para armazenar, recuperar e manipular dados agregados. Geralmente, representam dados que formam um grupo natural, como disciplinas de um estudante ou contatos em uma agenda.

Assim como qualquer outro framework de coleções, o de Java contém os seguintes:

- **Interfaces:** Tipos abstratos de dados que representam coleções, como conjuntos, listas e mapas. Essas interfaces formam a base do framework e permitem que coleções sejam manipuladas independentemente dos detalhes de sua representação.
- **Implementações:** São implementações das interfaces de coleções. Em essência, são estruturas de dados reutilizáveis. Na Figura 1, todos os itens marcados com um retângulo roxo são implementações.
- **Algoritmos:** São métodos que executam operações importantes, como busca e ordenação. Os algoritmos são polimórficos: ou seja, o mesmo método pode ser usado em várias diferentes implementações da interface apropriada.
