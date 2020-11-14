import React from "react";
import { Link } from "react-router-dom";
import SubheaderSearchSection from "./common/SubheaderSearchSection";

function AboutPage() {
  return (
    <>
      <SubheaderSearchSection />
      <section className="main-section">
        <div className="row">
          <div className="col">
            <div className=" heading-center">
              <div className=" custom-heading">
                <h2 className="font-bold-700">about</h2>
                <span className="custom-heading-delim"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <p>
            The University of Florida Digital Collections (UFDC) hosts more than
            300 outstanding digital collections, containing over 14 million
            pages, covering over 78 thousand subjects in rare books,
            manuscripts, <Link to={"maps"}> antique maps</Link>,{" "}
            <Link to={"baldwin-children-literature"}>
              children's literature
            </Link>
            , newspapers,{" "}
            <Link to="university-of-florida-theses-and-dissertations">
              theses and dissertations
            </Link>
            , data sets, photographs, oral histories, and more for permanent
            access and preservation. Through UFDC, users have free and Open
            Access to full unique and rare materials held by the University of
            Florida and partner institutions.
          </p>
          <p>
            The UF Libraries encourage and support faculty collaboration on
            digital collections and digital scholarship.
          </p>
          <p>
            UFDC is constantly growing with new resources, new scholarship, and
            system enhancements to the Open Source SobekCM Software. The search
            box above searches across all the digital resources in all the
            collections. By clicking on the icons below, you can view and search
            individual collections.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
