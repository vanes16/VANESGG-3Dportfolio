import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { BackgroundCircles, Rings } from "./design/homeDesign";
import ButtonSvg from "./design/ButtonSvg";
import "./style/style.css";

const Button = ({ className, children, px, white, downloadPdf }) => {
  const classes = `button relative inline-flex items-center justify-center
    h-11 transition-all bg-transparent duration-700 ease-out hover:text-[#34d2f0]
    ${px || "px-7"}
    ${white ? "text-[#0E0C15]" : "text-[#FFFFFF]"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <a href={downloadPdf} target="_blank" className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  return renderButton();
};

export const Home = () => {
  const parallaxRef = useRef(null);

  return (
    <div className="h-[1400px] w-full px-[60px] mb-2 flex flex-col items-center justify-center text-center overflow-hidden z-0 bg-cover bg-center bg-[url('/images/homeBLUE.jpg')] ">
      <div className="absolute inset-0 bg-black bg-opacity-70 h-[1400px] border-b border-white border-opacity-20"></div>
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
        className="font-primary text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 mt-[60px] z-10 text-white"
        style={{ lineHeight: "1.375" }}
      >
        Innovative and Dedicated In
        <br></br> Creating Technological Solutions
      </div>
      <p className="font-secondary text-lg md:text-xl mb-6 text-gray-300 z-10 ">
        Bring positive attitude and to be a blessing to the <br></br>{" "}
        environment, community, and the world.
      </p>
      <Button
        className="font-third text-3xl font-thin"
        downloadPdf="/cv/CV - VANES - IT.pdf"
        white
      >
        Download CV
      </Button>

      <br></br>
      <br></br>
      <div className="rounded-xl h-[60%] w-full xl:w-[60%] md:w-[100%] flex items-center justify-center z-10 mb-[60px] gradient-border">
        <Canvas
          className="rounded-xl"
          camera={{ position: [0, 0, 6], fov: 42 }}
        >
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
