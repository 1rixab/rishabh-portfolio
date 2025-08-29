import Sectionheader from "../usableCom/SectionHeader";
import Sectionbuttons from "../usableCom/Sectionsbuttons";

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-gray-200 sm:px-40 via-gray-100 to-gray-200 w-full h-[40vh] px-[12vw] py-[5vh] flex flex-col justify-between items-center">
        <Sectionheader title="ABOUT ME" />
        <p className="text-[.8em]/5 text-justify font-normal ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          itaque est ipsam, temporibus ad tempore mollitia veniam. Obcaecati
          eaque excepturi nobis, assumenda fuga <br></br>
          <br></br>Lorem Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Perspiciatis itaque est ipsam, temporibus ad tempore mollitia
          veniam. 
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
