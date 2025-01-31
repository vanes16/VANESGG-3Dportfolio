import "./style/Timeline.css";
export const Timeline = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h3 className="font-primary text-gray-400 text-sm mb-2">
        What I Have Done
      </h3>
      <h1 className="font-primary text-4xl font-extrabold text-gray-800 mb-10">
        TIMELINE.
      </h1>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600"></div>
        <div className="flex flex-col items-center space-y-12">
          <div className="relative flex items-center w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 neon-dot"></div>
            <div className="w-1/2 text-right pr-8">
              <div className="neon-border">
                <h2 className="text-xl font-bold">University</h2>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <p className="text-lg font-bold">2020-2023</p>
            </div>
          </div>
          <div className="relative flex items-center w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 neon-dot"></div>
            <div className="w-1/2 text-right pr-8">
              <p className="text-lg font-bold">2023-2025</p>
            </div>
            <div className="w-1/2 pl-8">
              <div className="neon-border">
                <h2 className="text-xl font-bold">University</h2>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex items-center w-full">
            <div className="absolute left-1/2 transform -translate-x-1/2 neon-dot"></div>
            <div className="w-1/2 text-right pr-8">
              <div className="neon-border">
                <h2 className="text-xl font-bold">Future Education</h2>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="w-1/2 pl-8">
              <p className="text-lg font-bold">2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
