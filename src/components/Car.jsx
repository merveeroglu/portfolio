import React from "react";
import { FaCode } from "react-icons/fa";
import Image from "next/image";

const Car = () => {
  return (
    <div className="flex m-20 mx-30 justify-between">
      <ul className="flex flex-col  text-xl max-w-4xl text-gray-800 ">
        <h3 className="text-2xl font-semibold mt-10 mb-4">
          🚗 Car Rental Platform
        </h3>

        <li>
          <span className="font-bold">Frontend Framework:</span> React
        </li>
        <li>
          <span className="font-bold">Build Tool:</span> Vite
        </li>
        <li>
          <span className="font-bold">Styling:</span> React-Bootstrap, Custom
          CSS
        </li>
        <li>
          <span className="font-bold">State Management:</span> Redux
        </li>
        <li>
          <span className="font-bold">Routing & Architecture:</span>{" "}
          Component-based structure
        </li>
        <li>
          <span className="font-bold">API Integration:</span> Real REST APIs
          with Axios
        </li>
        <li>
          <span className="font-bold">Features:</span> Admin and user roles, car
          reservations up to payment
        </li>
        <li>
          <span className="font-bold">UI Libraries:</span> Swiper, SweetAlert2,
          React-Data-Table-Component
        </li>
        <li>
          <span className="font-bold">Form Validation:</span> Formik & Yup
        </li>
        <li>
          <span className="font-bold">Project Management:</span> Jira & GitHub
          integration
        </li>

        <a
          href="https://www.vantageride.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex items-center justify-center gap-2 bg-gray-700 hover:bg-blue-950 text-white text-center text-sm font-medium py-2 px-2 w-[100px] rounded-md shadow-md transition-all duration-300"
        >
          WEBSITE
        </a>
      </ul>
      <div>
        <Image
          src="/car.png"
          alt="disney"
          width={600}
          height={600}
          className="object-contain"
        />
        <div className="flex gap-4 mt-3">
          <Image
            src="/car2.png"
            alt="disney"
            width={190}
            height={150}
            className="object-contain"
          />
          <Image
            src="/car3.png"
            alt="disney"
            width={190}
            height={150}
            className="object-contain"
          />{" "}
          <Image
            src="/car4.png"
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

export default Car;
