import React from "react";
import ProjectCard from "./ProjectCard";

const Car = () => {
  return (
      <ProjectCard
            title="🚗 Car Rental Platform"
            descriptionItems={[
              { label: "Frontend Framework", value: "React" },
              { label: "Build Tool", value: "Vite" },
              { label: "Styling", value: "React-Bootstrap, Custom CSS" },
              { label: "Routing", value: "React Router" },
              { label: "State Management", value: "Redux Toolkit" },
              { label: "API Integration", value: "Real REST APIs with Axios" },
              { label: "Features", value: "Admin and user roles, car reservations up to payment" },
              { label: "UI Libraries", value: "Swiper, SweetAlert2, React-Data-Table-Component" },
              { label: "Form Validation", value: "Formik & Yup" },
              { label: "Project Management", value: "Jira & GitHub integration" },
            ]}
            liveLink="https://www.vantageride.com/"
            mainImage="/car.png"
            previewImages={["/car2.png", "/car3.png", "/car4.png"]}
      />
  );
};

export default Car;
