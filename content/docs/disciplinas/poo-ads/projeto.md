---
title: "Projeto"
weight: 1
#bookHidden: true
---

# Projeto

**Período:** 2026.2

## 1. Resumo

Todos os projetos devem ser desenvolvidos em Java, utilizando o paradigma de Programação Orientada a Objetos. Cada grupo deve implementar uma **aplicação completa** ou um **jogo** que aplique os **conceitos e técnicas** estudados na disciplina. O projeto deve incluir:

- **Tratamento de exceções**;
- **Interface gráfica**, em Java Swing, JavaFX ou outra tecnologia de sua escolha (em jogos, é possível usar Java 2D para os gráficos);
- **Persistência de dados**, em arquivos ou banco de dados.

O projeto poderá ser feito individualmente ou em equipes de até 3 pessoas. É possível também dividir um projeto entre mais de uma equipe: por exemplo, uma equipe responsável pelo frontend e outra pelo backend. **Converse com o professor sobre a divisão antes de iniciar**, pois cada equipe será avaliada pelo escopo que lhe couber, e esse escopo precisa ser acordado previamente.

> Os projetos podem usar tecnologias, bibliotecas e frameworks que não foram abordados na disciplina, desde que o professor aprove previamente. Essa aprovação serve para avaliar se a equipe terá tempo hábil para executar o projeto. Projetos desenvolvidos em outra linguagem, ou que usem tecnologias não discutidas com o professor, poderão ter a nota reduzida.

## 2. Requisitos Funcionais

### 2.1. Orientação a Objetos

O projeto deve utilizar adequadamente os conceitos de orientação a objetos, como:

- Classes e Objetos
- Composição
- Herança
- Exceções
- Polimorfismo
- Encapsulamento
- Interfaces e Classes Abstratas

Não utilize conceitos que você julgue desnecessários no seu código. Você não perderá pontos por não usar quaisquer dos conceitos mencionados aqui, mas _caso seja arguido durante a apresentação_, deverá ser capaz de justificar a utilização ou não utilização dos conceitos questionados.

### 2.2. Interface Gráfica

**Se você vai desenvolver um jogo, passe para a seção 2.3.**

A aplicação deve possuir uma interface gráfica desenvolvida em Java Swing, JavaFX ou outro framework à sua escolha, que permita a interação do usuário com o sistema.

#### Telas e navegação

- A interface deve incluir, no mínimo, 3 telas com funcionalidades distintas e relevantes para a aplicação. Telas auxiliares simples — como confirmações genéricas ou telas "sobre" — não contam para esse mínimo.
- O fluxo de navegação entre telas deve ser intuitivo. Ações frequentes não devem exigir muitos cliques ou transições de tela desnecessárias. Se uma operação central da aplicação for trabalhosa de realizar, isso será considerado um problema de usabilidade.
- Deve ser possível retornar ou cancelar uma ação sem perder o contexto anterior.

#### Componentes e interação

- Devem ser utilizados componentes gráficos adequados à natureza de cada funcionalidade, como botões, menus, caixas de texto, tabelas, listas, etc.
- Caso sua equipe esteja desenvolvendo um jogo, a exigência de componentes convencionais como tabelas e menus não se aplica, mas os demais requisitos desta seção continuam valendo.

#### Feedback visual

- A interface deve informar o usuário sobre o resultado de suas ações. Em caso de erro, como campos inválidos, falha ao salvar ou operação não permitida, deve ser exibida uma mensagem clara e compreensível, não um código de erro ou _stack trace_.
- Operações que alteram dados (como salvar, excluir ou confirmar) devem ter algum tipo de confirmação visual de sucesso.

#### Responsividade

Aplicações desktop desenvolvidas em JavaFX ou Java Swing não precisam se adaptar a diferentes tamanhos de tela, desde que funcionem corretamente na resolução padrão utilizada durante a apresentação.

### 2.3. Interface Gráfica (Jogos)

**Se você vai desenvolver uma aplicação (e não um jogo), volte para a seção 2.2.**

O jogo deve ser desenvolvido com a API Java 2D e deve permitir que o jogador interaja com ele em tempo real.

#### Telas e navegação

- O jogo deve incluir, no mínimo, 3 telas ou estados distintos: **menu inicial**, **tela de jogo** e **tela de fim de jogo** (vitória, derrota ou ambas).
- O jogador deve conseguir iniciar uma nova partida e voltar ao menu sem precisar fechar e reabrir o programa.
- Deve ser possível pausar o jogo e retomá-lo sem perder o progresso da partida.

