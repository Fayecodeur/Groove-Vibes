"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b fixed top-0 left-0 w-full z-50 shadow-lg  bg-black">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link href="#home">
          <Image
            className="rounded-full"
            src="/images/logo2.jpg"
            alt="logo groove-music"
            width={40}
            height={40}
          />
        </Link>
        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-bold">
          <li>
            <Link href="#home" className="hover:text-orange-500">
              Acceuil
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-[#FD821A]">
              À propos
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-[#FD821A]">
              Services
            </Link>
          </li>
          <li>
            <Link href="#newsletter" className="hover:text-[#FD821A]">
              Newsletter
            </Link>
          </li>

          <li>
            <Link href="#rewiews" className="hover:text-[#FD821A]">
              Témoignages
            </Link>
          </li>
        </ul>

        {/* Button */}
        <Link
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-[#FD821A] via-[#EB2981] to-[#FD821A] px-4 py-2 rounded-full font-bold"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden shadow-lg">
          <li className="py-2 px-4 hover:text-orange-500">
            <Link href="#home" className="hover:text-orange-500">
              Acceuil
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-orange-500">
            <Link href="#about" className="hover:text-[#FD821A]">
              À propos
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-orange-500">
            <Link href="#services" className="hover:text-[#FD821A]">
              Services
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-orange-500">
            <Link href="#newsletter" className="hover:text-[#FD821A]">
              Newsletter
            </Link>
          </li>
          <li className="py-2 px-4 hover:text-orange-500">
            <Link href="#rewiews" className="hover:text-[#FD821A]">
              Témoignages
            </Link>
          </li>

          <li className="py-2 px-4">
            <Link
              href="#contact"
              className="w-full bg-gradient-to-r from-[#FD821A] via-[#EB2981] to-[#FD821A] px-4 py-2 rounded-full font-bold text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
