import Sectionheader from "../usableCom/SectionHeader";
import Wavydesign from "../usableCom/Wavydesign";

const Contact = () => {
  return (
    <section className="w-full px-12 flex flex-col items-center bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200">
      <Sectionheader title="CONTACT" className="mt-[5vh]" />
      <p className="text-black text-justify text-[1em]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        ducimus
      </p>
      <Wavydesign />
    </section>
  );
};

export default Contact;
