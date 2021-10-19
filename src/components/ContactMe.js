import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="contactMeHeading">
        <h2>Contacts</h2>
      </div>
      <div className="contactMeDetails">
        <div className="emailDetails">
          <h5>Email-</h5>
          <h6>shalabhpandeyjsr13@gmail.com</h6>
        </div>
        <div className="phoneDetails">
          <h5>Phone-</h5>
          <h6>+91 7061732100</h6>
        </div>
      </div>
      <div className="social-Links">
        <div className="social-design">
          <div className="linkedin-logo">
            <i className="fa fa-linkedin"></i>
          </div>
          <div className="gitHub-logo">
            <i className="fa fa-github"></i>
          </div>
          <div className="instagram-logo">
            <i className="fa fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
