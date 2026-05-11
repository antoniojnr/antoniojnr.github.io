---
title: "Projeto"
weight: 1
#bookHidden: true
---

# Projeto

**Período:** 2026.1

## 1. Resumo

Todos os projetos devem ser desenvolvidos em Java utilizando o paradigma de Programação Orientada a Objetos. Os alunos devem implementar uma aplicação completa que aborde todos os conceitos e técnicas ensinadas ao longo da disciplina, incluindo exceções, interface gráfica em Java Swing, JavaFX ou outra interface de sua escolha, persistência de dados em arquivos ou bancos de dados e padrões de projeto.

O projeto poderá ser feito individualmente ou em equipes de até 3 pessoas. É possível também dividir um projeto para ser feito por mais de uma equipe. **Converse com o professor sobre a divisão.** Por exemplo: uma equipe ser responsável pelo frontend e outra pelo backend da aplicação.

> Os projetos podem usar tecnologias, bibliotecas e frameworks que não foram abordados na disciplina, desde que esse uso passe pelo aval do professor, para determinar se a equipe terá tempo útil para executar o projeto.

## 2. Requisitos funcionais

### 2.1. Orientação a objetos

O projeto deve utilizar adequadamente os conceitos de orientação a objetos, como:

- Classes e Objetos
- Composição
- Herança
- Exceções
- Polimorfismo
- Encapsulamento
- Interfaces e Classes Abstratas

Não utilize conceitos que você julgue não serem necessários no seu código. Você não perderá pontos por não usar quaisquer dos conceitos mencionados aqui, mas _caso seja arguido durante a apresentação_, deverá ser capaz de justificar a utilização ou não utilização de todos os conceitos.

### 2.2. Interface gráfica

A aplicação deve possuir uma interface gráfica desenvolvida em Java Swing, JavaFX ou outro framework à sua escolha, que permita a interação do usuário com o sistema.

#### Telas e navegação

A interface deve incluir, no mínimo, 3 telas com funcionalidades distintas e relevantes para a aplicação. Telas auxiliares simples — como confirmações genéricas ou telas "sobre" — não contam para esse mínimo.
O fluxo de navegação entre telas deve ser intuitivo. Ações frequentes não devem exigir muitos cliques ou transições de tela desnecessárias. Se uma operação central da aplicação for trabalhosa de realizar, isso será considerado um problema de usabilidade.
Deve ser possível retornar ou cancelar uma ação sem perder o contexto anterior.

#### Componentes e interação

Devem ser utilizados componentes gráficos adequados à natureza de cada funcionalidade, como botões, menus, caixas de texto, tabelas, listas, etc.
Caso sua equipe esteja desenvolvendo um jogo, a exigência de componentes convencionais como tabelas e menus não se aplica, mas os demais requisitos desta seção continuam valendo.

#### Feedback visual

A interface deve informar o usuário sobre o resultado de suas ações. Em caso de erro, como campos inválidos, falha ao salvar ou operação não permitida, deve ser exibida uma mensagem clara e compreensível, não um código de erro ou _stack trace_.
Operações que alteram dados, como salvar, excluir ou confirmar, devem ter algum tipo de confirmação visual de sucesso.

#### Responsividade

Aplicações desktop desenvolvidas em JavaFX ou Java Swing não precisam se adaptar a diferentes tamanhos de tela, desde que funcionem corretamente na resolução padrão utilizada durante a apresentação.

### 2.3. Persistência de dados

O projeto deve implementar persistência de dados utilizando arquivos.

- Dados devem ser salvos e carregados a partir de arquivos (texto ou binários).
- O sistema deve ser capaz de operar com dados persistidos entre execuções.
- Você poderá usar bancos de dados para fazer a persistência de dados.

### 2.4. Extra

Até 20 pontos de pontuação podem ser obtidos para cobrir nota que você não ganhou em outros quesitos se o seu projeto incluir um ou mais dos seguintes conceitos:

