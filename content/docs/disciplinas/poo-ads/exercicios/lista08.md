---
title: "Lista 08"
weight: 1
bookCollapseSection: true
#bookHidden: true
---

# Lista 08

## Questão 1

**Tópicos:** checked e unchecked exceptions, `try`/`catch`/`finally`, `try-with-resources`, exceções personalizadas, encadeamento.

Você está desenvolvendo um programa que lê um arquivo CSV contendo dados de alunos e valida cada registro. O arquivo tem o formato `nome;idade;nota` (uma linha por aluno). Exemplo de conteúdo:

```
Ana;20;8.5
Bruno;abc;7.0
;25;9.0
Carlos;17;11.5
Diana;22;6.0
```

1. Crie uma exceção **checked** chamada `RegistroInvalidoException` que:
   - Possua um atributo `int numeroLinha` e um método `getNumeroLinha()`.
   - Aceite no construtor: mensagem, número da linha e, opcionalmente, uma causa (`Throwable`) para permitir encadeamento.

2. Crie uma classe `ProcessadorDeAlunos` com o método:

   ```java
   public void processar(String caminhoArquivo)
       throws RegistroInvalidoException
   ```

   Esse método deve:
   - Abrir o arquivo com `try-with-resources` (usando `BufferedReader`).
   - Ler cada linha e separar os campos por `";"`.
   - Para cada linha, validar:
     - Se o nome estiver vazio, lançar `RegistroInvalidoException` com a mensagem `"Nome vazio na linha <n>"`.
     - Converter a idade com `Integer.parseInt()`. Se falhar, capturar o `NumberFormatException` e lançar `RegistroInvalidoException` com a mensagem `"Idade inválida na linha <n>"`, **encadeando** o `NumberFormatException` como causa.
     - Converter a nota com `Double.parseDouble()`. Se o valor estiver fora do intervalo 0–10, lançar `RegistroInvalidoException` com a mensagem `"Nota fora do intervalo na linha <n>"`.
   - Se a linha for válida, exibir: `"Aluno registrado: <nome>, idade <idade>, nota <nota>"`.
   - **Importante:** ao encontrar o primeiro registro inválido, o método deve lançar a exceção imediatamente (não continue processando as linhas seguintes).

3. Na classe `Main`:
   - Chame `processar` dentro de um `try`/`catch` que trate `RegistroInvalidoException`, exibindo:
     - A mensagem de erro.
     - O número da linha.
     - A causa (`getCause()`), se existir.
   - Use um bloco `finally` para exibir `"Processamento encerrado."`.

**Exemplo de saída esperada (usando o CSV de exemplo acima):**

```
Aluno registrado: Ana, idade 20, nota 8.5
Erro no registro — Idade inválida na linha 2
  Causa: java.lang.NumberFormatException: For input string: "abc"
Processamento encerrado.
```

---

## Questão 2

Implemente um sistema simplificado de autenticação de usuários.

1. Crie uma exceção **checked** chamada `AutenticacaoException` que receba uma mensagem no construtor.

2. Crie uma classe `ServicoDeLogin` com:
   - Um atributo `Map<String, String>` inicializado diretamente no código com pelo menos 3 pares de login/senha (por exemplo: `"admin"/"1234"`, `"maria"/"abcd"`, `"joao"/"xyz9"`).
   - Um método `autenticar(String login, String senha) throws AutenticacaoException` que:
     - Lance `AutenticacaoException` com a mensagem `"Usuário não encontrado"` se o login não existir no mapa.
     - Lance `AutenticacaoException` com a mensagem `"Senha incorreta"` se o login existir mas a senha não corresponder.
     - Retorne a mensagem `"Bem-vindo, <login>!"` se as credenciais estiverem corretas.

