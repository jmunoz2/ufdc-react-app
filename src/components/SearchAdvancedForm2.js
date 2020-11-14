import React, { useState, useEffect } from "react";
import { getTypes } from "../api/typeApi";
import {Card, Button, Form, Col, Row, InputGroup} from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchTips from "./SearchTips";

function SearchAdvancedForm2() {

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
    <div className="row mt-2 advanced-search">
      <div className="col-lg-12 col-xl-6 mt-3">
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="advanced-search">
          <Form.Row className="">
            <Form.Group as={Col} sm="2">
              <label className="search-for-label">Search For:</label>
            </Form.Group>
            <Form.Group as={Col} sm="10" md="6" controlId="validationCustom02">
              <Form.Label htmlFor="inlineFormInputSearch" srOnly>Search Term</Form.Label>
              <Form.Control
                required
                className="mr-sm-2"
                type="text"
                placeholder="Search Term"
                id="advanced-search-term-1"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomSelect01">
              <Form.Control
                as="select"
                custom
                required
              >
                <option value="Any type">Any type...</option>
                <option value="Everything">Everything</option>
                {types.map((type, i) => {
                  return (
                    <option key={i} value={type.id}>{type.name}</option>
                  );
                })} 
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="2" controlId="validationCustom03">
              <Form.Control 
                as="select"
                custom
                required 
              >
                <option value="0">And</option>
                <option value="1">Or</option>
                <option value="2">And Not</option>
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
            <Form.Label htmlFor="inlineFormInputSearch" srOnly>Search Term</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Search Term"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Control
                as="select"
                custom
                required
              >
                <option value="Any type">Any type...</option>
                <option value="Everything">Everything</option>
                {types.map((type, i) => {
                  return (
                    <option key={i} value={type.id}>{type.name}</option>
                  );
                })} 
              </Form.Control>
              
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="2" controlId="validationCustom03">
              <Form.Control 
                as="select"
                custom
                required 
              >
                <option value="0">And</option>
                <option value="1">Or</option>
                <option value="2">And Not</option>
              </Form.Control>
              
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationCustom04">
              <Form.Label htmlFor="inlineFormInputSearch" srOnly>Search Term</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Search Term"
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Control
                as="select"
                custom
                required
              >
                <option value="Any type">Any type...</option>
                <option value="Everything">Everything</option>
                {types.map((type, i) => {
                  return (
                    <option key={i} value={type.id}>{type.name}</option>
                  );
                })} 
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group>
              <Row>
                <Col xs={3}>
                  <Form.Label as="legend" column sm={2}>
                    Precision:
                  </Form.Label>
                </Col>
                <Col xs={9}>
                  <Form.Check
                    type="radio"
                    label="Contains exactly the search terms"
                    name="precision"
                    id="precisionContains"
                    value="contains"
                    variant="info"
                  />
                <Form.Check
                    type="radio"
                    defaultChecked
                    label="Contains any form of the search terms"
                    name="precision"
                    id="precisionResults"
                    value="results"
                    variant="info"
                  />
                  <Form.Check
                    type="radio"
                    label="Contains the search term or terms of similar meaning"
                    name="precision"
                    id="precisionLike"
                    value="resultslike"
                    variant="info"
                  />
                </Col>
            </Row>
            </Form.Group>
          </Form.Row>
          <Button type="submit" variant="info" >Search</Button>
        </Form>
    </div>
    <div className="col-lg-12 col-xl-6">
      <hr />
      <SearchTips />
    </div>
  </div>

  );
}

export default SearchAdvancedForm2;
