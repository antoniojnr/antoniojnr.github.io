---
layout: default
title: Projeto da disciplina - POO - 2025.1
nav_exclude: true
---

## Projeto da disciplina

**Disciplina:** Programação Orientada a Objetos
**Período:** 2025.1

## Resumo

Todos os projetos devem ser desenvolvidos em Java utilizando o paradigma de Programação Orientada a Objetos. Os alunos devem implementar uma aplicação completa que aborde todos os conceitos e técnicas ensinadas ao longo da disciplina, incluindo exceções, interface gráfica em Java Swing ou JavaFX, persistência de dados em arquivos e padrões de projeto.

O projeto poderá ser feito individualmente ou em equipes de até 3 pessoas.

## Requisitos funcionais

### Orientação a objetos

O projeto deve utilizar adequadamente os conceitos de orientação a objetos, como:

- Classes e Objetos
- Composição
- Herança
- Exceções
- Polimorfismo
- Encapsulamento
- Interfaces e Classes Abstratas

Não utilize conceitos que você julgue não serem necessários no seu código. Você perderá pontos por não usar quaisquer dos conceitos mencionados aqui, mas poderá ganhar pontos extra sob outras condições detalhadas em **Extra**.

Entretanto, você deverá justificar quando um conceito for utilizado sem necessidade ou não for utilizado quando houver necessidade.

### Interface gráfica

A aplicação deve possuir uma interface gráfica desenvolvida em Java Swing ou Java FX que permita a interação do usuário com o sistema.

- A interface deve incluir, no mínimo, 3 telas diferentes (ex.: tela de login, tela principal, tela de detalhes).
- Devem ser utilizados componentes gráficos como botões, menus, caixas de texto, tabelas, etc.

### Persistência de dados

O projeto deve implementar persistência de dados utilizando arquivos.

- Dados devem ser salvos e carregados a partir de arquivos (texto ou binários).
- O sistema deve ser capaz de operar com dados persistidos entre execuções.
- Você poderá usar bancos de dados para fazer a persistência de dados, porém não ganhará pontos nesse quesito.

### Extra

Até 20 pontos de pontuação podem ser obtidos para cobrir nota que você não ganhou em outros quesitos se o seu projeto incluir um ou mais dos seguintes conceitos:

- Web scraping
- Sockets
- Padrões de projeto
- Java 2D API
- Conexão com APIs de terceiros (inteligência artificial, LLMs, processamnto de imagens, etc.)

## Requisitos não-funcionais

### Qualidade do Código

O código deve ser bem estruturado e seguir boas práticas de programação. [Veja alguns requisitos detalhados aqui](/content/poo/qualidade-codigo.html).

### Documentação

O projeto deve incluir documentação que descreva:

- A estrutura do sistema (pode usar diagrama de classes para auxilar, mas não é obrigatório).
- Como configurar e executar o projeto.
- Descrição das funcionalidades principais.

### Entregáveis

Os itens a seguir devem ser mantidos em um repositório do GitHub.

- Código-fonte do projeto.
- Arquivos de dados utilizados para persistência.
  - Envie toda a estrutura de diretórios para o seu .jar encontrar os arquivos persistidos
  - Popule previamente os arquivos com dados para demonstração
- Documentação completa (README, diagramas, etc.).
- Capturas de tela da interface gráfica em funcionamento.
- Arquivo JAR do projeto - a aplicação deverá estar contida em um arquivo JAR, que deverá executar, abrindo a classe principal.

## Prazos

- **Data de entrega:** 08/08/2025 (data provável)
- **Apresentação do projeto:** 11 e 12/08/2025 (datas prováveis)

## Apresentação

Na apresentação, você deverá demonstrar a aplicação em funcionamento e estar preparado para explicar sobre o funcionamento de qualquer parte de sua aplicação.

As apresentações acontecerão no horário da aula, nas datas de apresentação do projeto detalhadas na seção **Prazo**.

As apresentações terão a duração máxima de 30 minutos.

Para poderem ser apresentados, os projetos deverão ser enviados previamente, até a data de entrega descrita em **Prazo**. Não cumprir essa etapa acarretará uma penalidade de -20 pontos na nota da apresentação.

## Critérios de Avaliação

- **Funcionalidade:** _(35 pontos)_ O projeto atende a todos os requisitos funcionais especificados.
  - Classes e Objetos _(5 pontos)_
  - Composição _(5 pontos)_
  - Herança _(5 pontos)_
  - Exceções _(5 pontos)_
  - Polimorfismo _(5 pontos)_
  - Encapsulamento _(5 pontos)_
  - Interfaces e Classes Abstratas _(5 pontos)_
- **Qualidade do Código:** _(15 pontos)_ O código está bem organizado, é legível e segue boas práticas.
- **Documentação:** _(10 pontos)_ A documentação está completa e ajuda a entender o projeto e seu funcionamento.
- **Usabilidade:** _(5 pontos)_ A interface gráfica é intuitiva e facilita a interação do usuário com o sistema.
- **Tratamento de Exceções:** _(5 pontos)_ O sistema trata adequadamente as exceções e erros.
- **Apresentaçao:** _(30 pontos)_ As funcionalidades do sistema foram bem demonstradas e as dúvidas sobre a implementação foram respondidas. Não enviar o projeto antes da apresentação acarretará uma penalidade de -20 pontos na nota da apresentação.
- **Extra:** cobre até 20 pontos da nota que você não ganhou em outros quesitos. Não significa que, se você obtiver 100 nos outros, ficará com 120.
