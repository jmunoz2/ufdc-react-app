import React, { useState, useEffect } from "react";
import { getPartners } from "../api/partnerApi";
import {Card, Button, Form, Col, Row} from "react-bootstrap";
import { Link } from "react-router-dom";


function SearchBasicFuture() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners().then((_partners) => setPartners(_partners));
  }, []);

  return (
    <>
         <div className="row mt-5 mb-5">
             <div className="col">
                <p className="heading text-center">You can use basic search for simple queries or complex expressions. It works either way.</p>
                <Form inline className="basic-inline-form">
                <Form.Row>
                  <Form.Group as={Col}>
                      <Form.Label htmlFor="inlineFormInputName2" srOnly>
                            Your Search Terms:
                      </Form.Label>
                      <Form.Control
                        className="mb-2 mt-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Your Search Terms"
                       />
                    
                    
                       <Form.Control
                            as="select"
                            className="MB-2 mr-sm-2"
                            id="inlineFormCustomSelect"
                            custom
                        >
                            <option value="0">Any type...</option>
                            <option value="1">Everything</option>
                            <option value="2">Theses or Dissertations</option>
                            <option value="3">Reports</option>
                            <option value="0">Photos, Maps, and other Images</option>
                            <option value="1">Sound Recordings</option>
                            <option value="2">Articles</option>
                            <option value="3">Artworks</option>
                            <option value="0">Books</option>
                            <option value="1">Book chapters</option>
                            <option value="2">Clippings</option>
                            <option value="3">Collections</option>
                            <option value="0">Datasets</option>
                            <option value="1">Images</option>
                            <option value="2">Interactive Resources</option>
                            <option value="3">Journal/Magazine/Newsletters</option>
                            <option value="0">Legal Documents</option>
                            <option value="1">Legislative Documents</option>
                            <option value="2">Letters</option>
                            <option value="3">Maps</option>
                            <option value="0">Musical Score/Notations</option>
                            <option value="1">Newspapers</option>
                            <option value="2">Pamphlets</option>
                            <option value="3">Papers</option>
                            <option value="0">Patents</option>
                            <option value="1">Photographs</option>
                            <option value="2">Physical Objects</option>
                            <option value="3">Poems</option>
                            <option value="0">Postcards</option>
                            <option value="1">Posters</option>
                            <option value="2">Presentations</option>
                            <option value="3">Reports</option>
                            <option value="2">Reviews</option>
                            <option value="3">Scripts</option>
                            <option value="0">Sounds</option>
                            <option value="1">Speciments</option>
                            <option value="2">Technical Drawings</option>
                            <option value="3">Texts</option>
                            <option value="0">Theses or Dissertations</option>
                            <option value="1">Videos</option>
                            <option value="2">Websites</option>
                            <option value="3">Yearbooks</option>
                        </Form.Control>
                         
                        
                        
                        <Button type="submit" variant="info" >Search</Button>
                        </Form.Group>
                    </Form.Row>
                    
                </Form>
            </div>
         </div>
        
         <hr />
          <div className="row">
              <div className="col">
                <h5 className="heading">More ways to search.</h5>
              </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Link to="collections">
                <Card border="info">
                    <Card.Header>Guided Search</Card.Header>
                    <Card.Body>
                    <Card.Text>
                      Want to learn how to build a search query using phrases and Boolean logic? This tool will teach you.
                    </Card.Text>
                    <Button variant="info">Guided</Button>
                    </Card.Body>
                </Card>
              </Link>
              <span className="blue-overlay"></span>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Link to="partners">
                <Card border="info" >
                    <Card.Header>Advanced Search</Card.Header>
                    <Card.Body>
                        <Card.Text>
                          Craft a search with a high degree of precision. Advanced Search gives you the most control up-front.
                        </Card.Text>
                        <Button variant="info">Advanced</Button>
                    </Card.Body>
                </Card>
              </Link>
              <span className="blue-overlay"></span>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Link to="partners">
                <Card border="info" >
                    <Card.Header>Proximity Search</Card.Header>
                    <Card.Body>
                        <Card.Text>
                          Build a complex search query by specifying the distance between words.
                        </Card.Text>
                        <Button variant="info">Proximity</Button>
                    </Card.Body>
                </Card>
              </Link>
              <span className="blue-overlay"></span>
            </div>
          </div>

    </>
  );
}

export default SearchBasicFuture;
