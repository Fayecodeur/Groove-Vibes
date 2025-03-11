import React from "react";
import { FaStar } from "react-icons/fa";

export default function Rewiews() {
  return (
    <section id="rewiews" className="py-12 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-white text-center font-bold text-xl md:text-2xl uppercase">
          Témoignages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center  gap-4">
          <div className=" p-8 rounded-lg flex justify-center items-center flex-col ">
            <img
              src="/images/personne_1.jpg"
              className="w-16 h-16 object-cover rounded-full"
              alt="Sophie Lemoine"
            />
            <div className="flex mt-1 items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <h4 className="font-bold text-md uppercase mt-2">Sophie Lemoine</h4>
            <p className="text-center mt-2 text-base text-slate-400">
              La musique de ce site m'a vraiment transportée ! Les playlists
              sont incroyables, et chaque chanson me fait découvrir de nouveaux
              horizons. Je recommande vivement à tous les passionnés de musique
            </p>
          </div>
          <div className=" p-8 rounded-lg flex justify-center items-center flex-col ">
            <img
              src="/images/personne_2.jpg"
              className="w-16 h-16 object-cover rounded-full"
              alt="Julien Martin"
            />
            <div className="flex mt-1 items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <h4 className="font-bold text-md uppercase mt-2">Julien Martin</h4>
            <p className="text-center mt-2 text-base text-slate-400">
              Je suis vraiment ravi de l'interface et de la facilité de
              navigation. En plus, les suggestions de musique sont toujours
              parfaitement adaptées à mes goûts. Un site incontournable pour les
              mélomanes !
            </p>
          </div>
          <div className=" p-8 rounded-lg flex justify-center items-center flex-col ">
            <img
              src="/images/personne_3.jpg"
              className="w-16 h-16 object-cover rounded-full"
              alt="Camille Dubois"
            />
            <div className="flex mt-1 items-center">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
            </div>
            <h4 className="font-bold text-md uppercase mt-2">
              Camille Dubois{" "}
            </h4>
            <p className="text-center mt-2 text-base text-slate-400">
              Une expérience musicale unique ! J'ai trouvé de nouveaux artistes
              que j'adore grâce à ce site. La diversité des genres et la qualité
              des recommandations sont impressionnantes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
