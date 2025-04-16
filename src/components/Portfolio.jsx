import React from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="flex m-20 mx-30 justify-between">
      <ul className="flex flex-col  text-xl max-w-4xl text-gray-800 mt-10">
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          🌐 Portfolio Website
        </h3>{" "}
        <li>
          <span className="font-bold">Frontend Framework:</span> Next.js 14
        </li>
        <li>
          <span className="font-bold">Programming Language:</span> JavaScript
        </li>
        <li>
          <span className="font-bold">Styling:</span> Tailwind CSS
        </li>
        <li>
          <span className="font-bold">Routing:</span> Next.js App Router
        </li>
        <li>
          <span className="font-bold">State Management:</span> React Hooks
        </li>
        <li>
          <span className="font-bold">UI Components:</span> Custom Components
        </li>
        <a
          href="https://github.com/merveeroglu/Movie-App?tab=readme-ov-file"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-center gap-2 bg-gray-700 hover:bg-blue-950 text-white text-center text-sm font-medium py-2 px-2 w-[100px] rounded-md shadow-md transition-all duration-300"
        >
          <FaCode size={16} />
          CODE
        </a>
      </ul>
      <div>
        <Image
          src="/port.png"
          alt="portfolio"
          width={600}
          height={600}
          className="object-contain"
        />{" "}
        <div className="flex gap-4 mt-3">
          <Image
            src="/port2.png"
            alt="Merve"
            width={190}
            height={150}
            className="object-contain"
          />{" "}
          <Image
            src="/port3.png"
            alt="Merve"
            width={190}
            height={100}
            className="object-contain"
          />{" "}
          <Image
            src="/port4.png"
            alt="Merve"
            width={190}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
