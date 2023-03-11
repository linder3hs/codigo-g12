/**
const persona = {
  nombre: "Linder",
  apellido: "Hassinger"
}

persona.nombre
persona.apellido
 */
const container = document.querySelector(".container");

async function getPokemons() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  
  renderPokemons(data.results);
}

function renderPokemons(pokemons) {
  pokemons.forEach((pokemon) => {
    container.innerHTML += `
      <div class="card">
        <h3>${pokemon.name}</h3>
        <a href="${pokemon.url}" target="_blank">Ver detalle</a>
      </div>
    `;
  });
}

getPokemons();