- Web scraping
- Sockets
- Padrões de projeto
- Java 2D API
- Conexão com APIs de terceiros (inteligência artificial, LLMs, processamnto de imagens, etc.)

## 3. Requisitos não-funcionais

### 3.1. Qualidade do Código

O código deve ser bem estruturado e seguir boas práticas de programação. [Veja alguns requisitos detalhados aqui](/docs/disciplinas/poo-ads/qualidade-codigo/).

### 3.2. Documentação

O projeto deve incluir documentação que descreva:

- A descrição da estrutura do sistema (pode usar diagrama de classes para auxiliar, mas não é obrigatório).
- Como configurar e executar o projeto.
- Descrição das funcionalidades principais.

### 3.3. Entregáveis

Os itens a seguir devem ser mantidos em um repositório do GitHub.

- Código-fonte do projeto.
- Arquivos de dados utilizados para persistência.
  - Envie toda a estrutura de diretórios para o seu .jar encontrar os arquivos persistidos
  - Popule previamente os arquivos com dados para demonstração
- Documentação completa (README, diagramas, etc.).
- Capturas de tela da interface gráfica em funcionamento.
- Arquivo JAR do projeto - a aplicação deverá estar contida em um arquivo JAR, que deverá executar, abrindo a classe principal.

## 4. Prazos

- **Data de entrega:** 16/08/2025
- **Apresentação do projeto:** 18 e 19/08/2025

## 5. Apresentação

Na apresentação, você deverá demonstrar a aplicação em funcionamento e estar preparado para explicar sobre o funcionamento de qualquer parte de sua aplicação.

As apresentações acontecerão no horário da aula, nas datas de apresentação do projeto detalhadas na seção **Prazo**.

As apresentações terão a duração máxima de 20 minutos por equipe.

Para poderem ser apresentados, os projetos deverão ser enviados previamente, até a data de entrega descrita em **Prazo**. Não cumprir essa etapa acarretará uma penalidade de -20 pontos na nota da apresentação.

## Critérios de Avaliação

**Orientação a Objetos** _(35 pontos)_ — Avalia se os conceitos de OO foram aplicados com qualidade e coerência, não apenas presença. Um conceito ausente com justificativa válida na apresentação não implica penalidade; um conceito usado de forma artificial ou inadequada será descontado.

**Classes, Objetos e Encapsulamento** _(10 pontos)_ — A modelagem das classes reflete bem o domínio do problema. Atributos e métodos têm visibilidade adequada; o estado interno dos objetos não é exposto desnecessariamente.
**Herança e Polimorfismo** _(15 pontos)_ — A hierarquia de classes faz sentido semântico e não foi criada artificialmente. O polimorfismo é explorado de forma que simplifique o código, e não apenas para cumprir requisito.
**Interfaces e Classes Abstratas** _(10 pontos)_ — Utilizadas onde há uma abstração genuína a expressar. A escolha entre interface e classe abstrata é justificável.

**Qualidade do Código** _(15 pontos)_ — O código está bem organizado, é legível e segue boas práticas, incluindo tratamento adequado de exceções. Veja os requisitos detalhados aqui.
**Persistência de Dados** _(10 pontos)_ — Os dados são salvos e recuperados corretamente entre execuções. A solução é robusta o suficiente para não perder dados em situações comuns de uso.
**Documentação** _(5 pontos)_ — A documentação descreve a estrutura do sistema, como executar o projeto e suas funcionalidades principais.
**Interface Gráfica e Usabilidade** _(5 pontos)_ — A interface atende aos requisitos da seção 2.2: fluxo de navegação coerente, feedback visual adequado e uso apropriado de componentes.
**Apresentação** _(30 pontos)_ — As funcionalidades foram demonstradas com clareza, e o grupo demonstra domínio sobre as decisões de implementação. Não enviar o projeto antes da apresentação acarreta penalidade de -20 pontos.
**Extra** — Cobre até 20 pontos que não foram obtidos nos critérios anteriores. Não é pontuação adicional: o teto continua sendo 100.
