import { Canvas } from "@react-three/fiber";
import { Header } from "./components/Header";
import { Experience } from "./components/Experience";
import { useEffect, useState, Suspense } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

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
        <>
          <Header />
          {/* Home */}
          <div id="Home" className="flex flex-col h-full w-[100%]">
            <div className="flex-grow h-[950px] p-8 mt-16 mb-2">
              <div className="rounded-xl h-[90%] overflow-hidden">
                <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
                  <color attach="#E0FFFF" args={["#130f30"]} />
                  <group position-y={-1}>
                    <Experience />
                  </group>
                </Canvas>
              </div>
            </div>
            {/* About */}
            <div id="About" className="flex flex-col h-[1000px] w-[100%]">
              <h1>TEST</h1>
            </div>
          </div>
        </>
      </Suspense>
    </>
  );
}

export default App;
