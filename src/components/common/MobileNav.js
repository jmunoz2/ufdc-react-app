import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { Button, ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";

import { EmailShareButton, EmailIcon } from "react-share";

function MobileNav() {
  function getURL(shareUrl) {
    shareUrl = window.location.href;
    console.log("Share URL: " + shareUrl);
    shareUrl = "https://ufdc.ufl.edu/UF00078891/00001/pdf";
    return shareUrl;
  }

  return (
    // --Navbar--

    <Navbar
      id="item-submenu"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Navbar.Brand>Item Submenu</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Description" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/three-little-kittens-row-col-new">
              Standard View
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Marc View</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Metadata</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Usage Statistics
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/generatepdf">PDF</Nav.Link>
          <Nav.Link href="#downloads">Downloads</Nav.Link>
          <Nav.Link href="/generatepdf">Flipbook</Nav.Link>
          <Nav.Link href="/dtailslazyload">Thumbnails</Nav.Link>
          <Nav.Link href="/googlemappage">Map it</Nav.Link>
        </Nav>
        <Nav className="mobile-bottom">
          <NavDropdown title="Print" id="collasible-nav-dropdown">
            <NavDropdown.Item>Page</NavDropdown.Item>
            <NavDropdown.Item>PDF</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey={2} href="#memes">
            <EmailShareButton url={getURL()}>
              <i className="far fa-envelope"></i>Send
            </EmailShareButton>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default MobileNav;
