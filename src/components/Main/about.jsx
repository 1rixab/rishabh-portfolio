import Sectionheader from "../usableCom/SectionHeader";
import Sectionbuttons from "../usableCom/Sectionsbuttons";

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-200 sm:px-40 via-gray-100 to-gray-200 w-full h-[65vh] sm:h-[55vh] px-[12vw] py-[3.5vh] flex flex-col justify-between items-center">
        <Sectionheader title="ABOUT ME" />
        <p className="text-[.8em]/5 text-justify font-normal ">
          I’m Rishabh Yadav, a third-year Computer Science student at IGNOU and
          an aspiring<span className="font-bold"> MERN stack developer</span>. A
          passionate <span className="font-bold">self-learner</span>, I have
          independently mastered front-end technologies and continue to expand
          my expertise in the full stack.
          <br></br>
          <br></br>My background includes experience in both
          <span className="font-bold"> international and domestic BPO</span>,
          which has strengthened my communication skills and adaptability. With
          <span className="font-bold">strong problem-solving abilities</span>,
          <span className="font-bold">
            {" "}
            upper-intermediate English proficiency
          </span>
          , and a drive for continuous growth, I am industry-ready and deeply
          passionate about technology and sports.
        </p>
        <Sectionbuttons
          title="EXPLORE"
          color="black"
          width="40vw"
          className="font-semibold h-[5vh] w-[40vw]"
        />
      </section>
    </>
  );
};

export default About;
