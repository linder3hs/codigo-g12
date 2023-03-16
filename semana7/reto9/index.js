const selectBreed = document.querySelector("#select-breed");

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
