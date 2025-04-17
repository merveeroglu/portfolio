import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone  } from "react-icons/fa";


const Page = () => {
    const contactInfo = [
        {
          icon: <FaEnvelope className="text-blue-600 text-xl hover:text-blue-400 transition-colors duration-300" />,
          label: 'merve.erogluuu@gmail.com',
          href: 'mailto:merve.erogluuu@gmail.com',
        },
        {
          icon: <FaLinkedin className="text-blue-600 text-xl hover:text-blue-400 transition-colors duration-300" />,
          label: 'https://www.linkedin.com/in/merve-eroglu/',
          href: 'https://www.linkedin.com/in/merve-eroglu/',
        },
        {
          icon: <FaGithub className="text-blue-600 text-xl hover:text-blue-400 transition-colors duration-300" />,
          label: 'https://github.com/merveeroglu/',
          href: 'https://github.com/merveeroglu/',
        },
        {
          icon: <FaPhone className="text-blue-600 text-xl hover:text-blue-400 transition-colors duration-300" />,
          label: '+90 506 546 54 04',
        },
      ];
      
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full text-center">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Me</h1>

      <div className="space-y-6 text-left">
        {contactInfo.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            {item.icon}
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-gray-700">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Page