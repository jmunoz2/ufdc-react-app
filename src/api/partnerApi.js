import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "/partners/";

export function getPartners() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getPartnersBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((partners) => {
        if (partners.length !== 1)
          throw new Error("Partner not found: " + slug);
        return partners[0]; // should only find one partner for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function savePartner(partner) {
  return fetch(baseUrl + (partner.id || ""), {
    method: partner.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...partner,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePartner(partnerId) {
  return fetch(baseUrl + partnerId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
