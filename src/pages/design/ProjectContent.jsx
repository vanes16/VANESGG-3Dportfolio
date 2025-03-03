const ProjectContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-[90%] mx-auto mt-6 mb-[40px]">
      {/* Highlight News Section */}
      <div className="relative border border-[#ff003c] border-[6px] h-[312px] cyber-glitch-1 ">
        <img
          alt="Cyberpunk 2077 Patch 2.21 image with characters in a car"
          className="w-full h-[300px] object-cover"
          src="/project/Bank.png"
        />
        <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 text-xs font-bold">
          CHATBOT FOR CUSTOMERS
        </div>
        <div className="absolute bottom-3 left-3 text-[#ff003c] text-2xl font-bold">
          CHATBOT USING TENSORFLOW PYTHON
        </div>
        <div className="absolute top-3 right-3 text-gray-400 text-xs">
          Final Project For Graduate
        </div>
      </div>

      {/* Other News Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 cyber-glitch-2">
        {[
          {
            src: "/project/Virtualreality.png",
            label: "VIRTUAL REALITY",
            text: "Virtual reality using Unity",
            bg: "bg-yellow-500",
          },
          {
            src: "/project/Bomberman.png",
            label: "BOMBERMAN GAME",
            bg: "bg-gray-300",
          },
          {
            src: "/project/Iot.png",
            label: "INTERNET OF THINGS",
            text: "Remote Control Car",
            bg: "bg-red-600",
          },
          {
            src: "/project/Movierec.png",
            label: "MOVIE RECOMMENDATION WEBSITE",
            text: "Website for movie using API",
            bg: "bg-yellow-500",
          },
        ].map((item, index) => (
          <div key={index} className="relative">
            <img
              alt={item.label}
              className="w-full h-[180px] object-cover"
              src={item.src}
            />
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div
              className={`absolute top-2 left-2 ${item.bg} text-black px-2 py-1 text-xs font-bold`}
            >
              {item.label}
            </div>
            {item.text && (
              <div className="absolute bottom-2 left-2 p-1 text-white text-sm font-semibold">
                {item.text}
              </div>
            )}
            <div className="absolute top-2 right-2 text-gray-400 text-xs">
              NEWS_
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContent;
