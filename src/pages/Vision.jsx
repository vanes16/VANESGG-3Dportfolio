import { motion } from "framer-motion";
export const Vision = () => {
  return (
    <div
      id="Vision"
      className="flex flex-col h-[700px] w-full py-20 px-12 text-center mb-20 bg-gray-100 bg-center overflow-hidden"
    >
      {/* Konten Vision */}
      <div>
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="font-primary text-4xl font-extrabold text-gray-800 mb-8 transition-colors duration-300"
        >
          VISION
        </motion.h1>

        {/* Deskripsi Vision */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="space-y-6 max-w-2xl mx-auto"
        >
          <p className="text-2xl text-gray-700 font-open-sans leading-relaxed">
            To become an individual who is not only{" "}
            <span className="text-[#34D2F0] font-semibold">innovative</span> and{" "}
            <span className="text-[#34D2F0] font-semibold">dedicated</span> in
            creating technological solutions,
          </p>
          <p className="text-2xl text-gray-700 font-open-sans leading-relaxed">
            but also fosters a{" "}
            <span className="text-[#34D2F0] font-semibold">
              positive attitude
            </span>
            ,
          </p>
          <p className="text-2xl text-gray-700 font-open-sans leading-relaxed">
            and becomes a{" "}
            <span className="text-[#34D2F0] font-semibold">blessing</span> to
            the environment, community, and the world through impactful
            contributions.
          </p>

          <div className="my-12 border-t border-gray-500/50 mx-auto w-1/2"></div>
          <p className="text-xl text-gray-600 font-montserrat italic">
            "Innovation is not just about technology; it's about making a
            difference."
          </p>
        </motion.div>
      </div>
    </div>
  );
};
