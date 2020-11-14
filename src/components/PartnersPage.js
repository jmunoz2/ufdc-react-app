import React, { useState, useEffect } from "react";
import { getPartners } from "../api/partnerApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
//import PartnersGridInfiniteScrolling from "./PartnersGridInfiniteScrolling";
import PartnersGrid from "./PartnersGrid";
import {Link} from "react-router-dom";


function PartnersPage() {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    getPartners().then((_partners) => setPartners(_partners));
  }, []);

  return (
    <>
      <SubheaderSearchSection />
      <section className="main-section">
        <div className="row">
          <div className="col">
            <div className=" heading-center">
              <div className=" custom-heading">
                <h2 className="font-bold-700">
                  Partners and Contributing Institutions
                </h2>
                <span className="custom-heading-delim"></span>
              </div>
            </div>
          </div>
        </div>
        <section className="main-section-grid">
          
            <PartnersGrid partners={partners} />
        
        </section>
      </section>
    </>
  );
}

export default PartnersPage;
