import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col items-center pt-5 gap-5  min-h-screen bg-amber-50">
      <h1 className="text-4xl font-bold">ABOUT</h1>

      <div className="flex items-center justify-center">
        <ul className="flex flex-col gap-8 text-center text-xl max-w-4xl text-gray-800">
          <li>
            Frontend Developer with 2+ years of experience in designing and
            optimizing high performance web applications.
          </li>
          <li>
            Proficient in JavaScript, TypeScript, React.js, Redux Toolkit,
            Vite.js, HTML, CSS (Sass, Bootstrap), and RESTful APIs.
          </li>
          <li>
            Experienced in Agile/Scrum methodologies, CI/CD pipelines, and
            cross-functional collaboration.
          </li>
          <li>
            Skilled in building scalable, responsive and user-friendly
            applications using modern UI frameworks like Ant Design.
          </li>
          <li>
            Contributed to projects for Turkish Airlines, SunExpress,
            e-commerce, HR, and finance sectors.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
