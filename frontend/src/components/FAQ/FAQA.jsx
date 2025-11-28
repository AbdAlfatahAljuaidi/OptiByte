import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";

const faqs = [
  {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer:
      "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
  },
  {
    question: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
    answer: "Mauris non tempor quam, et lacinia sapien."
  },
  {
    question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
    answer: "Sagittis vitae et leo duis ut diam quam nulla."
  },
  {
    question: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
    answer: "Pellentesque habitant morbi tristique senectus et netus."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#f5f7fa]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="max-w-2xl mx-auto text-gray-500 mt-3">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-lg shadow-sm p-5 cursor-pointer border"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FiHelpCircle className="text-blue-500" />
                <h3 className="font-semibold">{faq.question}</h3>
              </div>

              <FiChevronDown
                className={`text-gray-500 transform transition-all duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {activeIndex === index && (
              <p classintName="mt-3 text-gray-600 border-t pt-3">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
