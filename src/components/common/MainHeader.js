import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { NavLink } from "react-router-dom";

import { EmailShareButton, EmailIcon } from "react-share";
import logo from "./images/UF_Monogram-White.png";

function MainHeader() {
  function getURL(shareUrl) {
    shareUrl = window.location.href;
    console.log("Share URL: " + shareUrl);
    shareUrl = "https://ufdc.ufl.edu/UF00078891/00001/pdf";
    return shareUrl;
  }

  function Image(props) {
    return <img src={props.imagesrc} alt={props.alt} width={props.width} />;
  }

  const activeStyle = { borderBottom: "3px solid #b84300" };
  const submenuActiveStyle = { backgroundColor: "#00539b", color: "#fff" };

  return (
    <>
      <Navbar
        className="main-nav"
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="https://www.ufl.edu/">
          <Image imagesrc={logo} alt={"logo"} width={"100"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto main mobile-top">
            <NavLink
              activeStyle={activeStyle}
              className="nav-link"
              exact
              to="/"
            >
              Home
            </NavLink>
            {/*<Nav.Link href="/" active>Home</Nav.Link>*/}
            <NavDropdown title="Explore" id="basic-nav-dropdown-2">
              <NavDropdown.Item href="#action/2.1">
                Collections
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">Partners</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Titles</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.4">Locations</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.5">Types</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.6">Dates</NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="/collections"
              activeClassName="active"
              className="nav-link hide-smaller-than-1199px"
            >
              Collections
            </NavLink>
            <NavLink
              to="/partners"
              activeClassName="active"
              className="nav-link hide-smaller-than-1199px"
            >
              Partners
            </NavLink>
            <NavLink
              to="/titles"
              activeClassName="active"
              className="nav-link hide-smaller-than-1199px"
            >
              Titles
            </NavLink>
            <NavLink
              to="/locations"
              activeClassName="active"
              className="nav-link hide-smaller-than-1199px"
            >
              Locations
            </NavLink>
            <NavLink
              to="/types"
              activeClassName="active"
              className="nav-link hide-smaller-than-1199px"
            >
              Types
            </NavLink>
            <NavLink
              to="/dates"
              activeClassName="active"
              className="nav-link hide-smaller-than-1199px"
            >
              Dates
            </NavLink>
          </Nav>
          <Nav className="main mobile-bottom">
            {/*<Nav.Link href="#deets">MyUFDC </Nav.Link>*/}
            <NavDropdown title="About" id="basic-nav-dropdown">
              {/*<NavDropdown.Item as="div"><NavLink activeStyle={submenuActiveStyle} to="/about">Overview</NavLink></NavDropdown.Item>*/}
              <NavDropdown.Item href="/about">Overview</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Purpose</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Collaboration
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Technology</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Policies</NavDropdown.Item>
            </NavDropdown>
            <NavLink to="tour" activeClassName="active" className="nav-link">
              Tour
            </NavLink>
            <NavLink
              to="contact-us"
              activeClassName="active"
              className="nav-link"
            >
              Contact Us
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default MainHeader;
