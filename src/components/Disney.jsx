import React from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const Disney = () => {
  return (
    <div className="flex m-20 mx-30 justify-between">
      <ul className="flex flex-col  text-xl max-w-4xl text-gray-800 mt-10">
      
      <h3 className="text-2xl font-semibold mt-10 mb-4">
      🎬 Disney
        </h3>
        <li>
          <span className="font-bold">Markup Language:</span> HTML5
        </li>
        <li>
          <span className="font-bold">Styling:</span> CSS3
        </li>
        <li>
          <span className="font-bold">Framework:</span> Bootstrap 5
        </li>
        <li>
          <span className="font-bold">Layout:</span> Responsive Design
        </li>
        <li>
          <span className="font-bold">Animation:</span> CSS Transitions &
          Keyframes
        </li>
        <li>
          <span className="font-bold">UI Components:</span> Bootstrap Components
        </li>
        <div className="flex gap-2">
          <a
            href="https://github.com/merveeroglu/Disney"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center justify-center gap-2 bg-gray-700 hover:bg-blue-950 text-white text-center text-sm font-medium py-2 px-2 w-[100px] rounded-md shadow-md transition-all duration-300"
          >
            <FaCode size={16} />
            CODE
          </a>
          <a
            href="https://merve-eroglu-disney.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex items-center justify-center gap-2 bg-gray-700 hover:bg-blue-950 text-white text-center text-sm font-medium py-2 px-2 w-[100px] rounded-md shadow-md transition-all duration-300"
          >
            WEBSITE
          </a>
        </div>
      </ul>
      <div>
        <Image
          src="/disney.png"
          alt="disney"
          width={600}
          height={600}
          className="object-contain"
        />
        <div className="flex gap-4 mt-3">
          <Image
            src="/disney2.png"
            alt="disney"
            width={190}
            height={150}
            className="object-contain"
          />
          <Image
            src="/disney3.png"
            alt="disney"
            width={190}
            height={150}
            className="object-contain"
          />{" "}
          <Image
            src="/disney4.png"
            alt="disney"
            width={190}
            height={150}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Disney;
