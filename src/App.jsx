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
              className="flex flex-col h-[50%] w-[100%] p-8 text-center mb-20"
            >
              <h1 class="text-4xl md:text-4xl font-bold text-black bg-white p-8 rounded-2xl shadow-lg">
                To become an individual who is not only innovative and dedicated
                in creating technological solutions, but also fosters a positive
                attitude, and becomes a blessing to the environment, community,
                and the world through impactful contributions.
              </h1>
            </div>
          </div>
        </>
      </Suspense>
    </>
  );
}

export default App;
