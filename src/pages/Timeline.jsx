import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "./data/data";

import { motion } from "framer-motion";
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1f2940",
      }}
      className="text-white lg:text-black transition-transform duration-300 hover:scale-105 "
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-thin font-primary">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-medium text-white"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2 font-third font-semibold text-white">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
export const Timeline = () => {
  return (
    <div
      id="Timeline"
      className="relative w-full mb-10"
      style={{
        backgroundColor: "#f2f0ea",
        backgroundImage:
          "radial-gradient(circle, #00FFFF 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 h-[80px] bg-cover bg-center bg-[url('/images/Razor-0.png')]"></div>
        <h1 className="font-secondary text-lg align-left relative absolute top-[-1px] ml-2 hidden lg:block font-code text-white">
          {" "}
          <span className="text-[#8976c8]">import</span>
          <span className="text-[#187ab9]">(</span>'./module.jsx'
          <span className="text-[#187ab9]">)</span>.then
          <span className="text-[#187ab9]">(</span>mod{" "}
          <span className="text-[#b2b35b]">={">"}</span>
          mod.default<span className="text-[#ffb312]">()</span>
          <span className="text-[#187ab9]">)</span>;{" "}
        </h1>
        <p className="font-code fg-white text-lg align-left relative absolute bottom-0 ml-2 hidden lg:block">
          Loading...{" "}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 5 }}
        transition={{
          duration: 0.5,
          ease: [0.42, 0, 0.58, 1],
          delay: 0.1,
        }}
      >
        <h3 className="font-primary text-gray-600 text-3xl text-center mb-[-30px] mt-20 lg:mt-5 ">
          What I Have Done
        </h3>
        <h1 className="font-primary text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0f1923] mb-10 sm:mb-10 text-center">
          TIMELINE.
        </h1>
      </motion.div>
      <VerticalTimeline lineColor="#333">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};
