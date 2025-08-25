import Navigation from "../Navbar/nav";
import heroimage from "../Images/hero.png";
import Hero2 from "./hero2";

const MainHero = () => {
  return (
    <>
      <div className="relative bg-black w-full min-h-screen flex flex-col flex-grow items-center">
        <div className="w-full">
          <Navigation />
        </div>
        <div className="flex-grow flex items-end justify-center">
          <img
            className="h-[82vh] w-full object-cover mt-[3vh] block"
            src={heroimage}
            alt="heroimage"
          />

          <Hero2 className="absolute bottom-0 w-full text-white bg-black/70 [clip-path:polygon(0_30%,100%_0,100%_100%,0_100%)]" />
        </div>
      </div>
    </>
  );
};

export default MainHero;
