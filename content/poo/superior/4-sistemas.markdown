---
layout: default
title: Exercícios - Herança e coleções
nav_exclude: true
---

## Exercícios

A seguir, são listadas 7 ideias de sistemas para praticar os princípios de orientação a objetos aprendidos até o momento, como encapsulamento, herança e polimorfismo. Alguns são essencialmente sistemas de gerenciamento chamados de CRUDs (do inglês, **C**reate, **R**etrieve, **U**pdate and **D**elete), porque permitem aos usuários criar, visualizar (ou recuperar), atualizar e remover as entidades gerenciadas. Outros sistemas envolvem mais funcionalidades além daquelas de um CRUD.

**Recursos** que devem existir em cada sistema.

1. **Classes** que representam as entidades do modelo de negócio. Por exemplo, `ContaCorrente`, `Usuario` e `Banco`, em um sistema bancário.
2. **Gerenciador** responsável por gerenciar as entidades e que deve incluir métodos para adicionar, editar, remover e visualizar as entidades.
3. **Sistema de menu** textual, que permita ao usuário interagir com o sistema.
4. **Armazenamento de dados** que deverá ser feito em uma estrutura de dados (lista, por exemplo).
5. **Tratamento de erros** para entrada do usuário e validação de dados.
6. **Polimorfismo**: você possivelmente conseguirá implementar polimorfismo no seu projeto. Peça ajuda ao professor caso não consiga visualizar onde implementar.

**Atenção:** O exercício, se desenvolvido sem os desafios adicionais, vale 85. Os desafios adicionais valem os 15 pontos restantes.

A pontuação será dada de acordo com os seguintes critérios:

- **Modelagem** (20% da pontuação): as responsabilidades de cada módulo do sistema estão bem divididas e separadas.
- **Conceitos** (20% da pontuação): os conceitos de POO foram bem implementados (e não forçados) no código.
- **Legibilidade** (20% da pontuação): o código legível possui identificadores (nomes de variáveis, métodos, classes, etc) bem descritivos e significativos; tem formatação e indentação consistentes; usa espaços em branco da forma correta (um espaço para separar operandos de operadores, por exemplo), mas não excessivamente.
- **Estilo e consistência** (20% da pontuação): refere-se ao uso de boas práticas de programação no código: i. convenção de nomenclatura (camelCase) consistente, ii. tipos de dados apropriados (não usar um tipo quando outro é mais apropriado, por exemplo, int em vez de double, ou vice-versa), iii. estruturação correta para evitar código duplicado, iv. código comentado, quando necessário, sem comentários supérfluos , v. indicação de erros com exceções e não System.out.println()
- **Baixa complexidade** (20% da pontuação): código pouco complexo resolve um problema da forma mais simples possível. Nesse caso, verifique a existência de condições ou operações muito complexas, quantidade de métodos desnecessária, métodos muito grandes, laços e condicionais aninhadas desnecessariamente, uso de recursos desnecessários, que fogem da especificação.

### 1. Tarefas

Desenvolva um sistema de gerenciamento de tarefas. As tarefas podem conter atributos como título, descrição, prazo de conclusão, prioridade e status.

**Desafios adicionais (opcionais):**

- (3 pontos) Adicione categorias de tarefas ou rótulos
- (4 pontos) Inclua a funcionalidade de buscar e filtrar tarefas
- (8 pontos) Inclua a funcionalidade de autenticação de usuários, que permite que cada usuário tenha suas próprias tarefas independentes de outros usuários no sistema.

### 2. Quiz

Desenvolva um jogo de quiz que, além das funcionalidades de CRUD de perguntas, envolve a funcionalidade de jogar, quando o jogo exibirá aleatoriamente um número de questões para o usuário responder e contabilizará os pontos totais obtidos com a resposta das questões

**Desafios adicionais (opcionais):**

- (3 pontos) Adicione suporte para questões de múltipla escolha, verdadeiro-falso e preencher o espaço em branco
- (4 pontos) Implemente um timer para cada questão
- (8 pontos) Implemente um placar, para mostrar o desempenho nos últimos quizzes realizados

### 3. Agenda de contatos

Desenvolva uma agenda de contatos com classes para contatos e grupos.

**Desafios adicionais (opcionais):**

- (5 pontos) Crie a funcionalidade de relacionar contatos, permitindo que usuários estabeleçam relacionamentos entre contatos (por exemplo, família, amigos, colegas)
- (10 pontos) Desenvolva um recurso de exportação para salvar os dados de contatos em CSV

### 4. Ponto de venda

Crie um sistema de ponto de venda para gerenciar produtos, vendas e inventário.

**Desafios adicionais (opcionais):**

- (7 pontos) Implemente um sistema de alerta para itens com poucas unidades em estoque
- (8 pontos) Implemente um sistema de relatório que mostre itens que geralmente são comprados juntos (para cada produto, basta mostrar outros dois)

### 5. Gerenciador financeiro

Crie um sistema de gerenciamento financeiro, que possibilite ao usuário gerenciar despesas, receitas e categorizá-las.

**Desafios adicionais (opcionais):**

- (3 pontos) Gere relatórios que devem ser salvos em arquivos de texto
- (4 pontos) Crie a funcionalidade de filtrar despesas ou receitas por categorias, valor e outros critérios
- (8 pontos) Permita a criação de orçamentos, com alertas para quando esses orçamentos forem atingidos ou estiverem próximos de serem atingidos.

### 6. Sistema bancário

Crie um sistema que simule o funcionamento de um sistema bancário, com múltiplas contas e usuários.

**Desafios adicionais (opcionais):**

- (3 pontos) Implemente autenticação de usuário, para que operações só sejam feitas mediante o uso de senha pessoal de cada usuário.
- (4 pontos) Crie a funcionalidade de gerar extrato de operações realizadas na conta. Não é necessário levar o contexto temporal em consideração
- (8 pontos) Implemente transferências entre bancos, como é feito com o sistema Pix.

### 7. Biblioteca

Implemente um sistema de biblioteca, que permite ao usuário pegar livros emprestados e devolvê-los. O sistema deve manter um registro de usuários, livros e transações (empréstimos e devoluções).

**Desafios adicionais (opcionais):**

- (7 pontos) Desenvolva um sistema de recomendação simples, baseado no histórico de empréstimos de um usuário
- (8 pontos) Crie um painel de estatísticas e dados analíticos

### 8. Rede social

Crie uma rede social textual simples com classes para usuários, postagens, curtidas e comentários. A implementação básica desse sistema envolve apenas dados criados estaticamente (instanciados no código).

**Desafios adicionais (opcionais):**

- (15 pontos) Implemente criação de conta e autenticação para permitir que usuários autenticados interajam com a rede

### 9. Organizador de receitas

Crie uma aplicação organizadora de receitas que permita gerenciar receitas e seus ingredientes.

**Desafios adicionais (opcionais):**

- (15 pontos) Implemente a funcionalidade de buscar receitas por um ou mais ingredientes
