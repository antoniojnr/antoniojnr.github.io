---
title: "Lista 06"
weight: 1
bookCollapseSection: true
#bookHidden: true
---

# Lista 06

## Instruções

- Observe com atenção os requisitos e como os pacotes para cada questão devem ser organizados.
- Todos os exercícios devem ser feitos em um único projeto do IntelliJ.
- A correção será feita presencialmente, com o professor executando os casos de teste na sua máquina.

## Exercícios

**Questão 01.** _Esta questão é propositalmente aberta à interpretação. Não serão fornecidos mais detalhes. Você deverá trabalhar nela buscando se aproximar ao máximo da descrição abaixo._

Uma locadora de veículos precisa cadastrar três categorias de veículo no sistema. Todo veículo tem placa e ano de fabricação. Veículos alugados para pessoas físicas também registram o CPF do locatário. Veículos alugados para empresas registram o CNPJ da contratante e um código interno de identificação da frota.

O sistema deve ser capaz de exibir uma descrição resumida de qualquer veículo usando um único método, independentemente da categoria. Cada categoria produz uma descrição diferente, mas a chamada ao método é sempre a mesma.

Implemente as classes necessárias e escreva um `main` que cadastra um veículo de cada categoria e imprime sua descrição.

> Identifique o que é comum a todas as categorias e o que é exclusivo de cada uma. Pense em onde cada dado deve ser inicializado e o que é necessário fazer quando o construtor de uma subclasse precisa dos dados que a superclasse já sabe inicializar.

---

**Questão 02.** Um jogo por turnos possui três tipos de personagem: guerreiro, mago e arqueiro. Em cada turno, todos os personagens vivos atacam um alvo — mas cada tipo ataca de forma diferente e com restrições distintas: o mago só consegue lançar feitiços se tiver mana suficiente; o arqueiro só ataca se ainda tiver flechas. O guerreiro não tem restrição de recurso.

O motor do jogo não conhece os tipos concretos dos personagens na lista — ele apenas percorre todos e ordena o ataque. Cada personagem sabe como atacar; o motor só precisa chamar o método.

Implemente a hierarquia de personagens e a classe `TurnoDeJogo`. Garanta que pontos de vida nunca fiquem negativos.

**`Personagem`** (abstrata)

- `Personagem(String nome, int pontosDeVida)`
- `String getNome()`
- `int getPontosDeVida()`
- `boolean estaVivo()` — indica se o personagem ainda tem pontos de vida
- `void receberDano(int dano)` — reduz os pontos de vida, sem deixá-los negativos
- `void executarAtaque(Personagem alvo)` — abstrato; cada subclasse define seu próprio comportamento de ataque
- `String getClasse()` — abstrato; retorna o nome da classe do personagem

**`Guerreiro`** — estende `Personagem`

- `Guerreiro(String nome, int pontosDeVida, int danoEspada)`

**`Mago`** — estende `Personagem`

- `Mago(String nome, int pontosDeVida, int danoMagico, int custoMana, int manaAtual)`
- `int getManaAtual()`

**`Arqueiro`** — estende `Personagem`

- `Arqueiro(String nome, int pontosDeVida, int danoFlecha, int flechasRestantes)`
- `int getFlechasRestantes()`

**`TurnoDeJogo`**

- `void adicionarPersonagem(Personagem p)` — registra um personagem no turno
- `void executarTurno(Personagem alvo)` — cada personagem vivo ataca o alvo
- `int contarVivos()` — retorna quantos personagens ainda estão vivos

> Quando um comportamento é compartilhado por todos os personagens (como receber dano ou verificar se está vivo), ele deve estar em um único lugar. Quando o comportamento é necessariamente diferente entre os tipos (como atacar), a superclasse deve exigir que cada subclasse forneça sua própria implementação.

---

**Questão 03.** A livraria **Páginas & Cia** mantém um catálogo com três tipos de produto: livros físicos, e-books e audiobooks. Todo produto tem título, autor e preço. Livros físicos registram também o número de páginas. E-books registram o formato do arquivo (PDF, EPUB etc.). Audiobooks registram a duração em minutos e o nome do narrador.

O catálogo é representado pela classe `CatalogoPaginasECia`, que armazena os produtos em uma lista. Ao cadastrar um novo produto, o catálogo verifica se ele já existe antes de inserir. Dois produtos são considerados duplicata quando têm o mesmo título e o mesmo autor, independentemente do tipo. Se o produto for inserido com sucesso, o catálogo registra a operação em um log interno. Esse log é gerado automaticamente a partir da representação textual de cada produto, que deve ser legível e incluir os dados relevantes de cada tipo.

A classe `CatalogoPaginasECia` já está parcialmente implementada e não deve ser alterada:

```java
public class CatalogoPaginasECia {

    private List<Produto> produtos = new ArrayList<>();
    private List<String> log = new ArrayList<>();

    public boolean cadastrar(Produto p) {
        if (produtos.contains(p)) {
            return false;
        }
        produtos.add(p);
        log.add("Cadastrado: " + p);
        return true;
    }

    public List<String> getLog() {
        return Collections.unmodifiableList(log);
    }

    public List<Produto> getProdutos() {
        return Collections.unmodifiableList(produtos);
    }
}
```

Implemente a hierarquia de produtos de forma que o catálogo funcione corretamente.

**`Produto`**

- `Produto(String titulo, String autor, double preco)`
- `String getTitulo()`
- `String getAutor()`
- `double getPreco()`
- `String toString()` — representação textual do produto; cada subclasse produz uma saída diferente
- `boolean equals(Object obj)` — dois produtos são iguais se têm o mesmo título e o mesmo autor, independentemente do tipo concreto

**`LivroFisico`** — estende `Produto`