3. Na classe `Main`:
   - Leia login e senha do usuário via `Scanner`.
   - Chame o método `autenticar` e exiba o retorno em caso de sucesso.
   - Trate `AutenticacaoException` exibindo a mensagem de erro.
   - Utilize um bloco `finally` para fechar o `Scanner` e exibir `"Conexão encerrada."`.

**Exemplos de execução:**

```
Login: admin
Senha: 1234
Bem-vindo, admin!
Conexão encerrada.
```

```
Login: admin
Senha: errada
Erro: Senha incorreta
Conexão encerrada.
```

```
Login: carlos
Senha: 1234
Erro: Usuário não encontrado
Conexão encerrada.
```

---

## Questão 3

Você está criando um módulo que recebe notas digitadas como texto (String) e as converte para valores numéricos, aplicando regras de validação.

1. Crie uma exceção **checked** chamada `NotaForaDeIntervaloException` que:
   - Estenda `Exception`.
   - Possua um atributo `double nota` com o valor que causou o erro.
   - Forneça um método `getNota()`.
   - Receba a nota e uma mensagem no construtor.

2. Crie uma classe `ConversorDeNotas` com o método:

   ```java
   public double converter(String entrada)
       throws NotaForaDeIntervaloException
   ```

   Esse método deve:
   - Converter a String para `double` usando `Double.parseDouble()`. Se a entrada não for um número válido, um `NumberFormatException` (que é **unchecked**) será lançado naturalmente — **não** trate essa exceção aqui; deixe-a propagar.
   - Se o valor convertido for menor que 0 ou maior que 10, lance `NotaForaDeIntervaloException` com a mensagem `"Nota fora do intervalo permitido (0 a 10)"`.
   - Caso contrário, retorne o valor convertido.

3. Na classe `Main`, leia 5 notas do usuário via `Scanner` (como Strings) e, para cada uma, chame `converter` dentro de um bloco `try`/`catch` que trate:
   - `NotaForaDeIntervaloException` — exibindo a mensagem e o valor da nota inválida.
   - `NumberFormatException` — exibindo `"Entrada inválida: '<entrada>' não é um número."`.

   Ao final, exiba a média das notas que foram convertidas com sucesso. Se nenhuma nota for válida, exiba `"Nenhuma nota válida foi informada."`.

**Exemplo de execução:**

```
Digite a nota 1: 8.5
Nota registrada: 8.5
Digite a nota 2: abc
Entrada inválida: 'abc' não é um número.
Digite a nota 3: 11
Nota fora do intervalo permitido (0 a 10). Valor informado: 11.0
Digite a nota 4: 7
Nota registrada: 7.0
Digite a nota 5: -2
Nota fora do intervalo permitido (0 a 10). Valor informado: -2.0
Média das notas válidas: 7.75
```

---

## Questão 4

Implemente um gerenciador simples de tarefas com controle de prazos.

1. Crie **duas** exceções personalizadas:
   - `TarefaInvalidaException` — **unchecked** (estende `RuntimeException`). Será usada para erros de dados da tarefa (título nulo/vazio, prazo nulo).
   - `PrazoExpiradoException` — **checked** (estende `Exception`). Será usada quando uma tarefa for marcada como concluída após o prazo. Deve possuir um atributo `LocalDate prazo` e um método `getPrazo()`.

2. Crie uma classe `Tarefa` com:
   - Atributos: `String titulo`, `LocalDate prazo`, `boolean concluida`.
   - No construtor `Tarefa(String titulo, LocalDate prazo)`:
     - Se `titulo` for `null` ou vazio, lance `TarefaInvalidaException` com a mensagem `"O título da tarefa não pode ser nulo ou vazio"`.
     - Se `prazo` for `null`, lance `TarefaInvalidaException` com a mensagem `"O prazo da tarefa não pode ser nulo"`.
   - Um método `concluir() throws PrazoExpiradoException` que:
     - Marca a tarefa como concluída (`concluida = true`).
     - Se `LocalDate.now()` for posterior ao prazo, lance `PrazoExpiradoException` com a mensagem `"A tarefa '<titulo>' foi concluída após o prazo"`, passando o prazo.

