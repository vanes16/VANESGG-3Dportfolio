import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
      <div className="absolute top-[400px] left-[-15px] w-0.25 h-1/2 origin-bottom rotate-[46deg]">
        <div
          className={`w-2 h-2 -ml-1 -mt-36 bg-gradient-to-b from-red-600 via-orange-500 to-yellow-400 rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[250px] left-[-550px] w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
        <div
          className={`w-4 h-4 -ml-1 -mt-32 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[280px] left-[-290px] w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
        <div
          className={`w-4 h-4 -ml-1 -mt-42 bg-gradient-to-b from-blue-800 via-teal-600 to-green-500 rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[20px] left-[350px] w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
        <div
          className={`w-3 h-3 -ml-1.5 mt-52 bg-gradient-to-b from-indigo-900 via-purple-700 to-blue-50 rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[460px] left-[-650px] w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
        <div
          className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>

      <div className="absolute top-[300px] left-[550px] w-0.25 h-1/2 origin-bottom rotate-[70deg]">
        <div
          className={`w-6 h-6 -ml-3 -mt-3 bg-gradient-to-b from-yellow-800 via-orange-600 to-amber-40from-yellow-800 via-orange-600 to-amber-40 rounded-full transition-transform duration-500 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        />
      </div>
    </MouseParallax>
  );
};
