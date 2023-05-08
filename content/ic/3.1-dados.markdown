---
layout: default
title: Dados e sua Representação
nav_exclude: true
---
## 1. Dados e sua Representação

Dados são uma sequência de um ou mais símbolos. Os computadores possuem uma forma especial de representar dados que é diferente daquelas usadas por humanos. Os dados são armazenados e manipulados em sistemas computacionais em formato binário. 

Computadores armazenam e reconhecem dois estados distintos, relacionados à presença ou ausência de energia. Esses dois estados podem ser representados através de **algarismos binários**, os quais podem assumir um de dois valores: 0 ou 1. A menor unidade de informação representável por um computador é chamada de bit, que corresponde a um único algarismo binário.

Discutiremos sobre como dados de diferentes formatos são representados, manipulados e transmitidos por computadores. 

Em sistemas computacionais, os dados armazenados e manipulados são digitais, ao contrário de dados analógicos, que representam grandezas existentes no mundo físico. Dados analógicos são geralmente obtidos de sensores, como termômetros, balanças ou velocímetros e, para serem processados por computadores, precisam ser digitalizados. Na seção 3, veremos como acontece esse processo de digitalização.

### 1.2. Dado e Informação

Dados, informação e conhecimento seguem uma hierarquia que sugere que dados, em maior quantidade, são a base para obtenção de informações e, a partir destas, de conhecimento. 

Na base da hierarquia estão os **dados**, que podem ser provenientes de observações do mundo físico. Dados são uma coleção de valores que, por si só, não têm um significado. Podem ser texto, números, sons ou imagens. Para serem representados e processados pelo computador, precisam estar codificados digitalmente. A Tabela 1 reúne uma coleção de dados.

**Tabela 1.** Exemplo de dados.

| Valor |
| ----------- |
| 5 |
| 3 |
| 9 |

Uma **informação** surge a partir da interpretação dos dados. É quando os dados são relacionados entre si ou com outros dados para que sejam úteis. A Tabela 2 a seguir atribui um significado aos dados da Tabela 1.

**Tabela 2.** Exemplo de informações.

| Produto | Quantidade |
| ----------- | ----------- |
| Picanha | 5 |
| Margarina | 3 |
| Cerveja | 9 |

A partir destas informações, pode-se derivar novas informações. Sendo a Tabela 2 as quantidades de itens vendidos em um determinado mês em um supermercado, um programa pode ser escrito para identificar os itens mais vendidos ou os itens mais vendidos juntos para determinar estratégias de venda em um período posterior.

### 1.3. Representação Digital

Dispositivos digitais são aqueles que operam sobre dados discretos ou dígitos. Podemos citar telefones celulares, computadores e televisores como exemplos de dispositivos digitais. Por outro lado, dispositivos analógicos operam sobre dados contínuos. Na Figura 1 são mostrados exemplos dispositivos analógicos na parte superior e digitais na parte inferior. 

