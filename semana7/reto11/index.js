const form = document.querySelector("form");
const input = document.querySelector("input");
const tasks = document.querySelector(".tasks");

const apiURL = "https://641523a24f32ca32918f7b1f.mockapi.io/tasks";

async function deleteTask(element) {
  const id = element.dataset.id;

  const response = await fetch(`${apiURL}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  if (!response.ok) {
    alert("algo salio mal");
    return;
  }

  // element = button
  element.closest(".card").style.display = "none";
  // element.parentElement.parentElement.parentElement.style.display = "none";
}

async function updateTask(id) {
  const newText = prompt("Ingrese el nuevo texto de la tarea");

  const response = await fetch(`${apiURL}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name: newText,
    }),
  });

  if (!response.ok) {
    alert("Hubo un error");
    return;
  }

  const textTask = document.querySelector(`#name-${id}`);
  textTask.textContent = newText; 
}

// crear una funcion que liste (get) las tareas
async function getTasks() {
  const response = await fetch(apiURL);
  const data = await response.json();

  data.forEach((task) => {
    tasks.innerHTML += `
      <div class="card mt-3">
        <div class="card-body">
          <div>
            <h4 id="name-${task.id}">${task.name}</h4>
          </div>
          <div>
            <button class="btn btn-primary">Terminado</button>
            <button onclick="updateTask('${task.id}')" class="btn btn-warning">Editar</button>
            <button onclick="deleteTask(this)" data-id="${task.id}" class="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>`;
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

  tasks.innerHTML += `<div class="card mt-3">
        <div class="card-body">
          <div>
            <h4>${data.name}</h4>
          </div>
          <div>
            <button class="btn btn-primary">Terminado</button>
            <button class="btn btn-warning">Editar</button>
            <button onclick="deleteTask(this)" data-id="${data.id}" class="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>`;

  console.log(data);
};
