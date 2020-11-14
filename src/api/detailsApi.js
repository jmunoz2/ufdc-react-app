import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/details/";

export function getDetails() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getDetailsBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((details) => {
        if (details.length !== 1)
          throw new Error("Search details not found: " + slug);
        return details[0]; // should only find one result for a given slug, so return it.
      });
    })
    .catch(handleError);
}
