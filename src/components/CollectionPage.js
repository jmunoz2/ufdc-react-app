import React, { useState, useEffect } from "react";
import { getDetails } from "../api/detailsApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import DetailsThumnailsGrid from "./DetailsThumnailsGrid.js";
import data from "../bookDetails";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import SocialShare from "./common/SocialShare";
import { Link } from "react-scroll";
import MobileNav from "./common/MobileNav";




const CollectionPage = props => {
  console.log("Props: " + props);
    debugger;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails().then((_details) => setDetails(_details));
  }, []);

  //const bookDetails = data;

  console.log("Book Details Object: " + details);

  /*------Function to display Thumbnail by Chosen Size------*/
  function displayChosenThumbnailSize(size) {
    let smallViewButton = document.getElementById("small-view-button");
    let mediumViewButton = document.getElementById("medium-view-button");
    let largeViewButton = document.getElementById("large-view-button");
    let thumbnailElement = document.getElementById("block-by-syze");
    let children = thumbnailElement.children;
    let childrenLength = thumbnailElement.children.length;
    console.log(thumbnailElement);

    if (size === "sm") {
      smallViewButton.classList.add("active");
      mediumViewButton.classList.remove("active");
      largeViewButton.classList.remove("active");

      let i = 0;
      do {
        children[i].classList.add(
          "col-xs-12",
          "col-sm-6",
          "col-md-3",
          "col-lg-2",
          "col-xl-2"
        );
        children[i].classList.remove(
          "col-lg-3",
          "col-lg-4",
          "col-md-4",
          "col-md-6",
          "col-xl-3",
          "col-xl-4",
          "col-sm-12"
        );
        i++;
      } while (i < childrenLength);
    } else if (size === "md") {
      smallViewButton.classList.remove("active");
      mediumViewButton.classList.add("active");
      largeViewButton.classList.remove("active");

      let i = 0;
      do {
        children[i].classList.add(
          "col-xs-12",
          "col-sm-6",
          "col-md-4",
          "col-lg-3",
          "col-xl-3"
        );
        children[i].classList.remove(
          "col-lg-2",
          "col-xl-2",
          "col-sm-12",
          "col-md-6",
          "col-md-3",
          "col-lg-4",
          "col-xl-4"
        );
        i++;
      } while (i < childrenLength);
    } else if (size === "lg") {
      smallViewButton.classList.remove("active");
      mediumViewButton.classList.remove("active");
      largeViewButton.classList.add("active");

      let i = 0;
      do {
        children[i].classList.add(
          "col-xs-12",
          "col-sm-12",
          "col-md-6",
          "col-lg-4",
          "col-xl-4"
        );
        children[i].classList.remove(
          "col-sm-6",
          "col-md-3",
          "col-lg-3",
          "col-xl-2",
          "col-lg-3",
          "col-xl-2"
        );
        i++;
      } while (i < childrenLength);
    }
  }

  function highlightFigure(value) {
    console.log("The element selected is: " + value);
    console.log(document.getElementById(value));
    const thumbnailsBlock = document.getElementsByClassName("highlight");
    while (thumbnailsBlock[0]) {
      thumbnailsBlock[0].classList.remove("highlight");
    }

    const myObject = document.getElementById(value);
    myObject.classList.add("highlight");
  }

  return (
    <Container fluid>
      <SubheaderSearchSection />
      <div className="main-container">
        <MobileNav />
        {/*<h2>{props.match.params.slug}</h2>*/}
        {details.map((details, i) => {
          return (
            <div className="row" key={i}>
              <div className="col">
                <h1 className="item-title text-center">{details.title}</h1>
                <SocialShare />
              </div>
            </div>
          );
        })}

        {/*-------------- Buttons to Choose Size ------------------*/}
        <div className="row view-heading">
          <div className="col text-center">
            <ButtonGroup size="sm">
              <Button
                id="small-view-button"
                variant="outline-success"
                onClick={() => displayChosenThumbnailSize("sm")}
                active
              >
                Small
              </Button>
              <Button
                id="medium-view-button"
                variant="outline-success"
                onClick={() => displayChosenThumbnailSize("md")}
              >
                Medium
              </Button>
              <Button
                id="large-view-button"
                variant="outline-success"
                onClick={() => displayChosenThumbnailSize("lg")}
              >
                Large
              </Button>

              {details.map((details, i) => {
                return (
                  <DropdownButton
                    as={ButtonGroup}
                    title="Go to thumbnail"
                    id="bg-nested-dropdown"
                    variant="secondary"
                    key={i}
                  >
                    {details.imageSrcUrl.map((s, j) => (
                      <Link
                        className="dropdown-item"
                        role={Button}
                        key={j}
                        to={j.toString()}
                        smooth={true}
                        duration={700}
                        spy={true}
                        hashSpy={true}
                        delay={500}
                        isDynamic={true}
                        onSetActive={details.handleSetActive}
                        onSetInactive={details.handleSetInactive}
                        ignoreCancelEvents={true}
                      >
                        <span onClick={() => highlightFigure(j.toString())}>
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </DropdownButton>
                );
              })}
            </ButtonGroup>
          </div>
        </div>

        {/*--------End of Section for Buttons to Choose Size -------*/}

        {/*--------Begin Section for All Images -------*/}
        <DetailsThumnailsGrid details={details} />
      </div>
    </Container>
  );
}

export default CollectionPage;
