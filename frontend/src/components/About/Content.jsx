import React from "react";
import aboutImg from "../../assets/About/About.png"; // غيّر الصورة حسب مشروعك

const Content = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-6 md:px-0 my-20">

      {/* FLOATING GRADIENT SHAPES */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute top-20 -right-10 w-56 h-56 bg-blue-300 rounded-full blur-3xl opacity-40 -z-10"></div>

      {/* THE MAIN ABOUT SECTION */}
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* LEFT SIDE — IMAGE WITH CREATIVE EFFECT */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-blue-300 opacity-40 blur-xl rounded-3xl -z-10"></div>

          <img 
            src={aboutImg} 
            alt="About Us"
            className="w-full h-[370px] md:h-[450px] object-cover rounded-3xl 
                       hover:scale-105 duration-500"
          />

       
        </div>

        {/* RIGHT SIDE — TEXT STORY */}
        <div className="space-y-6">

          <h3 className="text-3xl font-bold text-blue-600 leading-tight">
            We Build Digital Experiences  
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            Our journey started with a simple vision — creating digital products that feel natural,
            powerful, and meaningful. We believe that technology should empower people, not complicate life.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Today, we combine creativity with engineering to craft websites, platforms, and systems 
            that are fast, intuitive, and beautifully designed for modern users.
          </p>

          {/* LIST WITH ICON-LIKE STYLE WITHOUT CARDS */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              High-quality, scalable development.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              User-centered design that feels effortless.
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
              Strong technical expertise and modern tools.
            </li>
          </ul>

        </div>

      </div>

    </div>
  );
};

export default Content;
