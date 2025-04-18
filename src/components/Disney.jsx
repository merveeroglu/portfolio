import React from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Disney = () => {
  return (
    <ProjectCard
      title="🎬 Disney"
      descriptionItems={[
        { label: "Markup Language", value: "HTML5" },
        { label: "Styling", value: "CSS3" },
        { label: "Framework", value: "Bootstrap 5" },
        { label: "Layout", value: "Responsive Design" },
        { label: "Animation", value: "CSS Transitions & Keyframes" },
        { label: "UI Components", value: "Custom Components" },
      ]}
      codeLink="https://github.com/merveeroglu/Disney"
      liveLink="https://merve-eroglu-disney.netlify.app/"
      mainImage="/disney.png"
      previewImages={["/disney2.png", "/disney3.png", "/disney4.png"]}
    />
  );
};

export default Disney;
