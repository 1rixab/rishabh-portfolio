import Sectionbuttons from "../usableCom/Sectionsbuttons";

const Itberries = () => {
  return (
    <>
      <div
        className="bg-[#0f0e0e] sm:bg-[length:25vw_50vh] sm:h-[35vh] sm:bg-right sm:items-start flex flex-col sm:pl-40 sm:pr-30 pl-[12vw] sm:pt-7 pr-[12vw] py-[4vh] justify-between items-center h-[45vh] w-full bg-[length:75vw_40vh] bg-top bg-no-repeat"
        style={{ backgroundImage: `url('/Images/Itberries.png')` }}
      >
        <h3 className="text-white text-[1.5em] font-semibold font-mono">
          Self-taught Developer
        </h3>
        <p className="text-white text-[.9em] text-justify sm:pr-25">
          Aspiring <span className="font-bold">MERN stack developer</span> with
          strong self-taught expertise gained through{" "}
          <span className="font-bold">
            internet resources, Udemy, and AI tools
          </span>
          . Passionate about continuous learning,
          <span className="font-bold"> problem-solving</span>, and creating
          efficient, user-friendly web applications that make an impact.
        </p>
        <Sectionbuttons
          color="white"
          width="30vw"
          title="MORE"
          className="w-[30vw]"
        />
      </div>
    </>
  );
};

export default Itberries;
