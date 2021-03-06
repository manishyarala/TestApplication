//API proxies, these functions call our API
//centralizing here for consistency, reuse, and to provide for mocking
export function getUsers() {
  return fetch("http://localhost:3001/users").then(handleResponse);
}

export function getUserById(userId) {
  return fetch("http://localhost:3001/users?id=" + userId)
    .then(handleResponse)
    .then(users => users[0]);
}

export function deleteUser(userId) {
  return fetch("http://localhost:3001/users/" + userId, {
    method: "DELETE"
  });
}

export function addUser(user) {
  debugger;
  return fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    }
  }).then(handleResponse);
}

export function editUser(user) {
  return fetch("http://localhost:3001/users/" + user.id, {
    method: "PUT",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json"
    }
  }).then(handleResponse);
}

//centralized response handler
function handleResponse(response) {
  if (response.ok) return response.json();
  throw new Error("Network response was not okay");
}
