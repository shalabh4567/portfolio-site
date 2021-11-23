import React from "react";
import electronics from "../images/electronics.jpeg";
import webDev from "../images/webDev.jpeg";
import tools from "../images/tools.jpeg";

const Skills = () => {
  return (
    <div className="skillsMain">
      <div className="SkillsImage" style={{ padding: 0, margin: 0 }}>
        {/* <div className="skillsTag">
          <span>Skills</span>
        </div> */}
        <div className="webDev">
          <img src={webDev} alt="webDev"/>
          <span className="webDevHeading">Web Development</span>
          <div className="webDevInner">
            <span>HTML | CSS</span>
            <span>Bootstrap | JavaScript </span>
            <span>ReactJs</span>
          </div>
        </div>
        <div className="electronics">
          <img src={electronics} alt="electronics" />
          <span className="electronicsHeading">Electronics</span>
          <div className="electronicsInner">
            <span>Arduino | ESP32</span>
            <span>PCB Designing</span>
          </div>
        </div>
        <div className="tools">
          <img src={tools} alt="tools" />
          <span className="toolsHeading">Tools</span>
          <div className="toolsInner">
            <span>Git | Arduino IDE</span>
            <span>VS Code | Figma</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
