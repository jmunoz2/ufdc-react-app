import React, { useState, useEffect } from "react";
import { FormControl, Dropdown, Button, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function SubheaderSearchSection() {
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
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          action="/result"
        >
          <Form.Control
            className="mr-sm-2  search__text"
            type="text"
            placeholder="Search Collection"
            id="main-search"
          />
          <Button variant="outline-success" className="search__submit" />
        </Form>
      </div>
      <div className="advanced-search text-center">
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            refine your search
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="search">
              <Dropdown.Item as="div">basic search</Dropdown.Item>
            </Link>
            <Link to="search">
              <Dropdown.Item as="div">advance search</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}
export default SubheaderSearchSection;
