---
title: "Lista 04"
weight: 1
bookCollapseSection: true
#bookHidden: true
---

# Lista 04

## Instruções

- Observe com atenção os requisitos e como os pacotes para cada questão devem ser organizados.
- Todos os exercícios devem ser feitos em um único projeto do IntelliJ.
- A correção será feita presencialmente, com o professor executando os casos de teste na sua máquina.
- Baixe os casos de teste {{< button href="/docs/disciplinas/poo-ads/exercicios/testes-lista04-20261.zip" >}}aqui{{< /button >}}
- Respeite a estrutura de pacotes também no diretório de testes, mas mova para o diretório de testes do seu projeto apenas os casos de testes em que estiver trabalhando. Caso contrário, seu projeto apresentará erro de compilação enquanto não implementar todas as classes e métodos usados nos casos de testes.

## Exercícios

**Questão 01.** Implemente a classe `Receita` que representa uma receita culinária cadastrada em um aplicativo.

**Atributos:**

| Atributo            | Tipo           | Descrição                     |
| ------------------- | -------------- | ----------------------------- |
| `nome`              | `String`       | Nome da receita               |
| `tempoPreparo`      | `int`          | Tempo de preparo em minutos   |
| `rendimentoPorcoes` | `int`          | Quantidade de porções geradas |
| `ingredientes`      | `List<String>` | Lista interna de ingredientes |

**Requisitos:**

1. As classes devem estar dentro do pacote `lista04.receita`.
1. O construtor deve lançar `IllegalArgumentException` se `nome` for nulo ou vazio, ou se `tempoPreparo` ou `rendimentoPorcoes` forem menores ou iguais a zero.
1. Os _setters_ de `tempoPreparo` e `rendimentoPorcoes` devem lançar `IllegalArgumentException` para valores inválidos, com mensagem descritiva.
1. O método `getIngredientes()` deve retornar uma **cópia** da lista interna, nunca a referência direta.
1. O método `adicionarIngrediente(String ingrediente)` deve ignorar silenciosamente entradas nulas ou vazias (sem lançar exceção — são situações esperadas em tempo de execução).
1. O método `removerIngrediente(String ingrediente)` deve remover o ingrediente se ele existir na lista, ignorando silenciosamente caso não exista.

---

**Questão 02.** Implemente a classe `Drone` que representa o estado operacional de um drone de monitoramento.

**Atributos:**

| Atributo        | Tipo      | Descrição                                     |
| --------------- | --------- | --------------------------------------------- |
| `identificador` | `String`  | Código único do drone (imutável após criação) |
| `bateria`       | `int`     | Nível de bateria em % (0 a 100)               |
| `altitude`      | `int`     | Altitude atual em metros (0 a 120)            |
| `emVoo`         | `boolean` | Indica se o drone está em voo                 |

**Requisitos:**

As classes devem estar dentro do pacote `lista04.drone`.

1. O construtor deve lançar `IllegalArgumentException` se `identificador` for nulo ou vazio.
2. `identificador` não possui _setter_ — é definido apenas no construtor.
3. `setBateria(int valor)` deve lançar `IllegalArgumentException` se o valor estiver fora do intervalo 0–100, com mensagem indicando o valor recebido e o intervalo esperado.
4. `setAltitude(int metros)` deve lançar `IllegalArgumentException` se o valor for negativo ou acima de 120. Deve ignorar a operação (sem lançar exceção) caso o drone não esteja em voo.
5. O método `decolar()` não deve alterar o estado `emVoo` caso a bateria seja menor ou igual a 20%. Não lança exceção, pois bateria baixa é uma condição operacional normal.
6. O método `pousar()` define `emVoo = false` e `altitude = 0`.

---

**Questão 03.** Implemente a classe `Episodio` que representa um episódio de um podcast.

**Atributos:**

| Atributo         | Tipo     | Descrição                                            |
| ---------------- | -------- | ---------------------------------------------------- |
| `titulo`         | `String` | Título do episódio                                   |
| `numero`         | `int`    | Número do episódio (imutável após criação)           |
| `duracaoMinutos` | `int`    | Duração em minutos                                   |
| `status`         | `String` | Status: `"RASCUNHO"`, `"PUBLICADO"` ou `"ARQUIVADO"` |

**Requisitos:**

As classes devem estar dentro do pacote `lista04.podcast`.

1. O construtor deve lançar `IllegalArgumentException` nos seguintes casos, com mensagens descritivas:
   - `titulo` nulo ou vazio.
   - `numero` menor ou igual a zero.
   - `duracaoMinutos` menor ou igual a zero.
2. O _setter_ de `duracaoMinutos` deve lançar `IllegalArgumentException` para valores inválidos.
3. `numero` não possui _setter_.
4. `status` não possui _setter_ direto. As transições são feitas por três métodos, que ignoram a operação (sem lançar exceção) quando a transição não é permitida:
   - `publicar()`: muda de `"RASCUNHO"` para `"PUBLICADO"`. Inválido em qualquer outro estado.
   - `arquivar()`: muda de `"PUBLICADO"` para `"ARQUIVADO"`. Inválido em qualquer outro estado.
   - `restaurar()`: muda de `"ARQUIVADO"` para `"RASCUNHO"`. Inválido em qualquer outro estado.

