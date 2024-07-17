---
layout: default
title: Encapsulamento
nav_exclude: true
---

# 1. Classes e Objetos

{: .no_toc }

## Introdução

Imagine que vamos construir um jogo. Um jogo é composto de itens, cenário, personagens, NPCs, eventos, etc…

![**Figura 1.** Super Mario World](img/1BG38rz6ciNSZsQ_fLaJ02A.jpg)

**Figura 1.** Super Mario World

Como você imagina que um jogo é modelado em código?

Geralmente, em algum lugar teremos variáveis que guardam os dados de alguma coisa. Por exemplo, de um personagem:

```javascript
let nome = "Raimundo Nonato";
let vida = 100;
let forca = 55;
let arma = "Cabo de vassoura";
```

**Código 1.** Declaração de variáveis que representam atributos de um personagem.

Mas esses dados precisam estar organizados em algum lugar. Imagina um jogo com dados de centenas de personagens guardados simplesmente em variáveis jogadas no código. Não dá, né?

Seria legal se tivéssemos um molde. Algo que facilitasse a criação de novos personagens.

## Classes

Em orientação a objetos, temos algo chamado **classe** que pode servir como molde. A partir classes, criamos a quantidade de **objetos** que quisermos e todos seguirão o mesmo molde e terão as mesmas características.

Quando me refiro às características, quero dizer que todos terão os mesmos atributos que definem seu **estado** e métodos que definem seu **comportamento**.

Vamos criar uma classe `Personagem` para que você possa entender do que estou falando.

```javascript
class Personagem {
  nome;
  vida;
  forca;
  nivel;
  arma;
}
```

**Código 2.** Classe `Personagem`.

Primeiro, vamos aprender como usar essa classe em um código JavaScript. Se você já programou em JavaScript, deve ter criado variáveis dos tipos string, inteiro, float (na verdade, em JavaScript, todo número é `number`), como mostrado a seguir.

```javascript
var nome = "Antonio";
var forca = 100;
```

Agora que estamos começando a usar JavaScript como uma linguagem orientada a objetos, saiba que você pode ter variáveis do tipo que acabamos de criar: `Personagem`. Podemos modificar o estado de `personagemPrincipal` no código a seguir, alterando o valor de seus atributos. **Atributos** (ou propriedades) são variáveis que guardam valores que, mais ou menos, definem a identidade do objeto.

```javascript
var personagemPrincipal = new Personagem();
personagemPrincipal.nome = "Raimundo Nonato";
personagemPrincipal.vida = 100;
personagemPrincipal.nivel = 1;
personagemPrincipal.forca = 55;
personagemPrincipal.arma = "Peixeira";
```

O comando `new Personagem();` cria um novo personagem. Tecnicamente falando, estamos instanciando um novo objeto do tipo `Personagem`. **Instanciar** significa criar um objeto no molde provido pela classe. Em linguagens orientadas a objetos, utilizamos esses objetos para representar problemas no computador. Para que você entenda o jargão técnico, no código acima foi instanciado um novo objeto do tipo `Personagem` e esse objeto foi guardado na variável `personagemPrincipal`. Depois, os atributos do objeto contido em `personagemPrincipal` foram modificados. Perceba como acessamos os atributos do objeto usando a notação de ponto `.`. Ao usar `personagemPrincipal.nome`, estamos acessando o atributo `nome` do objeto contido em `personagemPrincipal`, para que possamos atribuir um novo valor a esse atributo (como é o caso no exemplo), ou realizar a leitura do valor atual presente no atributo.

O objeto também pode ter comportamento. Nosso `Personagem` pode atacar outro personagem, ganhar ou perder vida, encontrar itens ou subir de nível. Os comportamentos são definidos por métodos. Os **métodos** são os comportamentos e ações de um objeto, sendo responsáveis por alterar o estado ou fornecer informações sobre um objeto. São análogos às funções ou procedimentos em programação estruturada. Vamos voltar à nossa classe `Personagem` e criar nela dois métodos, `sofrerDano` e `subirNivel`, como visto no Código 5.

```javascript
class Personagem {
  nome;
  vida;
  forca;
  defesa;
  nivel;
  arma;

  sofrerDano(dano) {
    let danoSofrido = dano - defesa;
    danoSofrido = Math.max(0, danoSofrido);
    this.vida = this.vida - danoSofrido;
  }

  subirNivel() {
    this.nivel += 1;
  }

  getNivel() {
    return this.nivel;
  }

  ganharExperiencia(vida, forca) {
    this.vida += vida;
    this.forca += forca;
    this.subirNivel();
  }
}
```

**Código 5.** Implementação de métodos na classe `Personagem`.

<blockquote>

**Nomes de métodos**

É uma convenção que os nomes de métodos denotem ações e, por isso, são compostos de verbos no infinitivo, às vezes juntos de outras palavras. Além disso, nunca deve haver caracteres acentuados em nomes, seja de métodos, classes ou variáveis. Se você escolher outra forma ou padrão para nomear seus métodos, saiba que isso pode ficar confuso para quem for ler seu código.

</blockquote>

Um método tem um **nome**, uma **lista de parâmetros**, que pode ser vazia, um **retorno**, que é opcional, e um **corpo**. No Código 5, o método `sofrerDano` tem um parâmetro, `dano`, que corresponde à quantidade de vida que será subtraída do personagem, como se pode ver no corpo do método, que é o código entre `{...}`. O método `subirNivel` não possui parâmetros e o método `ganharExperiencia` tem dois parâmetros, `vida` e `forca`. O método `getNivel` retorna o valor do nível atual do personagem. Parâmetros são valores passados para o método que serão usados durante sua execução.

## Objetos

