import Sectionheader from "../usableCom/SectionHeader";

const Contact = () => {
  return (
    <section className="w-full sm:px-40 px-12 flex flex-col items-center bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200">
      <Sectionheader title="CONTACT" className="mt-[5vh]" />
      <p className="text-black text-center font-light text-[1.1em] py-[4vh] ">
        For any opportunities or collaborations, please fill out the form below
        and I’ll get back to you as soon as possible.
      </p>
    </section>
  );
};

export default Contact;
