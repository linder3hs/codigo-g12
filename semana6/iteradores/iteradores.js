const numbers = [1, 10, 12, 30, 21, 32, 94];

/**
 * Cuando usar forEach?
 * Cuando necesitamos iterar sobre un array y no necesitamos retornar un nuevo array
 */
numbers.forEach(function (number, index) {
  if (number > 20) {
    console.log("Es mayor a 20", number, index);
  } else {
    console.log("Es menor a 20", number, index);
  }
});

// map
const powNumbers = numbers.map(function (number) {
  return { number: number ** 2 };
});

console.log("powNumbers");
console.log(powNumbers);
console.log(numbers);

console.log("Usando arrow function");

numbers.forEach((number, index) => {
  console.log(`${index}) ${number}`);
});

const powNumbersArrow = numbers.map((number) => {
  return { number: number ** 3 };
});

console.log(powNumbersArrow);

const powNumbersArrowInline = numbers.map((number) => number * 2);
console.log(powNumbersArrowInline);

// filter
const products = [
  {
    id: 1,
    name: "TV 75 pulgadas",
    category: ["Tech"],
    price: 3500.34,
    stock: 20,
  },
  {
    id: 2,
    name: "Cama king",
    category: ["Hogar"],
    price: 500.99,
    stock: 200,
  },
  {
    id: 3,
    name: "iPhone 14 pro",
    category: ["Tech"],
    price: 5600,
    stock: 10,
  },
  {
    id: 4,
    name: "microondas",
    category: ["Tech", "Hogar"],
    price: 500,
    stock: 120,
  },
  {
    id: 5,
    name: "iPhone 11",
    category: ["Tech", "Hogar"],
    price: 500,
    stock: 0,
  },
];

// filtro para tener los productos que cuesta mas de 1000
const filterPrice = products.filter((product) => product.price > 1000);
console.log("Filter");
console.log(filterPrice);

// category: Tech
const filterCategory = products.filter((product) =>
  product.category.includes("Tech")
);

console.log("filter category", filterCategory);

const filtro = products.filter((product) =>
  product.category
    .join("-") // "Tech-Hogar"
    .toLowerCase() // "tech-hogar"
    .split("-") // ["tech", "hogar"]
    .includes("TECH".toLowerCase())
);

// busqueda que solo retorne un elemento
// iphone 14 pro
// find no retorna array retorna 1 solo elemento
const search = products.find(
  (product) => product.name.toLowerCase() === "iphone 14 Pro".toLowerCase()
);

console.log("Buscando solo 1 elemento");
console.log(search);

// findIndex buscar solo un elemento pero lo que retorna es el indice(posicion)

const searchIndex = products.findIndex((product) => product.price > 1000);

/**
 * 
const searchIndex = products.findIndex(function (product) {
  return product.price > 1000;
});

 */
console.log("searchIndex", searchIndex);

// for // si soporta return
// for of // si soporta return
// for in // si soporta return
// forEach
// map // retunr []
// filter // return []
// find // return element
// findIndex return number

// quiero hacer una busqueda, no es exacta ejemplo escribo iPhone
const searchIphone = products.filter((product) =>
  product.name.toLowerCase().includes("iphone".toLowerCase())
);

console.log("searchIphone", searchIphone);

// every => todo    &&
// some  => alguno  ||

// ambos retornan true o false
const hasStock = products.every((product) => product.stock > 0);
console.log(hasStock);

const hasZeroStock = products.some((product) => product.stock > 0);
console.log(hasZeroStock);
