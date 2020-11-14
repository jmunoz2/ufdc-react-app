import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";

function SocialShareFloating() {
  function getURL(shareUrl) {
    shareUrl = window.location.href;
    console.log("Share URL: " + shareUrl);
    shareUrl = "https://ufdc.ufl.edu/UF00078891/00001/pdf";
    return shareUrl;
  }

  return (
    <div className="social-share-floating">
      <FacebookShareButton url={getURL()}>
        <FacebookIcon size={25} round={true} margin={3} />
      </FacebookShareButton>
      <LinkedinShareButton url={getURL()}>
        <LinkedinIcon size={25} round={true} margin={3} />
      </LinkedinShareButton>
      <TwitterShareButton url={getURL()}>
        <TwitterIcon size={25} round={true} margin={3} />
      </TwitterShareButton>
      <EmailShareButton url={getURL()}>
        <EmailIcon size={25} round={true} margin={3} />
      </EmailShareButton>
    </div>
  );
}

export default SocialShareFloating;
