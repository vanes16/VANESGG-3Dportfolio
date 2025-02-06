import "./style/eyes.css";
import Eyes from "./design/Eye";
import InfiniteSlide from "./design/infiniteSlide";

const Button = ({ label, isActive }) => (
  <button
    className={` font-secondary font-semibold text-xl px-5 py-1 lg:text-2xl ${
      isActive
        ? "bg-gradient-to-t from-transparent to-white/10"
        : "bg-transparent"
    } rounded-2xl`}
  >
    {label}
  </button>
);

export const Project = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="bg-transparent p-2 flex justify-around text-white mb-10 w-[60%] lg:w-[50%] rounded-2xl border border-gray-400">
        <Button label="Code" isActive />
        <Button label="Plan" />
        <Button label="Collaborate" />
        <Button label="Automate" />
        <Button label="Secure" />
      </div>
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden w-[88%] lg:w-[56%] mb-[60px]">
        <div className="flex">
          <div className="w-1/2 bg-gray-800 p-4">
            <div className="text-gray-400 mb-4">GITHUB COPILOT: CHAT</div>
            <div className="text-white mb-4">
              Hi <span className="text-blue-400">@monalisa</span>, how can I
              help you?
            </div>
            <div className="text-gray-400 mb-4">
              I'm powered by AI, so surprises and mistakes are possible. Make
              sure to verify any generated code or suggestions, and share
              feedback so that we can learn and improve.
            </div>
            <div className="bg-gray-700 p-2 rounded-lg text-gray-400">
              Ask a question or type '/' for commands
            </div>
          </div>
          <div className="w-1/2 bg-gray-900 p-4">
            <div className="flex items-center justify-between text-gray-400 mb-4">
              <div>game.ts</div>
              <div>characters.module.css</div>
              <div>bonus-level.ts</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-gray-400 text-sm font-mono leading-relaxed">
              <img src="https://placehold.co/400x300" />
            </div>
          </div>
        </div>
      </div>
      <InfiniteSlide />
      <Eyes />
      <div className="mb-5">
        <h1 className="font-primary text-3xl font-bold text-white mt-[-70px]">
          Techonology Anthusiast
        </h1>
        <br></br>
        <p className="text-xl text-white text-opacity-[75%] font-secondary text-center">
          With innovative solutions integrated across the platform<br></br> you
          can streamline processes, enhance efficiency, and make <br></br>
          meaningful impact on your projects.
        </p>
      </div>
      <div className="w-full h-[800px] bg-center bg-cover bg-[url('/images/gradient.png')] opacity-[10%] absolute top-[2380px] inset-0"></div>
      <div className="w-full h-[800px] bg-center bg-cover bg-[url('/images/Earth.jpg')] opacity-[3.5%] absolute top-[2380px] contrast-200"></div>
    </div>
  );
};
