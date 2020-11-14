import React, { useState, useEffect } from "react";
import { getCitation } from "../api/citationApi";
import Container from "react-bootstrap/Container";

function ItemInformation() {
  const [citation, setCitation] = useState([]);

  useEffect(() => {
    getCitation().then((_citation) => setCitation(_citation));
  }, []);

  console.log("This is the citation object:" + citation);
  //console.log(this.state.citation[1]);
  //console.log(this.state.citation[0].permanentLink.item);

  console.log(citation);
  //console.log(this.state.citation[1]);
  //console.log(this.state.citation[0].permanentLink.item);

  function createImageUrl(str1, str2, str3) {
    let pos = 2;
    for (let i = 0; i < 5; i++) {
      str1 = str1.slice(0, pos) + "/" + str1.slice(pos);
      pos = pos + 3;
    }
    str3 = str3.replace("thm", "");
    const newString =
      "https://ufdcimages.uflib.ufl.edu/" + str1 + str2 + "/" + str3;

    return newString;
  }

  return citation.map((citation, i) => {
    return (
      <div className="citation-module" key={i}>
        {citation._bib && citation._vid && citation._thumbnail ? (
          <div className="row">
            <div className="col-md-12 text-center">
              <a
                href={
                  "http://ufdc.ufl.edu/" + citation._bib + "/" + citation._vid
                }
              >
                <img
                  src={createImageUrl(
                    citation._bib,
                    citation._vid,
                    citation._thumbnail
                  )}
                  className="img-fluid rounded citation-with-gray-scale-on-hover"
                  alt="Thumbnail"
                />
              </a>
              <p className="identifier">
                Permanent Link:{" "}
                <span className="identifier-value">
                  <a
                    href={
                      "http://ufdc.ufl.edu/" +
                      citation._bib +
                      "/" +
                      citation._vid
                    }
                  >
                    {"http://ufdc.ufl.edu/" +
                      citation._bib +
                      "/" +
                      citation._vid}
                  </a>
                </span>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    );
  });
}

export default ItemInformation;