![Dispositivos analógicos e digitais](/content/images/digital-and-analog.png "Dispositivos analógicos e digitais")
**Figura 1.** Dispositivos analógicos e digitais (Fonte: https://learn.sparkfun.com/tutorials/analog-vs-digital/all).

O nome analógico vem de "análogo" ao processo físico. Computadores são capazes de representar dados analógicos provenientes de um processo físico. Para tal, esses dados precisam passar por uma conversão de analógico para digital. Essa é uma conversão com perdas, uma vez que os valores representados são apenas uma aproximação. Com precisão suficiente utilizada nessa conversão, as perdas tornam-se imperceptíveis. Isso ocorre na aquisição de dados a partir de sensores como microfones, câmeras ou termômetros. A Figura 2 mostra um exemplo de sinal analógico e um exemplo de sinal digital. Perceba como o sinal analógico é contínuo e fluido, enquanto o digital é representado através de valores discretos – por isso os "degraus" no gráfico.

![Sinal analógico e sinal digital](/content/images/digital-vs-analog.webp "Sinal analógico e sinal digital")
**Figura 2.** Sinal analógico e sinal digital (Fonte: https://runwayaudio.com/blogs/news/analog-vs-digital-why-it-matters-to-the-modern-musician).

Os computadores operam sobre dados binários, que por sua vez são discretos e digitais. Como já vimos, o bit é a menor unidade de informação representável por um computador, podendo assumir os valores 0 ou 1. Em computadores, a eletricidade é usada para armazenar, transmitir e processar dados. O valor 0 é geralmente associado a uma voltagem baixa, enquanto o valor 1 é associado a uma voltagem alta.

Dessa forma, todos os dados representados em um computador são binários. Como a gama de valores a ser representada pode ser muitas vezes maior que dois (0 ou 1), faz-se necessário aprendermos como funciona o sistema binário para entendermos como outros valores são representados nesse sistema. Dessa forma, entenderemos como os dados são representados em um computador.

### 1.4. O Sistema Binário

O sistema de numeração binário é um sistema de numeração posicional de base 2. Em um sistema de numeração posicional, a posição do algarismo no número determina seu valor. Por ser de base 2, o sistema binário requer apenas dois símbolos diferentes (0 e 1) para representar os dígitos — diferente do sistema decimal que conhecemos, que usa 10 símbolos diferentes (0 a 9).

O sistema binário é utilizado em sistemas digitais devido à simplicidade de implementação utilizando *portas lógicas*, que são os componentes básicos da eletônica digital. Em computadores modernos, os bits (dígitos binários – 0 ou 1) podem ser representados por duas voltagens diferentes, ou até por duas polaridades magnéticas diferentes em discos magnéticos. Um exemplo de disco magnético é o disco rígido usado para armazenamento em massa de dados, mostrado na Figura 3.

![Disco rígido](/content/images/hard-disk.png "Disco rígido")
**Figura 3.** Disco rígido aberto para mostrar interior (Fonte: https://pnghunter.com/png/hard-disc-21/).

### 1.5. Contagem no sistema binário

Antes de prosseguirmos com a contagem no sistema binários, vamos analisar a contagem no sistema decimal, utilizamos os algarismos de 0 a 9. Ao atingir o valor máximo representável com uma determinada quantidade de dígitos, incrementamos o valor mais à esquerda para continuar a contar, como é mostrado a seguir:

> **0, 1, 2, 3, 4, 5, 6, 7, 8, 9** (Atingimos o valor máximo representável com um algarismo.)
> 
> **10** (O dígito mais à direita – chamado de o menos significativo – volta para 0. O próximo dígito à esquerda, que se supunha ser 0, é incrementado – nesse caso, para 1.)
> 
> E assim a contagem continua: **11, 12, 13, 14, 15, 16, 17, 18, 19**
> 
> **20** (Da mesma forma que aconteceu com o **10**, o dígito mais à direita volta para 0, o próximo dígito à esquerda é incrementado – agora para 2.) 
>
> E a contagem continua: **21, 22, 23, 24, 25, 26, 27, 28, 29, 30...**
>
> Quando dois ou mais dígitos menos significativos atingem seu valor máximo, como é o caso de **99**, ambos voltam para 0 e o próximo dígito à esquerda é incrementado: **99** passa para **100**.

A contagem no sistema binário funciona da mesma forma, porém com apenas dois algarismos, como é mostrado a seguir:

> **0**
> 
> **1** (Valor máximo representável com um algarismo.)
>
> **10** (Dígito menos significativo volta para 0 e o próximo dígito à esquerda, que se supunha ser 0, é incrementado.)
> 
> **11** (Valor máximo representável com dois algarismos.)
> 
> **100** (Dois dígitos atingiram seu valor máximo: **11** passa para **100**.)
> 
> **101, 110, 111, 1000, 1001, 1010**, e assim por diante.

Os valores binários acima representam os valores decimais de 0 a 10, como mostrado na Tabela 3. 

**Tabela 3.** Valores decimais de 0 a 10 e seus correspondentes no sistema binário.

| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1 | 10 | 11 | 100 | 101 | 110 | 111 | 1000 | 1001 | 1010 | 

Entretanto, não seria nada prático precisar contar até um valor muito alto para saber sua representação em binário. Por isso, vamos ver como fazer a conversão.

### 1.6. Conversão de Binário para Decimal

Como já foi dito, o sistema binário, assim como o decimal, é um sistema de numeração posicional. Vamos, primeiramente, ver como isso funciona no sistema decimal, antes de passarmos para o binário. Considere o valor 7492. Em suas respectivas posições, os algarismos possuem os valores mostrados a seguir:

| Posição | 1000 | 100 | 10 | 1 | 
| --- | --- | --- | --- | --- |
| Algarismo | 7 | 4 | 9 | 2 |
| Valor | 7000 | 400 | 90 | 2 |

Para compor o valor total, multiplicamos os algorismos pelos valores das posições correspondentes: milhares (1000), centenas (100), dezenas (10) e unidades (1): 7 &#215; 1000 + 4 &#215; 100 + 9 &#215; 10 + 2 &#215; 1, que totaliza 7492. Perceba que, começando da posição mais à direita (1), os valores das próximas posições são o **valor anterior * 10**. Esse processo é natural para nós, que o realizamos sem nos dar conta.

Agora considere o valor binário 10110~2~ (Usa se o 2 subscrito — <sub>2</sub> — para indicar que aquele valor é de base 2. A mesma coisa acontece para a base decimal — 10 — ou outras que estudaremos adiante). 

Podemos construir a mesma tabela para descobrir o valor decimal correspondente a esse número binário. Entretanto, na tabela para binário, os valores das posições, a partir da 1, são o **valor anterior * 2**.

| Posição | 16 | 8 | 4 | 2 | 1 | 
| --- | --- | --- | --- | --- | --- |
| Algarismo | 1 | 0 | 1 | 1 | 0 |
| Valor | 16 | 0 | 4 | 2 | 0 |

Para compor o valor total, multiplicamos os algarismos pelos valores das posições correspondentes: 16, 8, 4, 2 e 1: 1 &#215; 16 + 0 &#215; 8 + 1 &#215; 4 + 1 &#215; 2 + 1 &#215; 1, que totaliza 22.

Veja mais exemplos a seguir:

1101001<sub>2</sub>

| Posição | 64 | 32 | 16 | 8 | 4 | 2 | 1 | 
| --- | --- | --- | --- | --- | --- | --- | --- |
| Algarismo | 1 | 1 | 0 | 1 | 0 | 0 | 1 |
| Valor | 64 | 32 | 0 | 8 | 0 | 0 | 1 |

Logo, o resultado é 1 &#215; 64 + 1 &#215; 32 + 0 &#215; 16 + 1 &#215; 8 + 0 &#215; 4 + 0 &#215; 2 + 1 &#215; 1 = **105**.

---

1001111<sub>2</sub>

| Posição | 64 | 32 | 16 | 8 | 4 | 2 | 1 | 
| --- | --- | --- | --- | --- | --- | --- | --- |
| Algarismo | 1 | 0 | 0 | 1 | 1 | 1 | 1 |
| Valor | 64 | 0 | 0 | 8 | 4 | 2 | 1 |

Logo, o resultado é 1 &#215; 64 + 0 &#215; 32 + 0 &#215; 16 + 1 &#215; 8 + 1 &#215; 4 + 1 &#215; 2 + 1 &#215; 1 = **79**.

### 1.7. Conversão de Decimal para Binário

Para converter da base 10 (decimal) para a base 2 (binário), utiliza-se o método das **divisões consecutivas**. Divide-se o valor decimal consecutivamente por 2 até que o resultado da divisão seja 1 e não seja mais possível continuar dividindo. Depois, a partir do resultado da última divisão, que será 1, utiliza-se os valores dos restos, de trás pra frente como é mostrado na Figura 4 (veja a seta vermelha)

Veja, a seguir, como funciona o método das divisões consecutivas na conversão do valor 158 para binário. O resultado é 10011110

![Conversão do valor decimal 158 para binário](/content/images/conversao-158-10-2.png "Conversão do valor decimal 158 para binário")
**Figura 4.** Conversão do valor decimal 158 para binário.

### 1.8. Referências

1. CARVALHO, A. C. P. L. F. de; LORENA, A. C. Introdução à computação - Hardware, software e dados. LTC, 2017. 
2. WIKIPÉDIA. Sistema de Numeração Binário. <https://pt.wikipedia.org/wiki/Sistema_de_numeração_binário> Acesso em 04 de abril de 2022.