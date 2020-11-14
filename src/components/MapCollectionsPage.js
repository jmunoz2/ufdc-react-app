import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import aerialMapImage from "./common/images/aerial-map-image.jpg";
import worldMapImage from "./common/images/world-map-image.jpg";
import sanbornMapsFloridaImage from "./common/images/sanborn-maps-florida.JPG";

function MapCollectionsPage() {
  return (
    <>
      <SubheaderSearchSection />
      <section className="main-wrapper">
        <section className="main-section">
          <div className="row">
            <div className="col">
              <div className=" heading-center">
                <div className=" custom-heading">
                  <h2 className="font-bold-700">
                    The Map & Imagery Collections
                  </h2>
                  <span className="custom-heading-delim"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <p>
              The Map & Imagery Collections includes materials from the
              University of Florida's Map & Imagery Library and Department of
              Special and Area Studies Collections, particularly the P.K. Yonge
              Library of Florida History and the University Archives. The
              physical Map & Imagery Library Collection contains more than
              500,000 maps, 266,500 aerial photographs, 2,250 remote sensing
              images, and 7,215 atlases and reference books. It is the largest
              academic map collection in the Southeast, and among the top five
              academic map collections in the entire United States. The Map &
              Imagery Library has general map coverage world-wide. Specialties
              of the collection include Florida, Latin America, the United
              States, Africa, and the Holy Land.
            </p>

            <p>
              Additional content is provided through the contributions of
              partner institutions including the University of North Florida,
              the University of the Virgin Islands, and the St. Augustine Campus
              Library' West Indiana and Special Collections Division at the
              University of the West Indies. Collections are heavily weighted
              toward historic or antique maps, but selected modern maps are also
              included, as with US Army Maps. Images are provided with high
              resolution, zoomable images.
            </p>

            <p>
              Related collections include the Map Literature Collection, which
              holds literature about maps and geography, including a small
              collection of reference resources about map making, voyages of
              discovery and exploration, etc.
            </p>
          </div>
        </section>

        <section className="main-section-grid mt-5">
          <div className="row">
            <div className="col">
              <div className=" heading-center">
                <div className=" custom-heading">
                  <h4 className="font-bold-500">SubCollections</h4>
                  <span className="custom-heading-delim"></span>
                </div>
              </div>
            </div>
          </div>

          <Row className="partners-grid">
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image src={aerialMapImage} thumbnail />
                  <h5>Aerial Photography: Florida</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image src={worldMapImage} thumbnail />
                  <h5>World Map Collections</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image src={sanbornMapsFloridaImage} thumbnail />
                  <h5>Sanborn Fire Insurance Maps of Florida</h5>
                </div>
              </Link>
            </Col>
          </Row>
        </section>
      </section>
    </>
  );
}

export default MapCollectionsPage;
