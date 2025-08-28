import herovideo from "../Videos/herovideo.mp4";
import Hero3 from "./hero3";
import { useEffect, useRef } from "react";
import ListOverley from "./Listoverley";


const MainHero = () => {
  return (
    <>
      <section className="relative h-[91vh] w-full">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src={herovideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center h-full text-center text-white">
          <p className="text-[1.7rem] text-white md:text-xl max-w-2xl font-sans drop-shadow-md">
            My name is Rishabh
          </p>
          <h1 className="text-[2.5rem] md:text-6xl font-semibold drop-shadow-lg">
            I'M A DEVELOPER
          </h1>
          <div className="flex items-center w-full justify-center pt-[1vh] pb-[1vh] pl-[25%] pr-[25%]">
            <span className="flex-grow border-[0.1rem] mx-2"></span>
            <span className="text-xl">&#10094;&#10094;&#10095;&#10095;</span>
            <span className="flex-grow border-[0.1rem] mx-2"></span>
          </div>
          <div className="w-full flex justify-center pl-3">
            <Hero3 />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainHero;
