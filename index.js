const challenges = document.querySelector(".challenges");

challenges.addEventListener("wheel", function () {
  challenges.scrollBy({
    left: 50,
  });
});
