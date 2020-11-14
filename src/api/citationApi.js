import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/citation/";

export function getCitation() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getCitationBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((citation) => {
        if (citation.length !== 1)
          throw new Error("Citation not found: " + slug);
        return citation[0]; // should only find one citation for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function saveCitation(citation) {
  return fetch(baseUrl + (citation.id || ""), {
    method: citation.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...citation,
      // Parse creatorId to a number (in case it was sent as a string).
      creatorId: parseInt(citation.creatorId, 10),
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCitation(citationId) {
  return fetch(baseUrl + citationId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
