---
layout: default
title: POO - Encapsulamento
nav_exclude: true
---

# Encapsulamento

Encapsulamento é um dos principais pilares da programação orientada a objetos. Refere-se ao empacotamento de dados em uma única unidade, junto com os métodos que operam nestes dados. Essas unidades de dados e métodos são representadas por **classes** na maioria das linguagens de programação. O empacotamento de dados é geralmente usado para esconder a representação interna ou estado de um objeto do seu exterior. Isso é chamado de **ocultação de informação**.

Ocultar informações nesse contexto consiste de restringir alguns atributos e métodos de uma classe, de forma que usuários ou programadores que utilizarem a classe não possam acessar todos os elementos da classe. Assim, apenas as informações necessárias para que outras partes do código possam utilizar os serviços da classe são publicas, sem expor detalhes internos que não são relevantes para esse fim.

Os benefícios de se utilizar encapsulamento são vários:

- **Segurança:** uma vez que apenas a interface pública da classe é acessível, é improvável que métodos e atributos internos sejam acessados ou modificados e levem a classe a um estado inválido, reduzindo a possibilidade de erros ou comportamentos imprevistos que poderiam levar a falhas do sistema.
- **Robustez do código:** uma vez que o estado interno só pode ser acessado e modificado através de métodos públicos, é possível implementar uma validação rígida antes de acessar ou modificar dados, fazendo com que o estado interno da classe permaneça consistente e válido.
- **Maior manutenibilidade:** o código das classes pode ser alterado sem alterar sua interface pública. Assim, é possível melhorar a implementação, corrigir erros ou adicionar novos recursos sem impactar o acesso de partes externas à interface pública.

Vamos analisar o exemplo no Código 1 para entender como esses benefícios se evidenciam. Encapsular a variável `saldo` e possibilitar modificá-la apenas através dos métodos `depositar()` e `sacar()` torna o código mais **seguro**, porque, dessa forma, validamos internamente os valores a serem depositados ou sacados, impedindo que valores inválidos sejam atribuídos a saldo: por exemplo `Double.NaN` (constante que representa um valor numérico inválido), `Double.POSITIVE_INFINITY` ou `Double.NEGATIVE_INFINITY` (constantes que representam o infinito positivo ou negativo, respectivamente).

A validação também torna o código mais **robusto**. Se, eventualmente, for necessário implementar novas regras sobre o depósito ou saque (por exemplo, proibir saques maiores que determinados valores à noite), isso pode ser feito sem alterar a interface pública.

```java
public class ContaBancaria {
    private String numeroConta;
    private double saldo;

    public ContaBancaria(String numeroConta, double saldoInicial) {
        this.numeroConta = numeroConta;
        this.saldo = saldoInicial;
    }

    // O valor de saldo será íntegro e válido, porque é validado
		// pelos métodos depositar() e sacar()
    public double getSaldo() {
        return saldo;
    }

		// No depósito, o valor é validado antes de ser somado ao saldo.
		// Somente valores positivos podem ser depositados.
    public void depositar(double valor) {
        if (valor > 0) {
            saldo += valor;
            System.out.println("Depósito de " + valor + " realizado com sucesso.");
        } else {
            System.out.println("Valor inválido para depósito.");
        }
    }

		// No saque, o valor também é validado antes de ser subtraído do saldo.
		// Somente valores positivos e menores ou iguais ao saldo podem ser
		// depositados.
    public void sacar(double valor) {
        if (valor > 0 && valor <= saldo) {
            saldo -= valor;
            System.out.println("Saque de " + valor + " realizado com sucesso.");
        } else {
            System.out.println("Saldo insuficiente ou valor inválido para saque.");
        }
    }

    // Outros métodos da classe ContaBancaria
    public String getNumeroConta() {
        return numeroConta;
    }

    // Método toString para representação de string da conta
    @Override
    public String toString() {
        return "ContaBancaria [Número da Conta=" + numeroConta + ", Saldo=" + saldo + "]";
    }
}

public class Main {
    public static void main(String[] args) {
        ContaBancaria minhaConta = new ContaBancaria("12345", 1000.0);

        // Não é possível acessar diretamente os campos privados
        // minhaConta.numeroConta = "54321"; // Isso não é permitido

        // Acessando e modificando o saldo usando métodos públicos
        System.out.println("Saldo atual: " + minhaConta.getSaldo());

        minhaConta.depositar(500.0);
        System.out.println("Saldo após depósito: " + minhaConta.getSaldo());

        minhaConta.sacar(200.0);
        System.out.println("Saldo após saque: " + minhaConta.getSaldo());

        System.out.println(minhaConta); // Usando o método toString para exibir informações da conta
    }
}
```

**Código 1.** Classe ContaBancaria.

Permitir o acesso direto ao atributo `saldo` abre a possibilidade de atribuir a ele um valor inválido, tornando seu **estado inconsistente**. Para impedir o acesso direto a atributos ou métodos, podemos torná-los privados. Em Java, existem 4 níveis de visibilidade que podem ser definidas para membros de uma classe (métodos e atributos): `public`, `protected`, `private` e _package-protected_ (padrão - sem modificador). Há dois níveis de controle de acesso, no nível de classes e no nível de métodos e atributos.

- Classes podem ter:
  - o modificador `public`, sendo visíveis para qualquer outra classe, ou;
  - **nenhum modificador**, quando serão visíveis apenas para classes do mesmo pacote.
- Métodos ou atributos podem ser:
  - `private`, acessíveis somente dentro da própria classe;
  - _package-protected_, quando são declaradas **sem modificador**, o que aumenta o acesso para dentro do próprio pacote;
  - `protected`,acessíveis a classes dentro do mesmo pacote e a subclasses;
  - `public`, acessíveis a partir de qualquer lugar: na própria classe, em outras classes do pacote, em subclasses ou em outras classes de outros pacotes;

Na tabela a seguir, estão listados os modificadores e os respectivos níveis de acesso.

| Modificador | Classe    | Pacote      | Subclasse   | Exterior    |
| ----------- | --------- | ----------- | ----------- | ----------- |
| public      | acessível | acessível   | acessível   | acessível   |
| protected   | acessível | acessível   | acessível   | inacessível |
| nenhum      | acessível | acessível   | inacessível | inacessível |
| private     | acessível | inacessível | inacessível | inacessível |

Geralmente, você desenvolverá código que será usado por outros programadores. Você pode usar os níveis de acesso para garantir que erros não irão ocorrer devido ao mau-uso de métodos e atributos por outras pessoas.

- Use os níveis de acesso mais restritivos possíveis que façam sentido para determinados métodos ou atributos. Faz sentido que o método `getSaldo()` seja público na classe `ContaBancaria`, mostrada no Código 1. Entretanto, se você fosse criar métodos validadores para os valores depositados ou sacados, declará-los como private seria a escolha certa. Não parece correto uma classe externa, como `Cliente`, manipular os métodos de validação da classe `ContaBancaria`. Use o nível de acesso `private`, a menos que você tenha um bom motivo para não usar.
- Evite atributos `public`, pois estes podem tornar uma determinada implementação acessível e limitar a flexibilidade de mudar o código. Por exemplo, um programador poderá acessar o atributo `saldo` e implementar as validações e regras que desejar.

## Referências

[https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)
