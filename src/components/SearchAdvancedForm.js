import React, { useState, useEffect } from "react";
import { getTypes } from "../api/typeApi";
import {Card, Button, Form, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchTips from "./SearchTips";


function SearchAdvancedForm() {

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
         <div className="row mt-5 mb-5 advanced-search">
             <div className="col-lg-12 col-xl-6 mt-2">
                
                <Form className="advanced-inline-form" noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Row className="mb-2">
                    <Col sm="2">
                      <label className="search-for-label">Search For:</label>
                    </Col>     
                    <Col>
                      <Form.Label htmlFor="inlineFormInputSearch" srOnly>
                        Search Term:
                      </Form.Label>
                      <Form.Control
                        required
                        className="mb-2 mr-sm-2"
                        id="advanced-search-term-1"
                        placeholder="Search Term"
                      />
                    </Col>    
                    <Col>   
                      <Form.Control
                        required
                        as="select"
                        className="mb-2 mr-sm-2"
                        id="inlineFormCustomSelect1"
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
                      </Col>    
                    </Form.Row>
                  <Form.Row className="mb-2">
                      <Col xm="3" sm="3" md="4">
                        <Form.Control
                            as="select"
                            className="mb-2 mr-sm-2"
                            id="inlineFormCustomSelect2"
                            custom
                        >
                            <option value="0">And</option>
                            <option value="1">Or</option>
                            <option value="2">And Not</option>
                        </Form.Control>
                      </Col>
                      <Col xm="3" sm="9" md="4">
                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                            Search Term:
                        </Form.Label>
                        <Form.Control
                          className="mb-2 mr-sm-2"
                          id="advanced-search-term-2"
                          placeholder="Search Term"
                         />
                      </Col>
                      <Col xm="12" sm="12" md="4">
                       <Form.Control
                            as="select"
                            className="mb-2 mr-sm-2"
                            id="inlineFormCustomSelect3"
                            custom
                        >
                            <option value="Any type">Any type...</option>
                            <option value="Everything">Everything</option>
                            {types.map((type, j) => {
                              return (
                                <option key={j} value={type.id}>{type.name}</option>
                              );
                            })} 
                        </Form.Control>
                      </Col>  
                      
                    </Form.Row>
                    <Form.Row className="mb-2">
                      <Col xm="3" sm="3" md="4">
                        <Form.Control
                            as="select"
                            className="mb-2 mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">And</option>
                            <option value="1">Or</option>
                            <option value="2">And Not</option>
                        </Form.Control>
                      </Col>
                      <Col xm="3" sm="9" md="4">
                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                            Search Term:
                        </Form.Label>
                        <Form.Control
                          className="mb-2 mr-sm-2"
                          id="advanced-search-term-3"
                          placeholder="Search Term"
                         />
                      </Col>
                      <Col xm="12" sm="12" md="4">
                       <Form.Control
                            as="select"
                            className="mb-2 mr-sm-2"
                            id="inlineFormCustomSelect4"
                            custom
                        >
                            <option value="Any type">Any type...</option>
                            <option value="Everything">Everything</option>

                            {types.map((type, k) => {
                              return (
                                <option key={k} value={type.id}>{type.name}</option>
                              );
                            })} 
                        </Form.Control>
                      </Col>  
                      
                    </Form.Row>
                    
                    <fieldset>
                      <Form.Group as={Row} className="mt-2">
                        <Form.Label as="legend" column sm={2}>
                          Precision:
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="Contains exactly the search terms"
                            name="radio1"
                            id="formHorizontalRadios1"
                          />
                          <Form.Check
                            type="radio"
                            label="Contains any form of the search terms"
                            name="radio1"
                            id="formHorizontalRadios2"
                          />
                          <Form.Check
                            type="radio"
                            label="Contains the search term or terms of similar meaning"
                            name="radio1"
                            id="formHorizontalRadios3"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>
                    
                    
                        <Form.Row>
                          <Col>
                          <Button type="submit" variant="info" >Search</Button>
                          </Col>
                        </Form.Row>
                </Form>
            </div>
            <div className="col-lg-12 col-xl-6">
              <hr />
              <SearchTips />
            </div>
         </div>
        
         
          
          

    </>
  );
}

export default SearchAdvancedForm;
