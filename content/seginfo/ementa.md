---
layout: default
title: Conteúdo - Segurança da Informação - 2025.2
nav_exclude: true
---

## Ementa da disciplina

Introdução e conceitos básicos de segurança da informação. Riscos envolvendo informações (Ameaças Comuns/Riscos; Técnicas de Obtenção; Técnicas de Defesa; Comunicação Segura - Criptografia/Certificado Digital/SSL). Segurança em redes de computadores. Segurança em programação.

## Conteúdo detalhado

**Aula 1:** Introdução à Segurança da Informação e Tipos de Ameaças

- Conceitos básicos: CIA (Confidencialidade, Integridade, Disponibilidade)
- Panorama atual de ameaças cibernéticas
- **Prática:** Análise de casos reais usando navegador web

**Aula 2:** Reconhecimento e Engenharia Social

- Técnicas de OSINT (Open Source Intelligence)
- **Prática:** Uso de ferramentas online para coleta de informações públicas (Google Dorking, Shodan, Have I Been Pwned)

**Aula 3:** Fundamentos de Criptografia

- Criptografia simétrica vs assimétrica
- **Prática:** Implementação de cifra de César em Python online (repl.it/codepen)

**Aula 4:** Hash e Integridade de Dados

- Funções hash (MD5, SHA-256)
- **Prática:** Criação de checksums usando Python/JavaScript online e verificação de integridade

**Aula 5:** Implementação de AES

- Algoritmo AES explicado
- **Prática:** Exercícios de uso prático de bibliotecas de criptografia

**Aula 6:** Criptografia de Chave Pública (RSA)

- Conceitos matemáticos básicos
- **Prática:** Demonstração de um exemplo simples do mecanismo usado no algoritmo RSA

**Aula 7:** Infraestrutura de Chaves Públicas (PKI)

- Autoridades certificadoras
- **Prática:** Exame de certificados SSL usando ferramentas do navegador

**Aula 8:** Criação e Validação de Certificados

- Formatos de certificados (PEM, DER)
- **Prática:** Análise prática de certificados em sites reais

**Aula 9:** Protocolo SSL/TLS

- Handshake SSL/TLS
- **Prática:** Análise de tráfego HTTPS usando ferramentas do navegador (DevTools)

**Aula 10:** Implementação de Conexões Seguras

- Configuração de HTTPS
- **Prática:** Criação de servidor HTTPS simples usando Node.js online

**Aula 11:** SQL Injection

- Como funciona e impactos
- **Prática:** Criação de aplicação vulnerável em JavaScript/PHP online e exploração

**Aula 12:** Prevenção de SQL Injection

- Prepared statements e sanitização
- **Prática:** Correção da aplicação vulnerável criada na aula anterior

**Aula 13:** XSS Refletido e Armazenado

- Tipos de XSS e vetores de ataque
- **Prática:** Criação de aplicação web vulnerável a XSS usando HTML/JavaScript

**Aula 14:** Prevenção de XSS

- Content Security Policy (CSP), sanitização
- **Prática:** Implementação de proteções anti-XSS na aplicação anterior

**Aula 15:** Cross-Site Request Forgery (CSRF)

- Funcionamento e exploração
- **Prática:** Criação de ataque CSRF usando formulários HTML simples

**Aula 16:** Tokens CSRF e SameSite Cookies

- Mecanismos de proteção
- **Prática:** Implementação de proteção CSRF usando JavaScript

**Aula 17:** Sistemas de Autenticação

- Senhas, 2FA, biometria
- **Prática:** Implementação de sistema de login básico com hash de senhas

**Aula 18:** JWT (JSON Web Tokens)

- Estrutura e uso de JWTs
- **Prática:** Criação e validação de JWTs usando JavaScript

**Aula 19:** Vulnerabilidades em APIs REST

- OWASP API Security Top 10
- **Prática:** Criação de API vulnerável usando Node.js online

**Aula 20:** Securização de APIs

- Rate limiting, validação, autenticação
- **Prática:** Implementação de proteções na API criada anteriormente

**Aula 21:** Tipos de Malware

- Vírus, trojans, ransomware, spyware
- **Prática:** Análise estática de samples de malware usando VirusTotal

**Aula 22:** Análise Básica de Código Malicioso

