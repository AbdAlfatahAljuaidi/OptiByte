const ContactSection = () => {
    return (
      <section className="py-20 ">
        <div className="max-w-6xl mx-auto text-center px-4">
  
          {/* العنوان */}
          <h2 className="text-3xl font-bold text-[#2a4b7c]">CONTACT</h2>
          <div className="w-20 h-1 bg-[#3cb4e7] mx-auto mt-3"></div>
          <p className="text-gray-600 mt-4 mb-12">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  
            {/* LEFT : INFO + MAP */}
            <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 text-left">
  
              {/* Address */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#2a4b7c] mb-1">Address</h3>
                <p className="text-gray-600">A108 Adam Street, New York, NY 535022</p>
              </div>
  
              {/* Call */}
              <div className="mb-8">
                <h3 className="font-semibold text-[#2a4b7c] mb-1">Call Us</h3>
                <p className="text-gray-600">+1 5589 55488 55</p>
              </div>
  
              {/* Email */}
              <div className="mb-6">
                <h3 className="font-semibold text-[#2a4b7c] mb-1">Email Us</h3>
                <p className="text-gray-600">info@example.com</p>
              </div>
  
              {/* MAP */}
              <iframe
                className="w-full h-56 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9122144928193!2d-73.99686422377719!3d40.73061097139316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25990bf2abd17%3A0xd98df233c6f0ca6!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1700000000000"
                loading="lazy"
              ></iframe>
            </div>
  
            {/* RIGHT : FORM */}
            <div className="bg-white shadow-sm rounded-lg p-6 border border-gray-100 text-left">
  
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300 rounded p-2 w-full focus:outline-none"
                />
              </div>
  
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 rounded p-2 w-full mb-4 focus:outline-none"
              />
  
              <textarea
                rows="6"
                placeholder="Message"
                className="border border-gray-300 rounded p-2 w-full focus:outline-none"
              ></textarea>
  
              <div className="text-center mt-6">
                <button className="bg-[#3cb4e7] text-white px-6 py-2 rounded-full hover:bg-[#2aa0cc] transition">
                  Send Message
                </button>
              </div>
  
            </div>
  
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  