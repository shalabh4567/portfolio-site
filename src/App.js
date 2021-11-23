import NavBar from "./components/NavBar";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import ReactGA from "react-ga";
import React, { useEffect } from "react";
import "./App.css";
import "./styles/NavBar.css";
import "./styles/About.css";
import "./styles/AboutMe.css";
import "./styles/Skills.css";
import "./styles/ContactMe.css";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA);
    ReactGA.pageview("/app");
  }, []);
  return (
    <div className="container">
      <NavBar />
      <About />
      <AboutMe />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
