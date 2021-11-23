import React from "react";
import { useState, useEffect, useRef } from "react";
import ShalabhFrontImage from "../images/ShalabhFrontImage.png";
import PDF from "../images/Shalabh_Resume.pdf";

const Typewriter = () => {
  const text = ["Web Developer", "Engineer", "Fast Learner"];

  const [currentText, setCurrentText] = useState("");

  const index = useRef(0);
  const textIndex = useRef(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentText(
        (val) => val + text[textIndex.current].charAt(index.current)
      );
      index.current += 1;
      if (index.current === text[textIndex.current].length + 1) {
        index.current = 0;
        textIndex.current += 1;
        setCurrentText("");
      }
      if (textIndex.current === text.length) {
        textIndex.current = 0;
      }
    }, 200);
  }, [currentText]);

  return <h4>{currentText}</h4>;
};

const About = () => {
  return (
    <div className="adoutUs">
      <div className="aboutShalabh">
        <h2>
          I'm <span>Shalabh</span>
        </h2>
        <Typewriter />
        <div className="resumeButton">
          <a href={PDF} target="_blank" rel="noreferrer" >
            <span className="downloadCV">Download CV</span>
          </a>
        </div>
      </div>
      <div className="aboutImage">
        <img src={ShalabhFrontImage} alt="Shalabh Front" />
      </div>
    </div>
  );
};

export default About;
