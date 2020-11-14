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

import { EmailShareButton, EmailIcon } from "react-share";
import logo from "./images/uf-g-smathers-libraries-logo-dark-blue.png";
import logo2 from "./images/UFDC-White-Transparent.png";
import logo3 from "./images/only-UFDC-white-transparent.png";

function Footer() {
  function getURL(shareUrl) {
    shareUrl = window.location.href;
    console.log("Share URL: " + shareUrl);
    shareUrl = "https://ufdc.ufl.edu/UF00078891/00001/pdf";
    return shareUrl;
  }

  return (
    <footer className="footer">
      <section className="footer-content bg-blueDarkest">
        <div className="row">
          <div className="col-md-12 col-lg-2">
            <a className="for-logo" href="/">
              <div className="ufdc-logo">
                <img src={logo3} alt="UFDC Logo" width="65%" />
                <h2>
                  University <span className="lc-italic">of </span> florida
                  <br />
                  digital library
                </h2>
              </div>
            </a>
          </div>

          <div className="col-lg-10 col-md-12">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
                <div className="column2">
                  <span className="foo-section-title">Aditional Resources</span>
                  <ul>
                    <li>
                      <a
                        className="color"
                        href="https://ufdc.ufl.edu/newspapers"
                      >
                        <i className="fas fa-newspaper"></i>
                        <span className="link-text">
                          The Florida Digital Newspaper Library
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="color"
                        href="https://library-dssc.sites.medinfo.ufl.edu/"
                      >
                        <i className="fas fa-laptop"></i>
                        <span className="link-text">
                          The Digital Library of the Caribbean
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="color"
                        href="https://uflib.ufl.edu/find/research/"
                      >
                        <i className="fas fa-book-reader"></i>
                        <span className="link-text">
                          Research @ UF Libraries
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="color" href="https://uflib.ufl.edu/">
                        <i className="fas fa-university"></i>
                        <span className="link-text">UF Libraries</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
                <div className="column2">
                  <span className="foo-section-title">other links</span>
                  <ul>
                    <li>
                      <a
                        className="color"
                        href="https://uflib.ufl.edu/about/user-policies/privacy-policy/"
                      >
                        <i className="fas fa-user-lock"></i>
                        <span className="link-text">Privacy Policy</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="color"
                        href="https://library-dssc.sites.medinfo.ufl.edu/"
                      >
                        <i className="fas fa-wheelchair"></i>
                        <span className="link-text">ADA/Accessibility</span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="color"
                        href="https://uflib.ufl.edu/find/research/"
                      >
                        <i className="far fa-list-alt"></i>
                        <span className="link-text">
                          Terms of Use for Electronic Resources
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="column2">
                  <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-12 col-xl-12">
                      <ul>
                        <span className="foo-section-title">Get in Touch</span>
                        <li>
                          <a
                            className="color"
                            href="https://uflib.ufl.edu/find/ask/ "
                          >
                            <i className="fas fa-question-circle"></i>
                            <span className="link-text">
                              question / feedback
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-12 col-xl-12">
                      <ul>
                        <span className="foo-section-title">Follow Along</span>
                        <li>
                          <a
                            className="color"
                            href="https://ufdc.ufl.edu/rss/all_short_rss.xml"
                          >
                            <i className="fas fa-rss-square"></i>
                            <span className="link-text">new items (rss)</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-12 col-xl-12">
                      <div className="social-icons">
                        <span className="foo-section-title">social media</span>
                        <ul>
                          <li className="social-facebook bounce">
                            <a href="https://www.facebook.com/uflib">
                              <i className="fa fa-facebook fa-5x"></i>
                            </a>
                          </li>
                          <li className="social-twitter bounce">
                            <a href="https://twitter.com/uflib">
                              <i className="fa fa-twitter fa-5x"></i>
                            </a>
                          </li>
                          <li className="social-instagram-square bounce">
                            <a href="https://www.instagram.com/uflib/">
                              <i className="fab fa-instagram fa-lg"></i>
                            </a>
                          </li>
                          <li className="social-youtube bounce">
                            <a href="https://www.youtube.com/user/UFlibraries">
                              <i className="fab fa-youtube fa-lg"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copy-right-content bg-navyDark">
        <div className="row">
          <div className="col">
            <p className="copy-right-text">
              <a href="https://uflib.ufl.edu/about/user-policies/copyright/ ">
                © {new Date().getFullYear()} University of Florida George A.
                Smathers Libraries. All rights reserved.
              </a>
            </p>
          </div>
        </div>

        <div className="clear-float"></div>
      </section>
    </footer>
  );
}
export default Footer;
