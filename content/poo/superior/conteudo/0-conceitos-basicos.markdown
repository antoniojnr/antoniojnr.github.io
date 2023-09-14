# Conceitos básicos de orientação a objetos

Provavelmente, o paradigma de programação utilizado e aprendido por você até o momento foi o de **programação imperativa**. Um paradigma de programação é um estilo ou metodologia para solucionar problemas utilizando uma linguagem de programação. O paradigma imperativo consiste de comandos sequenciais que o computador executará para cumprir uma tarefa. Normalmente, os problemas computacionais que você resolveu em uma disciplina de lógica de programação e algoritmos envolviam a leitura de dados a partir da entrada padrão, um simples processamento e a emissão do resultado na saída padrão.

Conforme você aprendeu novos recursos de programação, pode ter percebido que códigos mais extensos eram menos compreensíveis e gerenciáveis. A partir desse ponto, surge a necessidade de uma nova metodologia – ou paradigma – de programação que permita dividir o programa em partes menos complexas para formar uma parte maior e mais complexa.

À medida que você for aprendendo novos conceitos, é normal que se depare com recursos que só estudará no futuro. Este capítulo apresenta de forma breve os conceitos fundamentais de programação orientada a objetos no contexto da linguagem Java, para que você entenda os assuntos conforme os estuda, mesmo que assuntos mais avançados surjam.

## **Programação Orientada a Objetos**

A programação orientada a objetos surgiu para suprir limitações existentes em outros paradigmas que a precederam. Em programas complexos, o número de instruções é enorme e, conforme cresce o número de instruções, também cresce a complexidade, a possibilidade de aparecerem erros e a necessidade de otimizar o uso de recursos computacionais (memória e CPU).

Através da orientação a objetos, temos uma ferramenta que nos permite representar computacionalmente alguns conceitos do mundo físico de forma mais intuitiva. Com isso, o código é escrito em partes simples e reusáveis, chamadas de **classes**. Essas partes são como diagramas usados para criar instâncias de **objetos**.

### Classes e objetos

**Classe** é um conceito abstrato usado para representar entidades do mundo real. É como um diagrama abstrato, um modelo ou uma planta baixa usada pra criar **objetos**. Classes definem abstrações de dados que descrevem o estado das entidades – chamados de *atributos* – e funções, que determinam o comportamento das entidades, chamadas de *métodos*. Por exemplo, um carro é uma entidade do mundo real que possui atributos, como ano, modelo, velocidade e temperatura interna do motor; e também possui comportamento, como ligar, desligar e acelerar. Uma classe `Carro`, teria os atributos `ano`, `modelo`, `velocidade`, além dos métodos `ligar`, `desligar` e `acelerar`. A classe `Carro` é mostrada no Código 1. Nesse código, os corpos do construtor e métodos foram ocultados e, além disso, a forma como o código foi escrito não segue boas práticas de programação (atributos públicos, por exemplo), apesar de ser aceitável para introduzir o conceito de classes para iniciantes. Você aprenderá um pouco sobre boas práticas a partir dos próximos capítulos.

```java
public class Carro {
	public int ano;
	public String modelo;
	public int velocidade;
	public int temperaturaMotor;

	public Carro() {
		// Definições do construtor
	}

	public void ligar() { /* ... */ }
	public void desligar() { /* ... */ }
	public void acelerar() { /* ... */ }
}
```

**Código 1.** A classe Carro.

Os atributos e métodos presentes em uma classe dependem do contexto do sistema em que a classe será criada. Uma classe `Pessoa` para um sistema de academia teria atributos como `peso` e `altura`, que não fariam sentido existirem em uma classe `Pessoa` em um sistema contábil. Por sua vez, atributos como `renda` e `numeroDeDependentes` pertencem ao contexto de sistemas contábeis, mais não ao contexto de sistemas de academia. Classes geralmente representam categorias amplas de entidades usadas em sistemas. Por exemplo, `Estudante`, `Disciplina`, `Professor` e `Turma` podem ser classes de um sistema de gerenciamento escolar.

