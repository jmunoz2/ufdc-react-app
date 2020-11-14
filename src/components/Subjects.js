import React, { useState, useEffect } from "react";
import { getCitation } from "../api/citationApi";
import Container from "react-bootstrap/Container";

function Subjects() {
  const [citation, setCitation] = useState([]);

  useEffect(() => {
    getCitation().then((_citation) => setCitation(_citation));
  }, []);
  console.log(citation);
  //console.log(citation[1]);
  //console.log(citation[0].permanentLink.item);

  return citation.map((citation, i) => {
    return (
      <div className="citation-module" key={i}>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="heading">subjects</p>
              </div>
            </div>
          </div>
        </div>
        {citation.subject ? (
          <div className="row">
            <div className="text-right col-4 col-md-3 col-lg-3">
              <span className="identifier">subjects / keywords:</span>
            </div>

            <div className="col-8 col-md-9 col-lg-9">
              {citation.subject.map((subject, j) => {
                return subject.subtopic &&
                  subject.subgenre &&
                  subject._authority &&
                  !subject.subtemporal ? (
                  <div className="row" key={j}>
                    <div className="col">
                      <span className="identifier-value">
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            subject.subtopic +
                            " " +
                            subject.subgenre +
                            "&f=SU"
                          }
                        >
                          {subject.subtopic +
                            " -- " +
                            subject.subgenre +
                            " ( " +
                            subject._authority +
                            " ) "}
                        </a>
                      </span>
                    </div>
                  </div>
                ) : subject.subtopic &&
                  !subject.subgenre &&
                  subject._authority &&
                  !subject.subtemporal ? (
                  <div className="row" key={j}>
                    <div className="col">
                      <span className="identifier-value">
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            subject.subtopic +
                            "&f=SU"
                          }
                        >
                          {subject.subtopic +
                            " ( " +
                            subject._authority +
                            " ) "}
                        </a>
                      </span>
                    </div>
                  </div>
                ) : subject.subtemporal &&
                  subject.subgenre &&
                  subject._authority &&
                  subject._authority !== "None" ? (
                  <div className="row" key={j}>
                    <div className="col">
                      <span className="identifier-value">
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            subject.subgenre +
                            " " +
                            subject.subtemporal +
                            "&f=SU"
                          }
                        >
                          {subject.subgenre +
                            " -- " +
                            subject.subtemporal +
                            " ( " +
                            subject._authority +
                            " ) "}
                        </a>
                      </span>
                    </div>
                  </div>
                ) : subject.subtopic &&
                  subject.subtemporal &&
                  !subject.subgenre &&
                  subject._authority ? (
                  <div className="row" key={j}>
                    <div className="col">
                      <span className="identifier-value">
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            subject.subtopic +
                            " " +
                            subject.subtemporal +
                            "&f=SU"
                          }
                        >
                          {subject._authority === "None" ? (
                            <span>
                              {subject.subtopic + " -- " + subject.subtemporal}
                            </span>
                          ) : null}
                        </a>
                      </span>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ) : null}

        {citation.genr ? (
          <div className="row mt-2">
            <div className="text-right col-4 col-md-3 col-lg-3">
              <span className="identifier">genre:</span>
            </div>
            <div className="col-8 col-md-9 col-lg-9">
              {citation.genr.map((genr, j) => {
                return (
                  <div className="row" key={j}>
                    <div className="col">
                      <span className="identifier-value">
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            genr.__text +
                            " " +
                            genr._authority +
                            "&f=GE"
                          }
                        >
                          {genr.__text + " ( " + genr._authority + " ) "}
                        </a>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {citation.subject ? (
          <div className="row mt-2">
            <div className="text-right col-4 col-md-3 col-lg-3">
              <span className="identifier">Spatial Coverage:</span>
            </div>

            <div className="col-8 col-md-9 col-lg-9">
              {citation.subject.map((subject, j) => {
                return subject.subhigeo ? (
                  <div className="row" key={j}>
                    <div className="col">
                      <span className="identifier-value">
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            subject.subhigeo._country +
                            "&f=CO"
                          }
                        >
                          {subject.subhigeo._country}
                        </a>{" "}
                        --{" "}
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            subject.subhigeo._state +
                            "&f=ST"
                          }
                        >
                          {subject.subhigeo._state}
                        </a>{" "}
                        --{" "}
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            subject.subhigeo._city +
                            "&f=CI"
                          }
                        >
                          {subject.subhigeo._city}
                        </a>
                      </span>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          </div>
        ) : null}

        {citation.target ? (
          <div className="row mt-2">
            <div className="text-right col-4 col-md-3 col-lg-3">
              <span className="identifier">target audience:</span>
            </div>
            <div className="col-8 col-md-9 col-lg-9">
              <span className="identifier-value">
                {citation.target.__text +
                  " ( " +
                  citation.target._authority +
                  " ) "}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    );
  });
}

export default Subjects;
