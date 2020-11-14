import React, { useState, useEffect } from "react";
import { getResult, getResultBySlug } from "../api/resultApi";

function CitationBriefView() {
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
    <div id="brief-view-block" className="row">
      <div className="col-12">
        {result.map((result, i) => {
          return (
            <section className="boxed-section" key={i}>
              <a href={linkToUrl(result.bibId, queryString)}>
                <div className="row">
                  <div className="col-3">
                    {" "}
                    {/*---Thumbnail Column----*/}
                    <figure className="figure">
                      <img
                        src={createImageUrl(result.bibId, result.coverImage)}
                        className="figure-img img-fluid rounded"
                        alt={result.title + "image."}
                      />
                    </figure>
                  </div>
                  <div className="col-9">
                    {" "}
                    {/*---Detail Column----*/}
                    <div className="row">
                      <div className="col-12">
                        <p className="h5">
                          <span>{i + 1} - </span>"{result.title}"
                        </p>
                      </div>
                    </div>
                    {result.creators ? (
                      <div className="row details-block">
                        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                          <span className="identifier">Creators: </span>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
                          <span>{result.creators}</span>
                        </div>
                      </div>
                    ) : null}
                    {result.subjects ? (
                      <div className="row identifier-mt details-block">
                        <div className="col">
                          {result.subjects.map((subjects, j) => {
                            return subjects !== "" ? (
                              <div className="row identifier-row" key={j}>
                                <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                                  {j === 0 ? (
                                    <span className="identifier">
                                      Subjects:{" "}
                                    </span>
                                  ) : (
                                    <span className="identifier">&nbsp;</span>
                                  )}
                                </div>
                                <div className="col-xs-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
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
                        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                          <span className="identifier">Publisher: </span>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
                          <span>{result.publisher}</span>
                        </div>
                      </div>
                    ) : null}
                    {result.pageCount ? (
                      <div className="row details-block">
                        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                          <span className="identifier">Page Count: </span>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
                          <span>{result.pageCount}</span>
                        </div>
                      </div>
                    ) : null}
                    {result.type ? (
                      <div className="row details-block">
                        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                          <span className="identifier">Media Type: </span>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
                          <span>{result.type}</span>
                        </div>
                      </div>
                    ) : null}
                    {result.language ? (
                      <div className="row details-block">
                        <div className="col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                          <span className="identifier">Language: </span>
                        </div>
                        <div className="col-xs-9 col-sm-9 col-md-10 col-lg-10 col-xl-10">
                          <span>{result.language}</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </a>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default CitationBriefView;
