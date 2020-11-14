import React, { useState, useEffect } from "react";
import { getDetails } from "../api/detailsApi";
import data from "../bookDetails";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Container from "react-bootstrap/Container";
import SocialShare from "./common/SocialShare";
import SocialShareFloating from "./common/SocialShareFloating";
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
import MobileNav from "./common/MobileNav";

function DiamondFlipBook() {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails().then((_details) => setDetails(_details));
  }, []);

  //const bookDetails = data;

  console.log("Book Details Object: " + details);

  function createImageUrl(str1, str2) {
    let resLast = str1.substr(11, 5);
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
      str2;

    return newString;
  }

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
      <div className="main-container">
        <MobileNav />
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

        {details.map((details, i) => {
          return (
            <div id="block-by-syze" className="row" key={i}>
              {details.imageSrcUrl.map((s, j) => (
                <div
                  className="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center //thumbnail-element"
                  key={j}
                >
                  <figure id={j.toString()} className="figure">
                    <img
                      className="figure-img img-fluid rounded gray-scale-on-hover img-thumbnail"
                      src={createImageUrl(details.UFID, s.src)}
                      alt={details.title + "image for " + s.title}
                    />
                    <figcaption className="figure-caption">
                      <p className="shortCaption">{s.title}</p>
                    </figcaption>
                  </figure>
                  {console.log(s)}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default DiamondFlipBook;