O Código 5 introduziu novidades que vamos abordar em breve, mas vamos nos ater agora à execução do código. Nós temos a declaração da classe `Personagem` e, antes de utilizá-la, precisamos instanciar um objeto do tipo `Personagem` para, somente assim, modificarmos seus atributos e chamarmos seus métodos.

Na linha 1 do Código 6, temos a instanciação da classe `Personagem` guardada na variável `personagem1`. Um **objeto** é uma instância de classe e, portanto, dizemos que a variável `personagem1` contém um objeto do tipo `Personagem` ou uma instância de `Personagem`. É quando o molde mencionado anteriormente se concretiza e passa a ter dados que o definirão.

Agora que temos uma instância de `Personagem`, podemos acessar seus atributos para leitura ou escrita e invocar seus métodos.

```javascript
let personagem1 = new Personagem(); // Linha 1: Instanciação
console.log(personagem1.vida); // Linha 2: Leitura do atributo vida
personagem1.vida = 100; // Linha 3: Modificação do atributo vida
personagem1.sofrerDano(20); // Linha 4: Chamada do método sofrerDano
console.log(personagem1.vida); // Linha 5: Leitura do atributo vida
```

- Na linha 2, o valor do atributo `vida` é lido para ser impresso.
- Na linha 3, o valor do atributo `vida` passa a ser 100.
- Na linha 4, o método `sofrerDano` é invocado, sendo passado 20 como parâmetro. Ou seja, o personagem sofrerá dano de 20.
- Na linha 5, o valor do atributo `vida` é lido para ser impresso mais uma vez.

O atributo `vida` também é chamado de **variável de instância**, assim como `sofrerDano` é um **método de instância**. O atributo `vida` guarda um valor que só existe quando um objeto é instanciado e o método sofrerDano manipula valores que só existem quando um objeto é instanciado—neste caso, quando um objeto da classe `Personagem` é instanciado. Os outros atributos e métodos da classe Personagem também são variáveis e métodos de instância, respectivamente.

Usando a palavra reservada `static`, podemos definir que um atributo não será uma variável de instância, ou seja, que ele vai conter um valor que não depende da instanciação de um objeto para existir. Também podemos criar métodos que não manipulam variáveis de instância. Há um exemplo de uso de atributos e métodos estáticos no Código 6.

```javascript
class Personagem {
  static vida_maxima = 100;

  static estaVivo(personagem) {
    return personagem.vida > 0;
  }
  // Outros atributos e métodos...
}
```

**Código 6.** Atibuto e método estáticos declarados em `Personagem`.

O atributo `vida_maxima` possui o valor 100 independentemente da existência de uma instância. É como se esse atributo definisse o valor máximo de vida para qualquer personagem. Podemos alterar esse valor da forma a seguir.

```javascript
Personagem.vida_maxima = 150;
```

O método `estaVivo`, por sua vez, não manipula variáveis de instância. O dado que ele precisa para funcionar é uma instância qualquer de Personagem.

## Mais sobre atributos e métodos

Vimos que atributos e métodos são definidos em uma classe a partir do momento em que são declarados no corpo de uma classe, da forma como foi feito no Código 5. Para referenciar atributos e métodos dentro de código na classe, usamos a palavra reservada `this`.

O `this` é usado para referenciar membros (atributos e métodos) que possuem ou manipulam dados da instância (o objeto criado com `new`). Vamos entender melhor como isso funciona, analisando os métodos `sofrerDano` e `ganharExperiencia` da classe `Personagem`, declarada no Código 7.

```javascript
sofrerDano(dano) {
  let danoSofrido = dano - defesa;
  danoSofrido = Math.max(0, danoSofrido);
  this.vida = this.vida - danoSofrido;
}

ganharExperiencia(vida, forca) {
  this.vida += vida;
  this.forca += forca;
  this.subirNivel();
}
```

**Código 7.** Métodos `sofrerDano` e `ganharExperiencia`.

O `this.vida` e `this.forca` usados no código fazem referência às variáveis de instância `vida` e `forca`. Quando a classe `Personagem` e valores forem atribuídos a essas variáveis, será possível acessar essas valores usando `this.vida` e `this.forca`.

No método `ganharExperiencia`, em `this.vida += vida`, o `this` ganha mais uma utilidade, que é remover a ambiguidade entre qual variável `vida` utilizar: a dos parâmetros ou o atributo.

O mesmo é válido para métodos. Se você precisar fazer referência a métodos para trabalhar sobre valores da instância, use o `this`, assim como foi feito em `this.subirNivel()` no método `ganharExperiencia`.

## Construtor

Quando a classe é instanciada, o seu **construtor** é chamado. O construtor contém código que será executado para inicializar a classe. Construtores são bem semelhantes a métodos, podendo inclusive ter parâmetros, mas não têm retorno. Em JavaScript devem ser declarados da forma mostrada no Código 8.

```javascript
constructor() {
	// Código para inicialização da classe.
	// Pode ser inicialização de atributos ou
	// qualquer procedimento necessário para
	// que a classe seja criada, segundo as
	// especificações.
}
```

**Código 8.** Declaração de um construtor.

É no construtor que podemos definir valores iniciais para os atributos da classe, porque será o primeiro código que executa durante sua inicialização, como mostrado no Código 9.

```javascript
class Personagem {
  nome;
  vida;
  forca;
  defesa;
  nivel;
  arma;

  constructor(nome) {
    this.nome = nome;
    this.vida = 100;
    this.forca = 10;
    this.defesa = 0;
    this.nivel = 0;
    this.arma = null;
  }
}
```

**Código 9.** Exemplo de uso do construtor.

Agora, pratique os conceitos aprendidos nesse capítulo [resolvendo os exercícios](./ex-classes-e-objetos.html).
