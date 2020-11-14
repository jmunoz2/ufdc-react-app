import React, { useState, useEffect } from "react";
import { getDetails } from "../api/detailsApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import DetailsThumnailsGrid from "./DetailsThumnailsGrid.js";
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
/*
import "css/iip.css";
import "js/mootools-core-1.6.0-compressed.js";
import "js/iipmooviewer-2.0-min.js";*/

function ZoomableImagePage() {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    getDetails().then((_details) => setDetails(_details));
  }, []);
   
  /*new IIPMooViewer( "viewer", { image: '/path/to/image.tif' } );*/

  return (
    
    <div id="viewer" style={{width:"100%", height:"100%"}}></div>
  
  );

}

export default ZoomableImagePage;