import React from "react";

function DetailsThumnailsGrid(props) {
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

  function Image(props) {
    return (
      <img
        src={props.src}
        alt={props.alt}
        className={props.className}
        width={props.width}
      />
    );
  }

  return props.details.map((details, i) => {
    return (
      <div id="block-by-syze" className="row" key={i}>
        {details.imageSrcUrl.map((s, j) => (
          <div
            className="col-xs-12 col-sm-6 col-md-3 col-lg-2 col-xl-2 text-center //thumbnail-element"
            key={j}
          >
            <figure id={j.toString()} className="figure">
              <Image
                className={
                  "figure-img img-fluid rounded gray-scale-on-hover img-thumbnail"
                }
                src={createImageUrl(details.UFID, s.src)}
                alt={details.title + "image for " + s.title}
              />

              <figcaption className="figure-caption">
                <p className="shortCaption">{s.title}</p>
              </figcaption>
            </figure>
            {console.log(s)}
          </div>
        ))}
      </div>
    );
  });
}

export default DetailsThumnailsGrid;
