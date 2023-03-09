function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return Math.pow(num, 2);
}

const potencia = elevarAlCuadrado(8);
console.log(potencia);

// const nombreDeFuncion = () => { }

const elevarCuadradoArrow = (numero) => numero ** 2;

const potencia2 = elevarCuadradoArrow(18);
console.log(potencia2);
