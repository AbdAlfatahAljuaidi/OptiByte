import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

import Img1 from "../../assets/Team/person-f-4.webp";
import Img2 from "../../assets/Team/person-f-8.webp";
import Img3 from "../../assets/Team/person-m-6.webp";
import Img4 from "../../assets/Team/person-m-7.webp";
import Sectiontitle from "../../Pages/Sectiontitle";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Walter White",
      job: "Chief Executive Officer",
      img: Img1,
      desc: "Explicabo voluptatem mollitia et repellat qui dolorum quasi",
    },
    {
      id: 2,
      name: "Sarah Jhonson",
      job: "Product Manager",
      img: Img2,
      desc: "Aut maiores voluptates amet et quis praesentium qui senda para",
    },
    {
      id: 3,
      name: "William Anderson",
      job: "CTO",
      img: Img3,
      desc: "Quisquam facilis cum velit laborum corrupti fuga rerum quia",
    },
    {
      id: 4,
      name: "Amanda Jepson",
      job: "Accountant",
      img: Img4,
      desc: "Dolorum tempora officiis odit laborum officiis et accusamus",
    },
  ];

  return (
    <div className="">
        <Sectiontitle title="Team" />
    <div className="px-6 py-20 max-w-6xl mx-auto">

      <p className="text-center max-w-2xl mx-auto mb-8 text-gray-600">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-6 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            {/* صورة */}
            <img
              src={member.img}
              className="w-28 h-28 rounded-full object-cover"
              alt={member.name}
            />

            {/* معلومات */}
            <div>
              <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.job}</p>
              <p className="text-gray-700 text-sm mb-3">{member.desc}</p>

              {/* أيقونات السوشيال */}
              <div className="flex items-center gap-3">
                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <RxCross2 size={16} />
                </button>

                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <FaFacebookF size={16} />
                </button>

                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <FaInstagram size={16} />
                </button>

                <button className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition">
                  <FaLinkedinIn size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default Team;
