import React, { useState } from "react";
import { FiLink, FiInfo } from "react-icons/fi"; // أيقونات اللينك + التفاصيل

import Img1 from "../../assets/Portfolio/portfolio-1.webp";
import Img2 from "../../assets/Portfolio/portfolio-portrait-2.webp";
import Img3 from "../../assets/Portfolio/portfolio-portrait-3.webp";
import Img4 from "../../assets/Portfolio/portfolio-4.webp";
import Img5 from "../../assets/Portfolio/portfolio-7.webp";
import Img6 from "../../assets/Portfolio/portfolio-9.webp";
import Sectiontitle from "../../Pages/Sectiontitle";

const Portfolio = () => {
  const filters = ["All", "App", "Card", "Web"];

  const items = [
    { id: 1, category: "App", img: Img1 },
    { id: 2, category: "Card", img: Img2 },
    { id: 3, category: "Web", img: Img3 },
    { id: 4, category: "App", img: Img4 },
    { id: 5, category: "Card", img: Img5 },
    { id: 6, category: "Web", img: Img6 },
  ];

  const [active, setActive] = useState("All");

  const filteredItems =
    active === "All"
      ? items
      : items.filter((item) => item.category === active);

  return (

    <div className="py-16 ">
        <Sectiontitle title="Portfolio" />
    <div className="px-8 py-16  max-w-6xl mx-auto">

      {/* ======== الفلترة ======== */}
      <div className="flex justify-center gap-6 mb-10">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`px-4 py-2 rounded-full text-sm transition 
            ${
              active === filter
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ======== الصور ======== */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="relative group overflow-hidden rounded-xl shadow-lg">

            {/* الصورة */}
            <img
              src={item.img}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              alt=""
            />

            {/* Overlay عند الـ Hover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* الأيقونات */}
            <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition duration-300">

              {/* أيقونة فتح الصورة */}
              <a
                href={item.img}
                target="_blank"
                className="p-3 bg-white rounded-full shadow hover:scale-110 transition"
              >
                <FiLink size={22} />
              </a>

              {/* أيقونة التفاصيل */}
              <button
                onClick={() => alert(`تفاصيل الصورة رقم ${item.id}`)}
                className="p-3 bg-white rounded-full shadow hover:scale-110 transition"
              >
                <FiInfo size={22} />
              </button>

            </div>

          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
