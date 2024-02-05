---
layout: default
title: Exercício - Validador de CPF
nav_exclude: true
---

## Guia Básico para Usar o Terminal do Windows

### 1. Introdução ao Terminal do Windows

- O Terminal é uma interface de linha de comando que permite interagir com o sistema operacional por meio de comandos de texto.
- Acesse através do atalho `Windows + R`, digitando "cmd" na caixa de texto e apertando enter.

### 2. Conceito de Hierarquia de Pastas

- O sistema de arquivos é organizado hierarquicamente em pastas (também chamadas de diretórios).
- Cada pasta pode conter arquivos e subpastas.
- Cada pasta tem um diretório pai.
- O **caminho absoluto** para um arquivo é a sequência de pastas até o arquivo, separadas por barras invertidas (\\).

#### Caminho Absoluto:

Um caminho absoluto fornece o caminho completo de um diretório a partir da raiz do sistema de arquivos.
No Windows, sempre começa com uma letra de unidade (por exemplo, C:) ou com a raiz (\\). Exemplo: `C:\Usuarios\Usuario\Documentos`.

Utilizar o caminho absoluto é útil quando você precisa especificar exatamente onde um diretório está, independentemente do diretório atual. Sempre começa do mesmo ponto (letra de unidade), independentemente de onde você esteja no sistema de arquivos.

#### Caminho Relativo

Um caminho relativo descreve o caminho de um diretório em relação ao diretório atual. Não começa com uma letra de unidade ou com a raiz. Exemplo: `MeusArquivos\Imagens`.

O ponto (.) representa o diretório atual. Por exemplo, `.\Subdiretorio` se refere a um subdiretório no diretório atual.

O caminho relativo é mais flexível e fácil de usar em scripts e comandos, pois adapta-se ao diretório atual. É adequado para referenciar diretórios e arquivos em relação à posição atual no sistema de arquivos. Ao usar caminhos relativos, é importante entender o diretório atual para navegar corretamente. Caminhos absolutos são mais robustos, mas caminhos relativos são mais flexíveis em contextos dinâmicos.

### 3. Comandos Básicos

- `dir`: Lista os arquivos e pastas no diretório atual.
- `cd`: Muda o diretório atual.
  - Exemplo: `cd Caminho\para\o\diretorio`.
- `mkdir`: Cria um novo diretório.
  - Exemplo: `mkdir NovoDiretorio`.
- `del` ou `rmdir`: Exclui um arquivo ou diretório.
  - Exemplo: `del Arquivo.txt` ou `rmdir Diretorio`.

### 4. Navegando no Sistema de Arquivos

- `cd ..`: Retorna para o diretório pai.
- `cd \`: Muda para o diretório raiz.
- `cd ~`: Muda para o diretório do usuário.

#### Retomando o conceito de caminho

Suponha que você esteja em `C:\Usuarios\Usuario\Documentos\MeusArquivos` e deseje acessar `C:\Usuarios\Usuario\Imagens`.

Usando Caminho Absoluto:
`cd C:\Usuarios\Usuario\Imagens`

Usando Caminho Relativo:
`cd ..\Imagens` (usando .. para voltar um nível).

### 5. Entendendo Variáveis de Ambiente

- As variáveis de ambiente armazenam informações sobre o ambiente do sistema.
- Essas variáveis incluem diretórios onde o sistema deverá procurar um executável quando este for executado através do terminal.
- `echo %variavel%`: Exibe o valor de uma variável de ambiente.
  - Exemplo: `echo %USERPROFILE%` exibirá o diretório do perfil do usuário.

### 6. Definindo Variáveis de Ambiente

- `set variavel=valor`: Define o valor de uma variável de ambiente.
  - Exemplo: `set PATH=C:\NovoDiretorio;%PATH%` adiciona "C:\NovoDiretorio" ao caminho de busca.

### 7. Exemplo Prático

- Vamos criar uma estrutura básica de pastas e definir uma variável de ambiente.
  - `mkdir MeusArquivos`
  - `cd MeusArquivos`
  - `echo %CD%` (exibirá o caminho atual)
  - `set MEU_AMBIENTE=Teste`
  - `echo %MEU_AMBIENTE%`

### 8. Dica Extra

- Utilize a tecla Tab para autocompletar nomes de pastas e arquivos, economizando tempo.
