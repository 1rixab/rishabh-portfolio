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
      {!Lvisible && <ListOverley className="fixed top-[9vh] sm:left-[78%]" />}
      <Navigation
        className="fixed"
        trigeropenfunc={listopenhandler}
        trigerclosefunc={listclosehandler}
      />

      <MainHero />

      <Itberries />
      <About />
      <Wavydesign />
      <ServicesSection />
      <Wavydesign />
      <Skills />

      <Contact />
      <Wavydesign />
      <Contactform />
      <Footer />
    </div>
  );
};

export default App;
