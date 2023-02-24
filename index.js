// Esta es formar en la que JS accede a los elementos

// es el div donde estan todos nuestros cards
// recordemos que el div con la clase challenge tiene el scroll x (horizontal)
const challenges = document.querySelector(".challenges");

// obtener los botones de next y back
const btnNext = document.querySelector(".btn-next");
const btnBack = document.querySelector(".btn-back");

btnNext.onclick = function () {
  // Esto quiere decir que cuando hagamos un click en el boton con clase .btn-bnext 
  // hara lo siguiente

  // challenges.offsetWidth => nos da el ancho del div challenges
  challenges.scrollBy({
    left: challenges.offsetWidth / 4,
  });
};

btnBack.onclick = function () {
  challenges.scrollBy({
    left: (challenges.offsetWidth / 4) * -1,
  });
};
