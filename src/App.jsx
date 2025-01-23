import { Canvas } from "@react-three/fiber";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { Avatar } from "./components/Avatar";
import { useEffect, useState, Suspense } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {loading && (
        <div className="absolute inset-0 bg-linear-gradient(to bottom, #FFFFFF, #E0FFFF) z-50 flex items-center justify-center transition-opacity duration-1000">
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
          <div className="flex flex-col h-full w-[100%]">
            <div className="flex-grow h-[950px] p-8 mt-16 mb-2">
              <div className="rounded-xl h-[90%] overflow-hidden">
                <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
                  <color attach="#E0FFFF" args={["#130f30"]} />
                  <group position-y={-1}>
                    <Suspense fallback={null}>
                      <Experience />
                    </Suspense>
                  </group>
                </Canvas>
              </div>
            </div>
            <h1>TEST</h1>
          </div>
        </>
      )}
    </>
  );
}

export default App;
