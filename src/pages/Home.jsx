import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { BackgroundCircles, Rings } from "./design/homeDesign";
import Button from "./design/Button";
import backgroundHome from './images/homeBLUE.jpg';
import "./style/style.css";

export const Home = () => {
  const parallaxRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { width, height, left, top } =
        parallaxRef.current.getBoundingClientRect();
      const x = (clientX - left - width / 2) / width;
      const y = (clientY - top - height / 2) / height;
      setMousePosition({ x, y });
    };

    parallaxRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      parallaxRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 30}px, ${
      mousePosition.y * 30
    }px)`,
  };

  return (
    <div
      ref={parallaxRef}
      className="h-[1300px] px-[60px] mb-2 flex flex-col items-center justify-center text-center overflow-hidden z-0 bg-cover bg-center "
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 h-[1300px]"></div>
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/images/gradient.png')] h-[1700px] w-full opacity-50"></div>
      <Rings />
      <div style={parallaxStyle}>
        <BackgroundCircles />
      </div>
      <br />
      <br />
      <div
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 mt-[60px] z-10 text-white"
        style={{ lineHeight: "1.375" }}
      >
        Innovative and Dedicated In
        <br></br> Creating Technological Solutions
      </div>
      <p className="text-lg md:text-xl mb-6 text-gray-300 z-10 ">
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
      <div className="rounded-xl h-[80%] w-full xl:w-[60%] md:w-[100%] overflow-hidden flex items-center justify-center z-10 mb-10 gradient-border">
        <Canvas
          className="rounded-xl"
          shadows
          camera={{ position: [0, 0, 6], fov: 42 }}
        >
          <color attach="background" args={["#ececec"]} />
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
