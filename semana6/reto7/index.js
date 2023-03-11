const movieName = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#image");

const form = document.querySelector("form");

const moviesContainer = document.querySelector(".movies");

// array vacio
const movies = [];

function renderMovies() {
  if (movies.length === 0) return;

  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    moviesContainer.innerHTML += `
      <div class="card mt-10">
        <h4>${movie.name}</h4>
        <p>${movie.description}</p>
        <img width="200" src="${movie.image}" />
      </div>
    `;
  });
}

form.onsubmit = function (event) {
  event.preventDefault();

  movies.push({
    name: movieName.value,
    description: description.value,
    image: image.value,
  });

  movieName.value = "";
  description.value = "";
  image.value = "";

  renderMovies();
};
