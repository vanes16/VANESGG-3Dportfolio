import Content from "./design/ProjectContent";
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
    <div
      className="relative flex flex-col items-center justify-center z-0"
      style={{
        backgroundColor: "#ece8e1",
        backgroundImage:
          "radial-gradient(circle, #00FFFF 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="cyber-razor-top bg-whiteG w-full absolute inset-0 top-[-50px] h-[40px] dot-back"></div>
      <div className="cyber-razor-bottom bg-whiteG w-full absolute bottom-[-50px] h-[20px] dot-back"></div>
      {/* Content */}
      <div className="bg-transparent p-2 flex flex-wrap justify-center lg:justify-around text-black mb-10 w-full lg:w-[50%] sm:w-[60%] rounded-[48px] border border-gray-400 relative z-10">
        <Button label="Code" isActive />
        <Button label="Plan" />
        <Button label="Collaborate" />
        <Button label="Automate" />
        <Button label="Secure" />
      </div>

      <Content />
      <InfiniteSlide />
    </div>
  );
};
