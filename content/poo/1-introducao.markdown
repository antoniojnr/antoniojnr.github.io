---
layout: default
title: Introdução
nav_exclude: true
---
## 1. Introdução
{: .no_toc }

Provavelmente, o paradigma de programação utilizado e aprendido no curso por você até o momento foi o de **programação imperativa**. Um paradigma de programação não é uma linguagem de programação, mas sim um estilo ou metodologia para solucionar problemas utilizando uma linguagem de programação. O paradigma imperativo consiste de comandos que o computador executará para cumprir uma tarefa. Normalmente, os problemas computacionais que você resolvia envolviam a leitura de dados a partir da entrada padrão, um simples processamento e a emissão do resultado na saída padrão.

Conforme você aprendeu novos recursos de programação, pode ter percebido que códigos mais extensos eram menos compreensíveis e gerenciáveis. A partir desse ponto, surge a necessidade de uma metodologia – ou paradigma – de programação que permita dividir o programa em partes menos complexas para formar uma parte maior e mais complexa.

### 1.2. Programação Orientada a Objetos

A programação orientada a objetos surgiu para suprir limitações existentes em outros paradigmas que a precederam. Em programas complexos, o número de instruções é enorme e, conforme cresce o número de instruções, também cresce a complexidade, a possibilidade de aparecerem erros e a necessidade de otimizar o uso de recursos computacionais (memória e CPU).

Através da orientação a objetos, temos uma ferramenta que nos permite representar computacionalmente alguns conceitos do mundo físico. Com isso, o código é escrito em partes simples e reusáveis, chamadas de **classes**. Essas partes são como diagramas usados para criar instâncias de **objetos**.

### 1.3. Classes e Objetos

**Classe** é um conceito abstrato usado para representar entidades do mundo real, chamadas de **objetos**. Classes definem abstrações de dados que descrevem o conteúdo das entidades – chamados de *atributos* – e funções, que determinam o comportamento das entidades, chamadas de *métodos*.

**Objetos** são instâncias de classes. É quando o diagrama mencionado anteriormente passa de abstrato para concreto e passa a ter dados que o definirão.

Classes geralmente representam categorias amplas de entidades usadas em sistemas. Por exemplo, `Estudante`, `Disciplina`, `Professor` e `Turma` podem ser classes de um sistema de gerenciamento escolar.

### 1.4. Atributos

Os atributos, também chamados de *campos*, *membros* ou *propriedades*, guardam as informações características dos objetos, representando seu estado. 

Poderíamos modelar a classe `Estudante` contendo os seguintes atributos: `nome`, `matrícula`, `série` e `curso`. Assim, os seguintes objetos corresponderiam às instâncias dessas classes:
- *Joaquim Silva*, de matrícula *123456*, cursando o *1° ano* do curso de *Informática*
- *Marina Pereira*, de matrícula *123463*, cursando o *2° ano* do curso de *Sistemas de Energias Renováveis*

Ou modelar `Disciplina` com os atributos: `nome`, `curso` e `carga horária`, tendo como exemplo as instâncias:
- *Programação Orientada a Objetos*, do curso de *Informática*, de carga horária correspondente a *120h*
- *Algoritmos e Lógica de Programação*, do curso de *Informática*, de carga horária correspondente a *80h*

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

Perceba que todos os estudantes que tiverem seu formato de dados conforme descrito pela classe `Estudante` terão os mesmos atributos. Ao instanciar uma classe, temos um objeto que, por sua vez, possuem atributos que definem seu estado. Assim, para cada objeto representará estudantes diferentes, portanto, com dados diferentes para `nome`, `matrícula`, `série` e `curso`. Esse conjunto de valores guardados nesses atributos representam o estado do objeto.

### 1.5. Métodos

Os métodos são os comportamentos e ações de um objeto, sendo responsáveis por alterar o estado ou fornecer informações sobre um objeto. São análogos a funções ou procedimentos em programação estruturada.

Considere a classe `Funcionario` representada no Código 1.

**Código 1.** A classe `Funcionario`.
```javascript
class Funcionario {
  constructor(nome, cpf, salarioBase) {
    this.nome = nome
    this.cpf = cpf
    this.salarioBase = salarioBase
    this.horasExtra = 0
  }
}
```

O comportamento de um objeto é definido pelas necessidades do sistema. Uma classe `Funcionario` em um sistema que gerencia funcionários de uma indústria pode ter comportamentos diferentes de uma classe `Funcionario` em um sistema de escritório ou supermercado, por exemplo.

Criaremos o seguinte método na nossa classe `Funcionario`:
1. `getSalario()`: calcula o salário, levando em consideração a quantidade de horas extra e o salário base.

