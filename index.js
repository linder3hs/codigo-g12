const challenges = document.querySelector(".challenges");
const btnNext = document.querySelector(".btn-next");
const btnBack = document.querySelector(".btn-back");

btnNext.onclick = function () {
  challenges.scrollBy({
    left: 50,
  });
};

btnBack.onclick = function () {
  challenges.scrollBy({
    left: -50,
  });
};
