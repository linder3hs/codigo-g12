const selectBreed = document.querySelector("#select-breed");
const gallery = document.querySelector(".gallery");

// Creen una funcion que obtenga el JSON de la API de razas
//https://dog.ceo/api/breeds/list/all
const getBreeds = async () => {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  const data = await response.json();
  // convierte un object a un array, en este usando los keys
  const breeds = Object.keys(data.message);

  breeds.forEach((breed) => {
    selectBreed.innerHTML += `<option value="${breed}">${breed}</option>`;
  });
};

getBreeds();

selectBreed.onchange = async function () {
  const currentBreed = this.value;

  const response = await fetch(
    `https://dog.ceo/api/breed/${currentBreed}/images`
  );

  const data = await response.json();
  const images = data.message;

  gallery.innerHTML = "";

  images.forEach((image) => {
    gallery.innerHTML += `<img src="${image}"/>`;
  });
};
