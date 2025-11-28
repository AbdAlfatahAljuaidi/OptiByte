import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="  text-white px-20 flex justify-between items-center">
      
      {/* Logo */}

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center">
        <li className="mx-4 hover:text-blue-400"><a href="">Home</a></li>
        <li className="mx-4 hover:text-blue-400"><a href="">About</a></li>
        <li className="mx-4 hover:text-blue-400"><a href="">Services</a></li>
        <li className="mx-4 hover:text-blue-400"><a href="">Portfolio</a></li>
        <li className="mx-4 hover:text-blue-400"><a href="">Team</a></li>
        <li className="mx-4 hover:text-blue-400"><a href="">Pricing</a></li>
        <li className="mx-4 hover:text-blue-400"><a href="">Blog</a></li>
        <li className="mx-4 hover:text-blue-400"><a href="">Contact</a></li>
        <button className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 text-white rounded-3xl py-2 px-5 ml-4">
          Get Started
        </button>
      </ul>

      {/* Mobile Button */}
      <button 
        className="md:hidden text-3xl ml-32"
        onClick={() => setOpen(!open)}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-0 w-full bg-black  py-6 z-20 md:hidden"
          >
            <ul className="flex flex-col items-center space-y-4">
              <li className="hover:text-blue-400"><a href="">Home</a></li>
              <li className="hover:text-blue-400"><a href="">About</a></li>
              <li className="hover:text-blue-400"><a href="">Services</a></li>
              <li className="hover:text-blue-400"><a href="">Portfolio</a></li>
              <li className="hover:text-blue-400"><a href="">Team</a></li>
              <li className="hover:text-blue-400"><a href="">Pricing</a></li>
              <li className="hover:text-blue-400"><a href="">Blog</a></li>
              <li className="hover:text-blue-400"><a href="">Contact</a></li>
              <button className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 text-white rounded-3xl py-2 px-6">
                Get Started
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Menu;
