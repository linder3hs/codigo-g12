const movieName = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#image");

const form = document.querySelector("form");

const moviesContainer = document.querySelector(".movies");

// array vacio
const movies = [];

form.onsubmit = function (event) {
  event.preventDefault();

  movies.push({
    name: movieName.value,
    description: description.value,
    image: image.value,
  });

  moviesContainer.innerHTML += `
    <div class="card mt-10">
      <h4>${movieName.value}</h4>
      <p>${description.value}</p>
      <img width="200" src="${image.value}" />
    </div>
  `;

  movieName.value = "";
  description.value = "";
  image.value = "";
};
