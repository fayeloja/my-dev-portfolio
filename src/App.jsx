import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyExperience from "./components/MyExperience";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <MyExperience />
      <Footer />
    </>
  );
}

export default App;
