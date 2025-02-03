import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { BackgroundCircles } from "./design/homeDesign";
import "./style/Home.css";

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]"></div>
    </>
  );
};

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
      className="flex-grow h-[1000px] px-[60px] mb-2 flex flex-col items-center justify-center text-center
        bg-[url('/images/homeBacks.jpeg')] bg-cover bg-center overflow-hidden z-0"
    >
      <Rings />
      <div style={parallaxStyle}>
        <BackgroundCircles />
      </div>
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 mt-[60px] text-white z-10">
        Innovative and Dedicated In
        <br></br> Creating Technological Solutions
      </div>
      <p className="text-lg md:text-xl mb-6 text-gray-400 z-10">
        Bring positive attitude and to be a blessing to the <br></br>{" "}
        environment, community, and the world.
      </p>
      <br></br> <br></br>
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
