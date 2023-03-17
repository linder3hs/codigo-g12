const username = document.querySelector("#username");
const btnSearch = document.querySelector("#btn-search");
const avatar = document.querySelector("#avatar");
const fullname = document.querySelector("#name");

btnSearch.onclick = async function () {
  if (!username.value) return;

  const response = await fetch(
    `https://api.github.com/users/${username.value}`
  );
  const data = await response.json();
  username.value = "";
  username.focus();

  console.log(data);
  avatar.src = data.avatar_url;
  fullname.textContent = data.name;
};
