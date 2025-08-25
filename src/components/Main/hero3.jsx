import mailimage from "../Images/mailimage.png";
import Githubimage from "../Images/githubimage.png";
import LinkedInimage from "../Images/linkedinimage.png";

const Hero3 = () => {
  return (
    <>
      <div className="w-[100vw] h-[22vh] pb-[2vh] flex">
        <div className="h-full w-[75%] flex flex-col justify-end pb-[2vh] items-start pl-[9vw]">
          <p className="text-white text-[1.1rem]/7 pb-0 mb-0">Hi, I am</p>
          <p className="text-white text-[2rem]/7 pt-0 mt-0 font-sans-saref font-semibold">
            Rishabh Yadav
          </p>
          <h6 className="text-white text-[.7rem]/7 font-semibold">
            React Developer/ MERN Developer
          </h6>
        </div>
        <div className="h-auto w-[24%] flex flex-col justify-evenly pt-[1vh] items-center">
          <a href="mailto:rashiyadav1505@gmail.com" className="cursor-pointer">
            <img className='w-[80%] h-auto' src={mailimage} alt="EMail" />
          </a>

          <a href="https://github.com/1rixab" className="cursor-pointer">
            <img className='w-[80%] h-auto' src={Githubimage} alt="GitHub Profile" />
          </a>
          <a
            href="https://www.linkedin.com/in/rishabh-yadav-455963261/"
            className="cursor-pointer"
          >
            <img className='w-[80%] h-auto' src={LinkedInimage} alt="LinkedIn Profile" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero3;
