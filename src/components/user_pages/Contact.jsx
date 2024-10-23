import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <div id="contact" class="home-div">
      <div class="contact-sub-div">
        <div class="sub-contact-1">
          <h2>Hire Me For Your Project</h2>
          <p>Contact me in any covenient way to discuss the details.</p>
          <div class="line"></div>
        </div>
        <div class="sub-contact">
          <div class="sub-contact-2">
            <div>
              <img src="/contact_images/phone.png" alt="email"></img>
              <h3>WRITE ME</h3>
            </div>
            <p>rbeeju20@gmail.com</p>
          </div>
          <div class="sub-contact-2">
            <div>
              <img src="/contact_images/mail.png" alt="phone"></img>
              <h3>CALL ME</h3>
            </div>
            <p>+977 9810980487</p>
          </div>
          <div>
            <div class="sub-contact-2">
              <div>
              <img src="/contact_images/linkedin.png" alt="linkedin"></img>
              <h3>FIND ME</h3>
              </div>
            <p>linkedin.com/in/rishavbeejukchhen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
