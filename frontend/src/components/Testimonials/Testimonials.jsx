import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Jena Karlis",
    job: "Store Owner",
    img: "https://i.pravatar.cc/100?img=1",
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
  },
  {
    id: 2,
    name: "Matt Brandon",
    job: "Freelancer",
    img: "https://i.pravatar.cc/100?img=5",
    text: "Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    name: "Sara Wilsson",
    job: "Designer",
    img: "https://i.pravatar.cc/100?img=20",
    text: "Quisquam facilis cum velit laborum corrupti fuga rerum quia deserunt dolore ipsum fugiat nulla pariatur.",
  },
  {
    id: 4,
    name: "John Larson",
    job: "Entrepreneur",
    img: "https://i.pravatar.cc/100?img=12",
    text: "Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto Slide كل 4 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 3 كروت: الحالي + اللي بعده + اللي بعده
  const getThree = () => {
    const arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(data[(index + i) % data.length]);
    }
    return arr;
  };

  return (
    <section className="py-20 px-6 text-center max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-gray-800">TESTIMONIALS</h2>

      <p className="max-w-2xl mx-auto mt-4 text-gray-600">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      {/* الكروت */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {getThree().map((item) => (
          <div
            key={item.id}
            className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition"
          >
            <img
              src={item.img}
              className="w-24 h-24 rounded-full mx-auto"
              alt=""
            />

            <h3 className="mt-5 text-lg font-bold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.job}</p>

            {/* النجوم */}
            <div className="flex justify-center text-yellow-400 mb-4">
              {[1, 2, 3, 4, 5].map((n) => (
                <FaStar key={n} />
              ))}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed relative">
              <FaQuoteLeft className="text-blue-300 inline mr-2" />
              {item.text}
              <FaQuoteRight className="text-blue-300 inline ml-2" />
            </p>
          </div>
        ))}
      </div>

      {/* الدوائر أسفل السلايدر */}
      <div className="flex justify-center mt-8 gap-2">
        {data.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition ${
              index === i ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;
