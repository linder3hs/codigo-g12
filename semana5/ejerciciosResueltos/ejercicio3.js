function numeroRandom(min, max) {
  // Generar un número al azar entre 15 y 34 y devolverlo
  const numero = Math.floor(Math.random()*(max-min+1)+min)
  return numero

}

const resultado = numeroRandom(10, 24)
console.log(resultado)