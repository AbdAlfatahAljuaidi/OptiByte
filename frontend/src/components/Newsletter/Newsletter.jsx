import newsletterImg from "../../assets/Newsletter/cta-1.webp"; // ضع صورة البنت هنا

const Newsletter = () => {
  return (
    <section className="pt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-0">
        
        {/* النص */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-[#2a4b7c]">
            Subscribe to our newsletter
          </h2>

          <p className="text-gray-600 mt-4 mb-6 leading-relaxed">
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Curabitur aliquet quam id dui posuere blandit.
          </p>

          <div className="flex bg-white rounded-full border border-blue-300 overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Email address..."
              className="px-4 py-3 outline-none flex-grow"
            />
            <button className="bg-[#3cb4e7] text-white px-6 font-medium hover:bg-[#32a0ce]">
              Subscribe
            </button>
          </div>
        </div>

        {/* الصورة */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={newsletterImg} alt="Newsletter" className="w-80 md:w-[380px]" />
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