- Técnicas de ofuscação
- **Prática:** Desobfuscação de JavaScript malicioso usando ferramentas online

**Aula 23:** Sniffing e Análise de Tráfego

- Protocolos inseguros
- **Prática:** Captura de tráfego

**Aula 24:** Firewalls e Detecção de Intrusão

- Conceitos e implementação
- **Prática:** Criação de regras básicas de firewall usando iptables (simulação)

**Aula 25:** ARP Spoofing e MITM

- Ataques man-in-the-middle
- **Prática:** Simulação de ataque MITM usando JavaScript/WebRTC

**Aula 26:** DNS Spoofing e Cache Poisoning

- Manipulação de resolução DNS
- **Prática:** Demonstração usando ferramentas online de DNS lookup

**Aula 27:** Protocolos de Segurança Wi-Fi

- WEP, WPA, WPA2, WPA3
- **Prática:** Análise de redes Wi-Fi usando ferramentas do navegador (WebRTC)

**Aula 28:** Ataques contra Redes Wireless

- Handshake capture, evil twin
- **Prática:** Criação de portal captivo falso usando HTML/JavaScript

**Aula 29:** Vulnerabilidades em Apps Mobile

- OWASP Mobile Top 10
- **Prática:** Boas práticas de desenvolvimento seguro para mobile/web
  - _Possibilidade de incluir:_ Análise de APKs usando ferramentas online - APKTool online

**Aula 30:** Desenvolvimento Seguro Mobile

- Armazenamento seguro, comunicação
- **Prática:** Criação de app web progressivo com boas práticas de segurança

**Aula 31:** Metodologia de Pentest

- Reconnaissance, scanning, exploitation
- **Prática:** Uso de ferramentas online para reconhecimento (Nmap online, Nikto online)

**Aula 32:** Exploração de Vulnerabilidades

- Metasploit conceitos
- **Prática:** Exploração manual em DVWA/WebGoat.

**Aula 33:** Técnicas de Engenharia Social

- Pretexting, baiting, quid pro quo
- **Prática:** Criação de email de phishing educativo usando HTML

**Aula 34:** Criação de Campanhas de Conscientização

- Simulação de ataques controlados
- **Prática:** Desenvolvimento de página de phishing para treinamento

**Aula 35:** OWASP Top 10

- Principais vulnerabilidades web
- **Prática:** Exploração de vulnerabilidades em WebGoat online ou DVWA

**Aula 36:** Secure Coding Practices

- Input validation, error handling
- **Prática:** Refatoração de código inseguro para versão segura

**Aula 37:** Coleta e Preservação de Evidências

- Chain of custody, hash de evidências
- **Prática:** Criação de hash de arquivos para cadeia de custódia usando JavaScript

**Aula 38:** Análise de Logs

- Log analysis, correlation
- **Prática:** Análise de logs Apache/Nginx usando JavaScript/Python online

**Aula 39:** Resposta a Incidentes

- Processo de IR, containment, eradication
- **Prática:** Simulação de resposta a incidente usando cenário fictício

**Aula 40:** Projeto Final - Aplicação Segura

(**Essa é uma ideia a ser analisada:** a proposta é integrar com uma disciplina de projetos para aplicar os conhecimentos da disciplina de SI lá e relatar os resultados.)

- Apresentação de projetos
- **Prática:** Desenvolvimento de aplicação web segura integrando conceitos aprendidos

## Ferramentas

- **Navegador Web** (Chrome/Firefox/Edge/Safari)
- **Ferramentas Online:**
  - Repl.it, CodePen, JSFiddle para programação
  - VirusTotal para análise de malware
  - SSL Labs para análise de certificados
  - Have I Been Pwned para verificação de vazamentos
  - CyberChef para operações criptográficas
  - RegExr para expressões regulares
  - WebGoat/DVWA online para testes

## Linguagens/Tecnologias Sugeridas

- **JavaScript** (principal - roda no navegador)
- **Python** (online via Repl.it)
- **HTML/CSS** para interfaces
- **Node.js** (online) para servidores
- **SQL** para injeções
- **Bash** (simulações online)

## Metodologia

- Cada aula teórica seguida de prática
- Projetos incrementais ao longo do curso
- Uso extensivo de ferramentas web
- Labs hands-on sem necessidade de instalações locais
