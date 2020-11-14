import React, { useState, useEffect } from "react";
import { getDetails } from "../api/detailsApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import SocialShare from "./common/SocialShare";
import SocialShareFloating from "./common/SocialShareFloating";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Container from "react-bootstrap/Container";
import MobileNav from "./common/MobileNav";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";
import LazyLoad from "react-lazyload";
import FileSaver from "file-saver";

function GeneratePdf() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails().then((_details) => setDetails(_details));
  }, []);

  //console.log("Book Details Object: " + details);

  function createPdfUrl(str1) {
    let resLast = str1.substr(11, 5);
    console.log("resLast: " + resLast);
    let resFirst = str1.substring(0, str1.indexOf("_"));
    let pos = 2;
    for (let i = 0; i < 3; i++) {
      resFirst = resFirst.slice(0, pos) + "/" + resFirst.slice(pos);
      pos = pos + 3;
    }
    resFirst = resFirst.slice(0, pos) + "/" + resFirst.slice(pos);

    const newString =
      "https://ufdcimages.uflib.ufl.edu/" +
      resFirst +
      "/" +
      resLast +
      "/" +
      str1 +
      ".pdf";

    return newString;
  }

  return (
    <Container fluid>
      <SubheaderSearchSection />
      <div className="main-container">
        <MobileNav />
        {details.map((details, i) => {
          const detailsTitle = details.title;
          console.log(details.title);
          const detailsUFID = details.UFID;
          console.log(details.UFID);
          const detailsCoverImage = details.coverImage;
          console.log(details.coverImage);

          return (
            <div key={i} className="row">
              <div className="col">
                <h1 className="item-title text-center">
                  {detailsTitle}{" "}
                  <span className="text-to-lower-case">(PDF)</span>
                </h1>
                <SocialShare />

                <div className="row mb-5">
                  <div className="col text-center">
                    <span>
                      <a
                        href={createPdfUrl(details.UFID)}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={detailsTitle.replace(/\s/g, "-") + ".pdf"}
                        tabIndex="0"
                        title="Download"
                        aria-label="Download"
                      >
                        <Button variant="outline-success">
                          <i className="fas fa-download" />
                          Download PDF Here
                        </Button>
                      </a>
                    </span>

                    <span>
                      <a href="http://get.adobe.com/reader/">
                        <Button variant="outline-success">
                          <i className="fa fa-file-pdf-o" aria-hidden="true" />
                          Download Adobe Reader
                        </Button>
                      </a>
                    </span>

                    <span>
                      <a
                        href="../The-3-little-kittens-new.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download={detailsTitle.replace(/\s/g, "-") + ".pdf"}
                        tabIndex="0"
                        title="Download"
                        aria-label="Download"
                      >
                        <Button variant="outline-success">
                          <i className="fas fa-download" />
                          Download PDF Here
                        </Button>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="position-relative">
                  <embed
                    src={createPdfUrl(details.UFID)}
                    type="application/pdf"
                    width="100%"
                    height="600px"
                  />
                  <SocialShareFloating />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default GeneratePdf;
