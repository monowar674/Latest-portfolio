"use client";


import React from 'react'
import project1 from "../../Photos/project1.png"
import project2 from "../../Photos/project2.png"
import Image from 'next/image'
import Link from 'next/link'

const Work = () => {
  const data = [
    {
      name: 'portfolio',
      img: project1,

      des: 'This project was specially developed as part of my personal work, where I experimented with new ideas and implemented different features to improve my skills and creativity.'
    }
  ]
  return (
    <>
      <section id='latestWork' className='mt-20 '>
        <div className="setbg w-[80%] mx-auto h-[400px] bg-[#333]  rounded-2xl text-center flex items-center justify-center flex-col">
          <div className="text-4xl  text-[#0004fa] font-extrabold">#Project</div>
          <div className="text-[#fff]  max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate iure culpa eligendi, officiis suscipit dolorum illo voluptates facere mollitia voluptatem!</div>
        </div>
        <h1 className='text-white font-extrabold text-4xl text-center'>My Latest Wotk</h1>
        <p className='text-lg   font-medium text-white text-center mt-2'> Please take a look at a few examples of my work below.</p>
        <div className="relative w-full h-auto ">

          
          <div className="w-full h-auto px-2 lg:px-7 xl:px-10 grid grid-cols-2">
            <div className="flex items-center  justify-center relative ">
              <span className='w-25 lg:w-35 h-[2px] absolute top-1/2 right-0 -translate-y-1/2 hover:after:scale-150 hover:after:cursor-pointer bg-[#f78d60] after:content-[""] after:w-2 after:h-2 after:bg-[#333] z-10 after:border-2 after:border-[#f78d60] after:rounded-full after:absolute after:top-0 after:right-0 after:translate-x-1/2 after:-translate-y-1/3 '></span>
              <Link href='#'><Image className='drop-shadow-xl/50 drop-shadow-[#003af7] relative z-20' src={project1} alt='project' /></Link>

            </div>
            <div className="pl-3 flex flex-col justify-center ">
              <h1 className='text-2xl lg:text-3xl font-bold text-[#f78d60]'>Portfolio</h1>
              <p className='text-[0.9rem] md:text-lg lg:text-xl text-white pb-2'>This project was specially developed as part of my personal work, where I experimented with new ideas and implemented different features to improve my skills and creativity.</p>
              <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-8 text-white gap-2 ">
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center col-span-2">HTML</div>
                <div className="text-center px-2 py-1 bg-[#e9bfad] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">JavaScript</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">NextJS</div>
                <div className="text-center px-2 py-1 bg-[#eeb399] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Tailwind CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Bootstrap</div>
                <div className="text-center px-2 py-1 bg-[#e6d15f] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">MatterJS</div>
                {/* <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">11</div> */}
              </div>
            </div>
          </div>
          <div className="w-full h-auto px-2 lg:px-7 xl:px-10 grid grid-cols-2">

            <div className="pl-3 flex flex-col justify-center ">
              <h1 className='text-2xl lg:text-3xl font-bold text-[#f78d60]'>Portfolio</h1>
              <p className='text-[0.9rem] md:text-lg lg:text-xl text-white pb-2 '>This project was specially developed as part of my personal work, where I experimented with new ideas and implemented different features to improve my skills and creativity.</p>
              <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-8 text-white gap-2 ">
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center col-span-2">HTML</div>
                <div className="text-center px-2 py-1 bg-[#e9bfad] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">JavaScript</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">NextJS</div>
                <div className="text-center px-2 py-1 bg-[#eeb399] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Tailwind CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Bootstrap</div>
                <div className="text-center px-2 py-1 bg-[#e6d15f] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">MatterJS</div>
                {/* <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">11</div> */}
              </div>
            </div>
            <div className="flex items-center  justify-center relative ">
              <Link href='#'>
                <span className='w-25 lg:w-35 h-[2px] z-2 absolute top-1/2 left-0 -translate-y-1/2 bg-[#f78d60] after:content-[""] after:w-2 after:h-2 after:bg-white after:border-2 after:border-[#929000] after:rounded-full after:absolute  after:top-0 after:left-0 after:-translate-x-1/2 after:-translate-y-1/3 hover:after:scale-150'></span>
              </Link>
              <Link href='#'><Image className='relative z-10' src={project2} alt='project' /></Link>

            </div>
          </div>
          <div className="w-full h-auto px-2 lg:px-7 xl:px-10 grid grid-cols-2">
            <div className="flex items-center  justify-center relative ">
              <span className='w-25 lg:w-35 h-[2px] absolute top-1/2 right-0 -translate-y-1/2 hover:after:scale-150 hover:after:cursor-pointer bg-[#f78d60] after:content-[""] after:w-2 after:h-2 after:bg-[#333] z-10 after:border-2 after:border-[#f78d60] after:rounded-full after:absolute after:top-0 after:right-0 after:translate-x-1/2 after:-translate-y-1/3 '></span>
              <Link href='#'><Image className='drop-shadow-xl/50 drop-shadow-[#003af7] relative z-20' src={project1} alt='project' /></Link>

            </div>
            <div className="pl-3 flex flex-col justify-center ">
              <h1 className='text-2xl lg:text-3xl font-bold text-[#f78d60]'>Portfolio</h1>
              <p className='text-[0.9rem] md:text-lg lg:text-xl text-white pb-2'>This project was specially developed as part of my personal work, where I experimented with new ideas and implemented different features to improve my skills and creativity.</p>
              <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-8 text-white gap-2 ">
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center col-span-2">HTML</div>
                <div className="text-center px-2 py-1 bg-[#e9bfad] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">JavaScript</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">NextJS</div>
                <div className="text-center px-2 py-1 bg-[#eeb399] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Tailwind CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Bootstrap</div>
                <div className="text-center px-2 py-1 bg-[#e6d15f] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">MatterJS</div>
                {/* <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">11</div> */}
              </div>
            </div>
          </div>
          <div className="w-full h-auto px-2 lg:px-7 xl:px-10 grid grid-cols-2">

            <div className="pl-3 flex flex-col justify-center ">
              <h1 className='text-2xl lg:text-3xl font-bold text-[#f78d60]'>Portfolio</h1>
              <p className='text-[0.9rem] md:text-lg lg:text-xl text-white pb-2 '>This project was specially developed as part of my personal work, where I experimented with new ideas and implemented different features to improve my skills and creativity.</p>
              <div className="grid grid-cols-4 md:grid-cols-5 xl:grid-cols-8 text-white gap-2 ">
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center col-span-2">HTML</div>
                <div className="text-center px-2 py-1 bg-[#e9bfad] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">JavaScript</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">NextJS</div>
                <div className="text-center px-2 py-1 bg-[#eeb399] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Tailwind CSS</div>
                <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">Bootstrap</div>
                <div className="text-center px-2 py-1 bg-[#e6d15f] gap-2 rounded-2xl border-2 border-[#f78d] text-black col-span-2 flex justify-center items-center">MatterJS</div>
                {/* <div className="text-center px-2 py-1 bg-[#f78d60] gap-2 rounded-2xl border-2 border-[#f78d] text-black flex justify-center items-center">11</div> */}
              </div>
            </div>
            <div className="flex items-center  justify-center relative ">
              <Link href='#'>
                <span className='w-25  lg:w-35 h-[2px] z-2 absolute top-1/2 left-0 -translate-y-1/2 bg-[#f78d60] after:content-[""] after:w-2 after:h-2 after:bg-white after:border-2 after:border-[#929000] after:rounded-full after:absolute  after:top-0 after:left-0 after:-translate-x-1/2 after:-translate-y-1/3 hover:after:scale-150'></span>
              </Link>
              <Link href='#'><Image className='relative z-10' src={project2} alt='project' /></Link>

            </div>
          </div>
          <span className='w-[2px] h-full absolute top-0 left-1/2 -translate-x-1/2 bg-[#f78d60]'></span>
          <span className='w-10 h-[2px] absolute top-0 left-1/2 -translate-x-1/2 bg-[#f78d60]'></span>
          <span className='w-10 h-[2px] absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#f78d60]'></span>
        </div>
      </section>
    </>
  )
}

export default Work