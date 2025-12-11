import Eyes from "./design/Eye";
import Chatbot from "./design/Chatbot";
import { motion } from "framer-motion";

export const Highlight = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
      <Eyes />
      <div className="relative w-full">
        <div className="absolute top-[-200px] right-[400px] w-3 h-3 opacity-80 origin-bottom rotate-[5deg] bg-cyan blur-lg"></div>
        <div className="absolute top-[50px] left-[350px] w-2 h-2 opacity-80 origin-bottom rotate-[0deg] bg-cyan blur-lg"></div>
        <div className="absolute top-[40px] right-[300px] w-2 h-2 opacity-80 origin-bottom rotate-[0deg] bg-cyan blur-sm"></div>
        <div className="absolute top-[300px] left-[600px] w-2 h-2 opacity-80 origin-bottom rotate-[-5deg] bg-cyan blur-sm"></div>
        <div className="absolute top-[-150px] left-[400px] w-3 h-3 opacity-80 origin-bottom rotate-[-5deg] bg-cyan blur-sm"></div>
      </div>
      <div className="mb-10 relative justifty-center items-center text-center mt-[-80px]">
        <motion.span
          className="font-primary text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight will-change-transform"
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
          Technology Enthusiast
        </motion.span>
        <br />
        <p className="text-xl md:text-2xl font-bold text-white font-secondary mt-7">
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
