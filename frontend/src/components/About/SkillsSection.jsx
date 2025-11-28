import React, { useEffect, useRef, useState } from "react";
import skillSectionImg from '../../assets/About/illustration.webp'

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const skills = [
    { label: "HTML", value: 100 },
    { label: "CSS", value: 90 },
    { label: "JAVASCRIPT", value: 75 },
    { label: "PHOTOSHOP", value: 55 },
  ];

  // Trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src={skillSectionImg}
            alt="Skills Illustration"
            className="w-full object-contain"
          />
        </div>

        {/* RIGHT TEXT */}
        <div>
          <h2 className="text-4xl md:text-3xl font-bold text-[#1f355b] leading-tight">
            Voluptatem dignissimos provident quasi corporis voluptas
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* SKILLS */}
          <div className="mt-10 space-y-6">

            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-gray-700">
                    {skill.label}
                  </span>
                  <span className="text-sm font-semibold text-gray-700">
                    {skill.value}%
                  </span>
                </div>

                <div className="w-full bg-gray-200 h-3 rounded-full">
                  <div
                    className="h-3 bg-[#1f355b] rounded-full transition-all duration-[2000ms]"
                    style={{
                      width: animate ? `${skill.value}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default SkillsSection;