#### Renderização e animação

- Os gráficos devem ser desenhados a partir de um _game loop_, com atualização de estado e renderização separadas da lógica de interface.
- O jogo deve ter elementos visuais distintos para o jogador, para os adversários ou obstáculos e para o cenário. Podem ser sprites, formas geométricas ou outros recursos, desde que sejam facilmente distinguíveis.

#### Mecânicas e conteúdo

O jogo deve ter, no mínimo:

- **Duas fases ou cenários distintos**, com transição entre eles;
- **Movimento controlado pelo jogador**, por meio do personagem principal;
- **Inimigos ou NPCs com movimento autônomo**, isto é, que se movem sem comando do jogador;
- **Interação com inimigos ou NPCs**, seja para coletar informação, itens ou batalha;
- **Itens coletáveis**, que produzam algum efeito no jogo (pontos, vida, poder, chave, etc.);
- **Interação com objetos do cenário**, como portas, alavancas, caixas ou obstáculos;
- **Detecção de colisão** entre os elementos relevantes do jogo;
- **Condições de vitória e de derrota** claras, que encerrem a partida.

Projetos de jogos que não envolvam essas mecânicas precisam ser discutidos previamente com o professor.

#### Controles e interação

- O jogo deve responder a teclado, mouse ou ambos, e os controles devem ser explicados ao jogador (na tela de menu, em uma tela de ajuda ou na própria tela de jogo).
- A resposta aos comandos deve ser imediata. Atrasos perceptíveis entre a ação do jogador e o efeito na tela serão considerados problema de usabilidade.

#### Feedback visual

- O jogo deve exibir ao jogador as informações necessárias para acompanhar a partida, como pontuação, vidas, tempo, nível ou outro indicador de progresso relevante (HUD).
- Eventos importantes, como colisões, dano, coleta de itens, vitória ou derrota, devem ter algum tipo de resposta visual, sonora ou ambas.
- Em caso de erro (como falha ao carregar um recurso ou ao salvar o progresso), deve ser exibida uma mensagem clara, não um código de erro ou _stack trace_.

#### Responsividade

Jogos desktop não precisam se adaptar a diferentes tamanhos de tela, desde que funcionem corretamente na resolução utilizada durante a apresentação. A taxa de quadros deve se manter estável nessa configuração.

### 2.3. Persistência de Dados

O projeto deve implementar persistência de dados.

- Dados devem ser salvos e carregados a partir de arquivos (texto ou binários) ou de um banco de dados.
- O sistema deve ser capaz de operar com dados persistidos entre execuções.
- A solução deve ser robusta o suficiente para não perder dados em situações comuns de uso, como encerrar o programa normalmente ou reiniciá-lo.

### 2.4. Extra

Os itens a seguir podem render até 20 pontos extras, que cobrem nota não obtida nos critérios principais. Veja a seção **Critérios de Avaliação** para entender como essa pontuação funciona.

- Web scraping
- Sockets (por exemplo, modo multiplayer em rede ou placar online)
- Padrões de projeto (por exemplo, State, Observer, Object Pool, Component)
- Conexão com APIs de terceiros (inteligência artificial, LLMs, processamento de imagens, etc.)
- Inteligência artificial para inimigos ou NPCs, como busca de caminho (A\*) ou máquina de estados com comportamentos distintos
- Geração procedural de fases ou cenários
- Carregamento de fases a partir de arquivos externos (JSON, XML ou editores de mapas como o Tiled)
- Física mais elaborada (gravidade, aceleração, saltos, colisões com formas variadas)
- Salvamento e carregamento do progresso da partida

## 3. Requisitos Não-Funcionais

### 3.1. Qualidade do Código

O código deve ser bem estruturado e seguir boas práticas de programação. [Veja alguns requisitos detalhados aqui](/docs/disciplinas/poo-ads/qualidade-codigo/).

### 3.2. Documentação

O projeto deve incluir documentação que descreva:

- A estrutura do sistema (pode usar diagrama de classes para auxiliar, mas não é obrigatório).
- Como configurar e executar o projeto.
- Descrição das funcionalidades principais.

A documentação pode estar no `README.md` do repositório ou em outro formato, desde que cubra os itens acima e esteja acessível no repositório do GitHub.

### 3.3. Entregáveis

