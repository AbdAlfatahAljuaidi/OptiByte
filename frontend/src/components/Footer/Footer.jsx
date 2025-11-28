// Footer.js
import React from 'react';

// بيانات المحتوى (للسهولة في التعديل)
const footerContent = {
  company: {
    name: "ARSHA",
    address: "A108 Adam Street, New York, NY 535022",
    phone: "+1 5589 55488 55",
    email: "info@example.com"
  },
  usefulLinks: [
    { name: "Home", href: "#home" },
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Terms of service", href: "#terms" }
  ],
  ourServices: [
    { name: "Web Design", href: "#web-design" },
    { name: "Web Development", href: "#web-development" },
    { name: "Product Management", href: "#product-management" },
    { name: "Marketing", href: "#marketing" }
  ],
  socialLinks: [
    { icon: 'X', href: "#", label: "Twitter/X" }, // افترضنا أن رمز 'X' هو رمز تويتر
    { icon: 'F', href: "#", label: "Facebook" },
    { icon: 'I', href: "#", label: "Instagram" },
    { icon: 'L', href: "#", label: "LinkedIn" }
  ],
  followUsText: "Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies"
};

const Footer = () => {
  return (
    <footer className="bg-[#f4f6f9] text-gray-700">
      
      {/* قسم النشرة الإخبارية (Newsletter) */}
      <div className=" py-10">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Join Our Newsletter</h4>
          <p className="text-sm text-gray-600 mb-6">
            Subscribe to our newsletter and receive the latest news about our products and services!
          </p>
          <form className="max-w-xl mx-auto flex justify-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full max-w-sm px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-r-md transition duration-300 shadow-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* قسم روابط التذييل الرئيسي (Main Footer) */}
      <div className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* العمود 1: معلومات الشركة */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">{footerContent.company.name}</h1>
            <p className="text-sm mb-2">{footerContent.company.address}</p>
            <p className="text-sm">
              <span className="font-bold">Phone: </span>{footerContent.company.phone}
            </p>
            <p className="text-sm">
              <span className="font-bold">Email: </span>{footerContent.company.email}
            </p>
          </div>

          {/* العمود 2: روابط مفيدة */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {footerContent.usefulLinks.map((link) => (
                <li key={link.name} className="flex items-center text-sm hover:text-blue-500 transition duration-300">
                  <span className="mr-2 text-blue-500">&gt;</span>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 3: خدماتنا */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerContent.ourServices.map((service) => (
                <li key={service.name} className="flex items-center text-sm hover:text-blue-500 transition duration-300">
                  <span className="mr-2 text-blue-500">&gt;</span>
                  <a href={service.href}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* العمود 4: تابعونا (Follow Us) */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
            <p className="text-sm mb-4">{footerContent.followUsText}</p>
            <div className="flex space-x-2">
              {footerContent.socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-500 hover:text-white text-gray-500 transition duration-300"
                >
                  {/* في بيئة حقيقية، ستستخدم أيقونات SVG من مكتبة مثل Font Awesome أو Heroicons */}
                  <span className="font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* قسم حقوق النشر (Copyright) */}
      <div className="bg-[#eef1f6] py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-gray-600">
        <div className="container mx-auto">
          <p>
            &copy; Copyright *Arsha*. All Rights Reserved
          </p>
          <p>
            Designed by <a href="https://bootstrapmade.com/" className="text-blue-600 hover:text-blue-800 transition duration-300">BootstrapMade</a>
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;