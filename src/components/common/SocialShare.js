import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
/*import {
  FacebookShareCount,
  OKShareCount,
  PinterestShareCount,
  RedditShareCount,
  TumblrShareCount,
  VKShareCount,
} from "react-share";*/
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

function SocialShare() {
  //console.log("Book Details Object: " + details);
  function getURL(shareUrl) {
    shareUrl = window.location.href;
    console.log("Share URL: " + shareUrl);
    shareUrl = "https://ufdc.ufl.edu/UF00078891/00001/pdf";
    return shareUrl;
  }

  return (
    <div className="row mb-5 mt-5 text-center">
      <div className="col">
        <div className="share-button-popup">
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
      </div>
    </div>
  );
}

export default SocialShare;
