import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrAppleAppStore } from "react-icons/gr";
import { FaStar } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full min-h-[100vh] flex flex-col items-center justify-center py-[100px] text-white border-b">
      <h1 className="text-lg md:text-3xl font-bold uppercase text-center">
        Plongez dans l'Univers de la Musique avec{" "}
        <span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#FD821A] via-[#EB2981] to-[#FD821A]">
          GrooveVibes
        </span>
      </h1>
      <p className=" md:text-lg text-center mt-3">
        GrooveVibes, votre espace pour vibrer au rythme de la musique
      </p>
      <p className="mt-3">Disponible sur l'App Stor et Play Stor</p>

      <div className="flex gap-2 mt-2 ">
        <IoLogoGooglePlaystore className="text-3xl " />
        <GrAppleAppStore className="text-3xl " />
      </div>
      <div className="flex mt-1 items-center">
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <FaStar className="text-yellow-400" />
        <span className="mt-1 ml-2">5/5</span>
      </div>
    </header>
  );
}
