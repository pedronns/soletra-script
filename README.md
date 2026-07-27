# Script Soletra

Um script em **Node.js** para encontrar todas as palavras válidas de um desafio do jogo
**Soletra**, utilizando um dicionário Hunspell (.dic) ou um arquivo de texto.

O programa filtra as palavras de acordo com as letras disponíveis, exige uma letra obrigatória e organiza o resultado por quantidade de letras.

## Funcionalidades

-   Filtragem por letras permitidas.
-   Letra obrigatória.
-   Tamanho mínimo configurável.
-   Suporte a dicionários `.txt`.
-   Suporte a dicionários `.dic` (Hunspell/LibreOffice).
-   Remoção de acentos para validação, preservando o `ç`.
-   Remoção de palavras duplicadas.
-   Ordenação por tamanho e ordem alfabética.
-   Agrupamento das palavras por quantidade de letras.

## Requisitos

-   Node.js 18 ou superior.

## Configuração

Edite as constantes no início do arquivo:

``` js
const LETRAS = new Set(["a", "b", "d", "i", "r", "u", "z"]);
const OBRIGATORIA = "z";
const MIN = 6;
```

-   **LETRAS**: conjunto de letras permitidas.
-   **OBRIGATORIA**: letra que deve estar presente em todas as palavras.
-   **MIN**: quantidade mínima de letras.

## Dicionários suportados

O script funciona com:

-   Arquivos `.txt` (uma palavra por linha).
-   Arquivos `.dic` do Hunspell/LibreOffice.

Para arquivos `.dic`, o script ignora automaticamente a primeira linha
(quantidade de entradas) e remove as flags morfológicas.

## Execução

``` bash
node index.js
```

## Exemplo de saída

``` text
=== Palavras com 6 letras (8) ===

azedar
azurar
...

=== Palavras com 7 letras (5) ===

bizarra
zurrada

Total de palavras: 13
```

## Como funciona

1.  Lê o dicionário.
2.  Remove acentos (preservando o `ç`).
3.  Verifica o tamanho mínimo.
4.  Verifica a letra obrigatória.
5.  Verifica se todas as letras pertencem ao conjunto permitido.
6.  Remove duplicatas.
7.  Ordena por tamanho e alfabeticamente.
8.  Agrupa por quantidade de letras.
9.  Exibe o resultado.

## Licença

MIT.
