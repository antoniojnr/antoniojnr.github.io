---
title: "Lista 03"
weight: 1
bookCollapseSection: true
#bookHidden: true
---

## Objetivo

Praticar os conceitos fundamentais do Git em um cenário realista: você vai criar e versionar um pequeno projeto de software, registrar um histórico significativo, trabalhar com branches e tags, e desfazer mudanças em diferentes situações.

**Pré-requisitos**

- Git instalado e configurado (`user.name` e `user.email`)
- Terminal disponível (Git Bash no Windows, terminal nativo no Linux)

---

## Parte 1 — Configuração inicial

### 1.1 Verifique sua configuração

Antes de começar, confirme que o Git está configurado corretamente:

```bash
git config --list --global
```

Verifique se `user.name` e `user.email` estão definidos. Caso não estejam, configure agora:

```bash
git config --global user.name  "Seu Nome"
git config --global user.email "seu@email.com"
git config --global init.defaultBranch main
```

### 1.2 Verifique a versão instalada

```bash
git --version
```

---

## Parte 2 — Repositório e commits

### 2.1 Crie o projeto

Crie um diretório para o projeto e inicialize o repositório:

```bash
mkdir biblioteca
cd biblioteca
git init
```

Confirme que o repositório foi criado:

```bash
ls -a
# Você deve ver o diretório .git
```

### 2.2 Crie os arquivos iniciais

```bash
echo "# Biblioteca" > README.md
echo "Sistema simples de gerenciamento de livros." >> README.md
touch livros.txt
```

Verifique o estado do repositório:

```bash
git status
```

> Os dois arquivos devem aparecer como **Untracked**.

### 2.3 Faça o primeiro commit

Adicione os arquivos à staging area e registre o primeiro commit:

```bash
git add README.md livros.txt
git status
git commit -m "docs: inicializa projeto com README e arquivo de livros"
```

### 2.4 Adicione conteúdo ao projeto

Adicione alguns livros ao arquivo:

```bash
echo "O Senhor dos Anéis - J.R.R. Tolkien" >> livros.txt
echo "1984 - George Orwell" >> livros.txt
echo "Dom Casmurro - Machado de Assis" >> livros.txt
```

Verifique o que mudou antes de commitar:

```bash
git diff livros.txt
```

Registre a mudança:

```bash
git add livros.txt
git commit -m "feat: adiciona três livros ao catálogo"
```

### 2.5 Faça mais uma alteração

Atualize o README com instruções de uso:

```bash
echo "" >> README.md
echo "## Como usar" >> README.md
echo "Edite o arquivo livros.txt para adicionar ou remover livros." >> README.md
```

Adicione à staging area, mas antes de commitar, verifique o que está staged:

```bash
git add README.md
git diff --staged
```

Registre:

```bash
git commit -m "docs: adiciona seção de instruções ao README"
```

### 2.6 Pratique o uso da staging area

Faça duas alterações em arquivos diferentes:

```bash
echo "A Metamorfose - Franz Kafka" >> livros.txt
echo "Contato: biblioteca@exemplo.com" >> README.md
```

Desta vez, commite **apenas** a alteração em `livros.txt`, deixando o README para depois:

```bash
git add livros.txt
git status
git commit -m "feat: adiciona A Metamorfose ao catálogo"
```

Agora commite a alteração do README:

```bash
git add README.md
git commit -m "docs: adiciona informações de contato"
```

Verifique o histórico:

```bash
git log --oneline
```

> Você deve ter 5 commits no histórico.

---

## Parte 3 — Histórico e reversão

### 3.1 Inspecione o histórico

Veja o histórico completo com estatísticas:

```bash
git log --stat
```

Escolha um dos commits da lista e inspecione-o em detalhes:

```bash
git show <hash-do-commit>
```

### 3.2 Compare commits

Compare o estado atual com o primeiro commit:

```bash
git diff <hash-do-primeiro-commit> HEAD
```

Compare os dois últimos commits:

```bash
git diff HEAD~1 HEAD
```

### 3.3 Visite um estado anterior

Acesse o estado do projeto como estava no segundo commit:

```bash
git checkout HEAD~3
```

Observe que os arquivos mudaram:

```bash
cat livros.txt
```

Volte ao estado atual:

```bash
git switch main
cat livros.txt
```

### 3.4 Pratique o `git restore`

Faça uma alteração indesejada em `livros.txt`:

```bash
echo "isso foi um erro" >> livros.txt
cat livros.txt
```

Descarte a mudança sem commitar:

```bash
git restore livros.txt
cat livros.txt
```

> O arquivo deve voltar ao estado do último commit.

### 3.5 Pratique o `git restore --staged`

Faça uma alteração e adicione à staging area:

```bash
echo "Duna - Frank Herbert" >> livros.txt
git add livros.txt
git status
```

Remova da staging area sem descartar a mudança:

```bash
git restore --staged livros.txt
git status
```

