# Plano de Laboratórios – OWASP Top 10 (2021)

---

## A01:2021 – Broken Access Control

**Vulnerabilidade:** Usuários acessam recursos ou dados que não deveriam.

**Laboratório:**

- Crie um sistema simples de upload de arquivos ou visualização de perfis com três níveis de acesso: visitante, usuário e administrador.
- Erro proposital: controle de acesso feito apenas no frontend ou sem validação de permissão no backend.

**Atividade:**

- Acessar diretamente URLs protegidas (ex: `/admin/dashboard`) com usuários comuns.
- Manipular cookies para simular troca de permissões.

---

## A02:2021 – Cryptographic Failures

**Vulnerabilidade:** Dados sensíveis sem criptografia, senhas fracas, uso errado de algoritmos.

**Laboratório:**

- Sistema de login que armazena senhas em texto plano ou com MD5.
- Formulário que envia dados sensíveis (CPF, senha) sem HTTPS (simulado).

**Atividade:**

- Interceptar tráfego com Wireshark.
- Explorar senhas fracas em hashes MD5 usando rainbow tables.
- Corrigir a falha com `bcrypt`, `scrypt` ou `argon2`.

---

## A03:2021 – Injection

**Vulnerabilidade:** Comandos maliciosos executados no backend (SQL, shell, LDAP etc.).

**Laboratório:**

- Formulário de login com SQL sem `prepared statement`.
- Campo de busca com vulnerabilidade a injeção.

**Atividade:**

- Realizar ataques de SQL Injection (ex: `' OR 1=1 --`).
- Testar comandos para extrair dados da base.
- Comparar resposta segura com uso de parâmetros preparados.

---

## A04:2021 – Insecure Design

**Vulnerabilidade:** Lógica de negócio insegura por falhas conceituais (ex: reuso de tokens, ausência de limites).

**Laboratório:**

- Sistema de redefinição de senha por link sem expiração.
- API que permite brute force de login sem delay ou bloqueio.

**Atividade:**

- Automatizar tentativa de login sem limitação.
- Explorar link de redefinição reutilizável.

---

## A05:2021 – Security Misconfiguration

**Vulnerabilidade:** Servidores expostos, permissões erradas, páginas de debug ativas.

**Laboratório:**

- Subir um servidor com `/phpinfo` disponível.
- Aplicação com _directory listing_ ativo.

**Atividade:**

- Achar páginas administrativas via scan.
- Detectar banners com versões e ferramentas expostas.

---

## A06:2021 – Vulnerable and Outdated Components

**Vulnerabilidade:** Bibliotecas com CVEs conhecidas ainda em uso.

**Laboratório:**

- Instalar uma versão antiga do WordPress, Joomla ou Laravel com falhas conhecidas.

**Atividade:**

- Rodar um scanner (ex: `nmap`, `nikto`, `wpscan`) para identificar versões vulneráveis.
- Simular _exploit_ (ou analisar _proof-of-concept_).

---

## A07:2021 – Identification and Authentication Failures

**Vulnerabilidade:** Autenticação fraca, tokens previsíveis, sessões mal gerenciadas.

**Laboratório:**

- Login com senhas fracas, sem expiração de sessão.
- Tokens JWT sem assinatura ou com segredos previsíveis.

**Atividade:**

- Forçar logins.
- Interceptar token e usar em outra conta.
- Analisar vulnerabilidades de JWT (ex: algoritmo `none`).

---

## A08:2021 – Software and Data Integrity Failures

**Vulnerabilidade:** Atualizações automáticas não validadas, uso de scripts de terceiros sem verificação.

**Laboratório:**

- Sistema que carrega um JS externo malicioso.
- Atualização simulada por link sem verificação de integridade.

**Atividade:**

- Alterar script externo para executar JS malicioso.
- Demonstrar ataque de _supply chain_ básico.

---

## A09:2021 – Security Logging and Monitoring Failures

**Vulnerabilidade:** Sem logs, sem alertas, ataques passam despercebidos.

**Laboratório:**

- Sistema com falhas de login que não são registradas.
- Log com nível `debug` disponível publicamente.

**Atividade:**

- Rodar scanner e verificar se algo é logado.
- Tentar brute force sem ser detectado.
- Adicionar logging adequado e revisar comportamento.

---

## A10:2021 – Server-Side Request Forgery (SSRF)

**Vulnerabilidade:** Servidor faz requisição para onde o atacante quiser.

**Laboratório:**

- API que permite baixar imagens por URL (sem validação).

**Atividade:**

- Fazer a aplicação acessar `http://localhost:8080/admin` (não acessível externamente).
- Explorar metadados de serviços em nuvem (ex: `http://169.254.169.254/`).

---
