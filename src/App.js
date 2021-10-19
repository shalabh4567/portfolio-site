import NavBar from "./components/NavBar";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import "./App.css";

function App() {
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
