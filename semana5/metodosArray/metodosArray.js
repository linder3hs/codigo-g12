const tecnologias = [20, 30, true, 'React', 'Javascript']


// Añadir elementos del array
// push() = agrega elementos al final del arreglo

tecnologias.push('GraphQL')
console.log(tecnologias)

// unshift() = añadir elementos al inicio del Array

tecnologias.unshift('GraphQL')
console.log(tecnologias)

// spread operator = permite transformar un array en elementos únicos
const nuevoArreglo = [...tecnologias, 'Nodejs']
console.log(nuevoArreglo);

const nuevoArreglo = ['Typescript', ...tecnologias]
console.log(nuevoArreglo);

// Eliminar elementos de un array
// pop() Elimina el último elemento del Array

console.log(tecnologias.pop())
console.log(tecnologias)

// shift() Elimina el primer elemento del array

console.log(tecnologias.shift())
console.log(tecnologias)

// splice() elimina una posición en específico

tecnologias.splice(2, 1)
console.log(tecnologias)

// filter = sirva para filtrar elementos y también para iterar los elementos de un array

const nuevoArray = tecnologias.filter(function (tech) {
  return tech !== 'React'
})
console.log(nuevoArray);

const nuevoArray = tecnologias.filter(function (tech) {
  return tech === 'React'
})
console.log(nuevoArray);



// Reemplazar elementos de un array

tecnologias [0] = 'HTML'
console.table(tecnologias)

// map = reemplzar el elemento y crea un nuevo Array, recorro cada uno de los elementos

const nuevoArray = tecnologias.map(function(tech){
  if(tech === 'Javascript') {
    return 'HTML'
  } else {
    return tech
  }
})

console.log(nuevoArray)


// forEach = me permite acceder a cada elemento del Array, se ejecuta una vez por cada elemento que hay en el arreglo

tecnologias.forEach(function(tech){
  return tech
})

console.log(tecnologias)

const numeros = [10, 20, 30]

// find = devuelve el primer elemento que cumple con la condición

const resultado = numeros.find(numero => numero > 9 )
console.log(resultado)

// some()  me dice si almenos un elemento cumple con una condición (true o false)
const resultado = numeros.some(numero => numero < 5)
console.log(resultado)

  // every() retorna true o false si todos cumplen con la condición

  // reduce (acumulador)