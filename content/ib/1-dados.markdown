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

## 2. Dado e Informação

Dados, informação e conhecimento seguem uma hierarquia que sugere que dados, em maior quantidade, são a base para obtenção de informações e, a partir destas, de conhecimento. 

Na base da hierarquia estão os **dados**, que podem ser provenientes de observações do mundo físico. Dados são uma coleção de valores que, por si só, não têm um significado. Podem ser texto, números, sons ou imagens. Para serem representados e processados pelo computador, precisam estar codificados digitalmente. A Tabela 1 reúne uma coleção de dados.

**Tabela 1.** Exemplo de dados
| Valor |
| ----------- |
| 5 |
| 3 |
| 9 |

Uma **informação** surge a partir da interpretação dos dados. É quando os dados são relacionados entre si ou com outros dados para que sejam úteis. A Tabela 2 a seguir atribui um significado aos dados da Tabela 1.

**Tabela 2.** Exemplo de informações
| Produto | Quantidade |
| ----------- | ----------- |
| Picanha | 5 |
| Margarina | 3 |
| Cerveja | 9 |

A partir destas informações, pode-se derivar novas informações. Sendo a Tabela 2 as quantidades de itens vendidos em um determinado mês em um supermercado, um programa pode ser escrito para identificar os itens mais vendidos ou os itens mais vendidos juntos para determinar estratégias de venda em um período posterior.

## 3. Representação Digital

Dispositivos digitais são aqueles que operam sobre dados discretos ou dígitos. Podemos citar telefones celulares, computadores e televisores como exemplos de dispositivos digitais. Por outro lado, dispositivos analógicos operam sobre dados contínuos. Na Figura 1 são mostrados exemplos dispositivos analógicos na parte superior e digitais na parte inferior. 

![Dispositivos analógicos e digitais](/content/images/digital-and-analog.png "Dispositivos analógicos e digitais")
**Figura 1.** Dispositivos analógicos e digitais.

O nome analógico vem de "análogo" ao processo físico. Computadores são capazes de representar dados analógicos provenientes de um processo físico. Para tal, esses dados precisam passar por uma conversão de analógico para digital. Essa é uma conversão com perdas, uma vez que os valores representados são apenas uma aproximação. Com precisão suficiente utilizada nessa conversão, as perdas tornam-se imperceptíveis. Isso ocorre na aquisição de dados a partir de sensores como microfones, câmeras ou termômetros. A Figura 2 mostra um exemplo de sinal analógico e um exemplo de sinal digital. Perceba como o sinal analógico é contínuo e fluido, enquanto o digital é representado através de valores discretos – por isso os "degraus" no gráfico.

![Sinal analógico e sinal digital](/content/images/digital-vs-analog.webp "Sinal analógico e sinal digital")
**Figura 2.** Sinal analógico e sinal digital.

Os computadores operam sobre dados binários, que por sua vez são discretos e digitais. Como já vimos, o bit é a menor unidade de informação representável por um computador, podendo assumir os valores 0 ou 1. Em computadores, a eletricidade é usada para armazenar, transmitir e processar dados. O valor 0 é geralmente associado a uma voltagem baixa, enquanto o valor 1 é associado a uma voltagem alta.

Dessa forma, todos os dados representados em um computador são binários. Como a gama de valores a ser representada pode ser muitas vezes maior que dois (0 ou 1), faz-se necessário aprendermos como funciona o sistema binário para entendermos como outros valores são representados nesse sistema. Dessa forma, entenderemos como os dados são representados em um computador.

### 3.1. O Sistema Binário