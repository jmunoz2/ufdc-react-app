import React, { useState, useEffect } from "react";
import { getResult, getResultBySlug } from "../api/resultApi";

function CitationTableView() {
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
  );
}

export default CitationTableView;