Definiremos também, para cada um dos atributos (exceto alguns - ver Código 3), definiremos um par de métodos `get` e `set`, chamados de *getters* e *setters*, respectivamente. Esses métodos são definidos para acessar os valores dos atributos, que não devem ser acessados diretamente. Isso se dá porque os atributos podem ser usados e alterados internamente por outras funções e, ao acessá-los diretamente, você pode estar acessando um valor inconsistente.

Além disso, repare no método especial chamado `constructor`. Este método é usado para criar um objeto de uma determinada classe. Ele é chamado quando instanciamos a classe usando o operador `new`. No código a seguir, foi criado um novo objeto `Funcionario` com os seguintes parâmetros `"Antonio Dias"` (*nome*), `"11111111111"` (*cpf*) e `5000.0` (*salario*). O objeto foi guardado na variável `func1` e está acessível a partir dela.

**Código 2.** Instanciando a classe `Funcionario`.
```javascript
class Funcionario {
  constructor(nome, cpf, salarioBase) {
    this.nome = nome
    this.cpf = cpf
    this.salarioBase = salarioBase
    this.horasExtra = 0
  }
}

var func1 = new Funcionario("Antonio Dias", "11111111111", 5000.0)
```

A classe `Funcionario` com o construtor, método `getSalario()`, além dos *getters* e *setters*m fica conforme mostrado no Código 3.

**Código 3.** A classe `Funcionario` com os métodos já definidos.
```javascript
class Funcionario {
  constructor(nome, cpf, salarioBase) {
    this.nome = nome
    this.cpf = cpf
    this.salarioBase = salarioBase
    this.horasExtra = 0
  }

  getHorasExtra() {
    return this.horasExtra
  }

  setHorasExtra(horasExtra) {
    this.horasExtra = horasExtra
  }

  getSalarioBase() {
    return this.salarioBase
  }

  setSalarioBase(salarioBase) {
    this.salarioBase = salarioBase
  }

  getSalario() {
    // Considerando que o valor hipotético da hora extra é R$20
    return this.salarioBase + 20 * this.horasExtra
  }

  getNome() {
    return this.nome
  }

  setNome(nome) {
    this.nome = nome
  }

  getCPF() {
    return this.cpf
  }

  setCPF(cpf) {
    this.cpf = cpf
  }
}
```
### 1.6. Composição

Composição é mais um conceito fundamental em programação orientada a objetos. Descreve uma classe que referencia um ou mais objetos de outras classes em seus atributos. Isso permite modelar uma associação de posse entre objetos. Por exemplo: um celular *possui* uma tela ou um carro *possui* um motor.

No Código 4, `Produto` possui um `Fabricante`. Logo, temos uma referência a um objeto do tipo `Fabricante` e podemos acessar seus métodos, como é mostrado no método `getEnderecoFabricante()`.

**Código 4.** Classes `Produto` e `Fabricante`.
```javascript
class Produto {
  constructor(nome, preco fabricante) {
    this.nome = nome
    this.preco = preco
    this.fabricante = fabricante
  }

  // get/setNome, get/setPreco e get/setFabricante omitidos 
  // para economizar espaço

  getEnderecoFabricante() {
    return this.getFabricante().getEndereco()
  }
}

class Fabricante {
  constructor(nome, endereco) {
    this.nome = nome
    this.endereco = endereco
  }

  // get/setNome e get/setEndereco omitidos 
  // para economizar espaço
}
```

No próximo capítulo, vamos ver sobre encapsulamento e sua importância no projeto de sistemas utilizando orientação a objetos.

### 1.7. Exercícios

**Exercício 1.** Desenvolva o código para a classe mostrada na figura seguinte.

![Diagrama 1](/content/images/classe1.svg "Diagrama 1")

**Exercício 2.** Desenvolva o código para a classe mostrada na figura seguinte.

![Diagrama 2](/content/images/classe2.svg "Diagrama 2")

**Exercício 3.** O diagrama a seguir representa uma composição, onde `Livro` possui um `Autor`. Desenvolva o código para as classes mostradas.

![Diagrama 3](/content/images/classe3.svg "Diagrama 3")

**Exercício 3.** O diagrama a seguir representa uma composição, onde `Linha` possui dois `Ponto`s. Desenvolva o código para as classes mostradas.

![Diagrama 4](/content/images/classe5.svg "Diagrama 4")

### 1.8. Referências

1. FILHO, Antonio Mendes da Silva. Introdução à programação orientada a objetos com C++. Brazil, Elsevier, 2010.
2. EDUCATIVE. What is object-oriented programming? OOP explained in depth <https://www.educative.io/blog/object-oriented-programming> Acesso em 25 de março de 2022.
3. WIKIPÉDIA. Classe (Programação) <https://pt.wikipedia.org/wiki/Classe_(programação)> Acesso em 28 de março de 2022.
4. JANSSEN, Thorben. OOP Concepts for Beginners: What is Composition? <https://stackify.com/oop-concepts-composition/> Acesso em 06 de maio de 2022.