function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  ) {
    return "Es vocal";
  } else if (letra.length >= 2) {
    return "Dato incorrecto, muy largo el texto";
  } else {
    return "Dato incorrecto";
  }
}


function isVowel(letra) {
  if (!letra || typeof letra !== "string") return "Dato incorrecto";

  if (letra.length > 1) return "Maximo debe ser 1 caracter";

  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.includes(letra.toLowerCase()) ? "Es vocal" : "No es vocal";
}

console.log(isVowel("e"));
console.log(isVowel("x"));
console.log(isVowel("ae"));
console.log(isVowel("A"));
console.log(isVowel(1));
console.log(isVowel());
console.log(isVowel(null));
console.log(isVowel([]));
