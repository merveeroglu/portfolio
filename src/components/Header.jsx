'use client'
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import MenuItem from './MenuItem';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaHome} from "react-icons/fa"

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
});


const Header = () => {
  const router = useRouter()
  const menu = [
    {
      name:<div className='mt-0.5'><FaHome /></div> ,
      url: "/",
    },
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Skill",
      url: "/skill"
    },
    {
      name: "Projects",
      url: "/projects"
    },    
    {
      name: "Contact Me",
      url: "/contact-me"
    },    

  ]
  return (
    <header className="cursor-pointer bg-gradient-to-r from-gray-800 via-gray-800 to-gray-900 text-white shadow-md py-6 px-4 md:px-10 flex flex-col md:flex-row items-center justify-between">
    {/* Logo / Name */}
    {/* <Image
          src="/logo.png"
          alt="Merve Logo"
          width={40}
          height={10}
          className="object-contain"
        /> */}
    <h1 onClick={()=>router.push('/')} className="text-3xl font-bold relative group">
      <span className={`text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-400`}>
        Merve Eroglu
      </span>
      <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-blue-950 mt-1 rounded-full"></span>
    </h1>
    <div className="flex gap-6 mt-4 md:mt-0 text-xl">
    {
      menu.map((mn,i)=>(
        <MenuItem mn={mn} key={i}/>
      ))
    }</div>



    {/* Navigation / Social */}
    {/* <nav className="flex gap-6 mt-4 md:mt-0 text-xl">
      <a
        href="https://github.com/kullaniciadiniz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-200 transition-colors duration-300"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/kullaniciadiniz"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors duration-300"
      >
        <FaLinkedin />
      </a>
      <a
        href="mailto:email@ornek.com"
        className="hover:text-green-400 transition-colors duration-300"
      >
        <FaEnvelope />
      </a>
    </nav> */}
  </header>
  )
}

export default Header