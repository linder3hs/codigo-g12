const form = document.querySelector("form");
const input = document.querySelector("input");
const tasks = document.querySelector(".tasks");

async function deleteTask(element) {
  const ok = await destroy(element.dataset.id);

  if (!ok) {
    alert("algo salio mal");
    return;
  }

  // element = button
  element.closest(".card").style.display = "none";
  // element.parentElement.parentElement.parentElement.style.display = "none";
}

async function updateTask(id) {
  const newText = prompt("Ingrese el nuevo texto de la tarea");

  const ok = await put(id, {
    name: newText,
  });

  if (!ok) {
    alert("Hubo un error");
    return;
  }

  const textTask = document.querySelector(`#name-${id}`);
  textTask.textContent = newText;
}

async function endTask(id) {
  const ok = await put(id, { status: 2 });

  if (!ok) {
    alert("Hubo un error");
    return;
  }

  const card = document.querySelector(`#card-${id}`);
  const cardButtons = document.querySelector(`#card-buttons-${id}`);
  card.classList.add("bg-success-subtle");
  cardButtons.remove();
}

function renderTask(task) {
  return `
      <div id="card-${task.id}" class="card mt-3 ${
    task.status === 2 ? `bg-success-subtle` : ``}">
        <div class="card-body">
          <div>
            <h4 id="name-${task.id}">${task.name}</h4>
          </div>
          ${
            task.status !== 2
              ? `
            <div id="card-buttons-${task.id}">
              <button onclick="endTask('${task.id}')" class="btn btn-primary">Terminado</button>
              <button onclick="updateTask('${task.id}')" class="btn btn-warning">Editar</button>
              <button onclick="deleteTask(this)" data-id="${task.id}" class="btn btn-danger">Eliminar</button>
            </div>`
              : ``
          }
        </div>
      </div>`;
}

// crear una funcion que liste (get) las tareas
async function getTasks() {
  const data = await get();

  data.forEach((task) => {
    tasks.innerHTML += renderTask(task);
  });
}

getTasks();

form.onsubmit = async function (event) {
  // para evitar que la web se recargue
  event.preventDefault();

  if (!input.value) return;

  const data = await post({
    name: input.value,
    status: 1,
  });

  tasks.innerHTML += renderTask(data);
  input.value = "";
};
