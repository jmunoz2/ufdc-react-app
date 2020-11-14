import React, { useState, useEffect } from "react";
import { getCitation } from "../api/citationApi";
import Container from "react-bootstrap/Container";

function Notes() {
  const [citation, setCitation] = useState([]);

  useEffect(() => {
    getCitation().then((_citation) => setCitation(_citation));
  }, []);

  console.log(citation);
  //console.log(citation[1]);
  //console.log(citation[0].permanentLink.item);

  return citation.map((citation, i) => {
    return (
      <div className="citation-module" key={i}>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="heading">notes</p>
              </div>
            </div>
          </div>
        </div>
        {citation.note ? (
          <div className="row">
            <div className="text-right col-4 col-md-3 col-lg-3">
              <span className="identifier">general notes:</span>
            </div>

            <div className="col-8 col-md-9 col-lg-9">
              {citation.note.map((note, j) => {
                return note.__text ? (
                  <div className="row" key={j}>
                    <div className="col">
                      <span className="identifier-value">{note.__text}</span>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ) : null}
      </div>
    );
  });
}
export default Notes;
