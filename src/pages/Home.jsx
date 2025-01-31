import { Experience } from "../components/Experience";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
export const Home = () => {
  return (
    <div className="flex-grow h-[950px] p-8 mt-16 mb-2">
      <div className="rounded-xl h-[90%] overflow-hidden">
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
          <color attach="#E0FFFF" args={["#ececec"]} />
          <group position-y={-1}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>
    </div>
  );
};
