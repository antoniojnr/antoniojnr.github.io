---
title: "Lista 05"
weight: 1
bookCollapseSection: true
#bookHidden: true
---

# Lista 05

## Instruções

- Observe com atenção os requisitos e como os pacotes para cada questão devem ser organizados.
- Todos os exercícios devem ser feitos em um único projeto do IntelliJ.
- A correção será feita presencialmente, com o professor executando os casos de teste na sua máquina.
- Baixe os casos de teste {{< button href="/docs/disciplinas/poo-ads/exercicios/testes-lista05-20261.zip" >}}aqui{{< /button >}}
- Respeite a estrutura de pacotes também no diretório de testes, mas mova para o diretório de testes do seu projeto apenas os casos de testes em que estiver trabalhando. Caso contrário, seu projeto apresentará erro de compilação enquanto não implementar todas as classes e métodos usados nos casos de testes.

## Exercícios

**Questão 01.** Uma farmácia de manipulação produz medicamentos sob encomenda. Cada fórmula é composta por ingredientes com quantidades e unidades específicas. O farmacêutico pode calcular o custo da fórmula de formas diferentes conforme as informações disponíveis.

Construa as classes a seguir:
A classe `Ingrediente` possui os atributos:

- `nome` (String)
- `custoUnitario` (double)
- `unidade` (String) — ex: `"mg"`, `"ml"`, `"g"`

A classe `Formula` **compõe** uma lista de pares `Ingrediente` + quantidade. A classe `Formula` deve ter os seguintes métodos:

- `adicionarIngrediente(Ingrediente ing, double quantidade)`
- `adicionarIngrediente(Ingrediente ing, double quantidade, String observacao)` — sobrecarga com observação de manipulação (ex: `"dissolver antes"`)
- `calcularCusto()` — calcula o custo total somando `custoUnitario * quantidade` de cada ingrediente
- `calcularCusto(double margemLucro)` — aplica margem percentual sobre o custo total
- `calcularCusto(double margemLucro, double desconto)` — aplica margem e desconto fixo em reais
- `gerarReceituario()` — retorna uma String formatada com todos os ingredientes, quantidades, unidades e observações (se houver). Não há restrições quanto ao formato que deve ser seguido. Verifique os testes no caso de dúvida.

A classe `Pedido` é composta de uma `Formula` e tem atributos `nomePaciente` (String) e `dataEntrega` (String). O método `resumo()` deve chamar `gerarReceituario()` da fórmula e combinar com os dados do pedido.

### Exemplo de uso esperado

```java
Ingrediente vitamina = new Ingrediente("Vitamina C", 0.05, "mg");
Ingrediente zinco = new Ingrediente("Zinco", 0.20, "mg");

Formula f = new Formula("Cápsula Antioxidante");
f.adicionarIngrediente(vitamina, 500, "dissolver antes");
f.adicionarIngrediente(zinco, 10);

System.out.println(f.calcularCusto());             // 27.0
System.out.println(f.calcularCusto(0.30));         // 35.10
System.out.println(f.calcularCusto(0.30, 5.00));   // 30.10

Pedido p = new Pedido("Maria", "25/06/2025", f);
System.out.println(p.resumo());
```

---

**Questão 02.** Você vai implementar uma plataforma de vídeos curtos que permite que criadores publiquem conteúdo e acumulem interações do público. Cada publicação tem métricas de engajamento e o perfil do criador influencia como essas métricas são exibidas e interpretadas.

Crie a classe `Criador` com os atributos:

- `nomeUsuario` (String)
- `seguidores` (int)
- `verificado` (boolean)

A classe `Midia` possui os atributos:

- `tipo` (String) — `"video"`, `"imagem"` ou `"audio"`
- `duracaoSegundos` (int) — usado apenas para vídeo e áudio
- `resolucao` (String) — usado apenas para imagem e vídeo (ex: `"1080p"`)

A classe `Publicacao` contém um `Criador` e uma `Midia`, com os atributos `curtidas` (int), `comentarios` (int) e `compartilhamentos` (int). A classe `Publicacao` deve ter:

- `taxaEngajamento()` — `(curtidas + comentarios + compartilhamentos) / (double) criador.seguidores * 100`
- `taxaEngajamento(int visualizacoes)` — sobrecarga: usa visualizações como denominador em vez de seguidores
- `resumo()` — retorna String com dados do criador (chamando `Criador.perfil()`) e da mídia (chamando `Midia.descricao()`), mais as métricas
- `resumo(String idioma)` — sobrecarga: se `idioma` for `"en"`, os rótulos do resumo saem em inglês; caso contrário, em português. (Rótulos são descrições dos dados, como "Likes", "Followers", etc.)
- `ehViral()` — retorna `true` se `taxaEngajamento()` for `>= 10.0` **ou** se o criador for verificado e a taxa for `>= 5.0`

A classe `Criador` deve ter `perfil()` retornando ex: `"@ana_digital (120000 seguidores) ✓"` — ou sem o `✓` se não verificado. Copie o caractere `✓` daqui, caso necessite.
A classe `Midia` deve ter `descricao()` retornando ex: `"Vídeo 1080p | 45s"`, `"Imagem 1080p"` ou `"Áudio | 120s"`.

### Exemplo de uso esperado

```java
Criador c = new Criador("ana_digital", 120000, true);
Midia m = new Midia("video", 45, "1080p");
Publicacao p = new Publicacao(c, m, 8500, 430, 210);

System.out.println(p.taxaEngajamento());        // ≈ 7.616
System.out.println(p.taxaEngajamento(200000));  // ≈ 4.57
System.out.println(p.ehViral());                // true (verificada + taxa >= 5)
System.out.println(p.resumo());
System.out.println(p.resumo("en"));
```

