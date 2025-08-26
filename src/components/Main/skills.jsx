import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaLanguage,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiVercel,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiOpenai,
} from "react-icons/si";
import Sectionheader from "../usableCom/SectionHeader";

export default function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-16 h-16" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 w-16 h-16" /> },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-yellow-400 w-16 h-16" />,
    },
    { name: "React", icon: <FaReact className="text-cyan-400 w-16 h-16" /> },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-sky-400 w-16 h-16" />,
    },
    { name: "GitHub", icon: <FaGithub className="text-gray-800 w-16 h-16" /> },
    { name: "Vercel", icon: <SiVercel className="text-black w-16 h-16" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 w-16 h-16" /> },
    { name: "AI", icon: <SiOpenai className="text-black w-16 h-16" /> },
  ];

  const learning = [
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500 w-16 h-16" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-700 w-16 h-16" />,
    },
    { name: "Next.js", icon: <SiNextdotjs className="text-black w-16 h-16" /> },
    {
      name: "TypeScript",
      icon: <SiTypescript className="text-blue-600 w-16 h-16" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 w-16 h-16" />,
    },
  ];

  const otherskills = [
    {
      name: "English (Upper Intermediate)",
      icon: <FaLanguage className="text-purple-600 w-16 h-16" />,
    },
    {
      name: "Excel",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732220.png"
          alt="Excel"
          className="w-16 h-16"
        />
      ),
    },
  ];

  return (
    <section className="w-full py-12 bg-gradient-to-b from-gray-200 via-gray-100 to-gray-200">
      {/* Title */}
      <div className="text-center mb-10">
        <Sectionheader title="SKILLS" className="mb-[3rem]" />
        <h2 className="text-3xl font-bold font-mono tracking-wide">
          USING NOW:
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2"
          >
            {skill.icon}
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      {/* LEARNING Section */}
      <div className="text-center mb-10 mt-[6vh]">
        <h2 className="text-3xl font-bold font-mono tracking-wide">
          LEARNING:
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {learning.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 transition-transform hover:scale-110 duration-300"
          >
            {skill.icon}
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* other skills Section */}
      <div className="text-center mb-10 mt-[6vh]">
        <h2 className="text-3xl font-bold font-mono tracking-wide">
          OTHER SKILLS:
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {otherskills.map((oskill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-2 transition-transform hover:scale-110 duration-300"
          >
            {oskill.icon}
            <p className="text-lg font-medium">{oskill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
