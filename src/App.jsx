import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";
import { Highlight } from "./pages/Highlight";
import { Timeline } from "./pages/Timeline";
import { Contacts } from "./pages/Contacts";
import { useEffect, useState, Suspense } from "react";
import "./pages/style/style.css";
import "./pages/style/cyberpunk.css";
import "./pages/style/eyes.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Mulai animasi keluar
      setHideLoading(true);

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
            className={`absolute inset-0 bg-[#111827] z-50 flex items-center justify-center duration-500 ${
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
        {!loading && (
          <>
            <Header />
            <div className="flex flex-col h-full w-[100%]">
              {/* Home */}
              <Home />

              {/* Project */}
              <Project />

              {/* Highlight */}
              <Highlight />

              {/* Timeline */}
              {/*  <Timeline /> */}

              {/* Nametag */}
            </div>
          </>
        )}
      </Suspense>
    </>
  );
}

export default App;
