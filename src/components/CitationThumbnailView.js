import React, { useState, useEffect } from "react";
import { getResult, getResultBySlug } from "../api/resultApi";

function CitationThumbnailView() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult().then((_result) => setResult(_result));
  }, []);

  const queryString = window.location.search; //Getting the get parameter value passed on the url
  console.log(queryString);

  console.log(result);

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

  function linkToUrl(str1, queryString) {
    //To create the url used in the href attribute for image
    str1 = str1.replace("_", "/");
    str1 = "https://ufdc.ufl.edu/" + str1 + queryString;
    return str1;
  }
  return (
    <div id="thumbnail-view-block" className="row">
      {result.map((result, i) => {
        return (
          <div
            className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2"
            key={i}
          >
            {console.log(result.bibId + " / " + result.coverImage)}
            <div className="grid_item">
              <a href={linkToUrl(result.bibId, queryString)}>
                <figure className="figure">
                  <img
                    src={createImageUrl(result.bibId, result.coverImage)}
                    className="figure-img img-fluid rounded"
                    alt={result.title + "image."}
                  />
                  <figcaption className="figure-caption">
                    <p className="shortCaption">
                      {/*checkLength(result.title)*/}
                      {result.title}
                    </p>
                    {/*<p className="longCaption">{result.title}</p>*/}
                  </figcaption>
                  {/*----------Item Details Lightbox on Hover---------*/}
                  <div className="figure-details">
                    {result.title ? (
                      <div className="row details-block">
                        <div className="col-12">
                          <span className="details-title">{result.title}</span>
                        </div>
                      </div>
                    ) : null}

                    {result.creators ? (
                      <div className="row details-block">
                        <div className="col-3">
                          <span className="identifier">Creators: </span>
                        </div>
                        <div className="col-9">
                          <span>{result.creators}</span>
                        </div>
                      </div>
                    ) : null}

                    {result.subjects ? (
                      <div className="row details-block">
                        <div className="col">
                          {result.subjects.map((subjects, j) => {
                            return subjects !== "" ? (
                              <div className="row identifier-row" key={j}>
                                <div className="col-3">
                                  {j === 0 ? (
                                    <span className="identifier">
                                      Subjects:{" "}
                                    </span>
                                  ) : (
                                    <span className="identifier">&nbsp;</span>
                                  )}
                                </div>
                                <div className="col-9">
                                  <span>{subjects}</span>
                                </div>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    ) : null}

                    {result.publisher ? (
                      <div className="row details-block">
                        <div className="col-3">
                          <span className="identifier">Publisher: </span>
                        </div>
                        <div className="col-9">
                          <span>{result.publisher}</span>
                        </div>
                      </div>
                    ) : null}

                    {result.pageCount ? (
                      <div className="row details-block">
                        <div className="col-3">
                          <span className="identifier">Page Count: </span>
                        </div>
                        <div className="col-9">
                          <span>{result.pageCount}</span>
                        </div>
                      </div>
                    ) : null}

                    {result.type ? (
                      <div className="row details-block">
                        <div className="col-3">
                          <span className="identifier">Media Type: </span>
                        </div>
                        <div className="col-9">
                          <span>{result.type}</span>
                        </div>
                      </div>
                    ) : null}

                    {result.language ? (
                      <div className="row details-block">
                        <div className="col-3">
                          <span className="identifier">Language: </span>
                        </div>
                        <div className="col-9">
                          <span>{result.language}</span>
                        </div>
                      </div>
                    ) : null}
                  </div>{" "}
                  {/*-----End of Item Details Lightbox on Hover---*/}
                </figure>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default CitationThumbnailView;
