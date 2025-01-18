import { useEffect, useState } from "react";

export const UI = () => {
  const [isMuted, setIsMuted] = useState(false);

  const toggleSound = () => {
    setIsMuted((prevState) => !prevState); 
  };

  const SoundButton = () => {
    return (
      <button 
      className="text-4xl rounded-2xl hover:bg-indigo-600 transition-colors duration-300 
      text-white  pointer-events-auto drop-shadow-md bg-[#b9bbbe] w-16 h-16"
       onClick={toggleSound}>
        <i className={`fas ${isMuted ? "fa-volume-up" : "fa-volume-down"}`}></i>
      </button>
    );
  };
  return (
    
    <main className="pointer-events-none fixed z-10 inset-0 p-8 select-none">

      {/* Header */}
      <div className="mx-auto max-w-screen-xl w-full flex flex-row justify-between">
        <div className="flex justify-between items-center">
          <a
            className="pointer-events-auto"
            href="https://github.com/vanes16/VANESGG-3Dportfolio/"
          >
            <img className="w-40" src="/images/logo.png" />
          </a>
        </div>
        <div className="flex items-cente gap-2 pointer-events-auto ">
            <SoundButton />
        </div>
      </div>

    </main>
  );
};
