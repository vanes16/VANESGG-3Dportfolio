import { Nametag } from "../components/Nametag";
import { Suspense } from "react";

export const Contacts = () => {
  return (
    <div id="Contacts" className="w-full h-screen justify-center items-center scale-100 origin-center relative">
      <div className="cyber-razor-bottom bg-cyan w-full absolute top-[-46px] h-[10px]"></div>
      <div className="cyber-razor-bottom bg-red w-full absolute top-[-48px] h-[10px]"></div>
      <div className="cyber-razor-bottom bg-whiteG1 w-full absolute top-[-50px] h-[10px]"></div>
      <div className="border-b-2 border-cyan-500 w-full absolute"></div>
      <Suspense>
        <Nametag />
      </Suspense>
    </div>
  );
};
