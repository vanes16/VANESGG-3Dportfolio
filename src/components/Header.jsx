import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const audioRef = useRef(null);

  const toggleSound = () => {
    setIsMuted((prevState) => {
      const newMutedState = !prevState;

      if (audioRef.current) {
        if (!newMutedState) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      }
      return newMutedState;
    });
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }

    if (window.scrollY > 50) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SoundButton = () => {
    return (
      <button
        className={`text-4xl rounded-2xl transition-colors duration-300 
        text-white pointer-events-auto drop-shadow-md w-16 h-16 ${
          isMuted ? "bg-[#b9bbbe] hover:bg-[#caccce]" : "bg-[#34d2f0]"
        }`}
        onClick={toggleSound}
      >
        <i className={`fas ${isMuted ? "fa-volume-down" : "fa-volume-up"}`}></i>
      </button>
    );
  };

  return (
    <main className="pointer-events-none absolute z-10 inset-0 select-none">
      {/* Header */}
      <div
        className={`py-4 px-8 w-full max-w-screen flex flex-row justify-between items-center rounded-xl overflow-hidden transition-all duration-300 ${
          isFixed
            ? "fixed top-0 left-0 right-0 bg-white shadow-lg animate-slide-down"
            : "relative"
        } ${
          isHeaderVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
      >
        <div className="flex items-center">
          <a
            className="pointer-events-auto"
            href="https://github.com/vanes16/VANESGG-3Dportfolio/"
          >
            <img className="w-40" src="/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <SoundButton />
        </div>
      </div>
      {/* Audio Element */}
      <audio ref={audioRef} src="./sound/soundButton.mp3" />
    </main>
  );
};
