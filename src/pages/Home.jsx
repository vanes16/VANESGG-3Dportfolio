import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

export const Home = () => {
  return (
    <div className="flex-grow h-[950px] py-10 px-[60px] mt-16 mb-2 flex flex-col items-center justify-center text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 mt-[60px] text-white">
        Innovative and Dedicated In
        <br></br> Creating Technological Solutions
      </div>
      <p className="text-lg md:text-xl mb-6 text-gray-400">
        Bring positive attitude and to be a blessing to the <br></br>{" "}
        environment, community, and the world.
      </p>
      <br></br> <br></br>
      <div className="rounded-xl h-[70%] w-[80%] overflow-hidden flex items-center justify-center">
        <Canvas shadows camera={{ position: [0, 0, 6], fov: 42 }}>
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
