---
title: "3. Funções (Exercício)"
weight: 3
bookHidden: true
---

# 3. Funções

## Exercício

Uma plataforma de streaming calcula estatísticas de reprodução dos usuários.

---

**1.** Escreva uma função `calcularTempo(minutos, segundos)` que retorne o tempo total em segundos.

```javascript
calcularTempo(3, 45); // 225
calcularTempo(5, 0); // 300
```

**2.** Escreva uma função `classificarMusica(reproducoes)` que retorne `"Hit"` para músicas com mais de 1000 reproduções, `"Popular"` para mais de 500 e `"Iniciante"` para as demais.

```javascript
classificarMusica(1500); // "Hit"
classificarMusica(750); // "Popular"
classificarMusica(200); // "Iniciante"
```

**3.** Reescreva `calcularTempo` e `classificarMusica` como funções seta.

**4.** Escreva uma função `analisarMusica(minutos, segundos, reproducoes)` que calcule o tempo total usando `calcularTempo` e retorne um objeto com o tempo e a classificação da música.

```javascript
analisarMusica(3, 45, 1500);
// { tempo: 225, classificacao: "Hit" }
```

**5.** Escreva uma função `criarFiltro(minimoReproducoes)` que retorne uma função que receba o número de reproduções e retorne `true` se atingir o mínimo.

```javascript
let filtroHit = criarFiltro(1000);
let filtroPopular = criarFiltro(500);

filtroHit(1500); // true
filtroHit(750); // false
filtroPopular(750); // true
filtroPopular(200); // false
```

Em seguida, escreva uma função `filtrarMusicas(musicas, filtro)` que receba um array de objetos com a propriedade `reproducoes` e retorne apenas as músicas que passam no filtro.

```javascript
let musicas = [
  { titulo: "Neon Lights", reproducoes: 1500 },
  { titulo: "Slow Dance", reproducoes: 750 },
  { titulo: "First Draft", reproducoes: 200 },
];

filtrarMusicas(musicas, filtroHit); // [{ titulo: "Neon Lights", reproducoes: 1500 }]
filtrarMusicas(musicas, filtroPopular); // [{ titulo: "Neon Lights", ... }, { titulo: "Slow Dance", ... }]
```
