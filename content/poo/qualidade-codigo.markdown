---
layout: default
title: Qualidade de código - POO
nav_exclude: true
---

# Checklist de Qualidade de Código

**Disciplina:** Programação Orientada a Objetos  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Instituição:** IFPB - Campus Esperança  
**Professor:** Antonio Dias

## Nomes Significativos

- [ ] Variáveis têm nomes claros e descritivos.
- [ ] Métodos indicam claramente o que fazem.
- [ ] Classes representam entidades com nomes em `PascalCase`.
- [ ] Sem abreviações confusas (`n1`, `vlr`, `tmp`, etc).

## Convenções de Nomenclatura

- [ ] `camelCase` para variáveis e métodos.
- [ ] `PascalCase` para classes.
- [ ] Constantes em `MAIÚSCULAS_COM_UNDERSCORE`.

## Organização e Formatação

- [ ] Indentação correta e consistente.
- [ ] Blocos de código bem delimitados com `{}`.
- [ ] Uso de linhas em branco para separar blocos lógicos.

## Comentários

- [ ] Comentários explicam por que algo foi feito.
- [ ] Sem comentários redundantes ou óbvios.
- [ ] Métodos possuem comentários explicando o que fazem (parâmetros, retorno).

## Métodos

- [ ] Cada método tem uma única responsabilidade.
- [ ] Métodos longos divididos em partes menores, se necessário.

## Código Limpo

- [ ] Código "morto" (não usado) removido.
- [ ] Sem trechos comentados de código antigo.

## Evite Duplicação

- [ ] Trechos repetidos transformados em métodos reutilizáveis.
- [ ] Valores fixos extraídos como constantes.

## Organização do Projeto

- [ ] As responsabilidades estão distribuídas em diferentes classes.
- [ ] Cada classe tem um propósito claro.

## Tratamento de Erros

- [ ] Uso adequado de try/catch.
- [ ] Sem `catch (Exception e)` genérico, a menos que necessário.
- [ ] Lançamento de exceções quando apropriado.

## Clareza e Legibilidade

- [ ] Código é fácil de ler e entender.
- [ ] Evite "jeitinhos" e soluções "espertas" que sacrificam clareza.

## Idioma e Convenções

- [ ] Idioma consistente (português ou inglês).
- [ ] Convenções específicas da linguagem seguidas.
