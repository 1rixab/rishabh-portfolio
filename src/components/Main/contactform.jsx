import Sectionbuttons from "../usableCom/Sectionsbuttons";

const Contactform = () => {
  return (
    <section className="flex w-full md:w-full items-center justify-center py-[7vh] px-[15%] bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200">
      <form className="w-full md:w-[40vw] max-w-2xl space-y-10">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="ENTER YOUR NAME*"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL*"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            placeholder="PHONE NUMBER"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="YOUR MESSAGE*"
            rows="6"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="w-full flex justify-center">
          <Sectionbuttons
            title="SUBMIT"
            color="black"
            className="w-[35vw] py-[.6em] font-bold"
          />
        </div>
      </form>
    </section>
  );
};

export default Contactform;
