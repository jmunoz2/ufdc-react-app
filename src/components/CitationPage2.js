import React from "react";
class CitationPage2 extends React.Component {
  render() {
    let hcCitation = {
      section: [
        {
          permanentLink: { item: "AA0076866/00001" },
        },
        {
          heading: "Material Information-2",
          title: { x: "abc" },
          abbreviatedTitle: { x: "other title" },
          creator: {
            x: {
              name: "creator of type binder",
              role: "binder",
            },
          },
          donor: {
            x: {
              name: "donor name",
              url: "http://abc",
            },
          },
          pubPlace: {
            x: [
              {
                loc: "pub loc 1",
                u: "href",
              },
              {
                loc: "pub loc 2",
                u: "url href",
              },
              {
                loc: "location 2",
                u: "url href for location 2",
              },
              {
                loc: "location 3",
                u: "url href for location 3",
              },
            ],
          },
          publisher: {
            x: {
              name: "publisher name",
              u: "url href",
            },
          },
        },
        { heading: "Material Information-3" },
      ],
    };

    console.log(hcCitation);
    return (
      <div>
        <h2>Citation</h2>
        <p>Permanent Link: {hcCitation.section[0].permanentLink.item}</p>
        <p>Heading: {hcCitation.section[1].heading}</p>
        <p>Title: {hcCitation.section[1].title.x}</p>
        <p>Abbreviated Title: {hcCitation.section[1].abbreviatedTitle.x}</p>
        <p>Creator Name: {hcCitation.section[1].creator.x.name}</p>
        <p>Creator Role: {hcCitation.section[1].creator.x.role}</p>
        <p>Donor Name: {hcCitation.section[1].donor.x.name}</p>
        <p>Donor url: {hcCitation.section[1].donor.x.role}</p>
        <div>
          Publication Place:
          <ol>
            <li>
              Location
              <ul>
                <li>Location: {hcCitation.section[1].pubPlace.x[0].loc}</li>
                <li>url: {hcCitation.section[1].pubPlace.x[0].u}</li>
              </ul>
            </li>
            <li>
              Location
              <ul>
                <li>Location: {hcCitation.section[1].pubPlace.x[1].loc}</li>
                <li>url: {hcCitation.section[1].pubPlace.x[1].u}</li>
              </ul>
            </li>
            <li>
              Location
              <ul>
                <li>Location: {hcCitation.section[1].pubPlace.x[2].loc}</li>
                <li>url: {hcCitation.section[1].pubPlace.x[2].u}</li>
              </ul>
            </li>
            <li>
              Location
              <ul>
                <li>Location: {hcCitation.section[1].pubPlace.x[3].loc}</li>
                <li>url: {hcCitation.section[1].pubPlace.x[3].u}</li>
              </ul>
            </li>
          </ol>
        </div>
        <p>Publisher Name: {hcCitation.section[1].publisher.x.name}</p>
        <p>Publisher url: {hcCitation.section[1].publisher.x.u}</p>
        <p>Heading: {hcCitation.section[2].heading}</p>
      </div>
    );
  }
}

export default CitationPage2;
