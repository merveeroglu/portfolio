import React from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const Movie = () => {
  return (
    <div className="flex m-20 mx-30 justify-between">
      <ul className="flex flex-col  text-xl max-w-4xl text-gray-800">
      <h3 className="text-2xl font-semibold mt-10 mb-4">🎬 Movie App (Next.js)</h3>
        <li>
          <strong>Frontend Framework:</strong> Next.js 14
        </li>
        <li>
          <strong>Programming Language:</strong> JavaScript
        </li>
        <li>
          <strong>Styling:</strong> Tailwind CSS
        </li>
        <li>
          <strong>API Integration:</strong> TMDB API
        </li>
        <li>
          <strong>State Management:</strong> React Hooks
        </li>
        <li>
          <strong>Routing:</strong> Next.js App Router
        </li>
        <li>
          <strong>UI Components:</strong> Custom Components
        </li>
        <li>
          <strong>HTTP Client:</strong> Fetch API
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
          src="/movie.png"
          alt="Merve"
          width={600}
          height={600}
          className="object-contain"
        />{" "}
        <div className="flex gap-4 mt-3">
          <Image
            src="/movie2.png"
            alt="Merve"
            width={190}
            height={150}
            className="object-contain"
          />{" "}
          <Image
            src="/movie3.png"
            alt="Merve"
            width={190}
            height={100}
            className="object-contain"
          />{" "}
          <Image
            src="/movie4.png"
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

export default Movie;
