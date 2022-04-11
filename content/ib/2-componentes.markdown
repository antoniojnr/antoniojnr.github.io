---
layout: default
title: Componentes de um Sistema Computacional
nav_exclude: true
---
## 2. Componentes de um Sistema Computacional

Um **sistema computacional** é composto por duas partes: **hardware** e **software**. O hardware de um computador é a parte física, os equipamentos eletrônicos. O software é a coleção de programas que determinam as instruções para o hardware executar.

## 2.1. Hardware

Seis partes compõem o hardware de um computador:
1. Unidade Central de Processamento (UCP, ou *CPU*, em inglês)
2. Memória principal
3. Memória secundária
4. Sistema de entrada
5. Sistema de saída
6. Sistema de comunicação

Um barramento conecta todos esses sistemas, como mostrado na Figura 1.

![Componentes de um sistema computacional](/content/images/hardware.png "Componentes de um sistema computacional")
**Figura 1.** Componentes de um sistema computacional.

### Unidade Central de Processamento

A Unidade Central de Processamento (UCP), também chamada de processador ou CPU (em inglês) consiste das seguintes partes:
- **Unidade Lógica e Aritmética (ULA)**, que executa operações lógicas e
aritméticas.
- **Registradores**, que armazenam dados temporariamente enquanto estão sendo processados.
- **Unidade de Controle**, que busca instruções da memória e as executa,
dirigindo as operações coordenadas da ULA, registradores e outros
componentes.

Na Figura 2, é mostrada uma UCP.

![Unidade Central de Processamento (UCP)](/content/images/cpu.webp "Unidade Central de Processamento (UCP)")
**Figura 2.** Unidade Central de Processamento (UCP).

### Memória Primária

Armazena programas e dados temporariamente durante o processamento. Por ser um tipo de *memória volátil*, seus dados são perdidos quando o fornecimento de energia cessa, ou seja, quando o computador é desligado.

A memória é organizada em **células de memória**, que armazenam um bit. Essas células de memória são agrupadas em **palavras** de tamanho fixo. Por exemplo, 1, 2, 4, 8, 16, 32, 64 ou 128 bits. Cada palavra é acessada por um **endereço** de *N* bits. Na Figura 3, é mostrada a estrutura da memória primária em detalhe.

![Memória principal](/content/images/mem-ram.png "Memória principal")
**Figura 3.** Memória principal.

Em geral, a memória primária é usada para armazenar três tipos de dados: dados do sistema operacional, programas em execução e dados de programas. O tipo de dado armazenado depende da aplicação. Na Figura 3, demonstra-se o armazenamento de três tipos de dados: *número inteiro* (12345), *número real* (56,7) e *string* (Antonio), que é um tipo de dado textual.

### Memória Secundária

Armazena programas e dados. Quando desligamos o computador, programas e dados permanecem guardados na memória (ou armazenamento) secundária. Exemplos de dispositivos de armazenamento secundário são: flash drives (pendrives), CDs, DVDs, discos rígidos, discos de estado sólido (SSDs).