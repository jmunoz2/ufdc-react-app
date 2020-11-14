import React, { Fragment } from "react";
import "./App.css";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import HamburgerMenu from "./common/HamburgerMenu";
import MainHeader from "./common/MainHeader";
import Footer from "./common/Footer";
import MobileNav from "./common/MobileNav";

import ScrollToTopBtn from "./common/ScrollToTop";
import ScrollToTopNav from "./common/ScrollToTopNav";
import CollectionsPage from "./CollectionsPage";
import CitationPage from "./CitationPage";
import CitationPage2 from "./CitationPage2";
import ThreeLittleKittensRowColNew from "./ThreeLittleKittensRowColNew";
import ResultPage from "./ResultPage";
import FlipBookPage from "./FlipBookPage";
import DtailsLazyLoad from "./DtailsLazyLoad";
import DetailsUsingHooks from "./DetailsUsingHooks";
import DiamondFlipBook from "./DiamondFlipBook";
import ResultsWithTooltip from "./ResultsWithTooltip";
import GoogleMapPage from "./GoogleMapPage";
import GeneratePdf from "./GeneratePdf";
import CitationBriefView from "./CitationBriefView";
import JQueryPage from "./JQueryPage";

import { Route, Switch, Redirect } from "react-router-dom";
import PartnersPage from "./PartnersPage";
import NotFoundPage from "./NotFoundPage";
import CollectionPage from "./CollectionPage";
import ManageCollectionPage from "./ManageCollectionPage";
import DetailedPartnerPage from "./DetailedPartnerPage";
import SearchPage from "./SearchPage";
import ZoomableImagePage from "./ZoomableImagePage";
import MapCollectionsPage from "./MapCollectionsPage";
import ChildrenLiteraturePage from "./ChildrenLiteraturePage";
import ThesesAndDissertationsPage from "./ThesesAndDissertationsPage";
import InfiniteScrollingPage from "./InfiniteScrollingPage";
import InfiniteScrollingHooks from "./InfiniteScrollingHooks";


import { ToastContainer } from "react-toastify"; //Importing the ToastContainer from react-toastify.
import "react-toastify/dist/ReactToastify.css"; //react-toastify is an open source React component available online to put notifications on pages.
//The props are documented at https://fkhadra.github.io/react-toastify/introduction/

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />{" "}
      {/*---The existence of a prop infers true---*/}
      <MainHeader />
      {/*<Header />*/}
      {/*<MobileNav /> */}
      {/*<HamburgerMenu />*/}
      {/*getPage()*/}
      <Fragment>
        <ScrollToTopNav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/infinite-scrolling-page" exact component={InfiniteScrollingPage} />
          <Route path="/infinite-scrolling-hooks" exact component={InfiniteScrollingHooks} />

          <Route path="/jquerypage" component={JQueryPage} />
          <Route path="/collections" component={CollectionsPage} />
          <Route path="/collection/:slug" component={ManageCollectionPage} />
          <Route path="/collection" component={ManageCollectionPage} />
          <Route path="/partners" component={PartnersPage} />
          <Route path="/partner/:slug" component={DetailedPartnerPage} />
          <Route path="/partner" component={DetailedPartnerPage} />
          <Route path="/partners" component={PartnersPage} />
          <Route path="/citation" component={CitationPage} />
          <Route
            path="/three-little-kittens-row-col-new"
            component={ThreeLittleKittensRowColNew}
          />
          <Route path="/about" component={AboutPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/flipbookpage" component={FlipBookPage} />
          <Route path="/dtailslazyload" component={DtailsLazyLoad} />
          <Route path="/diamondflipbook" component={DiamondFlipBook} />
          <Route path="/googlemappage" component={GoogleMapPage} />
          <Route path="/generatepdf" component={GeneratePdf} />
          <Route path="/resultswithtooltip" component={ResultsWithTooltip} />
          <Route path="/citationbriefview" component={CitationBriefView} />
          <Route path="/search" component={SearchPage} />
          <Route path="/detailsusinghooks" component={DetailsUsingHooks} />
          <Route path="/maps" component={MapCollectionsPage} />
          <Route
            path="/baldwin-children-literature"
            component={ChildrenLiteraturePage}
          />
          <Route
            path="/university-of-florida-theses-and-dissertations"
            component={ThesesAndDissertationsPage}
          />
          <Route path="/zoomable-image" component={ZoomableImagePage} />
          <Redirect from="/citation-2" to="/dtailslazyload" />
          <Route component={NotFoundPage} />
        </Switch>
      </Fragment>
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
}

export default App;
