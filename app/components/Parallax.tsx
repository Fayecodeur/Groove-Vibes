import React from "react";

export default function Parallax() {
  return (
    <section
      id="newsletter"
      className="py-12 md:py-24 w-full min-h-[500px] bg-fixed bg-center bg-cover object-cover relative"
      style={{
        backgroundImage: "url('/images/paralax2.webp')",
      }}
    >
      {/* Overlay semi-transparent pour améliorer la lisibilité du texte */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="max-w-[700px] mx-auto flex justify-center items-center flex-col gap-3 relative z-10 text-center">
        <h2 className="text-white font-extrabold text-xl md:text-2xl uppercase">
          Newsletter
        </h2>
        <p className="p-8">
          Abonnez-vous à notre newsletter pour ne rien manquer des dernières
          tendances musicales, des sorties d'albums et des événements exclusifs.
          Que vous soyez fan de nouveaux artistes ou passionné par les
          classiques, nous vous apporterons les meilleures recommandations
          musicales directement dans votre boîte mail. Rejoignez notre
          communauté et soyez les premiers à découvrir ce qui se cache derrière
          chaque note !
        </p>
        <input
          className="w-full text-center p-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FD821A]"
          type="email"
          placeholder="Adresse email"
        />

        <button className="bg-gradient-to-r from-[#FD821A] via-[#EB2981] to-[#FD821A] px-6 py-2 rounded-full font-bold text-white hover:shadow-lg hover:scale-105 transition-all duration-200">
          S'abonner
        </button>
      </div>
    </section>
  );
}
