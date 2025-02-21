const ProjectContent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 w-[90%] mx-auto mt-6 mb-[40px]">
      {/* Highlight News Section */}
      <div className="relative border border-[#ff003c] border-[6px] h-[312px] cyber-glitch-1 ">
        <img
          alt="Cyberpunk 2077 Patch 2.21 image with characters in a car"
          className="w-full h-[300px] object-cover"
          src="https://storage.googleapis.com/a1aa/image/Cilkm8jBH62P1Yy8LrHGQnkqm_W2jwOPHHtHFaq2bBk.jpg"
        />
        <div className="absolute top-3 left-3 bg-yellow-500 text-black px-2 py-1 text-xs font-bold">
          PATCH 2.21
        </div>
        <div className="absolute bottom-3 left-3 text-[#ff003c] text-2xl font-bold">
          PATCH 2.21
        </div>
        <div className="absolute top-3 right-3 text-gray-400 text-xs">
          23.01.2025
        </div>
      </div>

      {/* Other News Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            src: "https://storage.googleapis.com/a1aa/image/eqqKK7iFj3Mt3va89jt1CvKZCFRfnELGGxI4ztJzGlI.jpg",
            label: "PHOTO MODE CHALLENGE",
            text: "TAKE YOUR SHOT IN PHOTO MODE",
            bg: "bg-yellow-500",
          },
          {
            src: "https://storage.googleapis.com/a1aa/image/mqrC35SSNS_EU064-SEOSTXaf5RjCxGWKXgL13rGdcI.jpg",
            label: "UPDATE 2.2 IS LIVE!",
            bg: "bg-gray-800",
          },
          {
            src: "https://storage.googleapis.com/a1aa/image/1D2PC_lvUW8ZJK9iQpM9D3EEWx5NNBlpk8TtP9H1AWE.jpg",
            label: "@REDSTREAMS",
            text: "REDSTREAMS – UPDATE 2.2",
            bg: "bg-red-600",
          },
          {
            src: "https://storage.googleapis.com/a1aa/image/1Ge5_VBzwrKUFJgIJZ5ExithtTKYYzui-x4zxtWi7Qc.jpg",
            label: "COMING TO MACS",
            text: "JUST ANNOUNCED – CYBERPUNK",
            bg: "bg-yellow-500",
          },
        ].map((item, index) => (
          <div key={index} className="relative">
            <img
              alt={item.label}
              className="w-full h-[180px] object-cover"
              src={item.src}
            />
            <div
              className={`absolute top-2 left-2 ${item.bg} text-black px-2 py-1 text-xs font-bold`}
            >
              {item.label}
            </div>
            {item.text && (
              <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
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