Todos os itens abaixo devem estar em um repositório do GitHub até a **data de entrega**. O repositório deve estar organizado e legível — evite fazer commit de arquivos desnecessários como pastas de build, arquivos temporários ou configurações locais de IDE.

**Obrigatórios:**

- **Código-fonte** do projeto.
- **Arquivo JAR executável** — o projeto deve ser empacotado como um fat JAR (dependências incluídas), executável via `java -jar projeto.jar`, sem necessidade de configuração adicional.
- **Arquivos de dados** utilizados para persistência:
  - Inclua toda a estrutura de diretórios necessária para que o JAR encontre os arquivos ao ser executado.
  - Popule os arquivos previamente com dados suficientes para demonstração durante a apresentação.
- **Documentação** conforme descrito na seção 3.2.

**Recomendados:**

- Capturas de tela da interface gráfica em funcionamento, incluídas no `README.md` ou em uma pasta `/screenshots`.
- Um diagrama de classes, mesmo que simplificado.

> Entregáveis obrigatórios ausentes poderão resultar em desconto de pontos a critério do professor, proporcional ao impacto da ausência na avaliação.

## 4. Prazos

- **Data de entrega:** 11/12/2026
- **Apresentações:** 14 e 15/12/2026

## 5. Apresentação

Na apresentação, você deverá demonstrar a aplicação em funcionamento e estar preparado para explicar qualquer parte da implementação — incluindo decisões de design, escolha de estruturas de dados e uso dos conceitos de OO. **Não é necessário produzir slides.**

As apresentações acontecerão no horário da aula, nas datas descritas na seção **Prazos**, e terão duração máxima de **20 minutos por equipe**.

Para poderem ser apresentados, os projetos deverão ser enviados previamente até a data de entrega. **Não cumprir essa etapa acarretará penalidade de -20 pontos na nota da apresentação.**

## Critérios de Avaliação

| Critério                        | Pontos  |
| ------------------------------- | ------- |
| Orientação a Objetos            | 35      |
| Qualidade do Código             | 15      |
| Persistência de Dados           | 10      |
| Documentação                    | 5       |
| Interface Gráfica e Usabilidade | 5       |
| Apresentação                    | 30      |
| **Total**                       | **100** |

---

**Orientação a Objetos** _(35 pontos)_

Avalia se os conceitos de OO foram aplicados com qualidade e coerência, não apenas presença. Um conceito ausente com justificativa válida na apresentação não implica penalidade; um conceito usado de forma artificial ou inadequada será descontado.

- **Classes, Objetos e Encapsulamento** _(10 pontos)_ — A modelagem das classes reflete bem o domínio do problema. Atributos e métodos têm visibilidade adequada; o estado interno dos objetos não é exposto desnecessariamente.
- **Herança e Polimorfismo** _(15 pontos)_ — A hierarquia de classes faz sentido semântico e não foi criada artificialmente. O polimorfismo é explorado de forma que simplifique o código, e não apenas para cumprir requisito.
- **Interfaces e Classes Abstratas** _(10 pontos)_ — Utilizadas onde há uma abstração genuína a expressar. A escolha entre interface e classe abstrata é justificável.

**Qualidade do Código** _(15 pontos)_

O código está bem organizado, é legível e segue boas práticas, incluindo tratamento adequado de exceções. [Veja os requisitos detalhados aqui](/docs/disciplinas/poo-ads/qualidade-codigo/).

**Persistência de Dados** _(10 pontos)_

Os dados são salvos e recuperados corretamente entre execuções. A solução não perde dados em situações comuns de uso.

**Documentação** _(5 pontos)_

A documentação cobre os três itens da seção 3.2 e está acessível no repositório.

**Interface Gráfica e Usabilidade** _(5 pontos)_

A interface atende aos requisitos da seção 2.2 ou 2.3.

**Apresentação** _(30 pontos)_

As funcionalidades foram demonstradas com clareza, e o grupo demonstra domínio sobre as decisões de implementação. Perguntas sobre o código e as escolhas de design são respondidas com segurança.

Não enviar o projeto antes da apresentação acarreta **penalidade de -20 pontos** neste critério.

**Extra**

Cobre até 20 pontos não obtidos nos critérios anteriores. Não é pontuação adicional: o teto continua sendo 100.

_Exemplo: se você obtiver 75 pontos nos critérios principais e implementar um item extra, poderá recuperar até 20 dos 25 pontos faltantes, chegando a 95._
