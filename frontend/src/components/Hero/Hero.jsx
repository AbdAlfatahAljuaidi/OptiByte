import React from 'react'
import { MdOutlineNotStarted } from "react-icons/md";
import heroImg from '../../assets/Hero/hero-img.png'
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='md:flex md:flex-row flex  flex-col-reverse items-center md:h-[89vh] bg-[#37517E]'>
        <div className='md:pl-40 px-5 md:mt-10 mt-0'>
        <h1 className='md:text-5xl text-2xl font-bold  text-white '>Better Solutions For Your Business</h1>
        <p className='text-gray-400 text-2xl font-semibold mt-5'>We are team of talented designers making websites with  Bootstrap</p>
        <div className='flex items-center my-10 md:mt-10'>
        <button className='bg-blue-400 text-white text-lg rounded-3xl py-2 px-7 hover:bg-blue-500 transition-all duration-300'>Get Started</button>
        <h1 className='flex items-center text-white ml-5 text-xl hover:cursor-pointer hover:text-blue-400 '> <MdOutlineNotStarted className='mx-1 text-4xl' />Watch</h1>
       
        </div>
        </div>

        <div>
        <div>
  <motion.img
    src={heroImg}
    alt=""
    className="md:px-20 px-10 mt-14 md:mt-0"
    animate={{
      y: [0, -20, 0],
    }}
    transition={{
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    }}
  />
</div>


</div>

      
    </div>
  )
}

export default Hero