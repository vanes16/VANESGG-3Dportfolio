import { Nametag } from "../components/Nametag";
import { Suspense } from "react";

export const Contacts = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center scale-100 origin-center">
      <Suspense>
        <Nametag />
      </Suspense>
    </div>
  );
};
