import React from "react";

import {Link, NavLink} from "react-router-dom";

import gator404 from "./common/images/gator-404-2.png";

import Button from "react-bootstrap/Button";

import SubheaderSearchSection from "./common/SubheaderSearchSection";

function NotFoundPage() {
  
  return (
    <>
      <SubheaderSearchSection />
      <section className="main-section">
        <div className="row">
          <div className="col">
            <div className=" heading-center">
              <div className=" custom-heading">
                <h2 className="font-bold-700">
                  Page Not Found
                </h2>
                <span className="custom-heading-delim"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col text-right">
            <img src={gator404} width="150px" alt="" />
          </div>
          <div className="col">
            <h3>404 Error</h3>
            <div className="wrapper">
                <h6>Uh Oh!</h6>
                <p><strong>Have you lost your way?</strong><br />Cause it appears that the page you’re looking for can’t be found.</p>
                <NavLink to="/"  className="btn btn-info">Go Back Home</NavLink>

            </div>
          </div>
          
        </div>
        
        
      </section>
    </>
  );
}

export default NotFoundPage;