**Objetos** são instâncias de classes. Cada objeto é criado a partir de uma classe em um processo chamado de instanciação. Nesse processo, o objeto passa a ter o seu próprio conjunto de valores. A instanciação de um objeto do tipo `Carro` é mostrada no Código 2. A classe `Carro` foi criada no Código 1.

Ao ser instanciado, o **construtor** de uma classe é chamado. O construtor contém código que será executado para inicializar a classe. Construtores são quase semelhantes a métodos, mas devem possuir o nome da classe e não têm tipo de retorno. Uma classe pode ter mais de um tipo de construtor, desde que cada construtor tenha uma lista de parâmetros com tipos diferentes. A existência de mais de um tipo de construtor é chamada de **sobrecarga de construtores**. Geralmente, mais de um construtor é criado quando existe a necessidade de inicializar um objeto de múltiplas formas.

No Código 2, a instanciação, atribuição de valores aos atributos e chamada do método `ligar()` foram feitas dentro de um método chamado `main`, em uma nova classe `Main`. O `main` é o método principal e o ponto de entrada para executar uma classe Java. Geralmente, ele é inserido na classe principal, aquela que vai chamar outras classes e iniciar o programa.

Java não permite código seja escrito fora de métodos. Então, se quisermos ver nosso código executando, precisamos colocá-lo dentro de um método `main` em alguma classe. O método `main` poderia estar dentro da própria classe `Carro`, mas decidimos colocá-lo dentro da classe `Main` para apresentar outros conceitos. Começando com o conceito de que uma classe pode ser utilizada dentro de outra.

```java
public class Main {
	/* Código definido previamente */

  public static void main(String[] args) {
		// Um objeto do tipo Carro é instanciado (new Carro()) e
		// atribuído à variável car1.
		Carro car1 = new Carro();

		// Atribuindo valores aos atributos do objeto car1
    car1.ano = 2013;
    car1.modelo = "Chevrolet Celta";
    car1.velocidade = 0;

		// Invocando o método ligar()
    car1.ligar();
	}
}
```

**Código 2.** Instanciando e manipulando atributos da classe Carro

Em projetos Java, classes relacionadas são organizadas dentro de pacotes. Um pacote funciona como uma pasta e, de fato, ao explorar a estrutura de diretórios de um projeto Java, você verá muitas pastas dentro de outras pastas. Pacotes são usados para evitar conflitos de nomes (classes com o mesmo nome dentro de um projeto) e escrever código mais fácil de manter.

A Figura 1 mostra um projeto Java criado no VisualStudio Code, com a classe App.java aberta no editor. Perceba, na linha 4, a indicação de que a classe `App` pertence ao pacote `project` (`package project`). A classe App.java encontra-se no diretório **src/main/java/project**, dentro do diretório principal do projeto. A estrutura de diretórios que define o nome do pacote inicia-se após **src/main/java**.

Portanto, se tivéssemos a estrutura de diretórios **src/main/java/br/edu/ifpb/poo**, o pacote seria declarado no topo da classe como `package br.edu.ifpb.poo`. Aliás, é uma convenção de nomenclatura utilizar nomes de domínio (ifpb.edu.br) ao contrário nos nomes de pacote e utilizar somente minúsculas.

![**Figura 1.** Projeto Java aberto no VisualStudio Code.](/content/images/captura1.png)

**Figura 1.** Projeto Java aberto no VisualStudio Code.

Classes relacionadas devem ficar dentro do mesmo pacote. E é possível acessar uma classe a partir de outra sem precisar importá-la. Quando classes estão em pacotes distintos e for necessário usar uma `Classe1` dentro de outra `Classe2`, será necessário importar a `Classe1`. No Código 3, temos a definição de duas classes, `Classe1`, que está no pacote `pacote1` e `Classe2`, que está no pacote `pacote2`. Para usar `Classe1` dentro de `Classe2`, foi necessário importar `Classe1` através do comando `import pacote1.Classe1`.

```java
// Definição da classe Classe1
package pacote1;

public class Classe1 {

}

// Definição da classe Classe2
package pacote2;

import pacote1.Classe1;

public class Classe2 {
	public static void main(String[] args) {
		Classe1 cls1 = new Classe1();
	}
}
```

