import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class HamburgerMenu extends Component {
  state = {
    collapse1: false,
    collapseID: "",
  };

  toggleCollapse = (collapseID) => () => {
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));
  };

  toggleSingleCollapse = (collapseId) => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <Router>
        <MDBContainer>
          <MDBNavbar
            style={{ marginTop: "20px", backgroundColor: "rgb(17 62 152)" }}
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <a
                  href="https://www.ufl.edu"
                  title="University of Florida Homepage"
                >
                  <img
                    src="https://cdn.sobekdigital.com/instances/ufdc/uf-uf9.gif"
                    alt="University of Florida Homepage"
                    border="0"
                    title="University of Florida"
                  />
                </a>
                <a
                  href="http://cms.uflib.ufl.edu/"
                  title="George A. Smathers Library Homepage"
                >
                  <img
                    src="https://cdn.sobekdigital.com/instances/ufdc/uf-uflib9.gif"
                    alt="George A. Smathers Library Homepage"
                    border="0"
                    title="George A. Smathers Library"
                  />
                </a>
              </MDBNavbarBrand>
              <MDBHamburgerToggler
                color="#ffffff"
                id="hamburger1"
                onClick={() => this.toggleSingleCollapse("collapse1")}
              />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="/">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/collections">Collections</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/citation">Citation</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/citation-2">Citation 2</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/three-little-kittens">
                      Three Little Kittens
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/three-little-kittens-row-column">
                      Three Little Kittens Row-Column
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/three-little-kittens-row-col-new">
                      Three Little Kittens Row-Col New
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/result">Search Result</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/flipbook">Flipbook</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/dtailslazyload">
                      Details Lazy-Load
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/detailsusinghooks">
                      Details Using Hooks
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/resultswithtooltip">
                      Results With Tooltip
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/googlemappage">Google Map Page</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="/generatepdf">Generate PDF</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
      </Router>
    );
  }
}

export default HamburgerMenu;
