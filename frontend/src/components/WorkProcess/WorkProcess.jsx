import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import stepone from '../../assets/WorkProcess/steps-1.webp'
import step2 from '../../assets/WorkProcess/steps-2.webp'
import step3 from '../../assets/WorkProcess/steps-3.webp'
import Sectiontitle from "../../Pages/Sectiontitle";

const WorkProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Research & Analysis",
      text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.",
      points: ["Market Research", "Data Analysis", "User Feedback"],
      img: stepone,
    },
    {
      id: "02",
      title: "Design & Planning",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      points: ["Wireframing", "UI/UX Design", "Prototyping"],
      img: step2,
    },
    {
      id: "03",
      title: "Development & Launch",
      text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.",
      points: ["Development", "Testing", "Deployment"],
      img: step3,
    },
  ];

  return (
    <div className="py-14">
        <Sectiontitle title="WORK PROCESS" />

    <div className="w-full py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-4">

        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
          >
            {/* Image */}
            <div className="w-full">
              <img src={item.img} alt="" className="w-full" />
            </div>

            {/* Number circle */}
            <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center text-xl font-bold rounded-full mt-4">
              {item.id}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800 mt-4">{item.title}</h2>

            {/* Description */}
            <p className="text-gray-600 mt-2">{item.text}</p>

            {/* Bullet points */}
            <ul className="mt-4 space-y-2">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-700">
                  <FaCheckCircle className="text-blue-600" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>
    </div>
  );
};

export default WorkProcess;
