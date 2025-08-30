import Sectionbuttons from "../usableCom/Sectionsbuttons";
import { useState } from "react";

const Contactform = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxf50bq5T37zFWWlJJYFIY5AnnTTVwqQ3hrGiK6k69Q9YploKvkTUyq57TvF6soXET3XQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("✅ Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("❌ Error sending message.");
    }
  };
  return (
    <section className="flex w-full md:w-full items-center justify-center py-[7vh] px-[15%] bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200">
      <form
        className="w-full md:w-[40vw] max-w-2xl space-y-10"
        onSubmit={handleSubmit}
      >
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="ENTER YOUR NAME*"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ENTER YOUR EMAIL*"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
            required
          />
        </div>

        {/* Phone Number */}
        <div>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="PHONE NUMBER"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="YOUR MESSAGE*"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="6"
            className="w-full border-b-4 border-l-4 border-black bg-transparent px-2 py-2 text-[.8em] font-semibold tracking-wide placeholder-gray-500 focus:outline-none"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <div className="w-full flex justify-center">
          <Sectionbuttons
            title="SUBMIT"
            type="submit"
            color="black"
            className="w-[35vw] py-[.6em] font-bold"
          />
        </div>
      </form>
    </section>
  );
};

export default Contactform;
