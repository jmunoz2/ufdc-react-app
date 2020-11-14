import React, { useState, useEffect } from "react";
import { getPartners } from "../api/partnerApi";
import {Card, Button, Tabs, Tab} from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchBasicForm from "./SearchBasicForm";
import SearchAdvancedForm from "./SearchAdvancedForm";
import SearchAdvancedForm2 from "./SearchAdvancedForm2";
import SearchSearchTips from "./SearchTips";

function SearchPage() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners().then((_partners) => setPartners(_partners));
  }, []);

  return (
    <>
      <section className="main-section search-page">
        <div className="row">
          <div className="col">
            <div className=" heading-center">
              <div className=" custom-heading">
                <h2 className="font-bold-700">
                Refine Your Search
                </h2>
                <span className="custom-heading-delim"></span>
              </div>
            </div>
          </div>
        </div>
        <section id="search-section" className="main-container">
          <Tabs defaultActiveKey="basic" id="uncontrolled-tab-example">
            <Tab eventKey="basic" title="Basic Search">
              <SearchBasicForm />
            </Tab>

            <Tab eventKey="advanced" title="Advanced Search">
                <SearchAdvancedForm />
            </Tab>

            <Tab eventKey="advanced-2" title="Advanced Search 2">
                <SearchAdvancedForm2 />
            </Tab>
          </Tabs>
        </section>
      </section>
    </>
  );
}

export default SearchPage;
