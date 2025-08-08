---
layout: default
title: Plano semanal - Segurança da Informação - 2025.2
nav_exclude: true
---

# Plano de Ensino: Segurança da Informação

## Semana 1 – Introdução à Segurança da Informação

- **Conteúdo**: Conceitos de confidencialidade, integridade, disponibilidade (CIA); autenticidade e não-repúdio.
- **Atividade**: Debate guiado com estudo de caso real (ex: vazamento de dados do Facebook, 2021).
- **Leitura sugerida**: Cap. 1 e 2 de _Segurança da Informação: Princípios e Práticas_ (William Stallings).
- **Foco pedagógico**: Despertar senso crítico sobre a importância da segurança no cotidiano digital.

### Links

- https://www.bleepingcomputer.com/news/security/facebook-attributes-533-million-users-data-leak-to-scraping-not-hacking/
- https://www.bleepingcomputer.com/news/security/533-million-facebook-users-phone-numbers-leaked-on-hacker-forum/
- https://www.cisoadvisor.com.br/vazamento-do-facebook-pegou-8-064-916-usuarios-brasileiros/
- https://www.cisoadvisor.com.br/facebook-e-condenado-a-indenizar-8-milhoes-de-brasileiros/

## Semana 2 – Ameaças Comuns e Classificação de Riscos

- **Conteúdo**: Malware, engenharia social, phishing, ransomware.
- **Atividade**: Jogo de simulação "Detective Digital": identificar vetores de ataque em situações fictícias.
- **Leitura**: OWASP Top 10 (resumo técnico comentado).
- **Destaque didático**: Mostrar como ataques exploram falhas humanas e técnicas.

### Links

- https://www.cisoadvisor.com.br/vazamento-expoe-dados-mais-de-102-milhoes-de-usuarios-de-celulares/
-

## Semana 3 – Técnicas de Obtenção de Informação

- **Conteúdo**: Sniffing, spoofing, keyloggers, engenharia reversa.
- **Atividade**:
  - Análise crítica de ferramentas legítimas usadas em ataques (ex: Wireshark, Cain & Abel).
  - Exercício prático (controlado): Sniffing em rede local com Wireshark em ambiente de laboratório.
- **Discussão ética**: Ferramentas de segurança versus uso malicioso.

## Semana 4 – Técnicas de Defesa e Prevenção

- **Conteúdo**: Antivírus, firewall, IDS/IPS, VPN.
- **Atividade**: Montagem de um plano de segurança para uma pequena empresa.
- **Leitura**: Artigos sobre incidentes e a falha de defesas comuns.
- **Objetivo pedagógico**: Desenvolver capacidade de propor medidas práticas.

## Semana 5 – Criptografia: Fundamentos

- **Conteúdo**: Criptografia simétrica vs assimétrica, cifras clássicas e modernas.
- **Atividade**: Criação de algoritmos simples de cifra (César, Vigenère).
- **Leitura**: _Understanding Cryptography_ – Paar & Pelzl, Cap. 1–2.
- **Foco pedagógico**: Envolver o aluno na lógica matemática da segurança.

## Semana 6 – Certificados Digitais e SSL/TLS

- **Conteúdo**: Funcionamento de SSL, conceito de autoridade certificadora.
- **Atividade**:
  - Explorar certificados SSL de sites usando navegador e terminal.
  - Comparar certificados reais e detectar erros de configuração (Let's Encrypt, DigiCert).
- **Dica prática**: Uso de ferramentas como `openssl` para inspecionar conexões.

## Semana 7 – Comunicação Segura e Boas Práticas

- **Conteúdo**: HTTPS, VPN, autenticação de dois fatores.
- **Atividade**: Simular o processo de autenticação com múltiplos fatores em apps populares.
- **Discussão**: O que realmente protege? Usabilidade x segurança.

## Semana 8 – Avaliação Parcial + Revisão com Estudo de Caso

- **Prova escrita** + Estudo de caso: "O que poderia ter evitado o ataque XYZ?"
- **Atividade alternativa**: Painel de especialistas — grupos defendem diferentes estratégias de proteção.

## Semana 9 – Segurança em Redes: Conceitos e Vulnerabilidades

- **Conteúdo**: Modelos de rede e onde ocorrem falhas (camada física ao app).
- **Atividade**: Diagnóstico de segurança em redes Wi-Fi reais (com ética e autorização).
- **Sugestão**: Simular ataque de _man-in-the-middle_ (ambiente controlado com VMs).

## Semana 10 – Firewalls e Controle de Acesso

- **Conteúdo**: Tipos de firewalls, políticas de acesso, listas de controle.
- **Exercício**: Configuração de firewall com regras no `iptables` ou `ufw`.
- **Projeto curto**: Criar política de acesso para uma rede simulada.

## Semana 11 – Segurança em Aplicações Web

- **Conteúdo**: OWASP Top 10 na prática: XSS, SQL Injection, CSRF.
- **Atividade**: Laboratório seguro com app vulnerável (ex: DVWA, Juice Shop).
- **Foco**: Mostrar que falhas em código geram impactos reais.

## Semana 12 – Práticas de Programação Segura

- **Conteúdo**: Validação de entrada, escaping, uso de bibliotecas seguras.
- **Atividade**: Refatorar um código inseguro.
- **Ferramenta**: ESLint, Bandit ou SonarQube.
- **Objetivo**: Mostrar que programar bem é programar seguro.

## Semana 13 – Criação de Políticas de Segurança

- **Conteúdo**: Políticas organizacionais, LGPD e ISO 27001.
- **Atividade**: Criar um minidocumento de política para uso de senhas em empresa.
- **Discussão**: O que é viável aplicar em empresas pequenas?

## Semana 14 – Segurança em Cloud e Mobilidade

- **Conteúdo**: Riscos em computação em nuvem e dispositivos móveis.
- **Atividade**: Análise de apps com permissões excessivas.
- **Sugestão**: Ferramenta MobSF ou análise manual de APKs.

## Semana 15 – Projeto Final

- **Proposta**: Auditoria e relatório de segurança de um sistema fictício ou real (projeto prático).
- **Trabalho em duplas**: Apresentação com defesa da solução proposta.
- **Critério de avaliação**: Técnica, ética, clareza e aplicabilidade.

## Semana 16 – Encerramento e Apresentações

- **Atividade**: Apresentação dos projetos + roda de discussão sobre carreira e ética em segurança.
- **Dica**: Trazer um profissional da área para uma conversa informal (mentoria externa).
