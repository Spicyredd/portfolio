import React from "react";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div id="footer">
      <div class="sub-footer">
        <img src="/Logo.png" alt="logo" id="footer-logo"></img>
        <div class="in-footer">
          <a href="/#about">About Me</a>
          <a href="/#contact">Contact</a>
          <a href="/#skills">Skills</a>
          <a href="/#project">Project</a>
        </div>
        <div id="footer_social_media_div">
          <a href="https://www.instagram.com/hrishav_beejukchhen/">
            <img
              src="/social_media_images/instagram.svg"
              alt="instagram"
              id="instagram"
              class="social_media_images"
              href="https://www.instagram.com/hrishav_beejukchhen/"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/rishavbeejukchhen/">
            <img
              src="/social_media_images/linkedin.svg"
              alt="linkedin"
              id="linkedin"
              class="social_media_images"
            ></img>
          </a>
        </div>
      </div>
      <div class="footer-line"></div>
      <p>Copyright© Rishav Beejukchhen</p>
    </div>
  );
};

export default Footer;
