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
            <a
              href="https://www.linkedin.com/in/shalabh-pandey4567/"
              target="_blank" rel="noreferrer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div className="gitHub-logo">
            <a href="https://github.com/shalabh4567/" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
          <div className="instagram-logo">
            <a href="https://www.instagram.com/shalabh4567/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
