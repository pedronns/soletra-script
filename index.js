const fs = require("fs");

const OBRIGATORIA = "v";

const LETRAS = new Set([
  OBRIGATORIA,
  "a",
  "e",
  "f",
  "i",
  "o",
  "t"]);
const MIN = 4;

// Remove acentos, mas preserva o ç
function normalizar(str) {
  return str
    .replace(/ç/g, "__CEDILHA__")
    .replace(/Ç/g, "__CEDILHA_MAIUSCULA__")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/__CEDILHA__/g, "ç")
    .replace(/__CEDILHA_MAIUSCULA__/g, "Ç")
    .normalize("NFC");
}

const palavras = fs
  .readFileSync("dicionario.txt", "utf8")
  .split(/\r?\n/)
  .slice(1) // remove a primeira linha (quantidade de palavras)
  .map(linha => linha.split("/")[0]) // remove as flags
  .map(p => p.trim().toLowerCase())
  .filter(Boolean);

const validas = [];
const vistas = new Set();

for (const original of palavras) {
  if (vistas.has(original)) continue;
  vistas.add(original);

  const palavra = normalizar(original);

  if (palavra.length < MIN) continue;
  if (!palavra.includes(OBRIGATORIA)) continue;

  if ([...palavra].every(letra => LETRAS.has(letra))) {
    validas.push(original);
  }
}

validas.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  }

  return a.localeCompare(b, "pt-BR");
});

const grupos = new Map();

for (const palavra of validas) {
  const tamanho = palavra.length;

  if (!grupos.has(tamanho)) {
    grupos.set(tamanho, []);
  }

  grupos.get(tamanho).push(palavra);
}

for (const [tamanho, lista] of grupos) {
  console.log(`\n=== Palavras com ${tamanho} letras (${lista.length}) ===\n`);

  for (const palavra of lista) {
    console.log(palavra);
  }
}

console.log(`\nTotal de palavras: ${validas.length}`);