---

**Questão 03:** Um aplicativo de delivery registra pedidos feitos por clientes. Cada pedido é composto por itens de um restaurante, e o valor final depende da distância, do tipo de entrega e de eventuais cupons de desconto.

### O que implementar

Crie a classe `Restaurante` com os atributos:

- `nome` (String)
- `categoria` (String) — ex: `"Japonês"`, `"Lanches"`
- `notaAvaliacao` (double) — de 1.0 a 5.0

Crie a classe `ItemPedido` com os atributos:

- `nomePrato` (String)
- `preco` (double)
- `quantidade` (int)

Crie a classe `Pedido` é composta de um `Restaurante` e uma lista de `ItemPedido`, com os atributos `nomeCliente` (String) e `distanciaKm` (double). A classe `Pedido` deve ter:

- `adicionarItem(ItemPedido item)`
- `adicionarItem(String nomePrato, double preco, int quantidade)` — sobrecarga por parâmetros
- `calcularSubtotal()` — soma de `preco * quantidade` de todos os itens
- `calcularTotal()` — subtotal + taxa de entrega: `R$2,00` fixos + `R$1,50` por km
- `calcularTotal(String tipoEntrega)` — sobrecarga: se `"expressa"`, a taxa de entrega dobra; se `"retirada"`, taxa é zero
- `calcularTotal(String tipoEntrega, double cupomDesconto)` — sobrecarga: aplica desconto fixo em reais **após** calcular o total com o tipo de entrega, sem deixar o valor ficar negativo (mínimo `R$0,00`)
- `resumoPedido()` — retorna String com nome do cliente, dados do restaurante (chamando `Restaurante.info()`) e a lista de itens (chamando `ItemPedido.linha()` para cada um)

A classe `Restaurante` deve ter `info()` retornando ex: `"Sushi Boa Vista | Japonês | ★ 4.8"`.  
A classe `ItemPedido` deve ter `linha()` retornando ex: `"2x Temaki Salmão — R$29,90"`.

### Exemplo de uso esperado

```java
Restaurante r = new Restaurante("Sushi Boa Vista", "Japonês", 4.8);
Pedido p = new Pedido("Lucas", r, 3.0);

p.adicionarItem("Temaki Salmão", 14.95, 2);
p.adicionarItem(new ItemPedido("Missoshiru", 6.00, 1));

System.out.println(p.calcularSubtotal());               // 35.90
System.out.println(p.calcularTotal());                  // 35.90 + 2.00 + 4.50 = 42.40
System.out.println(p.calcularTotal("expressa"));        // 35.90 + 13.00 = 48.90
System.out.println(p.calcularTotal("retirada", 5.00));  // 35.90 - 5.00 = 30.90
System.out.println(p.resumoPedido());
```

---

**Questão 04.** Um aplicativo de saúde registra treinos dos usuários. Cada treino é composto por séries de exercícios, e o sistema avalia se o treino foi suficiente com base no perfil físico do usuário.

### O que implementar

Crie a classe `Usuario` com os atributos:

- `nome` (String)
- `pesoKg` (double)
- `alturaM` (double)
- `idadeAnos` (int)
- `sexo` (String) — `"M"` ou `"F"`

Crie a classe `Serie` com os atributos:

- `nomeExercicio` (String)
- `repeticoes` (int)
- `cargaKg` (double)

Crie a classe `Treino` que é composta de um `Usuario` e uma lista de `Serie`. A classe `Treino` deve ter:

- `adicionarSerie(Serie s)`
- `adicionarSerie(String exercicio, int repeticoes, double cargaKg)` — sobrecarga por parâmetros
- `calcularVolume()` — soma de `repeticoes * cargaKg` de todas as séries (volume total em kg)
- `calcularVolume(String nomeExercicio)` — sobrecarga: retorna o volume **apenas** das séries do exercício informado; retorna `0.0` se o exercício não existir
- `fcMaxima()` — frequência cardíaca máxima estimada a partir do `Usuario`: `220 - idadeAnos` para `"M"`, `226 - idadeAnos` para `"F"`
- `avaliar()` — delega para `Usuario.calcularIMC()` e, com base nisso, retorna:
  - `"Treino adequado"` se volume total `>= 1000` e IMC entre `18.5` e `29.9`
  - `"Aumentar carga"` se volume total `< 1000` e IMC entre `18.5` e `29.9`
  - `"Consulte um profissional"` nos demais casos (IMC fora da faixa)
- `relatorio()` — retorna String com os dados do usuário (chamando `Usuario.resumo()`), cada série (chamando `Serie.linha()`) e o volume total

A classe `Usuario` deve ter:

- `resumo()` retornando ex: `"Carlos | 28 anos | 78kg"`
- `calcularIMC()` retornando o IMC calculado: `pesoKg / (alturaM * alturaM)`

A classe `Serie` deve ter `linha()` retornando ex: `"Supino: 10x 80kg"`.

### Exemplo de uso esperado

```java
Usuario u = new Usuario("Carlos", 78.0, 1.75, 28, "M");
Treino t = new Treino(u);

t.adicionarSerie("Supino", 10, 80.0);
t.adicionarSerie("Supino", 10, 80.0);
t.adicionarSerie(new Serie("Agachamento", 12, 100.0));

System.out.println(t.calcularVolume());             // 2800.0
System.out.println(t.calcularVolume("Supino"));     // 1600.0
System.out.println(t.calcularVolume("Rosca"));      // 0.0
System.out.println(t.fcMaxima());                   // 192
System.out.println(t.avaliar());                    // "Treino adequado"
System.out.println(t.relatorio());
```
