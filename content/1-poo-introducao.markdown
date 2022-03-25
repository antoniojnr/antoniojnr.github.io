---
layout: default
title: Introdução
nav_exclude: true
---
## Introdução
{: .no_toc }

Provavelmente, o paradigma de programação utilizado e aprendido no curso por você até o momento foi o de **programação imperativa**. Um paradigma de programação não é uma linguagem de programação, mas sim um estilo ou metodologia para solucionar problemas utilizando uma linguagem de programação. O paradigma imperativo consiste de comandos que o computador executará para cumprir uma tarefa. Normalmente, os problemas computacionais que você resolvia envolviam a leitura de dados a partir da entrada padrão, um simples processamento e a emissão do resultado na saída padrão.

Conforme você aprendeu novos recursos de programação, pode ter percebido que códigos mais extensos eram menos compreensíveis e gerenciáveis. A partir desse ponto, surge a necessidade de uma metodologia – ou paradigma – de programação que permita dividir o programa em partes menos complexas para formar uma parte maior e mais complexa.

## Programação Orientada a Objetos

A programação orientada a objetos surgiu para suprir limitações existentes em outros paradigmas que a precederam. Em programas complexos, o número de instruções é enorme e, conforme cresce o número de instruções, também cresce a complexidade, a possibilidade de aparecerem erros e a necessidade de otimizar o uso de recursos computacionais (memória e CPU).

Através da orientação a objetos, temos uma ferramenta que nos permite representar computacionalmente alguns conceitos do mundo físico. Com isso, o código é escrito em partes simples e reusáveis, chamadas de **classes**. Essas partes são como diagramas usados para criar instâncias de **objetos**.

### Classes e Objetos

**Classe** é um diagrama abstrato usado para criar entidades mais concretas, chamadas de **objetos**. Classes definem um formato de dados – chamados de *atributos* – e funções, que geralmente operarão sobre os dados do objeto, chamadas de *métodos*.

**Objetos** são instâncias de classes. É quando o diagrama mencionado anteriormente passa de abstrato para concreto e passa a ter dados que o definirão.

Classes geralmente representam categorias amplas de entidades usadas em sistemas. Por exemplo, `Estudante`, `Disciplina`, `Professor` e `Turma` podem ser classes de um sistema de gerenciamento escolar.

Poderíamos modelar a classe `Estudante` contendo os seguintes atributos: `nome`, `matrícula`, `série` e `curso`. Assim, os seguintes objetos corresponderiam às instâncias dessas classes:
- *Joaquim Silva*, de matrícula *123456*, cursando o *1° ano* do curso de *Informática*
- *Marina Pereira*, de matrícula *123463*, cursando o *2° ano* do curso de *Sistemas de Energias Renováveis*

Ou modelar `Disciplina` com os atributos: `nome`, `curso` e `carga horária`, tendo como exemplo as instâncias:
- *Programação Orientada a Objetos*, do curso de *Informática*, de carga horária correspondente a *120h*
- *Algoritmos e Lógica de Programação*, do curso de *Informática*, de carga horária correspondente a *80h*

## Código

O código a seguir representa a implementação da classe `Estudante` em JavaScript, a linguagem escolhida para usarmos no nosso curso. Observe a sintaxe e como os atributos são definidos.

```javascript
class Estudante {
  constructor(nome, matricula, serie, curso) {
    this.nome = nome
    this.matricula = matricula
    this.serie = serie
    this.curso = curso
  }
}
```

## Referências

1. FILHO, Antonio Mendes da Silva. Introdução à programação orientada a objetos com C++. Brazil, Elsevier, 2010.
2. EDUCATIVE. What is object-oriented programming? OOP explained in depth <https://www.educative.io/blog/object-oriented-programming> Acesso em 25 de março de 2022.