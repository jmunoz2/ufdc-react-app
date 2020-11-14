import React, { useState, useEffect } from "react";
import { getResult, getResultBySlug } from "../api/resultApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import Container from "react-bootstrap/Container";

function ResultPage() {
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

  /*
    function checkLength(caption) {
      //To shorten the Title shown under the thumbnail
      if (caption.length > 30) {
        caption = caption.substr(0, 30) + "... ";
      }
      return caption;
    } */

  /*------Function to display Thumbnail View and hide Brief View  and Table View------*/
  function displayThumbnailViewFunction() {
    let thumbnailElement = document.getElementById("thumbnail-view-button");
    let thumbnailBlock = document.getElementById("thumbnail-view-block");
    let briefElement = document.getElementById("brief-view-button");
    let briefBlock = document.getElementById("brief-view-block");
    let tableElement = document.getElementById("table-view-button");
    let tableBlock = document.getElementById("table-view-block");
    thumbnailElement.classList.add("active");
    thumbnailBlock.classList.remove("d-none");
    briefElement.classList.remove("active");
    briefBlock.classList.add("d-none");
    tableElement.classList.remove("active");
    tableBlock.classList.add("d-none");
  }

  /*------Function to display Brief View and hide Thumbnail View  and Table View------*/
  function displayBriefViewFunction() {
    let thumbnailElement = document.getElementById("thumbnail-view-button");
    let thumbnailBlock = document.getElementById("thumbnail-view-block");
    let briefElement = document.getElementById("brief-view-button");
    let briefBlock = document.getElementById("brief-view-block");
    let tableElement = document.getElementById("table-view-button");
    let tableBlock = document.getElementById("table-view-block");
    thumbnailElement.classList.remove("active");
    thumbnailBlock.classList.add("d-none");
    briefElement.classList.add("active");
    briefBlock.classList.remove("d-none");
    tableElement.classList.remove("active");
    tableBlock.classList.add("d-none");
  }

  /*------Function to display Table View and hide Thumbnail View and Brief View------*/
  function displayTableViewFunction() {
    let thumbnailElement = document.getElementById("thumbnail-view-button");
    let thumbnailBlock = document.getElementById("thumbnail-view-block");
    let briefElement = document.getElementById("brief-view-button");
    let briefBlock = document.getElementById("brief-view-block");
    let tableElement = document.getElementById("table-view-button");
    let tableBlock = document.getElementById("table-view-block");
    thumbnailElement.classList.remove("active");
    thumbnailBlock.classList.add("d-none");
    briefElement.classList.remove("active");
    briefBlock.classList.add("d-none");
    tableElement.classList.add("active");
    tableBlock.classList.remove("d-none");
  }

  return (
    <Container fluid>
      <SubheaderSearchSection />
      <div className="main-container">
        <>
          <div className="row">
            <div className="col-12">
              <h2>Search Result</h2>
            </div>
          </div>

          <div className="row view-heading">
            <div className="col-12 text-center">
              <button
                id="thumbnail-view-button"
                type="button"
                className="btn btn-outline-success active"
                onClick={displayThumbnailViewFunction}
              >
                Thumbnail View
              </button>
              <button
                id="brief-view-button"
                type="button"
                className="btn btn-outline-success"
                onClick={displayBriefViewFunction}
              >
                Brief View
              </button>
              <button
                id="table-view-button"
                type="button"
                className="btn btn-outline-success"
                onClick={displayTableViewFunction}
              >
                Table View
              </button>
            </div>
          </div>

          {/************************* Thumbnail View *********************************/}

          <div id="thumbnail-view-block" className="row thumbnail-view">
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
                                <span className="details-title">
                                  {result.title}
                                </span>
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
                                          <span className="identifier">
                                            &nbsp;
                                          </span>
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

          {/************************* Bief View *********************************/}

          <div id="brief-view-block" className="row brief-view d-none">
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
                              src={createImageUrl(
                                result.bibId,
                                result.coverImage
                              )}
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
                                          <span className="identifier">
                                            &nbsp;
                                          </span>
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

          {/************************* Table View *********************************/}

          <div id="table-view-block" className="row table-view d-none">
            {/*<div className="table-responsive">*/}
            <table className="table table-bordered table-hover table-striped">
              <caption>Collections result list</caption>
              <thead className=".thead-light">
                <tr>
                  <th className="sticky" scope="col">
                    No
                  </th>
                  <th className="sticky" scope="col">
                    Title
                  </th>
                  <th className="sticky" scope="col">
                    Publisher
                  </th>
                  <th className="sticky" scope="col">
                    Media Type
                  </th>
                  <th className="sticky" scope="col">
                    Language
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.map((result, i) => {
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>
                        <a href={linkToUrl(result.bibId)}>{result.title}</a>
                      </td>
                      <td>{result.publisher}</td>
                      <td>{result.type}</td>
                      <td>{result.language}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/*</div>*/}
          </div>
        </>
      </div>
    </Container>
  );
}

export default ResultPage;