---

**Questão 04.** Implemente as classes `Musica` e `Playlist`.

**Classe `Musica`:**

| Atributo          | Tipo     | Descrição                 |
| ----------------- | -------- | ------------------------- |
| `titulo`          | `String` | Título da música          |
| `artista`         | `String` | Nome do artista           |
| `duracaoSegundos` | `int`    | Duração em segundos       |
| `prioridade`      | `String` | `"NORMAL"` ou `"URGENTE"` |

**Requisitos gerais:**

As classes devem estar dentro do pacote `lista04.musica`.

**Requisitos de `Musica`:**

1. O construtor deve lançar `IllegalArgumentException` se `titulo` ou `artista` forem nulos ou vazios, ou se `duracaoSegundos` for menor ou igual a zero.
2. O _setter_ de `prioridade` deve lançar `IllegalArgumentException` se o valor não for `"NORMAL"` ou `"URGENTE"`.

**Classe `Playlist`:**

| Atributo | Tipo           | Descrição                                          |
| -------- | -------------- | -------------------------------------------------- |
| `nome`   | `String`       | Nome da playlist                                   |
| `fila`   | `List<Musica>` | Lista interna de músicas (não exposta diretamente) |

**Requisitos de `Playlist`:**

1. O construtor deve lançar `IllegalArgumentException` se `nome` for nulo ou vazio.
2. Não forneça _getter_ para `fila`.
3. O método `adicionar(Musica m)` deve lançar `IllegalArgumentException` se `m` for nulo. Músicas `"URGENTE"` são inseridas antes das `"NORMAL"`; músicas `"NORMAL"` vão para o final.
4. Implemente também os métodos:
   - `remover(String titulo)`: remove a primeira música com o título informado, ignorando silenciosamente caso não exista.
   - `proximaMusica()`: retorna (sem remover) a primeira música da fila, ou `null` se vazia.
   - `reproduzirProxima()`: remove e retorna a primeira música da fila, ou `null` se vazia.
   - `tamanho()`: retorna o número de músicas na fila.
   - `listar()`: exibe título, artista e prioridade de cada música na ordem atual.

---

**Questão 05.** Implemente as classes `ItemLaboratorio` e `EstoqueLaboratorio`.

**Classe `ItemLaboratorio`:**

| Atributo               | Tipo     | Descrição                                                          |
| ---------------------- | -------- | ------------------------------------------------------------------ |
| `codigo`               | `String` | Código do item (imutável)                                          |
| `nome`                 | `String` | Nome do item                                                       |
| `quantidadeDisponivel` | `int`    | Quantidade atual em estoque (≥ 0)                                  |
| `quantidadeMinima`     | `int`    | Quantidade mínima de segurança (> 0)                               |
| `status`               | `String` | `"NORMAL"`, `"ALERTA"` ou `"ESGOTADO"` — calculado automaticamente |

**Regras de status:**

- `"ESGOTADO"`: quantidade disponível igual a zero.
- `"ALERTA"`: quantidade disponível maior que zero e menor ou igual à quantidade mínima.
- `"NORMAL"`: quantidade disponível maior que a quantidade mínima.

**Requisitos gerais:**

As classes devem estar dentro do pacote `lista04.laboratorio`.

**Requisitos de `ItemLaboratorio`:**

1. O construtor deve lançar `IllegalArgumentException` se `codigo` ou `nome` forem nulos ou vazios, se `quantidadeDisponivel` for negativa, ou se `quantidadeMinima` for menor ou igual a zero.
2. `codigo` não possui _setter_.
3. `status` não possui _setter_ — é recalculado automaticamente sempre que `quantidadeDisponivel` for alterada.
4. `quantidadeDisponivel` só é alterada pelos métodos:
   - `entrada(int quantidade)`: deve lançar `IllegalArgumentException` se `quantidade` for menor ou igual a zero.
   - `saida(int quantidade)`: deve lançar `IllegalArgumentException` se `quantidade` for menor ou igual a zero. Deve ignorar a operação (sem lançar exceção) se o resultado deixar o estoque negativo, uma vez que falta de estoque é uma situação operacional esperada.

**Classe `EstoqueLaboratorio`:**

| Atributo | Tipo                    | Descrição              |
| -------- | ----------------------- | ---------------------- |
| `itens`  | `List<ItemLaboratorio>` | Lista interna de itens |

Implemente os métodos:

- `cadastrar(ItemLaboratorio item)`: deve lançar `IllegalArgumentException` se `item` for nulo.
- `buscarPorCodigo(String codigo)`: retorna o item correspondente ou `null`.
- `listarEmAlerta()`: retorna uma **cópia** da lista contendo apenas itens com status `"ALERTA"` ou `"ESGOTADO"`.

---

**Questão 06.** Implemente as classes `Consulta` e `AgendaMedica`.

**Classe `Consulta`:**

