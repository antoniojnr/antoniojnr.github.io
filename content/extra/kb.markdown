---
layout: default
title: Exercício - Validador de CPF
nav_exclude: true
---

## Base de conhecimento

### 1. O que fazer quando acontece o erro `Unsupported class file major version **`?

- Ajuste a variável de ambiente `JAVA_HOME` para apontar para o diretório correto, por exemplo `/usr/local/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home`
- Verifique a versão da JDK usada pelo Gradle em Settings -> Build, Execution, Deployment -> Gradle -> Gradle JVM
- Verifique a SDK do projeto, clicando com o botão direito sobre o projeto e **Open module settings** -> Project settings -> Project -> SDK
