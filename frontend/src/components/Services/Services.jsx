import React from "react";
import { FaCode, FaPaintBrush, FaLayerGroup } from "react-icons/fa";
import Sectiontitle from "../../Pages/Sectiontitle";

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} />,
      title: "Web Development",
      desc: "Building fast, secure, and scalable web applications using modern technologies.",
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: "UI / UX Design",
      desc: "Creating modern and intuitive user interfaces with a strong focus on usability.",
    },
    {
      icon: <FaLayerGroup size={40} />,
      title: "Full Stack Solutions",
      desc: "Complete end-to-end solutions covering frontend, backend, and database.",
    },
  ];

  return (
    <div className="mt-10 bg-[#f4f6f9] py-10">
          <Sectiontitle title="Services" />

    <div className="mb-20 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-5 mt-10">
      
      {services.map((item, i) => (
        <div
          key={i}
          className="
            bg-white 
            p-8 
            rounded-2xl 
            shadow-lg 
            border 
            hover:shadow-2xl
            hover:-translate-y-2 
            transition-all 
            duration-300 
            cursor-pointer 
            group
          "
        >
          {/* ICON */}
          <div className="text-blue-600 mb-5 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-2xl font-bold text-gray-800">
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-3 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Services;
