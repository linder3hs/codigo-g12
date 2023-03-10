// usaremos la forma antigua
const titulo = document.getElementsByTagName("h1");

console.log("BY TAG NAME");
console.log(titulo);

const primerBoton = document.getElementById("primer-boton");

console.log("BY ID");
console.log(primerBoton);

const segunBoton = document.getElementsByClassName("segundo-boton");

console.log("BY CLASS");
console.log(segunBoton);

console.log("USANDO LA FORMA ACTUAL");

// class = .
// id = #
// querySelector => retorna solo 1 elemento
// querySelectorAll => retorna un array de elemento

const box = document.querySelector(".box");

console.log("box", box);

const boxs = document.querySelectorAll(".box");

console.log("boxs", boxs);

const profile = document.querySelector("#profile");

console.log("image", profile);

const tituloMediano = document.querySelectorAll("h5");

console.log(tituloMediano[1]);
