import React, { useState, useEffect } from "react"; //The useState hook will allow us to handle state in this function component....and
//the state we want to manage is the partner.
//The useEffect will be used to perpopulate the form when it sees the partner slug on the URL.
//We need to call the Api to request the partner when the component mounts usin the React Hook and
//the Hook we can use is "useEffect"
//import * as partnerApi from "../api/partnerApi"; //I amn using a wild card import, which will allow us to refference any functions
//that have been exported from this file
import PropTypes from "prop-types";
import { Image, Row, Col, Collapse } from "react-bootstrap";
import SubheaderSearchSection from "./common/SubheaderSearchSection";

function DetailedPartnerPage(props) {
  const _style = { textTransform: "capitalize" };

  const { foo } = props.location.state;
  console.log("The param passed on the Link is: " + foo);

  return (
    <section className="main-container">
      <div className="banner">
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Image
              className="img-fluid"
              src={foo.bannerUrl}
              rounded
              alt="banner"
            />
          </Col>
        </Row>
        <Row className="mt-5 mb-4">
          <Col>
            <h2 style={_style}>{foo.fullName}</h2>
          </Col>
        </Row>
      </div>
      <SubheaderSearchSection />
      <div className="detailed-section">
        <Row>
          {foo.about && (
            <Col>
              <Row className="module">
                <Col>
                  <h5>About</h5>
                  <Row className="mt-3 mb-3">
                    <Col className="text-left">
                      <p>{foo.about}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          )}
          {foo.notes && (
            <Col>
              <Row className="module">
                <Col>
                  <h5>Notes</h5>
                  <Row className="mt-3 mb-3">
                    <Col className="text-left">
                      <p>{foo.notes}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
      </div>
    </section>
  );
}

export default DetailedPartnerPage;
