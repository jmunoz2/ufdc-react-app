import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import aerialMapImage from "./common/images/aerial-map-image.jpg";
import worldMapImage from "./common/images/world-map-image.jpg";
import sanbornMapsFloridaImage from "./common/images/sanborn-maps-florida.JPG";

function ChildrenLiteraturePage() {
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
                    Baldwin Library of Historical Children’s Literature
                  </h2>
                  <span className="custom-heading-delim"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <p>
              The{" "}
              <a href="https://baldwin.uflib.ufl.edu/">
                Baldwin Library of Historical Children’s Literature
              </a>
              in the{" "}
              <a href="https://sasc.uflib.ufl.edu">
                Department of Special Collections
              </a>{" "}
              at the University of Florida's{" "}
              <a href="https://uflib.ufl.edu/">George A. Smathers Libraries</a>
               contains more than 115,000 volumes published in the United States
              and Great Britain from the mid-1600s to present day. The Library
              also has small holdings in manuscript collections, original
              artwork, and assorted ephemera such as board games, puzzles, and
              toys. The Baldwin Library is known for comparative editions of
              books, with special emphasis on Robinson Crusoe, Pilgrim’s
              Progress, Aesop’s Fables, and Alice’s Adventures in Wonderland.
              The Library also has the largest collection of Early American
              Juvenile Imprints of any academic institution in the United
              States.
            </p>

            <p>
              Other strengths and distinctions of the Baldwin Library include:
              alphabet books, marginalia and inscriptions, nonfiction from the
              20th century, Little Golden Books, religious tracts, and
              illustrated editions from the Golden Age of Children's Literature.
              Scholars worldwide use the Baldwin Library for research in
              morality tales and religious tracts, conduct of life, gender
              roles, comparative editions, and toy and movable books.
            </p>

            <p>
              For more information on the collection, please contact
              lib-baldwin@uflib.ufl.edu.
            </p>
            <p>
              See also, annotated list of selected genre terms for children's
              literature.
            </p>
            <p>
              Through its digital collections, the University of Florida offers
              public access to a wide range of information, including historical
              materials that may contain offensive language or negative
              stereotypes. The University does not endorse the views expressed
              in such materials.
            </p>
            <hr></hr>
            <p>
              <em>
                Funding for digitization of most of these volumes was provided
                by the National Endowment for the Humanities. The Baldwin
                Library of Historical Children's Literature is a contributor to
                the International Children's Digital Library and a founding
                partner of The Center for Children's Literature and Culture at
                the University of Florida.
              </em>
            </p>
            <hr></hr>
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
                  <Image
                    src="https://ufdc.ufl.edu/design/aggregations/alice/images/buttons/coll.gif"
                    thumbnail
                  />
                  <h5>Afterlife of Alice and Her Adventures in Wonderland</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image
                    src="https://ufdc.ufl.edu/design/aggregations/bldn1/images/buttons/coll.gif"
                    thumbnail
                  />
                  <h5>Baldwin Library Research and Resources</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image
                    src="https://ufdc.ufl.edu/design/aggregations/defoe/images/buttons/coll.gif"
                    thumbnail
                  />
                  <h5>Daniel Defoe’s Robinson Crusoe and the Robinsonades</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image
                    src="https://ufdc.ufl.edu/design/aggregations/eacl/images/buttons/coll.gif"
                    thumbnail
                  />
                  <h5>Early American and British Children's Literature</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image
                    src="https://ufdc.ufl.edu/design/aggregations/grimm/images/buttons/coll.gif"
                    thumbnail
                  />
                  <h5>Grimm's Fairy Tales</h5>
                </div>
              </Link>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4} xl={4}>
              <Link to={"/"}>
                <div className="grid-item">
                  <Image
                    src="https://ufdc.ufl.edu/design/aggregations/nick/images/buttons/coll.gif"
                    thumbnail
                  />
                  <h5>St. Nicholas Magazine</h5>
                </div>
              </Link>
            </Col>
          </Row>
        </section>
      </section>
    </>
  );
}

export default ChildrenLiteraturePage;
