import React from "react";

function Header() {
  return (
    <nav
      className="navbar navbar-light"
      style={{
        backgroundColor: "#e3f2fd",
        padding: 30,
      }}
    >
      <form className="form-inline">
        <a
          className="btn btn-outline-success"
          type="button"
          href="/"
          style={{
            margin: 10,
          }}
        >
          Home
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/collections"
          style={{
            margin: 10,
          }}
        >
          Collections
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/citation"
          style={{
            margin: 10,
          }}
        >
          Citation
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/citation-2"
          style={{
            margin: 10,
          }}
        >
          Citation 2
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/three-little-kittens"
          style={{
            margin: 10,
          }}
        >
          Three Little Kittens
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/three-little-kittens-row-column"
          style={{
            margin: 10,
          }}
        >
          Three Little Kittens Row-Column
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/three-little-kittens-row-col-new"
          style={{
            margin: 10,
          }}
        >
          Three Little Kittens Row-Col New
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/result"
          style={{
            margin: 10,
          }}
        >
          Search Result
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/flipbook"
          style={{
            margin: 10,
          }}
        >
          Flipbook
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/dtailslazyload"
          style={{
            margin: 10,
          }}
        >
          Details Lazy-Load
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/detailsusinghooks"
          style={{
            margin: 10,
          }}
        >
          Details Using Hooks
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/resultswithtooltip"
          style={{
            margin: 10,
          }}
        >
          Results With Tooltip
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/googlemappage"
          style={{
            margin: 10,
          }}
        >
          Google Map Page
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/generatepdf"
          style={{
            margin: 10,
          }}
        >
          Generate PDF
        </a>
        <a
          className="btn btn-outline-success"
          type="button"
          href="/about"
          style={{
            margin: 10,
          }}
        >
          About
        </a>
      </form>
    </nav>
  );
}

export default Header;
