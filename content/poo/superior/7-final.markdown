---
layout: default
title: Exercícios - Projeto final
nav_exclude: true
---

## Projeto final

O projeto final consiste de incrementos adicionais ao projeto que você já realizou nos laboratórios anteriores. Como projeto final, você deve implementar os conceitos listados abaixo no seu projeto. A falta da implementação de um deles acarreta na redução da nota correspondente ao projeto final. Atente também para o item **Qualidade de Código** disposto logo abaixo.

### Persistência de Dados

**20 pontos**

- Introduza a persistência de dados em arquivos.
- Garantia que os dados sejam armazenados de maneira eficiente: os dados salvos em uma execução do programa poderão ser recuperados ao executá-lo outra vez posteriormente.

### Tratamento de Erros

**20 pontos**

- Use adequadamente blocos `try-catch` para gerenciar exceções.
- Certifique-se de que o código seja robusto contra situações inesperadas.
- Valide os dados inseridos pelo usuário em todas as partes de sua aplicação para evitar erros em tempo de execução.

**Atenção:** todos os projetos são aplicações com pouca quantidade de entrada de dados. Dessa forma, a ocorrência de erros não tratados em tempo de execução ocasionados por falta de validação de dados acarretará no anulamento da pontuação relativa ao tratamento de erros.

### Empacotamento do projeto em um arquivo JAR

**30 pontos**

Um arquivo JAR (Java Archive) é um formato de arquivo compactado usado para distribuir e armazenar bibliotecas, componentes e aplicativos Java. Ele é essencialmente um arquivo ZIP que contém arquivos compilados Java, recursos, metadados e, opcionalmente, arquivos de manifesto.

- Gere o arquivo JAR de seu projeto. _(Dica: use o Gradle ou Maven para isso)_
- Deve ser possível executar o seu projeto a partir de qualquer máquina que tenha Java (JRE) instalada apenas usando `java -jar NomeDoArquivo.jar`.

## Qualidade do código

**30 pontos**

Execute também alguma ferramenta de análise estática em seu código. _Linter_ é uma ferramenta de análise estática de código usada para sinalizar erros de programação, bugs, erros estilísticos e construções suspeitas. Essas ferramentas são projetadas para identificar problemas no código-fonte sem a necessidade de executar o programa.

Uma sugestão de plugin presente tanto no VisualStudio Code e no IntelliJ IDEA é o **SonarLint**, mas você pode usar a ferramenta de sua preferência.
