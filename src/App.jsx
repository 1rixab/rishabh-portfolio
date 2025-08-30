import About from "./components/Main/about";
import MainHero from "./components/Main/mainhero";
import "./App.css";
import Itberries from "./components/Main/Itberries";
import Wavydesign from "./components/usableCom/Wavydesign";
import ServicesSection from "./components/Main/DDM";
import Skills from "./components/Main/skills";
import Contact from "./components/Main/contact";
import Contactform from "./components/Main/contactform";
import Footer from "./components/Footer/footer";
import Navigation from "./components/Navbar/nav";
import ListOverley from "./components/Main/Listoverley";
import { useState } from "react";
import { Element } from "react-scroll";

const App = () => {
  let [Lvisible, setLvisible] = useState(true);
  const listopenhandler = () => {
    setLvisible(!Lvisible);
  };
  const listclosehandler = () => {
    setLvisible((Lvisible = true));
  };

  return (
    <div className="flex flex-col items-center w-full relative">
      {!Lvisible && (
        <ListOverley
          className="fixed top-[9vh] sm:left-[78%]"
          linkOChandler={listclosehandler}
        />
      )}
      <Navigation
        className="fixed"
        trigeropenfunc={listopenhandler}
        trigerclosefunc={listclosehandler}
        Lvisible={Lvisible}
      />
      <Element name="home" className="w-full">
        <MainHero />
      </Element>
      <Itberries />
      <Element name="about">
        <About />
      </Element>
      <Wavydesign />
      <ServicesSection />
      <Wavydesign />
      <Element name="skills" className="w-full">
        <Skills />
      </Element>
      <Element name="contact" className="w-full">
        <Contact />
        <Wavydesign />
        <Contactform />
        <Footer />
      </Element>
    </div>
  );
};

export default App;
