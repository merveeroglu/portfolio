import React from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const ProjectCard = ({
  title,
  descriptionItems,
  codeLink,
  liveLink,
  mainImage,
  previewImages = [],
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 m-8 px-4 lg:px-16 mb-20 ">
      {/* Text & Links Section */}
      <ul className="w-full lg:w-1/2 flex flex-col text-base md:text-xl text-gray-800">
        <h3 className="text-lg md:text-2xl font-semibold mb-4">{title}</h3>

        {descriptionItems.map((item, index) => (
          <li key={index} className="mb-2">
            <span className="font-bold">{item.label}:</span> {item.value}
          </li>
        ))}

        <div className="flex flex-wrap gap-4 mt-6">
          {codeLink && (
            <a
              href={codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-blue-950 text-white text-sm font-medium py-2 px-4 rounded-md shadow transition duration-300"
            >
              <FaCode size={16} /> CODE
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-700 hover:bg-blue-950 text-white text-sm font-medium py-2 px-4 rounded-md shadow transition duration-300"
            >
              WEBSITE
            </a>
          )}
        </div>
      </ul>

      {/* Images Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        {mainImage && (
          <div className="w-full mb-4">
            <Image
              src={mainImage}
              alt="project main"
              width={600}
              height={400}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-4">
          {previewImages.map((imgSrc, i) => (
            <div key={i} className="w-1/3 sm:w-1/4 md:w-1/5">
              <Image
                src={imgSrc}
                alt={`preview ${i}`}
                width={190}
                height={100}
                className="w-full h-auto object-contain rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
