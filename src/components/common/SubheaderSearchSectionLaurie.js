import React,  { useState, useEffect } from "react";
import {FormControl, Dropdown, Button, Form, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";

function SubheaderSearchSectionLaurie() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

   return (
    <>
      <div className="search">
         {/*<!-- Start of Custom Search code UNT Laurie-->*/}
        <Form role="search"  noValidate validated={validated} onSubmit={handleSubmit} method="GET" action="https://digital.library.unt.edu/explore/collections/ACIR/browse/">
          <Form.Label htmlFor="q">Search - Advisory Commission on Intergovernmental Relations - UNT Digital Library</Form.Label>
          <Form.Control
            className="mr-sm-2  search__text"
            name="q"
            type="text"
            placeholder="Search"
            id="q-search"
          />
          <Form.Control
            name="t"
            type="hidden"
            value="ful ltext"
          />
          <Form.Control
            name="source"
            type="hidden"
            value="custom"
          />
          
          <Button value="submit" type="submit" variant="outline-success" className="search__submit" />
          
        </Form>
        {/*<!-- End of Custom Search code UNT Laurie -->*/}
      </div>
      <div className="advanced-search text-center">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            refine your search
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="search"><Dropdown.Item as="div">basic search</Dropdown.Item></Link>
            <Link to="search"><Dropdown.Item as="div">advance search</Dropdown.Item></Link>
           </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
export default SubheaderSearchSectionLaurie;
