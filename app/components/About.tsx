import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 border-b ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-3">
            <h1 className="text-3xl font-bold uppercase mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FD821A] via-[#EB2981] to-[#FD821A]">
                À propos de nous
              </span>
            </h1>
            <p className="text-white leading-relaxed">
              Bienvenue chez **GrooveVibes**, votre espace dédié à la passion et
              à l'exploration musicale. Notre mission est de rassembler une
              communauté vibrante de mélomanes autour de découvertes sonores,
              d'inspirations créatives, et d'une expérience unique qui célèbre
              la richesse de la musique. Que vous soyez un amateur curieux ou un
              passionné confirmé, nous sommes là pour éveiller vos sens et
              nourrir votre amour pour les mélodies. Chez **GrooveVibes**, la
              musique ne se limite pas à des sons : c'est une véritable aventure
              culturelle et émotionnelle.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <Image
              src="/images/cassete2.webp"
              width={500}
              height={500}
              alt="Cassette de musique"
              className="w-full h-auto max-h-[300px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
