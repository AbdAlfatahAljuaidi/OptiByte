import React, { useState } from "react";
import aboutImg from "../../assets//WorkProcess/steps-1.webp"; 

const Details = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      num: "01",
      title: "Non consectetur a erat nam at lectus urna duis?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    },
    {
      num: "02",
      title: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      content:
        "Aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare.",
    },
    {
      num: "03",
      title: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      content:
        "Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque.",
    },
  ];

  return (
    <div className="bg-[#f4f6f9] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT SECTION */}
        <div>
          <h2 className="text-4xl md:text-3xl font-bold text-[#1f355b] leading-tight">
            Eum ipsam laborum deleniti{" "}
            <span className="text-blue-600">velit pariatur architecto aut nihil</span>
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* ACCORDION LIST */}
          <div className="mt-12 space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-5 hover:shadow-md duration-300"
              >
                {/* Item Header */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggle(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-bold text-xl">{item.num}</span>
                    <p className="text-gray-700 font-medium">{item.title}</p>
                  </div>

                  <span className="text-gray-400 text-2xl duration-300">
                    {openIndex === index ? "˄" : "›"}
                  </span>
                </div>

                {/* Item Content (dropdown) */}
                {openIndex === index && (
                  <p className="mt-4 text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-4">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="About Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
