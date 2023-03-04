function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  if (Math.round(numero) > 0){
    return 'Es positivo'
  } else if (Math.round(numero) < 0) {
    return 'Es negativo'
  } else {
    return false
  }
}

const resultado1 = esPositivo(5)
const resultado2 = esPositivo(-3)
const resultado3 = esPositivo(0)

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
