import { Link } from "react-scroll";
import { useEffect, useRef, useState } from "react";

let lastScrollY = 0;

export const Header = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isFixed, setIsFixed] = useState(false);
  const [beforeHamburger, afterHamburger] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showWaveAnimation, setShowWaveAnimation] = useState(false);
  const audioRef = useRef(null);
  const hamburgerAudioBefore = useRef(null);
  const hamburgerAudioAfter = useRef(null);
  const linkAudio = useRef(null);
  const waveAudio = useRef(null);
  const [activeSection, setActiveSection] = useState("");

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

  const HamburgerButton = () => {
    return (
      <button
        className="text-4xl rounded-2xl transition-colors duration-300 
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
  const [isAnimating, setIsAnimating] = useState(false);
  const MenuButton = ({ label, to }) => {
    const linkClick = () => {
      if (!isMuted) {
        linkAudio.current.currentTime = 0;
        linkAudio.current.play();
        setTimeout(() => {
          linkAudio.current.pause();
          linkAudio.current.currentTime = 0;
          waveAudio.current.currentTime = 0;
          waveAudio.current.play();
        }, 100);
      }

      setShowWaveAnimation(true);
      setIsAnimating(true);

      setTimeout(() => {
        setShowWaveAnimation(false);
        setIsAnimating(false);
        afterHamburger(true);
      }, 1400);
    };

    return (
      <Link
        to={to}
        smooth={true}
        duration={700}
        className={`font-secondary text-3xl font-bold cursor-pointer transition-colors ${
          activeSection === to ? "border-b-4 border-[#34d2f0]" : ""
        }`}
        style={{ color: "#ffffff" }}
        onClick={() => {
          setActiveSection(to);
          linkClick();
        }}
        onSetActive={() => setActiveSection(to)}
      >
        {label}
      </Link>
    );
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;

    setIsFixed(scrollY > innerHeight);

    if (scrollY === 0) {
      setIsHeaderVisible(true);
      setIsFixed(false);
    } else {
      setIsFixed(true);

      if (scrollY > lastScrollY) {
        if (lastScrollY === 0) {
          setIsHeaderVisible(false);
        }
      } else {
        setIsHeaderVisible(true);
      }
    }
    lastScrollY = scrollY;

    if (!beforeHamburger) {
      afterHamburger(true);
    }
    const divs = document.querySelectorAll("div[id]");
    let currentSection = "";
    divs.forEach((div) => {
      const rect = div.getBoundingClientRect();
      if (rect.top <= innerHeight / 2 && rect.bottom >= innerHeight / 2) {
        currentSection = div.id;
      }
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  useEffect(() => {
    // Set default active section to "Home" on initial load
    setActiveSection("Home");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Jika animasi sedang berjalan, jangan biarkan beforeHamburger berubah
    if (!isAnimating) {
      // Anda bisa memanggil handleScroll jika ingin melakukan sesuatu berdasarkan scroll
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [beforeHamburger, isAnimating]);

  return (
    <main className="pointer-events-none absolute z-10 inset-0 select-none">
      {/* Header */}
      <div
        className={`z-50 bg-transparent py-4 px-8 w-full max-w-screen flex flex-row justify-between items-center overflow-hidden transition-all duration-300 ${
          isFixed ? "fixed top-0 left-0 right-0 animate-slide-down" : "relative"
        } ${
          isHeaderVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="z-50 flex items-center">
          <a
            className="pointer-events-auto"
            href="https://github.com/vanes16/VANESGG-3Dportfolio/"
          >
            <img className="w-40 h-[55px]" src="/images/hLogo.png" alt="Logo" />
          </a>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto space-x-2">
          <SoundButton />
          <HamburgerButton />
        </div>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-[#111827] transition-transform duration-1000 ease-in-out ${
          beforeHamburger ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className="pointer-events-auto flex flex-col items-center justify-center h-full space-y-8 shadow-lg"
          style={{ paddingBottom: "8rem" }}
        >
          <MenuButton label="Home" to="Home" />
          <MenuButton label="Project" to="Project" />
          <MenuButton label="Timeline" to="Timeline" />
          <MenuButton label="Contact" to="Contact" />
        </div>
        <div className="absolute bottom-10 w-full flex flex-col items-center">
          <div className="flex space-x-6">
            <a
              href="http://instagram.com/vanesliu_"
              className="text-3xl text-gray-500 hover:text-white transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://github.com/vanes16"
              className="text-3xl text-gray-500 hover:text-white transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://id.linkedin.com/in/vanes-vanes-4894b1308"
              className="text-3xl text-gray-500 hover:text-white transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.fiverr.com/vanesgg?source=gig_page"
              className="text-3xl text-gray-500 hover:text-white transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-briefcase"></i>
            </a>
            <a
              href="https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=vanesliu23@gmail.com"
              className="text-3xl text-gray-500 hover:text-white transition-colors duration-300 pointer-events-auto"
              style={{ cursor: "pointer" }}
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <hr className="w-1/2 border-gray-300 my-4" />
          <p className="text-gray-400 mt-4">© 2025 VANES Portfolio</p>
        </div>
      </div>

      {/* Animasi */}
      {showWaveAnimation && (
        <div className="flex flex-col w-full bg-transparent justify-between transition-transform duration-700 transform animate-slideUp">
          <img src="/images/waveUp.svg" className="w-full" />
          <div className="bg-[#34d2f0] w-full h-[3000px]"></div>
          <img src="/images/waveDown.svg" className="w-full" />
        </div>
      )}

      {/* Audio Elements */}
      <audio ref={audioRef} src="./sound/soundButton.mp3" />
      <audio ref={hamburgerAudioBefore} src="./sound/afterHamburger.mp3" />
      <audio ref={hamburgerAudioAfter} src="./sound/beforeHamburger.mp3" />
      <audio ref={linkAudio} src="./sound/linkClick.mp3" />
      <audio ref={waveAudio} src="./sound/waveSound.mp3" />
    </main>
  );
};
