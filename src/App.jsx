import { Canvas } from "@react-three/fiber";
import { UI } from "./components/UI";
import { Experience } from "./components/Experience";
import { useEffect, useState } from "react";


function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000); 
      return () => clearTimeout(timer); 
    }, []);

    return (
      <>
        {/* Loading Screen */}
        {loading && (
          <div
            className="absolute inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000"
          >
            <img src="/images/logo.png" className="w-60 animate-pulse" alt="Loading Logo" />
          </div>
        )}
  
        {/* Main Application */}
        {!loading && (
          <>
            <UI />
            <Canvas
              camera={{
                position: [-1, 1, 5],
                fov: 45,
              }}
              shadows
            >
              <color attach="background" args={["#555"]} />
              <fog attach="fog" args={["#555", 15, 25]} />
              <group position-y={-1}>
                <Experience />
              </group>
            </Canvas>
          </>
        )}
      </>
    );
  }

export default App;
