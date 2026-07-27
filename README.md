# Script Soletra

Um script em **Node.js** para encontrar todas as palavras válidas de um desafio do jogo **Soletra**, utilizando um dicionário Hunspell (`.dic`).

O programa filtra as palavras de acordo com as letras disponíveis, exige uma letra obrigatória e organiza o resultado por quantidade de letras.

## Funcionalidades

- Filtragem por letras permitidas.
- Letra obrigatória.
- Tamanho mínimo configurável.
- Suporte a dicionários `.dic` (Hunspell/LibreOffice).
- Remoção de acentos para validação, preservando o `ç`.
- Remoção de palavras duplicadas.
- Ordenação por tamanho e ordem alfabética.
- Agrupamento das palavras por quantidade de letras.

## Requisitos

- Node.js 18 ou superior.

## Configuração

Edite as constantes no início do arquivo:

```js
const OBRIGATORIA = "z";
const LETRAS = new Set(["a", "b", "d", "i", "r", "u", OBRIGATORIA]);
const MIN = 6;
```

- **OBRIGATORIA**: letra que deve estar presente em todas as palavras.
- **LETRAS**: conjunto de letras permitidas.
- **MIN**: quantidade mínima de letras.

> **Importante:** `OBRIGATORIA` também deve fazer parte do conjunto `LETRAS`. No exemplo acima, ela é adicionada diretamente ao `Set`, evitando duplicação e possíveis inconsistências.

## Dicionário

O script utiliza um arquivo Hunspell (`.dic`), como o `pt_BR.dic` do LibreOffice.

Durante a leitura, o programa:

- ignora automaticamente a primeira linha (quantidade de entradas);
- remove as flags morfológicas (texto após `/`);
- converte todas as palavras para minúsculas;
- remove entradas duplicadas.

Exemplo:

```text
abacate/SM
abacaxi
abafar/V
```

É interpretado como:

```text
abacate
abacaxi
abafar
```

## Execução

```bash
node index.js
```

## Exemplo de saída

```text
=== Palavras com 4 letras (12) ===

avóe
...

=== Palavras com 5 letras (8) ===

ativo
...

=== Palavras com 6 letras (3) ===

afetivo

Total de palavras: 23
```

## Como funciona

1. Lê o dicionário Hunspell (`.dic`).
2. Ignora a primeira linha e remove as flags morfológicas.
3. Remove acentos, preservando o `ç`.
4. Descarta palavras menores que o tamanho mínimo.
5. Verifica se a palavra contém a letra obrigatória.
6. Confirma que todas as letras pertencem ao conjunto permitido.
7. Remove palavras duplicadas.
8. Ordena por tamanho e ordem alfabética.
9. Agrupa as palavras por quantidade de letras.
10. Exibe todas as palavras encontradas.

## Licença

Este projeto está licenciado sob a licença MIT.