import { useEffect, useRef, useState } from "react";

export const Header = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [beforeHamburger, afterHamburger] = useState(true); // Manage hamburger state with beforeHamburger
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const audioRef = useRef(null);
  const hamburgerAudioBefore = useRef(null);
  const hamburgerAudioAfter = useRef(null);

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

  const toggleHamburger = () => {
    afterHamburger((prevState) => {
      const afterState = !prevState;

      if (!isMuted) {
        if (!afterState) {
          if (hamburgerAudioAfter.current) {
            hamburgerAudioAfter.current.pause();
            hamburgerAudioAfter.current.currentTime = 0;
          }
          if (hamburgerAudioBefore.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            hamburgerAudioBefore.current.play();
          }
        } else {
          if (hamburgerAudioBefore.current) {
            hamburgerAudioBefore.current.pause();
            hamburgerAudioBefore.current.currentTime = 0;
          }
          if (hamburgerAudioAfter.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            hamburgerAudioAfter.current.play();
          }
        }
      }
      return afterState;
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

    // Close menu if it's open and a scroll happens
    if (!beforeHamburger) {
      afterHamburger(true);
    }
  };

  const SoundButton = () => {
    return (
      <button
        className={`z-50 text-4xl rounded-2xl transition-colors duration-300 
        text-white pointer-events-auto drop-shadow-md w-16 h-16 ${
          isMuted ? "bg-[#b9bbbe] hover:bg-[#caccce]" : "bg-[#34d2f0]"
        }`}
        onClick={toggleSound}
      >
        <i className={`fas ${isMuted ? "fa-volume-down" : "fa-volume-up"}`}></i>
      </button>
    );
  };

  const HamburgerButton = () => {
    return (
      <button
        className="z-50 text-4xl rounded-2xl transition-colors duration-300 
        text-white pointer-events-auto drop-shadow-md w-16 h-16 bg-[#34d2f0]"
        onClick={toggleHamburger}
      >
        <i
          className={`fas transition-transform duration-300 ${
            beforeHamburger ? "fa-bars rotate-0" : "fa-times rotate-180"
          }`}
        ></i>
      </button>
    );
  };

  const MenuButton = (props) => {
    const { label, onClick } = props;
    return (
      <button
        onClick={onClick}
        className="text-3xl font-semibold cursor-pointer hover:text-indigo-600 transition-colors"
        style={{ color: "#091434" }}
      >
        {label}
      </button>
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [beforeHamburger]); // Update effect to depend on beforeHamburger state

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
        <div className="z-50 flex items-center">
          <a
            className="pointer-events-auto"
            href="https://github.com/vanes16/VANESGG-3Dportfolio/"
          >
            <img className="w-40" src="/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto space-x-2">
          <SoundButton />
          <HamburgerButton />
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transition-transform duration-1000 ease-in-out ${
          beforeHamburger ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className="flex flex-col items-center justify-center h-full space-y-8"
          style={{ paddingBottom: "8rem" }}
        >
          <MenuButton label="Home" />
          <MenuButton label="About" />
          <MenuButton label="Work" />
          <MenuButton label="Contact" />
        </div>
        <div className="absolute bottom-10 w-full flex flex-col items-center">
          <div className="flex space-x-6">
            <a
              href="http://instagram.com/vanesliu_"
              className="text-3xl text-gray-500 hover:text-[#091434] transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/vanes16"
              className="text-3xl text-gray-500 hover:text-[#091434] transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://id.linkedin.com/in/vanes-vanes-4894b1308"
              className="text-3xl text-gray-500 hover:text-[#091434] transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=vanesliu23@gmail.com"
              className="text-3xl text-gray-500 hover:text-[#091434] transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <hr className="w-1/2 border-gray-300 my-4" />
          <p className="text-gray-400 mt-4">© 2025 VANES Portfolio</p>
        </div>
      </div>

      {/* Audio Elements */}
      <audio ref={audioRef} src="./sound/soundButton.mp3" />
      <audio ref={hamburgerAudioBefore} src="./sound/afterHamburger.mp3" />
      <audio ref={hamburgerAudioAfter} src="./sound/beforeHamburger.mp3" />
    </main>
  );
};
