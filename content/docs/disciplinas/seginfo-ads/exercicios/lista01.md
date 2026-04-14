---
title: "Lista 01"
weight: 1
bookCollapseSection: true
#bookHidden: true
---

# Lista 01

- Responda os exercícios da lista em dupla.
- Na sua resposta, aborde com profundidade os tópicos de segurança da informação. Ao mencionar conceitos da disciplina, procure entendê-los de forma que você possa explicá-los aos outros colegas.
  - Por exemplo ao falar de Cross-Site Request Forgery ou "credential stuffing", procure explicar o conceito e exemplificar como funciona. Também como foi usado para efetuar o ataque.

1. O malware VPNFilter, descoberto em 2018, comprometeu mais de 500 mil roteadores domésticos e corporativos em mais de 50 países. Pesquise como esse ataque foi realizado, quais fabricantes foram afetados e como o FBI conseguiu neutralizar parte da ameaça. Por que roteadores domésticos representam um vetor de ataque tão difícil de mitigar em larga escala?

2. Em 2017, a Equifax sofreu uma das maiores violações de dados da história, expondo informações pessoais de 147 milhões de pessoas. Pesquise a causa técnica do ataque e identifique qual item do checklist de hardening apresentado nos slides, se aplicado, teria evitado ou dificultado significativamente essa violação. Justifique sua resposta.

3. O princípio de defesa em profundidade afirma que nenhuma camada de segurança é suficiente por si só. Em 2021, a Microsoft Exchange sofreu ataques encadeados (ProxyLogon) que exploraram múltiplas vulnerabilidades em sequência, contornando camadas individuais de proteção. Pesquise o caso e analise: quais camadas do modelo de defesa em profundidade falharam e por quê a abordagem em camadas ainda é considerada a estratégia correta, mesmo diante de ataques tão sofisticados?

4. O slide sobre SSRF menciona o endereço 169.254.169.254 como um alvo clássico em ambientes de nuvem. Pesquise o incidente da Capital One de 2019 — considerado um dos maiores casos de SSRF já registrados — e explique como uma vulnerabilidade aparentemente simples em uma aplicação web resultou no vazamento de dados de mais de 100 milhões de clientes. O que esse caso revela sobre os riscos específicos do SSRF em infraestruturas de nuvem?

5. O campo SNI (Server Name Indication) no handshake TLS vaza o domínio acessado mesmo em conexões HTTPS. Pesquise o protocolo Encrypted Client Hello (ECH), proposto pelo IETF, e discuta: que problema de privacidade ele resolve que o TLS convencional não resolve? Por que sua adoção em larga escala enfrenta resistência de alguns governos e provedores de internet?

6. Em 2020, pesquisadores demonstraram que é possível usar o Shodan — um mecanismo de busca de dispositivos conectados à internet — para encontrar, em segundos, bancos de dados MongoDB e Redis expostos sem senha. Pesquise casos reais de vazamentos causados por essa exposição e discuta: por que a Security Misconfiguration (A05 do OWASP) continua sendo a vulnerabilidade mais prevalente mesmo anos após ser amplamente documentada?

7. Credential stuffing é listado nos slides como uma das ameaças mitigadas por rate limiting. Pesquise o ataque sofrido pelo Zoom em 2020, quando 500 mil credenciais foram colocadas à venda na dark web, e discuta: qual é a diferença técnica entre credential stuffing e força bruta? Por que o rate limiting por IP é insuficiente contra credential stuffing realizado a partir de botnets distribuídas, e quais técnicas complementares são necessárias?

8. A extensão HTTPS Everywhere, criada pela EFF em 2010 para forçar conexões seguras, foi aposentada em 2023 por ter se tornado desnecessária. Pesquise a evolução da adoção do HTTPS na web entre 2010 e 2023 — inclusive o papel do Let's Encrypt, lançado em 2016 — e analise: quais foram os obstáculos técnicos, econômicos e políticos que tornaram o HTTPS a norma padrão, e o que isso revela sobre como mudanças de segurança em larga escala acontecem na internet?

9. O slide menciona o erro de desabilitar a verificação de certificado TLS (verify=False) como crítico. Em 2012, pesquisadores descobriram que aplicativos bancários populares em iOS e Android cometiam exatamente esse erro — vulnerabilidade conhecida como "The Most Dangerous Code in the World". Pesquise o estudo de Fahl et al. (2012) e discuta: por que desenvolvedores experientes cometem esse erro? Quais pressões do ciclo de desenvolvimento levam a decisões de segurança tão arriscadas?

10. O vibe coding — prática de gerar código inteiramente por IA sem revisão crítica — foi associado a um caso recente no Brasil em que um produto foi lançado e hackeado em poucas horas (referenciado nos slides). Pesquise o caso e analise: quais vulnerabilidades do OWASP Top 10 tendem a aparecer com maior frequência em código gerado por IA sem supervisão? Há evidências empíricas de que código gerado por LLMs é sistematicamente mais ou menos seguro do que código escrito manualmente?
