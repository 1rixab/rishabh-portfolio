import { FaPencilRuler, FaCode, FaTools } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "DESIGN",
      description:
        "I can design the website based on your needs and suggestions. I can also create it from scratch by consulting with you during work.",
      icon: <FaPencilRuler size={40} className="text-gray-400" />,
    },
    {
      title: "DEVELOPMENT",
      description:
        "Based on a project created by me or another one sent by you, I can program the website to be fully functional and responsive.",
      icon: <FaCode size={40} className="text-gray-400" />,
    },
    {
      title: "MAINTENANCE",
      description:
        "In case of any problems or the need for changes, I can introduce new functionalities and solutions.",
      icon: <FaTools size={40} className="text-gray-400" />,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-[12vw] grid gap-12 md:gap-16 text-[.8em]/5 text-justify font-normal">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-start gap-6"
          >
            <div className="my-[1vh]">
              <div className="flex">
                <div className="opacity-35">{service.icon}</div>
                <h3 className="text-2xl font-bold font-mono tracking-wide">
                  {service.title}
                </h3>
              </div>
              <p className="text-black mt-2 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
