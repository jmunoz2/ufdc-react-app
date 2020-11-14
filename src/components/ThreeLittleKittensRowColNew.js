import React from "react";
import { getCitation } from "../api/citationApi";
import SubheaderSearchSection from "./common/SubheaderSearchSection";
import ItemInformation from "./ItemInformation";
import MaterialInformation from "./MaterialInformation";
import Subjects from "./Subjects";
import Notes from "./Notes";
import MobileNav from "./common/MobileNav";
import SocialShare from "./common/SocialShare";
import SocialShareFloating from "./common/SocialShareFloating";

function ThreeLittleKittensRowColNew() {
  return (
    <div className="container-fluid">
      <SubheaderSearchSection />
      <div className="main-container">
        <MobileNav />

        <SocialShare />
        <div className="row">
          <div className="col-12">
            <MaterialInformation />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Subjects />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeLittleKittensRowColNew;
