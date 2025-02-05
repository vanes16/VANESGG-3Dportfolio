import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import "./style/style.css";

// Define the fadeIn animation variant
const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    className="w-full sm:w-[48%] md:w-[30%] lg:w-[23%]"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

export const About = () => {
  return (
    <div id="About" className="px-[60px] flex flex-col gap-10 py-10 w-[100%]">
      {/* Left Side: Text */}
      <div className="flex-1 text-left">
        <h3 className="font-primary text-gray-400 text-sm mb-2">
          Introduction
        </h3>
        <h1 className="font-primary text-4xl font-extrabold text-gray-800 mb-10">
          ABOUT.
        </h1>
      </div>

      {/* Right Side: Cards */}
      <div className="flex flex-wrap gap-5 w-[100%] ">
        <ServiceCard index={0} title="Web Development" icon="/icon.png" />
        <ServiceCard index={1} title="Mobile Development" icon="/icon.png" />
        <ServiceCard index={2} title="UI/UX Design" icon="/icon.png" />
      </div>
      <p className="text-xl text-gray-600 font-montserrat italic text-left">
        "Innovation is not just about technology; it's about making a
        difference."
      </p>
    </div>
  );
};