| Atributo       | Tipo     | Descrição                                                    |
| -------------- | -------- | ------------------------------------------------------------ |
| `id`           | `int`    | Identificador único (imutável)                               |
| `nomePaciente` | `String` | Nome do paciente                                             |
| `nomeMedico`   | `String` | Nome do médico                                               |
| `dataHora`     | `String` | Data e hora no formato `"DD/MM/AAAA HH:MM"`                  |
| `status`       | `String` | `"AGENDADA"`, `"CONFIRMADA"`, `"CANCELADA"` ou `"REALIZADA"` |
| `observacoes`  | `String` | Observações adicionais (pode ser vazio)                      |

**Regras de transição de status:**

| De → Para                  | Permitido? |
| -------------------------- | ---------- |
| `AGENDADA` → `CONFIRMADA`  | Sim        |
| `AGENDADA` → `CANCELADA`   | Sim        |
| `CONFIRMADA` → `REALIZADA` | Sim        |
| `CONFIRMADA` → `CANCELADA` | Sim        |
| `CANCELADA` → qualquer     | Não        |
| `REALIZADA` → qualquer     | Não        |

**Requisitos gerais:**

As classes devem estar dentro do pacote `lista04.agendaMedica`.

**Requisitos de `Consulta`:**

1. O construtor deve lançar `IllegalArgumentException` se `nomePaciente`, `nomeMedico` ou `dataHora` forem nulos ou vazios, ou se `id` for menor ou igual a zero.
2. `id` não possui _setter_.
3. `status` não possui _setter_ direto. As transições são feitas pelos métodos `confirmar()`, `cancelar()` e `realizar()`, que ignoram a operação (sem lançar exceção) quando a transição não é permitida.
4. `observacoes` possui _getter_ e _setter_ sem restrições.
5. Os demais atributos possuem apenas _getter_.

**Classe `AgendaMedica`:**

| Atributo    | Tipo             | Descrição                  |
| ----------- | ---------------- | -------------------------- |
| `consultas` | `List<Consulta>` | Lista interna de consultas |

Implemente os métodos:

- `agendar(Consulta c)`: deve lançar `IllegalArgumentException` se `c` for nulo.
- `buscarPorId(int id)`: retorna a consulta ou `null`.
- `listarPorMedico(String nomeMedico)`: retorna uma **cópia** da lista filtrada pelo médico.
- `listarAtivas()`: retorna consultas com status `"AGENDADA"` ou `"CONFIRMADA"`.

---

**Questão 07.** Implemente as classes `Documento` e `FilaDeImpressao`.

**Classe `Documento`:**

| Atributo        | Tipo     | Descrição                                       |
| --------------- | -------- | ----------------------------------------------- |
| `nome`          | `String` | Nome do arquivo                                 |
| `numeroPaginas` | `int`    | Número de páginas (> 0)                         |
| `prioridade`    | `String` | `"NORMAL"` ou `"URGENTE"`                       |
| `status`        | `String` | `"AGUARDANDO"`, `"IMPRIMINDO"` ou `"CONCLUIDO"` |

**Requisitos gerais:**

As classes devem estar dentro do pacote `lista04.impressao`.

**Requisitos de `Documento`:**

1. O construtor deve lançar `IllegalArgumentException` se `nome` for nulo ou vazio, se `numeroPaginas` for menor ou igual a zero, ou se `prioridade` não for `"NORMAL"` ou `"URGENTE"`.
2. O status inicia como `"AGUARDANDO"` e não possui _setter_ direto. As transições seguem a ordem `AGUARDANDO → IMPRIMINDO → CONCLUIDO` e são feitas pelos métodos `iniciarImpressao()` e `concluir()`, que ignoram a operação (sem lançar exceção) quando chamados fora de ordem.

**Classe `FilaDeImpressao`:**

| Atributo | Tipo              | Descrição                               |
| -------- | ----------------- | --------------------------------------- |
| `nome`   | `String`          | Nome da impressora                      |
| `fila`   | `List<Documento>` | Lista interna — não exposta diretamente |

**Requisitos de `FilaDeImpressao`:**

1. O construtor deve lançar `IllegalArgumentException` se `nome` for nulo ou vazio.
2. Não forneça _getter_ para `fila`.
3. Implemente os métodos:
   - `adicionar(Documento d)`: deve lançar `IllegalArgumentException` se `d` for nulo. Documentos `"URGENTE"` são inseridos ao final do bloco de urgentes já existente (antes dos normais); documentos `"NORMAL"` vão para o final da fila.
   - `cancelar(String nome)`: remove da fila o documento com aquele nome **somente se seu status for `"AGUARDANDO"`**. Ignora (sem lançar exceção) se o documento não for encontrado ou não puder ser cancelado.
   - `imprimirProximo()`: pega o primeiro documento da fila, chama `iniciarImpressao()` e depois `concluir()`, exibindo nome e número de páginas. Remove-o da fila ao concluir. Exibe mensagem se a fila estiver vazia.
   - `exibirFila()`: mostra nome, prioridade e status de cada documento na ordem atual.
   - `totalPaginasNaFila()`: retorna a soma das páginas de todos os documentos ainda na fila.
