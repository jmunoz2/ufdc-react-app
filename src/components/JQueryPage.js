import React from "react";
import $ from "jquery";
import { findDOMNode } from "react-dom";
import Container from "react-bootstrap/Container";

class JQueryPage extends React.Component {
  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
  };

  render() {
    return (
      <Container fluid>
        <div className="main-container">
          <div ref="toggle" className="row">
            <div className="col">
              <h2>This is my jQuery Page</h2>
              <p>
                The University of Florida Digital Collections (UFDC) hosts more
                than 300 outstanding digital collections, containing over 14
                million pages, covering over 78 thousand subjects in rare books,
                manuscripts, antique maps, children's literature, newspapers,
                theses and dissertations, data sets, photographs, oral
                histories, and more for permanent access and preservation.
                Through UFDC, users have free and Open Access to full unique and
                rare materials held by the University of Florida and partner
                institutions.
              </p>
              <p>
                The UF Libraries encourage and support faculty collaboration on
                digital collections and digital scholarship.
              </p>
              <p>
                UFDC is constantly growing with new resources, new scholarship,
                and system enhancements to the Open Source SobekCM Software. The
                search box above searches across all the digital resources in
                all the collections. By clicking on the icons below, you can
                view and search individual collections.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                className="btn btn-outline-success"
                type="button"
                style={{
                  margin: 10,
                }}
                onClick={this.handleToggle}
              >
                Hide Paragraps
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default JQueryPage;
