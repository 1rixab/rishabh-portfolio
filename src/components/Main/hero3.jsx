import mailimage from "../Images/mailimage.png";
import Githubimage from "../Images/githubimage.png";
import LinkedInimage from "../Images/linkedinimage.png";

const Hero3 = () => {
  return (
    <>
      <section className="mt-2 flex">
        <a href="mailto:rashiyadav1505@gmail.com" className="cursor-pointer">
          <img
            className="w-[80%] sm:w-[90%] h-auto"
            src={mailimage}
            alt="EMail"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/rishabh-yadav-455963261/"
          className="cursor-pointer pl-1"
        >
          <img
            className="w-[70%] sm:px-3 sm:w-[90%] h-auto"
            src={LinkedInimage}
            alt="LinkedIn Profile"
          />
        </a>

        <a href="https://github.com/1rixab" className="pr-2">
          <img
            className="w-[80%] sm:w-[90%] h-auto cursor-pointer"
            src={Githubimage}
            alt="GitHub Profile"
          />
        </a>
      </section>
    </>
  );
};

export default Hero3;