> O arquivo deve aparecer como **Modified**, não mais como **Staged**.

Agora commite corretamente:

```bash
git add livros.txt
git commit -m "feat: adiciona Duna ao catálogo"
```

### 3.6 Reverta um commit com `git revert`

Veja o histórico e escolha o commit que adicionou "A Metamorfose":

```bash
git log --oneline
```

Reverta esse commit:

```bash
git revert <hash-do-commit> --no-edit
```

Verifique que o Git criou um novo commit de reversão:

```bash
git log --oneline
cat livros.txt
```

> "A Metamorfose" não deve mais estar no arquivo, mas o commit original ainda aparece no histórico.

### 3.7 Corrija o último commit com `--amend`

Adicione um livro e commite com uma mensagem incompleta propositalmente:

```bash
echo "Admirável Mundo Novo - Aldous Huxley" >> livros.txt
git add livros.txt
git commit -m "feat: adiciona livro"
```

Corrija a mensagem do último commit:

```bash
git commit --amend -m "feat: adiciona Admirável Mundo Novo ao catálogo"
git log --oneline
```

---

## Parte 4 — Tags e branches

### 4.1 Crie uma tag de versão

O catálogo está em um estado estável. Marque este ponto como versão 1.0:

```bash
git tag -a v1.0 -m "Versão 1.0 — catálogo inicial"
```

Inspecione a tag:

```bash
git show v1.0
```

Liste as tags existentes:

```bash
git tag
```

### 4.2 Crie um branch para nova funcionalidade

Você vai adicionar uma seção de autores favoritos sem afetar o catálogo principal:

```bash
git switch -c feature/autores
```

Confirme em qual branch você está:

```bash
git branch
```

### 4.3 Desenvolva a funcionalidade no branch

```bash
touch autores.txt
echo "Autores favoritos" > autores.txt
echo "J.R.R. Tolkien" >> autores.txt
echo "George Orwell" >> autores.txt
git add autores.txt
git commit -m "feat: adiciona arquivo de autores favoritos"

echo "Frank Herbert" >> autores.txt
git add autores.txt
git commit -m "feat: adiciona Frank Herbert à lista de autores"
```

Veja o histórico do branch:

```bash
git log --oneline
```

### 4.4 Faça um commit no `main` enquanto o branch existe

Volte ao `main` e faça uma alteração independente:

```bash
git switch main
echo "Grande Sertão: Veredas - João Guimarães Rosa" >> livros.txt
git add livros.txt
git commit -m "feat: adiciona Grande Sertão: Veredas ao catálogo"
```

Visualize a divergência entre os branches:

```bash
git log --oneline --graph --all
```

> Você deve ver os dois branches divergindo a partir de um commit comum.

### 4.5 Mescle o branch no `main`

```bash
git merge feature/autores
```

Verifique o resultado:

```bash
git log --oneline --graph --all
ls
```

> O arquivo `autores.txt` deve agora estar presente no `main`.

### 4.6 Remova o branch após o merge

```bash
git branch -d feature/autores
git branch
```

### 4.7 Crie uma tag para a versão final

```bash
git tag -a v2.0 -m "Versão 2.0 — adiciona lista de autores"
git tag
```

Compare as duas versões usando as tags:

```bash
git diff v1.0 v2.0
```

---

## Resumo dos comandos utilizados

| Comando                | O que faz                                           |
| ---------------------- | --------------------------------------------------- |
| `git init`             | Inicializa um repositório                           |
| `git status`           | Mostra o estado do working directory e staging area |
| `git add`              | Adiciona mudanças à staging area                    |
| `git commit -m`        | Registra um commit com mensagem                     |
| `git log`              | Exibe o histórico de commits                        |
| `git diff`             | Compara mudanças entre estados                      |
| `git show`             | Inspeciona um commit específico                     |
| `git checkout`         | Navega para um commit anterior                      |
| `git restore`          | Descarta mudanças no working directory              |
| `git restore --staged` | Remove arquivo da staging area                      |
| `git revert`           | Desfaz um commit criando um novo                    |
| `git commit --amend`   | Corrige o último commit                             |
| `git tag -a`           | Cria uma tag anotada                                |
| `git switch -c`        | Cria e muda para um novo branch                     |
| `git branch`           | Lista e gerencia branches                           |
| `git merge`            | Mescla um branch ao branch atual                    |

---

## Desafios opcionais

1. **Conflito intencional** — crie dois branches que modifiquem a mesma linha de `livros.txt` e resolva o conflito de merge manualmente.

2. **Reset** — use `git reset --soft HEAD~1` para desfazer o último commit mantendo as mudanças staged, reformule a mensagem e recommite.

3. **Stash** — faça alterações no working directory, use `git stash` para guardá-las, faça um commit diferente, e então recupere as alterações com `git stash pop`.

4. **Histórico com filtros** — use `git log --author`, `git log --grep` e `git log --since` para filtrar o histórico por diferentes critérios.
