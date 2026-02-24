---
title: "Lista 02"
weight: 1
bookCollapseSection: true
#bookHidden: true
---

# Lista 02

## Instruções

Neste ponto da disciplina, ainda não vimos operações de entrada e saída. Por isso, para simular a entrada dos programas, você deverá, simplesmente, declarar variáveis e inicializá-las com os valores que seriam lidos na entrada.

Não use `Scanner`; todos os valores devem ser declarados diretamente no código.

## Exercícios

1. Crie um programa que demonstre o comportamento de _overflow_ e _underflow_ nos tipos `byte`, `short` e `int`. Em seguida, para cada tipo:

1.1. Exiba o valor máximo e mínimo usando constantes das _Wrapper Classes_ correspondentes (Use obrigatoriamente `Byte.MAX_VALUE`, `Short.MAX_VALUE`, `Integer.MAX_VALUE`, etc).
1.2. Some 1 ao valor máximo de cada tipo e exiba o resultado, explicando em comentários o que acontece.
1.3. Converta explicitamente um `long` com valor 300 para `byte` e exiba o resultado, justificando o valor obtido.

---

2. Crie a classe `MinhaString` que recebe no construtor um parâmetro `String valor`, que é um valor de um dos tipos: `int`, `double`, `long` e `boolean`.

A classe deve efetuar a conversão do valor recebido para qualquer um dos outros tipos, desde que seja possível, através dos métodos a seguir. Quando não for possível converter, retorne `null`:

- `toInteger()`: retorna o `Integer` correspondente
- `toDouble()`: retorna o `Double` correspondente
- `toLong()`: retorna o `Long` correspondente
- `toBoolean()`: retorna o `Boolean` correspondente

Use os métodos `Integer.parseInt()`, `Double.parseDouble()`, etc, das respectivas _wrapper classes_.

**Exemplo**

```java
MinhaString minhaStr = new MinhaString("123");
System.out.println(minhaStr.toInteger()); // Ok. Exibe 123
System.out.println(minhaStr.toDouble()); // Ok. Exibe 123.0
System.out.println(minhaStr.toLong()); // Ok. Exibe 123
System.out.println(minhaStr.toBoolean()); // null

MinhaString minhaStr = new MinhaString('123');
System.out.println(minhaStr.toInteger()); // Ok. Exibe 123
System.out.println(minhaStr.toDouble()); // Ok. Exibe 123.0
System.out.println(minhaStr.toLong()); // Ok. Exibe 123
System.out.println(minhaStr.toBoolean()); // null
```

---

3. Implemente a classe `Temperatura` com as seguintes características:

- Atributo `double valor` e `String escala` (aceitar apenas "C", "F" ou "K").
- Construtor que valide a escala; imprima "Escala inválida" se inválida.

Métodos de conversão:

- `toCelsius()`: retorna nova instância de `Temperatura` em Celsius
- `toFahrenheit()`: retorna nova instância em Fahrenheit
- `toKelvin()`: retorna nova instância em Kelvin
- `imprimeComEscala()`: imprime a temperatura na escala em que foi instanciada

- Valide que a temperatura em Kelvin nunca seja negativa; imprima uma mensagem de erro se isso ocorrer.
- No `main`, converta uma mesma temperatura pelas três escalas e exiba os resultados.

---

4. Crie uma classe `Estudante` com atributos para nome, matrícula e um array de notas. Crie métodos para calcular a média das notas e determinar se o aluno foi aprovado ou reprovado, considerando que a média para ser aprovado é 70. Crie objetos `Estudante` e imprima informações dos objetos.

- A classe `Estudante` deve possuir:
  - Construtor `Estudante(nome, matricula, n1, n2, ...)` onde, após `nome` e `matrícula`, pode ser passada uma quantidade variável de notas (usando varags).
  - Método `getMedia()` que retorna o cálculo (`double`) da média das notas do estudante.
  - Método `setNotas(n1, n2, ...)` (varargs) para definir as todas notas de uma vez (cada nota é um `double`).
  - Método `getNota(indice)`, para obter uma determinada nota, onde `indice` é um índice do array de notas iniciando de `0`. Retorne `-1` caso o índice seja inexistente.
  - Método `getSituacao()` que retorna a situação do estudante, sendo o retorno uma das strings: "Aprovado", "Reprovado"e "Final".

---

5. Crie uma classe `ContaCorrente` com:

Atributos:

- `String titular`
- `double saldo`
- `int numeroConta`

Métodos:
`void depositar(double valor)` — soma o valor ao saldo somente se o valor for positivo; caso contrário, exibe mensagem de erro
`void sacar(double valor)` — subtrai do saldo somente se o valor for positivo e houver saldo suficiente; caso contrário, exibe mensagem de erro
`void transferir(ContaCorrente destino, double valor)` — usa sacar e depositar internamente
`double getSaldo()` — exibe titular, número da conta e saldo atual

No `main`, crie **duas** contas, realize depósitos, saques e uma transferência entre elas. Tente também realizar um saque maior que o saldo.

---

6. Crie uma classe Circulo com:

Atributo:

- `double raio`

Métodos:

- `double calcularArea()` — use `Math.PI * raio * raio`
- `double calcularCircunferencia()` — use `2 * Math.PI * raio`
- `boolean contemOutro(Circulo outro)` — retorna `true` se este círculo tem raio maior que o outro
- `Circulo maior(Circulo outro)` — retorna o próprio objeto (`this`) se este for maior, ou outro caso contrário
- `void exibirDados()` — exibe raio, área e circunferência formatados com duas casas decimais usando `String.format()`.

No `main`:

- Crie um círculo com raio 5.0 e exiba seus dados.
- Dobre o raio (atribua `raio * 2`) e exiba novamente.
- Crie um segundo círculo com raio 3.0. Use `contemOutro()` para exibir qual deles contém o outro.

---

7. Crie uma classe Relogio que representa um horário no formato HH:MM:SS.

Atributos: int horas, int minutos, int segundos

Métodos:

- `void tick()` — avança 1 segundo; quando segundos chegarem a 60, reinicia para 0 e incrementa minutos; quando minutos chegarem a 60, reinicia e incrementa horas; quando horas chegarem a 24, tudo reinicia para 0
- `void adicionarSegundos(int n)` — chama `tick()` _n_ vezes
- `String exibirHorario()` — retorna no formato "09:05:03" (sempre dois dígitos, use `String.format`)
- `boolean isMaiorQue(Relogio outro)` — compara os dois horários e retorna true se este for posterior ao outro

No `main`, crie um relógio com 23:59:57, chame adicionarSegundos(5) e exiba o horário a cada segundo adicionado.
