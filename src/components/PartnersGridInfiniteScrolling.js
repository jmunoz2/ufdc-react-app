import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import InfiniteScroll from 'react-infinite-scroll-component';

const PartnersGridInfiniteScrolling = (props) => {
  //debugger;
  /*
  function Image(props) {
    return <img src={props.src} alt={props.alt} width={props.width} className={props.className} />;
  }
*/
  
  return (
    <>
    <div className="row">
      <div className="col">
      {console.log ("There are " + props.partners.length + " elements")}
      <h5>There are {props.partners.length} elements</h5>
      </div>
    </div>
  
    <div className="row partners-grid">
      {props.partners.map((partner) => {
        return (
          <Col xs={12} sm={6} md={6} lg={4} xl={3} key={partner.id}>
            <Link
              to={{
                pathname: "/partner/" + partner.slug,
                state: { foo: partner },
              }}
            >
              <div className="grid-item">
                <Image src={partner.logoUrl} thumbnail />
                <h5>{partner.abbrName}</h5>
              </div>
            </Link>
          </Col>
        );
      })}
    </div>
    </>


  );
};

export default PartnersGridInfiniteScrolling;
