const celulares = ["iPhone", "samsung", "lg", "xiami", "alcatel", "nokia"];

// Las formas antiguas de recorrer un array

// bucle for: Sirve para poder recorrer un arreglo

// let i = 0;
// i < celulares.length
// i++ => i = i + 1

console.log("----- Bucle For -----");

for (let i = 0; i < celulares.length; i++) {
  console.log(celulares[i]);
}

console.log("----- Bucle For of -----");

let contador = 0;

for (let celular of celulares) {
  if (contador % 2 === 0) console.log(contador, celular);

  contador++;
}

console.log("---- Bucle For in ---");

for (let celularIndice in celulares) {
  if (celularIndice % 2 !== 0)
    console.log(celularIndice, celulares[celularIndice]);
}

// Hacer una funcion que detecte si un numero es primo o no primo
console.log("---- Resolviendo problemas ---");

function saberSiNumeroEsPrimo(numero) {
  let contador = 0;

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) contador++;
  }

  if (contador === 2) return "Es primo";
  return "No es primo";
}

console.log(saberSiNumeroEsPrimo(7));

// .toLowerCase() sirve para pasar un texto a minusculas // LINDER => linder

function contarA(frase) {
  const arrayFrase = frase.toLowerCase().replaceAll(" ", "").split("");

  let contador = 0;

  for (let letra of arrayFrase) {
    if (letra === "a") contador++;
  }

  return contador;
}

console.log(contarA("Andres ama a su mama"));
