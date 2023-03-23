const apiURL = "https://641523a24f32ca32918f7b1f.mockapi.io/tasks";

async function get() {
  const response = await fetch(apiURL);

  const data = await response.json();

  return data;
}

async function post(body) {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}

async function put(id, body) {
  const response = await fetch(`${apiURL}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return response.ok;
}

async function destroy(id) {
  const response = await fetch(`${apiURL}/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  return response.ok;
}
