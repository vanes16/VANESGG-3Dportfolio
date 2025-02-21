import Eyes from "./design/Eye";
import Chatbot from "./design/Chatbot";
import { motion } from "framer-motion";

export const Highlight = () => {
  return (
    <div className="relative flex flex-col items-center justify-center z-0 dot-back">
      <Eyes />
      <div className="mb-10 relative z-10 justifty-center items-center text-center">
        <motion.h1
          className="font-primary text-5xl font-bold text-black mt-[-70px]"
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
        </motion.h1>
        <br />
        <p className="text-2xl font-black text-normal font-forth text-center mt-[20px]">
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
