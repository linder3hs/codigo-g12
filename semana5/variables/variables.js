const nombre = "Linder";
const direccion = "Av siempre 123";
const pasatiempos = "Futbol, vieojuegos, caminar";

// los console no deben ir a produccion
console.log(nombre);
console.error(direccion);
console.warn(pasatiempos);

let curso = "Front-End developer";

console.log(curso);

// Guardar mas de un valor en una variable
// array - arreglo

// camelcase

/**
 *  cada elemento de un array tiene indices
 *  esos inidices inician con el numero 0
 *  si queremos obtener el primer valor de
 *  un array tenemos que usar el indice 0
 */

const cursosDeProgramacion = ["js", "css", "html", "react"];

console.log(cursosDeProgramacion);
console.log("indice 0", cursosDeProgramacion[0]);
console.log("indice 1", cursosDeProgramacion[1]);
console.log("indice 2", cursosDeProgramacion[2]);
console.log("indice 3", cursosDeProgramacion[3]);

const datosVariados = ["mouse", true, 100, null, -10, "hola"];

/**
 * JS tiene funciones ya creadas para poder alterar los
 * valores de un arreglo
 */

// insertar un nuevo valor al final del array
datosVariados.push("otro dato");

console.log("------------");
console.log(datosVariados);

// eliminar el ultimo elemento de un array
datosVariados.pop();

datosVariados[1] = false;

// insetar un elemento en la primera posicion (0)
datosVariados.unshift("soy primero");

// eliminar un elemento en la primera posicon (0)
datosVariados.shift();

console.log("------------");
console.log(datosVariados);

console.log("------ AT ------");
console.log(datosVariados.at(4));
