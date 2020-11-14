import React from "react";
import "bootstrap/js/dist/tab.js";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion } from "react-bootstrap";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import OpenAccessIcon from "./common/images/Open-Access-Icon.svg";
import ProjectIcon from "./common/images/Project-Icon.svg";
import RetrospectiveDissertationIcon from "./common/images/Retrospective-Dissertation.svg";
import DiplomaIcon from "./common/images/Diploma-Icon.svg";

function ThesesAndDissertationsPage() {
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
                    Theses and Dissertations Collection
                  </h2>
                  <span className="custom-heading-delim"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="main-content">
            <p>
              The University of Florida Theses & Dissertations Collection within
              the Institutional Repository at the University of Florida (IR@UF)
              will eventually include all theses and dissertations from the
              University of Florida.
            </p>
            <p>
              Usage statistics for each ETD are available under the
              "description," and overall usage statistics are available here.
            </p>
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
            <div className="row tabbed-section mb-5">
              <div className="col-12 mt-4 mb-4">
                <div
                  className="list-group list-group-horizontal-md"
                  id="list-tab"
                  role="tablist"
                >
                  <span
                    className="list-group-item list-group-item-action active"
                    id="list-home-list"
                    data-toggle="list"
                    href="#list-home"
                    role="tab"
                    aria-controls="home"
                  >
                    Open Access Theses & Dissertations, originally submitted
                    electronically (ETDs)
                  </span>
                  <span
                    className="list-group-item list-group-item-action"
                    id="list-profile-list"
                    data-toggle="list"
                    href="#list-profile"
                    role="tab"
                    aria-controls="profile"
                  >
                    Projects in Lieu of Theses (PILOTS), submitted
                    electronically but which would otherwise not be available
                    online{" "}
                    <a href="https://etd.uflib.ufl.edu/">(submission help)</a>
                  </span>
                  <span
                    className="list-group-item list-group-item-action"
                    id="list-messages-list"
                    data-toggle="list"
                    href="#list-messages"
                    role="tab"
                    aria-controls="messages"
                  >
                    Retrospective dissertations, digitized from print-only
                    dissertations (information on this service for dissertation
                    authors)
                  </span>
                  <span
                    className="list-group-item list-group-item-action"
                    id="list-settings-list"
                    data-toggle="list"
                    href="#list-settings"
                    role="tab"
                    aria-controls="settings"
                  >
                    UF Undergraduate Honors Theses (new in 2013/2014)
                  </span>
                </div>
              </div>
              <div className="col-12">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="list-home"
                    role="tabpanel"
                    aria-labelledby="list-home-list"
                  >
                    <a href="/">
                      Data, data sets, and supplementary data related to theses
                      and dissertations
                    </a>
                  </div>
                  <div
                    className="tab-pane fade list-chevron list-styled"
                    id="list-profile"
                    role="tabpanel"
                    aria-labelledby="list-profile-list"
                  >
                    <ul>
                      <i className="fas fa-chevron-right"></i>
                      <span className="ul-heading">
                        College of Design, Construction, and Planning
                      </span>
                      <li>architecture</li>
                      <li>
                        landscape architecture (see also: undergraduate
                        landscape architecture capstone projects)
                      </li>
                      <li>sustainable design</li>
                      <li>urban and regional planning</li>
                      <li>see also, historic preservation documents</li>
                    </ul>
                    <ul>
                      <i className="fas fa-chevron-right"></i>
                      <span className="ul-heading">College of the Arts</span>
                      <li>art education</li>
                      <li>art + technology</li>
                      <li>ceramics</li>
                      <li>choral conducting</li>
                      <li>composition</li>
                      <li>creative photography</li>
                      <li>digital arts and sciences</li>
                      <li>graphic design</li>
                      <li>instrumental conducting</li>
                      <li>museum studies</li>
                      <li>music education</li>
                      <li>music performance</li>
                      <li>painting and drawing</li>
                      <li>printmaking</li>
                      <li>sacred music</li>
                      <li>sculpture</li>
                      <li>theatre</li>
                    </ul>
                    <ul>
                      <i className="fas fa-chevron-right"></i>
                      <span className="ul-heading">
                        College of Journalism & Communications
                      </span>
                      <li>journalism</li>
                      <li>mass communication</li>
                    </ul>
                    College of Liberal Arts and Sciences sustainable development
                    practice (MDP) women's studies
                  </div>
                  <div
                    className="tab-pane fade"
                    id="list-messages"
                    role="tabpanel"
                    aria-labelledby="list-messages-list"
                  >
                    For dissertations not covered by the Retrospective
                    Dissertation Scanning Policy, thesis and dissertation
                    authors can grant permissions to have their theses and
                    dissertations added to the University of Florida Theses &
                    Dissertations Collection. For print-only theses and
                    dissertations, the permissions form and mailing address are
                    available here. Authors can also grant permissions and
                    submit electronic theses and dissertations through the
                    online self-submittal form here.
                  </div>
                  <div
                    className="tab-pane fade list-chevron list-styled"
                    id="list-settings"
                    role="tabpanel"
                    aria-labelledby="list-settings-list"
                  >
                    The <b>UF Undergraduate Honors Theses Collection</b>{" "}
                    includes undergraduate Honors theses from UF starting with
                    the Fall 2014 academic term. Work is underway to add theses
                    written prior to Fall 2014 to the IR@UF. The UF
                    Undergraduate Honors Theses Collection joins the larger UF
                    Theses & Dissertations Collection with graduate theses and
                    dissertations in the IR@UF, an Open Access digital library
                    and repository.
                    <ul className="mt-4">
                      <i className="fas fa-chevron-right"></i>
                      <span className="ul-heading">Additional Resources</span>
                      <li>
                        <a href="https://ufdc.ufl.edu/ufhonors/all">
                          UF Undergraduate Honors Theses
                        </a>
                      </li>
                      <li>
                        <a href="https://guides.uflib.ufl.edu/c.php?g=966329&p=7028773">
                          collection in IR@UF Undergraduate Honors Theses
                          Library
                        </a>
                      </li>
                      <li>
                        <a href="https://cms.uflib.ufl.edu/ScholComm/openaccess">
                          Guide Open Access
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="accordion-section list-chevron list-styled mt-5">
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    <img
                      className="icon"
                      src={OpenAccessIcon}
                      alt="Open Access Icon"
                    />
                    Open Access Theses & Dissertations, originally submitted
                    electronically (ETDs)
                    <i className="fas fa-caret-down ml-4"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <a href="/">
                        Data, data sets, and supplementary data related to
                        theses and dissertations
                      </a>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    <img
                      className="icon"
                      src={ProjectIcon}
                      alt="Project Icon"
                    />
                    Projects in Lieu of Theses (PILOTS), submitted
                    electronically but which would otherwise not be available
                    online (submission help)
                    <i className="fas fa-caret-down ml-4"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ul>
                        <i className="fas fa-chevron-right"></i>
                        <span className="ul-heading">
                          College of Design, Construction, and Planning
                        </span>
                        <li>architecture</li>
                        <li>
                          landscape architecture (see also: undergraduate
                          landscape architecture capstone projects)
                        </li>
                        <li>sustainable design</li>
                        <li>urban and regional planning</li>
                        <li>see also, historic preservation documents</li>
                      </ul>
                      <ul>
                        <i className="fas fa-chevron-right"></i>
                        <span className="ul-heading">College of the Arts</span>
                        <li>art education</li>
                        <li>art + technology</li>
                        <li>ceramics</li>
                        <li>choral conducting</li>
                        <li>composition</li>
                        <li>creative photography</li>
                        <li>digital arts and sciences</li>
                        <li>graphic design</li>
                        <li>instrumental conducting</li>
                        <li>museum studies</li>
                        <li>music education</li>
                        <li>music performance</li>
                        <li>painting and drawing</li>
                        <li>printmaking</li>
                        <li>sacred music</li>
                        <li>sculpture</li>
                        <li>theatre</li>
                      </ul>
                      <ul>
                        <i className="fas fa-chevron-right"></i>
                        <span className="ul-heading">
                          College of Journalism & Communications
                        </span>
                        <li>journalism</li>
                        <li>mass communication</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    <img
                      className="icon"
                      src={RetrospectiveDissertationIcon}
                      alt="Project Icon"
                    />
                    Retrospective dissertations, digitized from print-only
                    dissertations (information on this service for dissertation
                    authors)
                    <i className="fas fa-caret-down ml-4"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      For dissertations not covered by the Retrospective
                      Dissertation Scanning Policy, thesis and dissertation
                      authors can grant permissions to have their theses and
                      dissertations added to the University of Florida Theses &
                      Dissertations Collection. For print-only theses and
                      dissertations, the permissions form and mailing address
                      are available here. Authors can also grant permissions and
                      submit electronic theses and dissertations through the
                      online self-submittal form here.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="3">
                    <img
                      className="icon"
                      src={DiplomaIcon}
                      alt="Project Icon"
                    />
                    UF Undergraduate Honors Theses
                    <i className="fas fa-caret-down ml-4"></i>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      The <b>UF Undergraduate Honors Theses Collection</b>{" "}
                      includes undergraduate Honors theses from UF starting with
                      the Fall 2014 academic term. Work is underway to add
                      theses written prior to Fall 2014 to the IR@UF. The UF
                      Undergraduate Honors Theses Collection joins the larger UF
                      Theses & Dissertations Collection with graduate theses and
                      dissertations in the IR@UF, an Open Access digital library
                      and repository.
                      <ul className="mt-4">
                        <i className="fas fa-chevron-right"></i>
                        <span className="ul-heading">Additional Resources</span>
                        <li>
                          <a href="https://ufdc.ufl.edu/ufhonors/all">
                            UF Undergraduate Honors Theses
                          </a>
                        </li>
                        <li>
                          <a href="https://guides.uflib.ufl.edu/c.php?g=966329&p=7028773">
                            collection in IR@UF Undergraduate Honors Theses
                            Library
                          </a>
                        </li>
                        <li>
                          <a href="https://cms.uflib.ufl.edu/ScholComm/openaccess">
                            Guide Open Access
                          </a>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default ThesesAndDissertationsPage;
