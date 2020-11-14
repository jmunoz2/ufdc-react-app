import React from "react";
import Card from "react-bootstrap/Card";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import CollectionPicture from "./common/images/collection.jpg";
import partnersPicture from "./common/images/partners.jpg";
import typesPicture from "./common/images/types.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <SubheaderSearchSection />
      <section className="main-section">
        <div className="row">
          <div className="col">
            <div className=" heading-center">
              <div className=" custom-heading">
                <h2 className="font-bold-700">
                  Our collections. Our scholarship. Our world.
                </h2>
                <span className="custom-heading-delim"></span>
              </div>
            </div>
          </div>
        </div>
        <section className="main-section-grid">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Link to="collections">
                <Card className="bg-dark text-white custom">
                  <Card.Img src={CollectionPicture} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>collection</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
              <span className="blue-overlay"></span>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <Link to="partners">
                <Card className="bg-dark text-white custom">
                  <Card.Img src={partnersPicture} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>partners</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
              <span className="blue-overlay"></span>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <a href="https://ufdc.ufl.edu/cuba">
                <Card className="bg-dark text-white custom">
                  <Card.Img src={typesPicture} alt="Card image" />
                  <Card.ImgOverlay>
                    <Card.Title>types</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </a>
              <span className="blue-overlay"></span>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default HomePage;
