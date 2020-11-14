import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/creators/";

export function getCreators() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveCreator(creator) {
  return fetch(baseUrl + (creator.id || ""), {
    method: creator.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(creator),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCreator(creatorId) {
  return fetch(baseUrl + creatorId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
