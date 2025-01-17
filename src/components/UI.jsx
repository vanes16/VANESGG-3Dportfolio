import { useEffect } from "react";

export const UI = () => {
  return (
    <main className="pointer-events-none fixed z-10 inset-0 p-10">
      <div className="mx-auto h-full max-w-screen-xl w-full flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <a
            className="pointer-events-auto"
            href="https://lessons.wawasensei.dev/courses/react-three-fiber"
          >
            <img className="w-20" src="/images/wawasensei-white.png" />
          </a>
        </div>
        <div className="flex flex-col gap-6">
        </div>
      </div>
    </main>
  );
};
