"use client";

import Image from 'next/image'
import React from 'react'
import { RxCross2 } from "react-icons/rx";
import img from '../../Photos/profile.jpeg'
import { DiHtml5 } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import Link from 'next/link';
// import myCv from '/public/cv/mycv.pdf'

const About = ({ setmanue }) => {
  return (
    <div className='w-full h-full items-center flex transition duration-300 flex-col justify-center  '>
      <div className=" relative  w-[80%] lg:w-1/2 h-[65%] px-2 rounded-2xl bg-[#0011ac] grid grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-center">
        {/* <h1 className='text-white absolute px-2 py-1 top-0 left-0 bg-amber-200 text-3xl font-extrabold'>About Us</h1> */}
        <div className="w-10 h-10 flex pt-1.5 items-center justify-center rounded-full border-2 border-black bg-[#061ad4] absolute -top-6 left-1/2 -translate-x-1/2">
          <RxCross2 size={30} fill='#fff' className='  cursor-pointer pointer-events-auto' onClick={() => setmanue(false)} />

        </div>
        <div className="w-full flex flex-col items-center justify-center mt-1.5">
          <Image className='w-10/12 xl:w-full  h-[150px] xl:h-[220px] mb-2 xl:mb-4 object-cover rounded-2xl' src={img} alt='' />
          <div className="flex gap-2 items-center justify-between mt-2 xl:mt-4">
            <div className='relative group pointer-events-auto transition-all duration-300 ease-in-out items-center justify-center flex'>
              <span className='absolute px-2.5 py-1.5 bg-[#e8702b] opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-white rounded-lg after:content:[""] after:w-2 after:h-2 after:bg-[#e8702b] after:rotate-45 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 cursor-pointer'>HTML</span>
              <DiHtml5 size={32} fill='#e8702b' />
            </div>
            <div className='relative group pointer-events-auto transition-all duration-300 ease-in-out items-center justify-center flex'>
              <span className='absolute px-2.5 py-1.5 bg-[#3d61ad] opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-white rounded-lg after:content:[""] after:w-2 after:h-2 after:bg-gradient-to-r from-[#0168bb] to-[#0091d4] after:rotate-45 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 cursor-pointer'>CSS</span>
              <IoLogoCss3 size={32} fill='#3d61ad' />
            </div>
            <div className='relative group pointer-events-auto transition-all duration-300 ease-in-out items-center justify-center flex'>
              <span className='absolute px-2.5 py-1.5 bg-[#e8d44d] opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-white rounded-lg after:content:[""] after:w-2 after:h-2 after:bg-[#e8d44d] after:rotate-45 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 cursor-pointer'>JavaScript</span>
              <IoLogoJavascript size={32} fill='#e8d44d' />
            </div>
            <div className='relative group pointer-events-auto transition-all duration-300 ease-in-out items-center justify-center flex'>
              <span className='absolute px-2.5 py-1.5 bg-[#3d61ad] opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-white rounded-lg after:content:[""] after:w-2 after:h-2 after:bg-[#3d61ad] after:rotate-45 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 cursor-pointer'>ReactJS</span>
              <FaReact size={32} fill='#3d61ad' />
            </div>
            <div className='relative group pointer-events-auto transition-all duration-300 ease-in-out items-center justify-center flex'>
              <span className='absolute px-2.5 py-1.5 bg-[#17181b] opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-white rounded-lg after:content:[""] after:w-2 after:h-2 after:bg-[#17181b] after:rotate-45 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 cursor-pointer'>NextJS</span>
              <RiNextjsFill size={32} fill='#17181b' />
            </div>
            <div className='relative group pointer-events-auto transition-all duration-300 ease-in-out items-center justify-center flex'>
              <span className='absolute px-2.5 py-1.5 bg-[#7d0af8] opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-white rounded-lg after:content:[""] after:w-2 after:h-2 after:bg-[#7d0af8] after:rotate-45 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 cursor-pointer'>Bootstrap</span>
              <FaBootstrap size={32} fill='#7d0af8' />
            </div>
            <div className='relative group pointer-events-auto transition-all duration-300 ease-in-out items-center justify-center flex'>
              <span className='absolute px-2.5 py-1.5 bg-[#3d61ad] opacity-0 translate-y-0 group-hover:opacity-100 group-hover:-translate-y-10 transition-all duration-300 ease-in-out text-white rounded-lg after:content:[""] after:w-2 after:h-2 after:bg-[#3d61ad] after:rotate-45 after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 cursor-pointer'>Tailwind</span>
              <RiTailwindCssFill size={32} fill='#3d61ad' />
            </div>
          </div>
        </div>
        <div className=" w-full xl:h-[80%]">
          <h2 className='text-[18px] md:text-2xl lg:text-3xl text-center mx-auto my-auto text-[#ff5100] font-extrabold'>About Me</h2>
          <p className='text-white text-[14px] xl:text-lg font-medium'>Hii..! Iam MD.Monowar Hossain. Iam a Front-End Web Devoloper. And I Have Completed My Diploma in Engineering Computer Scince From Jhenaidha pilytecnic insttitude. </p>

          <button className='pointer-events-auto'>
            <a
              href="/cv/mycv.pdf"
              download="Monowar_CV.pdf"
              className="inline-block mt-3 bg-[#ff5100] text-white px-4 py-2 rounded hover:bg-[#e64a00] transition-colors duration-300"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>







  )
}

export default About