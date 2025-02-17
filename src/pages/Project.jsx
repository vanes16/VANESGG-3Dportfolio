import "./style/eyes.css";
import Eyes from "./design/Eye";
import InfiniteSlide from "./design/infiniteSlide";
import Chatbot from "./design/Chatbot";
import { motion } from "framer-motion";

const Button = ({ label, isActive }) => (
  <button
    className={` font-secondary font-semibold text-xl px-5 py-1 lg:text-2xl ${
      isActive
        ? "bg-gradient-to-t from-transparent to-white/10"
        : "bg-transparent"
    } rounded-2xl`}
  >
    {label}
  </button>
);

export const Project = () => {
  return (
    <div className="relative flex flex-col items-center justify-center mt-5 z-0 border-b border-white border-opacity-20 ">
      {/* Content */}
      <div className="bg-transparent p-2 flex flex-wrap justify-center lg:justify-around text-white mb-10 w-full lg:w-[50%] sm:w-[60%] rounded-[48px] border border-gray-400 relative z-10">
        <Button label="Code" isActive />
        <Button label="Plan" />
        <Button label="Collaborate" />
        <Button label="Automate" />
        <Button label="Secure" />
      </div>

      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-[88%] lg:w-[56%] mb-[60px] relative z-10">
        <div className="flex">
          <div className="w-1/2 bg-gray-800 p-4">
            <div className="text-gray-400 mb-4">GITHUB COPILOT: CHAT</div>
            <div className="text-white mb-4">
              Hi <span className="text-blue-400">@monalisa</span>, how can I
              help you?
            </div>
            <div className="text-gray-400 mb-4">
              I'm powered by AI, so surprises and mistakes are possible. Make
              sure to verify any generated code or suggestions, and share
              feedback so that we can learn and improve.
            </div>
            <div className="bg-gray-700 p-2 rounded-lg text-gray-400">
              Ask a question or type '/' for commands
            </div>
          </div>
          <div className="w-1/2 bg-gray-900 p-4">
            <div className="flex items-center justify-between text-gray-400 mb-4">
              <div>game.ts</div>
              <div>characters.module.css</div>
              <div>bonus-level.ts</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-gray-400 text-sm font-mono leading-relaxed">
              <img src="https://placehold.co/400x300" />
            </div>
          </div>
        </div>
      </div>
      <InfiniteSlide />
      <Eyes />

      <div className="mb-10 relative z-10 justifty-center items-center text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            textShadow: [
              "3px 3px 0px red",
              "-3px -3px 0px cyan",
              "3px -3px 0px blue",
              "-3px 3px 0px green",
            ],
            x: [0, -2, 2, 0],
          }}
          transition={{
            duration: 0.1,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <h1 className="font-primary text-5xl font-bold text-white mt-[-70px]">
            Technology Enthusiast
          </h1>
        </motion.span>
        <br />
        <p className="text-2xl text-white text-opacity-[75%] font-secondary text-center mt-[20px]">
          With innovative solutions integrated across the platform,
          <br />
          you can streamline processes, enhance efficiency, and make <br />a
          meaningful impact on your projects.
        </p>
      </div>

      <Chatbot />
    </div>
  );
};
