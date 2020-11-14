import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/types/";

export function getTypes() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveType(type) {
  return fetch(baseUrl + (type.id || ""), {
    method: type.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(type),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteType(typeId) {
  return fetch(baseUrl + typeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
