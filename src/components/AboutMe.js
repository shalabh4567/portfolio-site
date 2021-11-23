import React from "react";
import aboutMeImage from "../images/aboutMeImage.png";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeDiv">
        <div className="aboutMeImage">
          <img src={aboutMeImage} alt="about Me" />
        </div>
        <div className="aboutMeWriting">
          <h2>
            About <span>Me</span>
          </h2>
          <h4>
            Eagerness to learn something new pulls me towards technology, the
            way technology enhance the efficiency and solves complex problems
            pushed me pursue Engineering. I am a quick learner, exploring new
            things while holding the base and I like to do web development.
            {/* Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. */}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
