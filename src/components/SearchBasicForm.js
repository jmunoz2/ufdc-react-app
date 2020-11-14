import React, { useState, useEffect } from "react";
import { getTypes } from "../api/typeApi";
import {Card, Button, Form, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


function SearchBasicForm(props) {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const [types, setTypes] = useState([]);

  useEffect(() => {
    getTypes().then((_types) => setTypes(_types));
  }, []);

  return (
    <>
        <div className="row mt-5 mb-5 basic-search">
             <div className="col">
                <p className="heading text-center">You can use basic search for simple queries or complex expressions. It works either way.</p>
                <Form inline className="basic-inline-form" noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Label htmlFor="search-term" srOnly>
                            Search Term:
                      </Form.Label>
                      <Form.Control
                        required
                        className="mb-2 mr-sm-2"
                        id="basic-search-term"
                        placeholder="Search Term"
                        
                        
                       />
                    
                       <Form.Control
                            as="select"
                            className="mb-2 mr-sm-2"
                            id="search-type"
                            custom
                        >
                            <option value="Any type">Any type...</option>
                            <option value="Everything">Everything</option>
                            {types.map((type, i) => {
                              return (
                              <option key={i} value={type.id}>{type.name}</option>
                            );
                          })} 
                            
                        </Form.Control>
                        <Button type="submit" variant="info">Search</Button>
                        </Form.Group>
                    </Form.Row>
                    
                </Form>
            </div>
         </div>
        
         <hr />
          
        <div className="row">
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
        </div>

    </>
  );
}

export default SearchBasicForm;
