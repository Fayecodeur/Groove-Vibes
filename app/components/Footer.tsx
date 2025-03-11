import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer id="contact" className="py-10 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Link href="#home">
            <Image
              className="rounded-full"
              src="/images/logo2.jpg"
              alt="logo groove-music"
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Texte de remerciement */}
        <div>
          <p className="text-sm text-center text-slate-300">
            Nous vous remercions de faire partie de notre communauté musicale.
            Restez connecté pour découvrir encore plus de musique, de nouveautés
            et d'inspirations. À très bientôt !
          </p>
        </div>

        {/* Email et icônes */}
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          {/* Email */}
          <p className="text-base font-bold text-orange-500">
            Email : groovemusic@contact.com
          </p>

          {/* Icônes sociales */}
          <div className="flex justify-center items-center gap-4">
            <Link href={"#"}>
              <FaFacebookF className="text-2xl hover:text-orange-500" />
            </Link>
            <Link href={"#"}>
              <FaInstagram className="text-2xl hover:text-orange-500" />
            </Link>
            <Link href={"#"}>
              <FaYoutube className="text-3xl hover:text-orange-500" />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-6">
        &copy; Demba Faye - Tous droits réservés - 2025
      </p>
    </footer>
  );
}
