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

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
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
