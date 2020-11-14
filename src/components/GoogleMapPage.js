import React, { Component, useState, useEffect } from "react";
import { getDetails } from "../api/detailsApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import mapStyles from "./mapStyles";
import MobileNav from "./common/MobileNav";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
  Polygon,
} from "react-google-maps";
import Container from "react-bootstrap/Container";
import Iframe from "react-iframe";

//const GoogleApi = process.env.REACT_APP_GOOGLE_KEY;

const GoogleApi = "AIzaSyByjN4e1--TVyjGL4pe6oA-Qi0GFokuhO4";

console.log("GoogleApi: " + GoogleApi);

function GoogleMapPage() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getDetails().then((_details) => setDetails(_details));
  }, []);

  function Map(x, y) {
    details.map((details, i) => {
      x =
        (details.mapCoordinates.x[0].lat +
          details.mapCoordinates.x[1].lat +
          details.mapCoordinates.x[2].lat +
          details.mapCoordinates.x[3].lat) /
        4;
      y =
        (details.mapCoordinates.x[0].lng +
          details.mapCoordinates.x[1].lng +
          details.mapCoordinates.x[2].lng +
          details.mapCoordinates.x[3].lng) /
        4;
      console.log("lat: " + x);
      console.log("long: " + y);
      console.log("Details is of type " + typeof details);
      console.log(details);
      console.log("This is the titlte: " + details.title);
    });
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: x, lng: y }}
        defaultOptions={{ styles: mapStyles }}
      >
        <Marker
          position={{ lat: x, lng: y }}
          onClick={() => {
            setDetails(details);
          }}
        />
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div className="container-fluid">
      <SubheaderSearchSection />
      <div className="main-container">
        <MobileNav />
        <div className="row">
          <div className="col">
            <div className="map-wrapper">
              <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GoogleApi}`}
                loadingElement={<div style={{ height: "100%" }} />}
                containerElement={<div style={{ height: "100%" }} />}
                mapElement={<div style={{ height: "80%" }} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoogleMapPage;