3. Na classe `Main`:
   - Crie 3 tarefas dentro de um bloco `try`/`catch`:
     - Uma com título válido e prazo futuro.
     - Uma com título vazio (para disparar `TarefaInvalidaException`).
     - Uma com título válido e prazo no passado.
   - Observe que a criação da tarefa com título vazio lança uma exceção **unchecked**, que pode ser tratada no `catch` mas não é obrigatória.
   - Para cada tarefa criada com sucesso, chame `concluir()` dentro de seu próprio bloco `try`/`catch` para tratar `PrazoExpiradoException`.
   - Use um bloco `finally` ao final de cada tentativa de conclusão para exibir o status da tarefa: `"Tarefa '<titulo>' - Concluída: <true/false>"`.

**Exemplo de saída esperada:**

```
Criando tarefa: Estudar exceções... OK
Criando tarefa com título vazio... Erro: O título da tarefa não pode ser nulo ou vazio
Criando tarefa: Entregar relatório... OK

Concluindo tarefa: Estudar exceções...
Tarefa concluída com sucesso.
Tarefa 'Estudar exceções' - Concluída: true

Concluindo tarefa: Entregar relatório...
Erro: A tarefa 'Entregar relatório' foi concluída após o prazo (prazo: 2025-01-15)
Tarefa 'Entregar relatório' - Concluída: true
```

---

## Questão 5

Um professor deseja um programa que leia a nota de um aluno pelo teclado (usando `Scanner`) e exiba o conceito correspondente:

| Faixa      | Conceito |
| ---------- | -------- |
| 9,0 – 10,0 | A        |
| 7,0 – 8,9  | B        |
| 5,0 – 6,9  | C        |
| < 5,0      | D        |

1. Crie uma classe `ConversorDeNotas` com um método `obterConceito(double nota)` que:
   - Lance `IllegalArgumentException` caso a nota seja menor que 0 ou maior que 10.
   - Retorne o conceito (`String`) correspondente à nota.
2. No método `main`, use `Scanner` para ler a nota digitada pelo usuário e chame `obterConceito`. O código deve conter:
   - Um bloco `try` envolvendo a leitura e a chamada ao método.
   - Um bloco `catch` para `InputMismatchException` (caso o usuário digite algo que não seja número).
   - Um bloco `catch` para `IllegalArgumentException` (caso a nota esteja fora da faixa válida).
   - Uma mensagem de erro adequada em cada bloco `catch`, seguida de uma ação útil (por exemplo, solicitar nova entrada ao usuário em vez de apenas imprimir o erro).
3. Coloque a lógica dentro de um laço que permita ao usuário tentar novamente até fornecer uma entrada válida.

---

## Questão 6

Um arquivo chamado `alunos.csv` contém dados de alunos no seguinte formato (um aluno por linha):

```
nome;nota1;nota2;nota3
Ana;8.5;7.0;9.0
Bruno;5.0;4.5;6.0
Carla;10.0;9.5;8.0
```

1. Crie um método `gerarRelatorio(String caminhoEntrada, String caminhoSaida)` que:
   - Leia o arquivo CSV linha a linha.
   - Calcule a média das três notas de cada aluno.
   - Escreva em um arquivo de saída (`relatorio.txt`) o nome do aluno e sua média, no formato: `Ana - Média: 8.17`.
2. Implemente **duas versões** desse método:
   - **Versão A — com `finally`:** abra `FileReader`/`BufferedReader` e `FileWriter`/`BufferedWriter` antes do `try`, e feche-os explicitamente no bloco `finally`.
   - **Versão B — com `try-with-resources`:** declare os recursos dentro do `try(...)`, eliminando a necessidade do `finally`.
