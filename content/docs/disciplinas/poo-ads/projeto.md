---
title: "Projeto"
weight: 1
#bookHidden: true
---

# Projeto

**Período:** 2026.2

## 1. Resumo

Todos os projetos devem ser desenvolvidos em Java utilizando o paradigma de Programação Orientada a Objetos. Os alunos devem implementar uma aplicação completa que aborde os conceitos e técnicas ensinados ao longo da disciplina, incluindo exceções, interface gráfica em Java Swing, JavaFX ou outra interface de sua escolha, e persistência de dados em arquivos ou bancos de dados.

O projeto poderá ser feito individualmente ou em equipes de até 3 pessoas. É possível também dividir um projeto entre mais de uma equipe: por exemplo, uma equipe responsável pelo frontend e outra pelo backend. **Converse com o professor sobre a divisão antes de iniciar**, pois cada equipe será avaliada pelo escopo que lhe couber, e esse escopo precisa ser acordado previamente.

> Os projetos podem usar tecnologias, bibliotecas e frameworks que não foram abordados na disciplina, desde que esse uso passe pelo aval do professor, para determinar se a equipe terá tempo hábil para executar o projeto.

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

A aplicação deve possuir uma interface gráfica desenvolvida em Java Swing, JavaFX ou outro framework à sua escolha, que permita a interação do usuário com o sistema.

#### Telas e navegação

- A interface deve incluir, no mínimo, 3 telas com funcionalidades distintas e relevantes para a aplicação. Telas auxiliares simples — como confirmações genéricas ou telas "sobre" — não contam para esse mínimo.
- O fluxo de navegação entre telas deve ser intuitivo. Ações frequentes não devem exigir muitos cliques ou transições de tela desnecessárias. Se uma operação central da aplicação for trabalhosa de realizar, isso será considerado um problema de usabilidade.
- Deve ser possível retornar ou cancelar uma ação sem perder o contexto anterior.

#### Componentes e interação

- Devem ser utilizados componentes gráficos adequados à natureza de cada funcionalidade, como botões, menus, caixas de texto, tabelas, listas, etc.
- Caso sua equipe esteja desenvolvendo um jogo, a exigência de componentes convencionais como tabelas e menus não se aplica, mas os demais requisitos desta seção continuam valendo.

#### Feedback visual

- A interface deve informar o usuário sobre o resultado de suas ações. Em caso de erro — como campos inválidos, falha ao salvar ou operação não permitida —, deve ser exibida uma mensagem clara e compreensível, não um código de erro ou _stack trace_.
- Operações que alteram dados (como salvar, excluir ou confirmar) devem ter algum tipo de confirmação visual de sucesso.

#### Responsividade

Aplicações desktop desenvolvidas em JavaFX ou Java Swing não precisam se adaptar a diferentes tamanhos de tela, desde que funcionem corretamente na resolução padrão utilizada durante a apresentação.

### 2.3. Persistência de Dados

O projeto deve implementar persistência de dados.

- Dados devem ser salvos e carregados a partir de arquivos (texto ou binários) ou de um banco de dados.
- O sistema deve ser capaz de operar com dados persistidos entre execuções.
- A solução deve ser robusta o suficiente para não perder dados em situações comuns de uso, como encerrar o programa normalmente ou reiniciá-lo.

### 2.4. Extra

Os itens a seguir podem render até 20 pontos extras, que cobrem nota não obtida nos critérios principais. Veja a seção **Critérios de Avaliação** para entender como essa pontuação funciona.

- Web scraping
- Sockets
- Padrões de projeto
- Java 2D API
- Conexão com APIs de terceiros (inteligência artificial, LLMs, processamento de imagens, etc.)

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

- **Data de entrega:** 10/06/2026
- **Apresentações:** 15 e 16/06/2026

## 5. Apresentação

Na apresentação, você deverá demonstrar a aplicação em funcionamento e estar preparado para explicar qualquer parte da implementação — incluindo decisões de design, escolha de estruturas de dados e uso dos conceitos de OO.

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

A interface atende aos requisitos da seção 2.2: ao menos 3 telas com funcionalidades relevantes, fluxo de navegação coerente, feedback visual adequado e uso apropriado de componentes.

**Apresentação** _(30 pontos)_

As funcionalidades foram demonstradas com clareza, e o grupo demonstra domínio sobre as decisões de implementação. Perguntas sobre o código e as escolhas de design são respondidas com segurança.

Não enviar o projeto antes da apresentação acarreta **penalidade de -20 pontos** neste critério.

**Extra**

Cobre até 20 pontos não obtidos nos critérios anteriores. Não é pontuação adicional: o teto continua sendo 100.

_Exemplo: se você obtiver 75 pontos nos critérios principais e implementar um item extra, poderá recuperar até 20 dos 25 pontos faltantes, chegando a 95._
