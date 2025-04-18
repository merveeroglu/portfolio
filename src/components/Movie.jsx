import React from "react";
import ProjectCard from "./ProjectCard";

const Movie = () => {
  return (
<ProjectCard
  title="🎬 Movie App (Next.js)"
  descriptionItems={[
    { label: "Frontend Framework", value: "Next.js 14" },
    { label: "Programming Language", value: "JavaScript" },
    { label: "Styling", value: "Tailwind CSS" },
    { label: "API Integration", value: "TMDB API" },
    { label: "State Management", value: "React Hooks" },
    { label: "Routing", value: "Next.js App Router" },
    { label: "UI Components", value: "Custom Components" },
    { label: "HTTP Client", value: "Fetch API" },
  ]}
  codeLink="https://github.com/merveeroglu/Movie-App?tab=readme-ov-file"
  mainImage="/movie.png"
  previewImages={["/movie2.png", "/movie3.png", "/movie4.png"]}
/>

  );
};

export default Movie;
