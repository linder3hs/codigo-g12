const selectBreed = document.querySelector("#select-breed");
const gallery = document.querySelector(".gallery");
const btnClose = document.querySelector("#btn-close");
const galleryResult = document.querySelector(".gallery-result");
const main = document.querySelector("main");

btnClose.onclick = function () {
  main.style.display = "block";

  btnClose.style.display = "none";
  galleryResult.style.display = "none";
};

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

function showImage(image) {
  main.style.display = "none";

  btnClose.style.display = "block";
  galleryResult.style.display = "block";
  galleryResult.innerHTML = `<img width="300" src="${image.src}" />`;
}

selectBreed.onchange = async function () {
  const currentBreed = this.value;

  const response = await fetch(
    `https://dog.ceo/api/breed/${currentBreed}/images`
  );

  const data = await response.json();
  const images = data.message;

  gallery.innerHTML = "";

  images.forEach((image) => {
    gallery.innerHTML += `<img onclick="showImage(this)" src="${image}"/>`;
  });
};
