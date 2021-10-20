import React from "react";
import ShalabhLogo from "../images/ShalabhLogo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const navBar = () => {
  return (
    <nav>
      <div className="pageLogo">
        <img src={ShalabhLogo} alt="Shalabh Logo" />
      </div>

      <div className="navItems">
        <Link
          activeClass="active"
          to="aboutMe"
          spy={true}
          smooth={true}
          // offset={-70}
          duration={500}
        >
          <h3>About</h3>
        </Link>
        <Link
          activeClass="active"
          to="skillsMain"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h3>Skills</h3>
        </Link>
        <Link
          activeClass="active"
          to="contact-me"
          spy={true}
          smooth={true}
          // offset={-70}
          duration={500}
        >
          <h3>Contact</h3>
        </Link>
      </div>
    </nav>
  );
};

export default navBar;
