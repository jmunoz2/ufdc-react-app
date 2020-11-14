import React from "react";
import { getCitation } from "../api/citationApi";

class CitationPage extends React.Component {
  state = {
    citation: [],
  };

  componentDidMount() {
    getCitation().then((citation) => this.setState({ citation: citation }));
  }

  render() {
    console.log(this.state.citation);

    return (
      <ol>
        <h2>Citation</h2>
        {this.state.citation.map((citation, i) => {
          return (
            <li key={i}>
              <p className="hidden">Heading: {citation.heading}</p>

              <p>
                {citation.permanentLink && citation.permanentLink.item
                  ? "Permanent Link: " + citation.permanentLink.item
                  : null}
              </p>

              <p>
                {citation.title && citation.title.x
                  ? "Title: " + citation.title.x
                  : null}
              </p>
              <p>
                {citation.abbreviatedTitle && citation.abbreviatedTitle.x
                  ? "Abbreviated Title: " + citation.abbreviatedTitle.x
                  : null}
              </p>
              <p>
                {citation.creator &&
                citation.creator.x &&
                citation.creator.x.name
                  ? "Creator Name: " + citation.creator.x.name
                  : null}
              </p>
              <p>
                {citation.creator &&
                citation.creator.x &&
                citation.creator.x.role
                  ? "Creator Role: " + citation.creator.x.role
                  : null}
              </p>
              <p>
                {citation.donor && citation.donor.x && citation.donor.x.name
                  ? "Donor Name: " + citation.donor.x.name
                  : null}
              </p>
              <p>
                {citation.donor && citation.donor.x && citation.donor.x.url
                  ? "Donor URL: " + citation.donor.x.url
                  : null}
              </p>
              <div>
                <ol>
                  {!citation.pubPlace || !citation.pubPlace.x
                    ? null
                    : citation.pubPlace.x.map((x, j) => {
                        return (
                          <li key={j}>
                            <p>{"Publication Place: " + x.loc}</p>
                            <p>{"Publication URL: " + x.u}</p>
                          </li>
                        );
                      })}
                </ol>
              </div>
              <p>
                {citation.publisher &&
                citation.publisher.x &&
                citation.publisher.x.name
                  ? "Publisher Name: " + citation.publisher.x.name
                  : null}
              </p>
              <p>
                {citation.publisher &&
                citation.publisher.x &&
                citation.publisher.x.u
                  ? "Publisher URL: " + citation.publisher.x.u
                  : null}
              </p>
            </li>
          );
        })}
      </ol>
    );
  }
}

export default CitationPage;
