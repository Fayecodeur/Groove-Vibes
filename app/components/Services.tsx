import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Titre principal */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold uppercase mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD821A] via-[#EB2981] to-[#FD821A]">
              Nos Services
            </span>
          </h1>
          <p className="text-lg text-white text-center leading-relaxed p-8">
            Plongez dans l'univers de la musique avec nos services uniques !
            Participez aux meilleurs événements et festivals pour vivre des
            expériences live inoubliables, entouré de passionnés. Profitez
            également d'une écoute en streaming sans interruption, avec une
            bibliothèque musicale riche et variée accessible partout, à tout
            moment. Et pour personnaliser votre expérience, créez vos propres
            playlists sur mesure, adaptées à vos goûts, vos humeurs et chaque
            moment de votre journée.
          </p>
        </div>

        {/* Cartes des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte 1 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <Image
              src="/images/icone1.png"
              height={60}
              width={60}
              alt="Événements et Festivals"
            />
            <h2 className="text-xl font-semibold uppercase mt-4">
              Événements et Festivals
            </h2>
            <p className="text-gray-500 mt-2">
              Découvrez des événements, concerts et festivals inoubliables où la
              passion pour la musique prend vie.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <Image
              src="/images/icone2.png"
              height={60}
              width={60}
              alt="Écoute en Streaming"
            />
            <h2 className="text-xl font-semibold uppercase mt-4">
              Écoute en Streaming
            </h2>
            <p className="text-gray-500 mt-2">
              Accédez à une vaste bibliothèque musicale et profitez d'une écoute
              illimitée et sans interruption.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
            <Image
              src="/images/icone3.png"
              height={60}
              width={60}
              alt="Playlists Personnalisées"
            />
            <h2 className="text-xl font-semibold uppercase mt-4">
              Playlists Personnalisées
            </h2>
            <p className="text-gray-500 mt-2">
              Créez ou recevez des playlists adaptées à vos goûts musicaux, pour
              chaque moment de votre journée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
