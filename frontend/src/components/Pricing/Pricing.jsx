import React from "react";
import { HiCheck, HiX } from "react-icons/hi";
import Sectiontitle from "../../Pages/Sectiontitle";

const Pricing = () => {
  const plans = [
    {
      id: 1,
      name: "Free Plan",
      price: "$0",
      active: false,
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: false },
        { text: "Massa ultricies mi quis hendrerit", available: false },
      ],
    },
    {
      id: 2,
      name: "Business Plan",
      price: "$29",
      active: true,
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: true },
        { text: "Massa ultricies mi quis hendrerit", available: true },
      ],
    },
    {
      id: 3,
      name: "Developer Plan",
      price: "$49",
      active: false,
      features: [
        { text: "Quam adipiscing vitae proin", available: true },
        { text: "Nec feugiat nisl pretium", available: true },
        { text: "Nulla at volutpat diam uteera", available: true },
        { text: "Pharetra massa massa ultricies", available: true },
        { text: "Massa ultricies mi quis hendrerit", available: true },
      ],
    },
  ];

  return (
    <div className="bg-[#f4f6f9] py-10">
        <Sectiontitle title="Pricing" />
    <div className="px-6 py-20 max-w-7xl mx-auto">

      <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`bg-white p-8 rounded-xl shadow-md border transition 
            ${plan.active ? "border-blue-400 shadow-lg scale-105" : ""}`}
          >
            {/* اسم الباقة */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {plan.name}
            </h3>

            {/* السعر */}
            <p className="text-4xl font-semibold text-blue-600">
              {plan.price}
              <span className="text-gray-500 text-base font-normal"> / month</span>
            </p>

            {/* المميزات */}
            <ul className="mt-6 space-y-3">
              {plan.features.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  {item.available ? (
                    <HiCheck className="text-green-500 text-xl" />
                  ) : (
                    <HiX className="text-red-400 text-xl" />
                  )}
                  <span
                    className={`${item.available ? "" : "line-through text-gray-400"}`}
                  >
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* زر الشراء */}
            <div className="mt-8 text-center">
              <button
                className={`px-6 py-2 rounded-full font-medium border transition 
                ${
                  plan.active
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "border-blue-500 text-blue-600 hover:bg-blue-50"
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
    </div>
  );
};

export default Pricing;
