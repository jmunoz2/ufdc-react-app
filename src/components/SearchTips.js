import React, { useState, useEffect } from "react";
import {Card} from "react-bootstrap";

function SearchTips() {

  return (
    <div className="col">
              <Card border="info">
                <Card.Header>Search Tips</Card.Header>
                <Card.Body>
                  <Card.Text as="div" className="list-chevron">
                  This form allows you to tailor a search to your exact specifications. Fill in more fields to narrow your search. Fill in fewer fields to broaden your search. You’ll still be able to apply some additional filters to your search results later, if needed.
                  <ul>
                    <li className="mt-4">
                      <p className="list-heading"><i className="fas fa-chevron-right"></i>Boolean Searching</p>
                      <div className="list-text-block ml-3">
                        Use + or and between terms to find records with all the terms.<br />
                        Use - or or between terms to find records with any of the terms.<br />
                        Use ! or and not between terms to exclude records with terms.<br />
                        If nothing is indicated, and is the default.<br />
                        EXAMPLE: natural and not history<br />
                      </div>
                    </li>
                    <li className="mt-4">
                      <p className="list-heading"><i className="fas fa-chevron-right"></i>Phrase Searching</p>
                      <div className="list-text-block ml-3 mt-2">
                        Placing quotes around a phrase will search for the exact phrase.<br />
                        EXAMPLE: "natural history"<br />
                      </div>
                    </li>
                    <li className="mt-4">
                      <p className="list-heading"><i className="fas fa-chevron-right"></i>Capitalization</p>
                      <div className="list-text-block ml-3 mt-2">
                        Searches are not capitalization sensitive.<br />
                        EXAMPLE: Searching for NATURAL will return the same results as searching for natural<br />
                      </div>
                    </li>
                    <li className="mt-4">
                      <p className="list-heading"><i className="fas fa-chevron-right"></i>Diacritics</p>
                      <div className="list-text-block ml-3 mt-2">
                        To search for words with diacritics, the character must be entered into the search box.<br />
                        EXAMPLE: Searching Précédent is a different search than Precedent<br />
                      </div>
                    </li>
                  </ul>
                  </Card.Text>
                  
                </Card.Body>
             </Card>
            </div>
    );
}

export default SearchTips;
