const form = document.querySelector("form");
const input = document.querySelector("input");
const tasks = document.querySelector(".tasks");

const apiURL = "https://641523a24f32ca32918f7b1f.mockapi.io/tasks";

// crear una funcion que liste (get) las tareas
async function getTasks() {
  const response = await fetch(apiURL);
  const data = await response.json();

  data.forEach((task) => {
    tasks.innerHTML += `<h2>${task.name}</h2>`;
  });
}

getTasks();

form.onsubmit = async function (event) {
  // para evitar que la web se recargue
  event.preventDefault();

  if (!input.value) return;

  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: input.value,
      status: 1,
    }),
  });
  const data = await response.json();

  tasks.innerHTML += `<h2>${data.name}</h2>`;
  
  console.log(data);
};
