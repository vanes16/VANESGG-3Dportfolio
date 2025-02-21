import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { BackgroundCircles, Rings } from "./design/homeDesign";

import "./style/style.css";
import "./style/cyberpunk.css";

export const Home = () => {
  const parallaxRef = useRef(null);
  const openPDF = () => {
    const pdfUrl = "/cv/CV - VANES - IT.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <div className="h-[1400px] w-full px-[60px] mb-2 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 h-[1400px] bg-cover bg-center bg-[url('/images/homeBLUE.jpg')] cyber-glitch-0"></div>
      <div className="absolute inset-0 bg-black bg-opacity-80 h-[1400px] border-b border-white border-opacity-20"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/gradient.png')] h-[1700px] w-full opacity-50"></div>

      <div className="relative w-[300px] md:w-[400px] lg:w-[500px] ">
        <Rings />
      </div>
      <div ref={parallaxRef}>
        <BackgroundCircles />
      </div>
      <br />
      <br />
      <div
        className="font-primary text-3xl md:text-4xl lg:text-6xl font-black mb-[45px] z-10 text-white"
        style={{ lineHeight: "1.375" }}
      >
        Innovative and Dedicated In
        <br></br> Creating Technological Solutions
      </div>
      <p className="font-third text-xl md:text-2xl mb-6 text-gray-300 z-10 font-extrabold">
        Bring positive attitude and to be a blessing to the <br></br>{" "}
        environment, community, and the world.
      </p>
      <button
        onClick={openPDF}
        className="font-forth text-3xl font-thin cyber-button bg-red vt-bot fg-white"
      >
        Download CV
        <span className="glitchtext">&dollar;_glitch;</span>
      </button>

      <br></br>
      <br></br>
      <div className="h-[60%] w-full xl:w-[60%] md:w-[100%] flex items-center justify-center z-5 mb-[60px] gradient-border">
        <Canvas camera={{ position: [0, 0, 6], fov: 42 }}>
          <color attach="background" />
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>
    </div>
  );
};
