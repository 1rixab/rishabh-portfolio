import { FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 w-full">
      {/* Back to Top */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <a
          href="#top"
          className="flex flex-col items-center space-y-1 hover:opacity-80 transition"
        >
          <span className="text-xl font-bold">⌃</span>
          <span className="text-xs tracking-widest uppercase font-semibold">
            Back to Top
          </span>
        </a>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="#"
            className="p-0.5 border-2 border-white rounded hover:bg-white hover:text-black transition"
          >
            <FaPhone size={25} />
          </a>
          <a href="#" className="hover:bg-white hover:text-black transition">
            <FaWhatsapp className="font-bold" size={35} />
          </a>
          <a href="#" className=" hover:bg-white hover:text-black transition">
            <FaInstagram size={35} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-l my-6 text-center">
          ©2025 <span className="font-bold">Rishabh Yadav</span> All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
