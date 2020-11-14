import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/result/";

export function getResult() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getResultBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((result) => {
        if (result.length !== 1)
          throw new Error("Search result not found: " + slug);
        return result[0]; // should only find one result for a given slug, so return it.
      });
    })
    .catch(handleError);
}
