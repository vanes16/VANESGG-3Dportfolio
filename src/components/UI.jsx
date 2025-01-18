import { useEffect } from "react";

export const UI = () => {
  return (
    <main className="pointer-events-none fixed z-10 inset-0 p-10">
      <div
        className={`absolute inset-0 bg-black z-10 pointer-events-none flex items-center justify-center transition-opacity  duration-1000 ${
          loading ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src="/images/logo.png"
          className="w-40 animate-pulse"
        />
      </div>
      
      <div className="mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <a className="pointer-events-auto" href="https://github.com/vanes16/VANESGG-3Dportfolio/">
            <img className="w-40" src="/images/logo.png" />
          </a>
        </div>
        <div className="flex flex-col gap-6">
        </div>
      </div>
    </main>
  );
};
