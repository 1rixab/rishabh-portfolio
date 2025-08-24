import About from "./components/Main/about";
import MainHero from "./components/Main/mainhero";
import './App.css'
import Itberries from "./components/Main/Itberries";

const App = () => {
  return (
    <>
      <MainHero />
      <Itberries/>
      <About/>
    </>
  );
};

export default App;