- `LivroFisico(String titulo, String autor, double preco, int numeroPaginas)`
- `int getNumeroPaginas()`
- `String toString()` — inclui os dados herdados e o número de páginas

**`Ebook`** — estende `Produto`

- `Ebook(String titulo, String autor, double preco, String formatoArquivo)`
- `String getFormatoArquivo()`
- `String toString()` — inclui os dados herdados e o formato do arquivo

**`Audiobook`** — estende `Produto`

- `Audiobook(String titulo, String autor, double preco, int duracaoMinutos, String narrador)`
- `int getDuracaoMinutos()`
- `String getNarrador()`
- `String toString()` — inclui os dados herdados, a duração e o narrador

---

**Questão 04.** A plataforma **LearnHub** conecta instrutores e alunos. Qualquer entidade da plataforma que possa ser avaliada por usuários deve implementar um contrato comum: expor sua nota média e gerar um resumo público para exibição nos resultados de busca. Esse contrato é compartilhado por tipos que não têm relação de herança entre si — cursos, instrutores e trilhas de aprendizado são coisas distintas, mas todos podem ser avaliados.

Além disso, qualquer entidade que possa ser comprada diretamente deve implementar um segundo contrato: informar o preço e gerar um recibo de compra. Cursos são compráveis; instrutores e trilhas não.

Implemente os contratos como interfaces e as classes que os utilizam. O sistema deve ser capaz de processar uma lista de entidades avaliáveis sem conhecer seus tipos concretos.

**Interface `Avaliavel`**

- `double getNotaMedia()` — retorna a nota média das avaliações recebidas
- `String gerarResumoPublico()` — retorna uma string para exibição nos resultados de busca

**Interface `Compravel`**

- `double getPreco()` — retorna o preço de compra
- `String gerarRecibo(String nomeComprador)` — retorna um recibo de compra formatado

**`Curso`** — implementa `Avaliavel` e `Compravel`

- `Curso(String titulo, String nomeInstrutor, double notaMedia, double preco)`
- `String getTitulo()`
- `String getNomeInstrutor()`

**`Instrutor`** — implementa apenas `Avaliavel`

- `Instrutor(String nome, String especialidade, double notaMedia)`
- `String getNome()`
- `String getEspecialidade()`

**`TrilhaDeAprendizado`** — implementa apenas `Avaliavel`

- `TrilhaDeAprendizado(String nome, int numeroCursos, double notaMedia)`
- `String getNome()`
- `int getNumeroCursos()`

**`PlataformaLearnHub`**

- `void cadastrar(Avaliavel a)` — registra qualquer entidade avaliável
- `List<Avaliavel> listarPorNotaMinima(double notaMinima)` — retorna as entidades com nota média igual ou superior ao valor informado
- `List<Compravel> listarCompravel()` — retorna apenas as entidades que também são compráveis
- `String gerarPaginaDeBusca(double notaMinima)` — percorre as entidades com nota suficiente e concatena os resumos públicos de cada uma, chamando `gerarResumoPublico()` via referência `Avaliavel`
- `String processarCompra(String nomeComprador, String tituloCurso)` — localiza o curso pelo título, e se ele for `Compravel`, gera e retorna o recibo
- `List<String> gerarRecibosEmLote(String nomeComprador)` — percorre todas as entidades, filtra as compráveis e retorna uma lista de recibos

> Uma classe pode implementar mais de uma interface ao mesmo tempo. Uma variável do tipo de uma interface pode referenciar qualquer objeto cuja classe a implemente, sem que o código conheça o tipo concreto. Para `listarCompravel()`, pense em como verificar se uma entidade avaliável também satisfaz o segundo contrato.

<!-- **Questão x.** A startup Notifica.ai oferece uma plataforma de disparo de mensagens para outras empresas. Seus clientes configuram campanhas que podem enviar notificações por e-mail ou SMS dependendo do perfil do destinatário. Internamente, todas as notificações geradas por uma campanha entram em uma fila única de processamento. Um componente chamado roteador é responsável por percorrer essa fila e separar as notificações por canal antes do envio — e-mails seguem para o servidor de email, SMS seguem para a API da operadora. O roteador também precisa barrar os SMS cujo conteúdo ultrapassa o limite de caracteres do canal, e isolar as notificações sem canal definido para revisão manual.

Implemente a hierarquia de notificações e a classe `Roteador` com os métodos de filtragem necessários.

**`Notificacao`**

- `Notificacao(String remetente, String mensagem)`
- `String getRemetente()`
- `String getMensagem()`

**`NotificacaoEmail`** — estende `Notificacao`

- `NotificacaoEmail(String remetente, String mensagem, String destinatario, String assunto)`
- `String getDestinatario()`
- `String getAssunto()`

**`NotificacaoSMS`** — estende `Notificacao`

- `NotificacaoSMS(String remetente, String mensagem, String numeroTelefone, int limiteCaracteres)`
- `String getNumeroTelefone()`
- `int getLimiteCaracteres()`
- `boolean mensagemDentroDoLimite()` — indica se o conteúdo cabe dentro do limite do operador

**`Roteador`**

- `void enfileirar(Notificacao n)` — adiciona uma notificação à fila
- `List<NotificacaoEmail> filtrarEmails()` — retorna apenas as notificações do tipo e-mail
- `List<NotificacaoSMS> filtrarSMS()` — retorna apenas as notificações do tipo SMS
- `List<NotificacaoSMS> filtrarSMSForaDoLimite()` — retorna os SMS cujo conteúdo excede o limite do operador
- `List<Notificacao> filtrarGenericas()` — retorna as notificações que não são de nenhum canal específico

> Para acessar atributos que existem apenas em um subtipo específico, é preciso primeiro confirmar com que tipo se está lidando. Pense em como fazer isso de forma segura antes de realizar a conversão.

--- -->
