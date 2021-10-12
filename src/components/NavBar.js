import React from "react";
import ShalabhLogo from "../images/ShalabhLogo.png";

const navBar = () => {
  return (
    <nav>
      <div className="pageLogo">
        <img src={ShalabhLogo} alt="Shalabh Logo" />
      </div>

      <div className="navItems">
        <h3>About</h3>
        <h3>Skills</h3>
        <h3>Contact</h3>
      </div>
    </nav>
  );
};

export default navBar;
