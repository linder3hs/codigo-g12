/**
 * Una function recibe parametros, esos van dentros
 * de los parenteis
 *
 * Queremos hacer una funcion la cual recibe un nombre y edad
 * y retorna el siguiente mensaje
 *
 * Hola soy nombre y tengo edad años
 *
 * La funciones son creada para hacer una instruccion
 * por ende hay 2 tipos de funciones
 *
 * Primer tipo (puras) las cuales usar una palabra
 * reservada llamada return la cual indica que es
 * lo que nuestra funcion retorna
 *
 * Segundo tipo (impura) la cuales solo sirven para ejecutar
 * una accion, pero estas no retornan nada
 */

/**
 * Cuando queremos juntar un string mas variable
 * eso se llama concatenar y en JS hay 2 formas
 * "Hola soy " + nombre + " y tengo " + edad + "años"
 *
 * existe un concepto llamado template string,
 * el cual permite concatenar string + variables de la
 * siguiente forma
 *
 * `Hola soy ${nombre} y tengo ${edad} años`
 */

function saludar(nombre, edad) {
  return `Hola soy ${nombre} y tengo ${edad} años`;
}

const saludo = saludar("Juan", 98);
let saludo2 = saludar("Pepe", 11);
const saludo3 = saludar(true, null);

console.log(saludo);
console.log(saludo2);
console.log(saludo3);

// calcular el area de cuadrado
function calcularAreaDeCuadrado(lado) {
  return lado ** 2;
}

console.log(calcularAreaDeCuadrado(10));
console.log(calcularAreaDeCuadrado(4));

/* Una funciona que me diga si una persona es mayor o menor 
de edad
*/

function esMayorDeEdad(edad) {
  if (edad >= 18) {
    return "Es mayor de edad";
  } else {
    return "Es menor de edad";
  }
}

const res1 = esMayorDeEdad(10);
const res2 = esMayorDeEdad(20);

console.log("texto de ayuda", res1);
console.log("res2", res2);

// Operadores logicos
// > < >= <= ===
console.log("10 > 20", 10 > 20);
console.log("20 >= 20", 20 >= 20);
console.log("10 < 5", 10 < 5);
console.log("5 <= 20", 5 <= 20);
console.log("1 == 1", "1" == 1);
console.log("1 === 1", "1" === 1);

// Hacer una funcion para saber si un numero es par o impar
function esNumeroParOImpar(numero) {
  if (numero % 2 === 0) {
    return "Es un numero par";
  } else {
    return "Es un numero impar";
  }
}

/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 *
 * Enunciado: Escribe una funcion que muestre por consola (con un print)
 * esta funcion recibe un numero
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// Hay 2 operadores que permite juntar mas de una opcion
// y => and => &&
// ó => or => ||
// distinto => !==

function calcularFizzBuzz(numero) {
  if (typeof numero !== "number") {
    return "El programa solo acepta numeros";
  }

  if (numero % 3 === 0 && numero % 5 === 0) {
    return "fizzbuzz";
  } else if (numero % 3 === 0) {
    return "fizz";
  } else if (numero % 5 === 0) {
    return "buzz";
  } else {
    return "El numero no cumple las condicones del juego";
  }
}

function calcularFizzBuzzRefactor(numero) {
  if (typeof numero !== "number") return "El programa solo acepta numeros";

  if (numero % 15 === 0) return "fizzbuzz";
  if (numero % 3 === 0) return "fizz";
  if (numero % 5 === 0) return "buzz";

  return "El numero no cumple las condicones del juego";
}

const r1 = calcularFizzBuzzRefactor(100); // buzz
const r2 = calcularFizzBuzzRefactor(351); // fizz
const r3 = calcularFizzBuzzRefactor(75); // fuzzbuzz
const r4 = calcularFizzBuzzRefactor(true);

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

// Funciones anonimas
console.log("Funciones anonimas");

/**
 * Esta funcion sirve para calcular el area de un reactangulo
 * @param {number} base 
 * @param {number} altura 
 * @returns {number}
 */
const calcularAreaReactangulo = function (base, altura) {
  return base * altura;
};

console.log(calcularAreaReactangulo(10, 20));

// FUNCIONES TIPO FLECHA => arrow functions

/**
 * Esta funcion sirve para poder decifrar una moneda
 * @param {string} moneda
 * @returns {string}
 */
const decifrarMoneda = (moneda) => {
  if (moneda === "S/") return "Soles";
  if (moneda === "$") return "Dolares";
  if (moneda === "MXM") return "Pesos mexicanos";
  return moneda;
};

/**
 * Esta funcion sirve para calcular el area de un rectungulo
 * @param {number} base
 * @param {number} altura
 * @returns {number}
 */
const calcularReactangulo = (base, altura) => base * altura;

console.log(calcularReactangulo(100, 200));

console.log(decifrarMoneda("S/"));
