import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  return (
    <ProjectCard
      title="🌐 Portfolio Website"
      descriptionItems={[
        { label: "Frontend Framework", value: "Next.js 14" },
        { label: "Programming Language", value: "JavaScript" },
        { label: "Styling", value: "Tailwind CSS" },
        { label: "Routing", value: "Next.js App Router" },
        { label: "State Management", value: "React Hooks" },
        { label: "UI Components", value: "Custom Components" },
      ]}
      codeLink="https://github.com/merveeroglu/portfolio"
      liveLink="https://merveportfolio.netlify.app/"
      mainImage="/port.png"
      previewImages={["/port2.png", "/port3.png", "/port4.png"]}
    />
  );
};

export default Portfolio;