3. Em ambas as versões, trate `FileNotFoundException` (arquivo de entrada inexistente) e `IOException` (erro durante leitura/escrita) com mensagens descritivas.
4. No `main`, chame ambas as versões e observe o comportamento quando o arquivo de entrada não existe.

---

## Questão 7

Considere um sistema simplificado de agendamento de serviços em uma oficina mecânica. A oficina possui horários disponíveis (por exemplo, `"08:00"`, `"10:00"`, `"14:00"`, `"16:00"`) e cada horário só pode ser ocupado por um cliente.

1. Crie duas exceções personalizadas (checked):
   - `HorarioIndisponivelException` — lançada quando o cliente tenta agendar um horário que já está ocupado. Deve armazenar o horário solicitado.
   - `AgendamentoInvalidoException` — lançada quando o horário informado não existe na lista de horários da oficina. Deve armazenar o horário inválido.

   Ambas devem estender `Exception` e possuir construtores que recebam uma mensagem descritiva e o horário.

2. Crie uma classe `Agenda` com:
   - Um `Map<String, String>` que associa horários a nomes de clientes (valor `null` significa horário livre).
   - Um método `agendar(String horario, String cliente) throws HorarioIndisponivelException, AgendamentoInvalidoException` que:
     - Lance `AgendamentoInvalidoException` se o horário não estiver na lista.
     - Lance `HorarioIndisponivelException` se o horário já estiver ocupado, informando qual cliente já ocupa aquele horário.
     - Caso contrário, registre o agendamento.
   - Um método `listarAgendamentos()` que exiba todos os horários e seus respectivos clientes.
3. No `main`, simule as seguintes situações, tratando cada exceção com `try/catch`:
   - Agendar um horário válido e livre.
   - Tentar agendar um horário que já está ocupado.
   - Tentar agendar um horário que não existe (por exemplo, `"12:00"`).
4. Crie também um método `agendarOuSugerir(String horario, String cliente)` que **não** trate as exceções internamente, mas as declare com `throws`, delegando o tratamento ao código chamador.

---

## Questão 8

Considere um sistema simples de processamento de pagamentos que suporta dois meios: saldo em conta e cartão de crédito.

1. Crie a seguinte hierarquia de exceções (todas checked):

   ```
   PagamentoException (extends Exception)
   ├── SaldoInsuficienteException
   └── CartaoExpiradoException
   ```

   - `PagamentoException`: exceção base, com construtores que aceitem mensagem e causa (`Throwable`).
   - `SaldoInsuficienteException`: deve armazenar o saldo disponível e o valor solicitado.
   - `CartaoExpiradoException`: deve armazenar a data de validade do cartão.

2. Crie uma classe `ProcessadorDePagamento` com:
   - Um método `pagarComSaldo(double valor, double saldoDisponivel) throws SaldoInsuficienteException`.
   - Um método `pagarComCartao(double valor, String validadeCartao) throws CartaoExpiradoException` (considere que o cartão está expirado se a validade for anterior ao mês/ano atual; use `YearMonth` para a comparação).
   - Um método `realizarPagamento(double valor, String meio, double saldo, String validade) throws PagamentoException` que:
     - Chame o método de pagamento apropriado com base no `meio` (`"saldo"` ou `"cartao"`).
     - Caso uma exceção seja lançada pelos métodos internos, **encapsule-a** em uma nova `PagamentoException` com uma mensagem descritiva e a exceção original como causa (exceção encadeada).
3. No `main`, chame `realizarPagamento` com cenários que provoquem cada tipo de erro. Ao capturar `PagamentoException`, use `getCause()` para identificar e exibir a causa original do problema, incluindo os detalhes específicos (saldo disponível, validade do cartão etc.).
4. Para cada exceção capturada, exiba:
   - A mensagem da `PagamentoException`.
   - O tipo da causa original (`getCause().getClass().getSimpleName()`).
   - Os detalhes específicos da causa (fazendo cast para o tipo correto).
