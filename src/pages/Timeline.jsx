import "./style/style.css";
import { motion } from "framer-motion";

export const Timeline = () => {
  return (
    <div className="text-center px-[60px] py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8, 
          ease: [0.42, 0, 0.58, 1], 
          delay: 0.2,
        }}

      >
        <h3 className="font-primary text-gray-400 text-sm mb-2">
          What I Have Done
        </h3>
        <h1 className="font-primary text-4xl font-extrabold text-white mb-10">
          TIMELINE.
        </h1>
      </motion.div>

 
    </div>
  );
};