**Código 3.** Importando classes.

### Atributos e métodos

**Atributos** são também chamados de *campos*, *membros* ou *propriedades*, e guardam as informações características dos objetos, representando seu estado. No Código 2, atribuímos valores aos atributos do objeto `car1`, do tipo `Carro`. A classe `Carro` possui três atributos, `ano`, `modelo` e `velocidade`. Os **métodos** são os comportamentos e ações de um objeto, sendo responsáveis por alterar o estado ou fornecer informações sobre um objeto. São análogos às funções ou procedimentos em programação estruturada.

Podemos acessar atributos e métodos de um objeto, desde que eles sejam públicos. Mas esse é um conceito que será estudado no próximo capítulo, [Encapsulamento](https://www.notion.so/Encapsulamento-cfdae35c13144b53baff2f541d9ff076?pvs=21).

### Herança

Às vezes, há grupos de objetos que compartilham características em comum e possuem um conjunto de características distintas. Usuários de um sistema escolar como Professor e Aluno compartilham características em seu estado (ambos possuem nome, sobrenome, números de documentos, etc) e comportamento (ambos possuem a necessidade de métodos de mudar senha, consultar informações de perfil, etc). Nesse caso, estado e comportamento comuns podem ficar em uma super classe Usuário e estado e comportamento específicos de cada tipo de usuário fica na classe específica. A herança é realizada em Java através da palavra reservada `extends`, conforme é demonstrado no Código 4.

```java
public class Usuario {
	// atributos e métodos comuns a todos que herdarem dessa classe
}

public class Professor extends Usuario {
	// atributos e métodos da classe Usuario devidamente acessíveis
	// poderão ser acessados a partir dessa classe e, também, como se
	// pertencessem a essa classe
}

public class Aluno extends Usuario {
	// atributos e métodos da classe Usuario devidamente acessíveis
	// poderão ser acessados a partir dessa classe e, também, como se
	// pertencessem a essa classe
}
```

**Código 4.** Usando herança em Java.

Usar herança nos permite criar hierarquias de classes, reutilizar código e personalizar o comportamento das classes filhas. É um conceito fundamental para a criação de programas organizados, flexíveis e eficientes.

### Interfaces

Interfaces permitem definir um contrato ou conjunto de regras que as classes devem seguir através da especificação de quais métodos uma classe deve implementar, apesar de não fornecer uma implementação real desses métodos.

Imagine uma interface como um acordo entre diferentes classes. Quando uma classe concorda em seguir essa interface, ela **implementa** a interface; ou seja, se compromete a fornecer implementações para **todos** os métodos definidos na interface. Isso cria uma maneira consistente e padronizada de interagir com objetos de diferentes classes. Interfaces promovem a padronização e a flexibilidade no código, permitindo criar sistemas mais organizados e adaptáveis

Interfaces são úteis quando você deseja que várias classes tenham comportamentos comuns, mas essas classes podem ter diferentes implementações para esses comportamentos. Por exemplo, em um sistema de veículos, você pode ter uma interface chamada "Veículo" que define métodos como "ligar" e "desligar". Tanto carros quanto motos podem seguir essa interface, mas cada um implementará esses métodos de maneira diferente, de acordo com suas características específicas. A interface e sua implementação pela classe Carro são mostradas no Código 5.

Um benefício importante das interfaces é que elas permitem a criação de código mais flexível e modular. É possível escrever funções que aceitam objetos que seguem uma determinada interface, em vez de se preocupar com a classe específica do objeto. Isso facilita a substituição de objetos por outros que sigam a mesma interface, tornando seu código mais genérico e reutilizável.

```java
public interface Veiculo {
  void ligar();
	void desligar();
}

public class Carro implements Veiculo {
	public void ligar() {
		// Implementação específica da classe Carro para o método ligar()
	}

	public void desligar() {
		// Implementação específica da classe Carro para o método desligar()
	}
}
```

**Código 5.** Uso de interfaces em Java.
