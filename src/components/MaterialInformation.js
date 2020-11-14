import React, { useState, useEffect } from "react";
import { getCitation } from "../api/citationApi";
import ItemInformation from "./ItemInformation";

function MaterialInformation() {
  const [citation, setCitation] = useState([]);

  useEffect(() => {
    getCitation().then((_citation) => setCitation(_citation));
  }, []);

  function createImageUrl(str1, str2, str3) {
    let pos = 2;
    for (let i = 0; i < 5; i++) {
      str1 = str1.slice(0, pos) + "/" + str1.slice(pos);
      pos = pos + 3;
    }
    str3 = str3.replace("thm", "");
    const newString =
      "https://ufdcimages.uflib.ufl.edu/" + str1 + str2 + "/" + str3;

    return newString;
  }

  console.log("This is the citation object:" + citation);
  //console.log(this.state.citation[1]);
  //console.log(this.state.citation[0].permanentLink.item);
  return citation.map((citation, i) => {
    return (
      <div className="citation-module" key={i}>
        <div className="row">
          <div className="col-md-12  text-center">
            <p className="heading">material information</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-8 col-md-6 col-sm-12 col-xs-12">
            {citation._bib && citation._vid ? (
              <div className="row mb-1">
                <div className=" text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <span className="identifier">Permanent Link: </span>
                </div>
                <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                  <span className="identifier-value">
                    <a
                      href={
                        "http://ufdc.ufl.edu/" +
                        citation._bib +
                        "/" +
                        citation._vid
                      }
                    >
                      {"http://ufdc.ufl.edu/" +
                        citation._bib +
                        "/" +
                        citation._vid}
                    </a>
                  </span>
                </div>
              </div>
            ) : null}

            {citation.title
              ? citation.title.map((title, j) => {
                  return (
                    <div className="row mb-1" key={j}>
                      <div className="text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        {title._type === "None" ? (
                          <span className="identifier">title:</span>
                        ) : (
                          <span className="identifier">
                            {title._type + " title:"}
                          </span>
                        )}
                      </div>
                      <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <span className="identifier-value">{title._name}</span>
                      </div>
                    </div>
                  );
                })
              : null}
            {citation.related
              ? citation.related.map((related, j) => {
                  return (
                    <div className="row mb-1" key={j}>
                      <div className="text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                        {related._type && related._type === "series" ? (
                          <span className="identifier">
                            {related._type + " title:"}
                          </span>
                        ) : null}
                      </div>
                      <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                        <span className="identifier-value">
                          <a
                            href={
                              "https://ufdc.ufl.edu/contains/?t=" +
                              related.reltitle +
                              "&f=TI"
                            }
                          >
                            {related.reltitle}
                          </a>
                        </span>
                      </div>
                    </div>
                  );
                })
              : null}

            {citation.modsname ? (
              <div className="row mb-1">
                <div className="text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier">creator:</span>
                </div>
                <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier-value">
                    <a
                      href={
                        "https://ufdc.ufl.edu/contains/?t=" +
                        citation.modsname.namepart.substring(
                          0,
                          citation.modsname.namepart.indexOf(".")
                        ) +
                        "&f=AU"
                      }
                    >
                      {citation.modsname.namepart}{" "}
                    </a>
                  </span>
                  {citation.modsname.roleterm
                    ? citation.modsname.roleterm.map((roleterm, k) => {
                        return roleterm._type === "text" ? (
                          <span key={k}>{"(" + roleterm.__text + ")"}</span>
                        ) : null;
                      })
                    : null}
                </div>
              </div>
            ) : null}

            {citation.issuedate ? (
              <div className="row mb-1">
                <div className="text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier">publication date:</span>
                </div>
                <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier-value">{citation.issuedate}</span>
                </div>
              </div>
            ) : null}

            {citation.publisher ? (
              <div className="row mb-1">
                <div className="text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier">publisher:</span>
                </div>
                <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier-value">
                    <a
                      href={
                        "https://ufdc.ufl.edu/contains/?t=" +
                        citation.publisher +
                        "&f=PU"
                      }
                    >
                      {citation.publisher}
                    </a>
                  </span>
                </div>
              </div>
            ) : null}

            {citation.lang ? (
              <div className="row mb-1">
                <div className="text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier">Language:</span>
                </div>
                <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  {citation.lang.map((lang, j) => {
                    return lang._type === "text" ? (
                      <span className="identifier-value" key={j}>
                        <a
                          href={
                            "https://ufdc.ufl.edu/contains/?t=" +
                            lang.__text +
                            "&f=LA"
                          }
                        >
                          {lang.__text}
                        </a>
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            ) : null}

            {citation._physical_description ? (
              <div className="row mb-1">
                <div className="text-right col-6 col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier">physical description:</span>
                </div>
                <div className="col-6 col-xl-7 col-lg-6 col-md-6 col-sm-6 col-sm-6">
                  <span className="identifier-value">
                    {citation._physical_description}
                  </span>
                </div>
              </div>
            ) : null}
          </div>
          <div className="col-xl-5 col-lg-4 col-md-5 col-sm-12 col-xs-12 custom-mt-30 text-center">
            <a
              href={
                "http://ufdc.ufl.edu/" + citation._bib + "/" + citation._vid
              }
            >
              <img
                src={createImageUrl(
                  citation._bib,
                  citation._vid,
                  citation._thumbnail
                )}
                className="img-fluid rounded citation-with-gray-scale-on-hover"
                alt="Thumbnail"
              />
            </a>
            <p className="identifier">
              Permanent Link:{" "}
              <span className="identifier-value">
                <a
                  href={
                    "http://ufdc.ufl.edu/" + citation._bib + "/" + citation._vid
                  }
                >
                  {"http://ufdc.ufl.edu/" + citation._bib + "/" + citation._vid}
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  });
}
export default MaterialInformation;
