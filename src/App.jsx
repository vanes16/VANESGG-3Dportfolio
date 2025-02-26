import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Highlight } from "./pages/Highlight";
import { Timeline } from "./pages/Timeline";
import { Contacts } from "./pages/Contacts";
import { useEffect, useState, Suspense } from "react";
import { useProgress } from "@react-three/drei";

import "./pages/style/style.css";
import "./pages/style/cyberpunk.css";
import "./pages/style/eyes.css";

function App() {
  const { progress } = useProgress();
  const [loading, setLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      setHideLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [progress]);

  return (
    <>
      <Suspense fallback={<div className="loading-screen"></div>}>
        {/* Loading Screen */}
        {loading && (
          <div
            className={`absolute inset-0 bg-[#111827] z-50 flex items-center justify-center duration-500 ${
              hideLoading ? "opacity-0" : ""
            }`}
          >
            <img
              src="/images/logo.png"
              className="w-60 animate-pulse"
              alt="Loading Logo"
            />
            <p className="text-white mt-4">{progress.toFixed(0)}%</p>
          </div>
        )}

        {/* Main Application */}
        {!loading && (
          <>
            <Header />
            <div className="flex flex-col h-full w-[100%]">
              <Home />
              <Project />
              <Highlight />
              <Timeline />
              <Contacts />
              <Footer />
            </div>
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;
