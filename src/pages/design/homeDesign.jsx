import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const Rings = () => {
  return (
    <>
      <div className="absolute blur-lg top-1/2 left-1/2 w-[65.875rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute blur-lg top-1/2 left-1/2 w-[51.375rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute blur-lg top-1/2 left-1/2 w-[36.125rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute blur-lg top-1/2 left-1/2 w-[23.125rem] aspect-square border border-white border-opacity-50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
      <div className="absolute top-[400px] left-[-15px] w-0.25 h-1/2 origin-bottom rotate-[46deg]">
        <div
          className={`w-2 h-2 -ml-1 -mt-36 border-2 border-red-500 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[250px] left-[-550px] w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
        <div
          className={`w-4 h-4 -ml-1 -mt-32 border-2 border-red-500 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[280px] left-[-290px] w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
        <div
          className={`w-4 h-4 -ml-1 -mt-42 bg-red opacity-70 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[20px] left-[350px] w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
        <div
          className={`w-3 h-3 -ml-1.5 mt-52 bg-[#fd4a5a] opacity-70 transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[460px] left-[-650px] w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
        <div
          className={`w-6 h-6 -ml-3 -mt-3 bg-[#fd4a5a] transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[300px] left-[550px] w-0.25 h-1/2 origin-bottom rotate-[70deg]">
        <div
          className={`w-6 h-6 -ml-3 -mt-3 bg-red transition-all duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>
    </MouseParallax>
  );
};
