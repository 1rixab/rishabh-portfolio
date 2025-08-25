import About from "./components/Main/about";
import MainHero from "./components/Main/mainhero";
import "./App.css";
import Itberries from "./components/Main/Itberries";
import Wavydesign from "./components/Main/Wavydesign";
import ServicesSection from "./components/Main/DDM";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <MainHero />
      <Itberries />
      <About />
      <Wavydesign />
      <ServicesSection />
      <Wavydesign />
    </div>
  );
};

export default App;
