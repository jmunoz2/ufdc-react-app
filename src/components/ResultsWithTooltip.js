import React, { useState, useEffect } from "react";
import { getResult, getResultBySlug } from "../api/resultApi";
import Container from "react-bootstrap/Container";
import CitationBriefView from "./CitationBriefView";
import CitationTableView from "./CitationTableView";
import CitationThumbnailView from "./CitationThumbnailView";

function ResultsWithTooltip() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    getResult().then((_result) => setResult(_result));
  }, []);

  const queryString = window.location.search; //Getting the get parameter value passed on the url
  console.log(queryString);

  console.log(result);

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

          <div id="thumbnail-view-block" className="thumbnail-view">
            <CitationThumbnailView />
          </div>

          {/************************* Bief View *********************************/}
          <div id="brief-view-block" className="brief-view d-none">
            <CitationBriefView />
          </div>
          {/************************* Table View *********************************/}

          <div id="table-view-block" className="table-view d-none">
            <CitationTableView />
          </div>
        </>
      </div>
    </Container>
  );
}

export default ResultsWithTooltip;
