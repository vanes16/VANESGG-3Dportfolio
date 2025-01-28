import { Canvas } from "@react-three/fiber";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { useEffect, useState, Suspense } from "react";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      // Mulai animasi keluar
      setHideLoading(true);

      // Hapus elemen loading setelah animasi selesai (500ms)
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Suspense untuk mulai load Experience */}
      <Suspense fallback={null}>
        {/* Loading Screen */}
        {loading && (
          <div
            className={`absolute inset-0 bg-gradient-to-b from-white to-cyan-100 z-50 flex items-center justify-center duration-500 ${
              hideLoading ? "hideLoading" : ""
            }`}
          >
            <img
              src="/images/logo.png"
              className="w-60 animate-pulse"
              alt="Loading Logo"
            />
          </div>
        )}

        {/* Main Application */}
        {!loading && (
          <>
            <Header />
            {/* Home */}
            <div id="Home" className="flex flex-col h-full w-[100%]">
              <div className="flex-grow h-[950px] p-8 mt-16 mb-2">
                <div className="rounded-xl h-[90%] overflow-hidden">
                  <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
                    <color attach="#E0FFFF" args={["#ececec"]} />
                    <group position-y={-1}>
                      <Experience />
                    </group>
                  </Canvas>
                </div>
              </div>

              {/* Vision */}
              <div
                id="Vision"
                className="flex flex-col h-[700px] w-full py-20 px-12 text-center mb-20 bg-gray-100 bg-center overflow-hidden"
              >
                {/* Konten Vision */}
                <div>
                  <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-primary text-6xl font-bold text-gray-800 mb-8 transition-colors duration-300"
                  >
                    VISION
                  </motion.h1>

                  {/* Deskripsi Vision */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 max-w-2xl mx-auto"
                  >
                    <p className="text-2xl text-gray-700 font-open-sans leading-relaxed">
                      To become an individual who is not only{" "}
                      <span className="text-[#34D2F0] font-semibold">
                        innovative
                      </span>{" "}
                      and{" "}
                      <span className="text-[#34D2F0] font-semibold">
                        dedicated
                      </span>{" "}
                      in creating technological solutions,
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
                      <span className="text-[#34D2F0] font-semibold">
                        blessing
                      </span>{" "}
                      to the environment, community, and the world through
                      impactful contributions.
                    </p>
                  </motion.div>

                  <div className="my-12 border-t border-gray-500/50 mx-auto w-1/2"></div>
                  <p className="text-xl text-gray-600 font-montserrat italic">
                    "Innovation is not just about technology; it's about making
                    a difference."
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;
