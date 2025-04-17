"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import MenuItem from "./MenuItem";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
});

const Header = () => {
  const router = useRouter();
  const menu = [
    {
      name: (
        <div className="mt-0.5">
          <FaHome />
        </div>
      ),
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Skill",
      url: "/skill",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Contact Me",
      url: "/contact-me",
    },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-white shadow-md py-4 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Logo / Name */}
        <h1
          onClick={() => router.push("/")}
          className="text-3xl font-bold relative group cursor-pointer"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400">
            Merve Eroglu
          </span>
          <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-blue-950 mt-1 rounded-full"></span>
        </h1>

        {/* Menü */}
        <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-lg md:text-xl">
          {menu.map((mn, i) => (
            <MenuItem mn={mn} key={i} />
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
