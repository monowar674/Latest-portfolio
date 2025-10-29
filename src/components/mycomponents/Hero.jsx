"use client";

import React, { useState } from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { LiaArrowDownSolid, LiaArrowRightSolid } from "react-icons/lia";
import heroLogo from "../../../public/hero-logo.png";
import Image from "next/image";
import Link from "next/link";
import About from "./About";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const socialIcons = [
  { Icon: FaFacebookSquare, url: "https://facebook.com/mst.jara.9847 " },
  { Icon: AiFillInstagram, url: "https://instagram.com/md.monowar.090909" },
  { Icon: FaSquareWhatsapp, url: "https://wa.me/8801408700142" },
  { Icon: MdMarkEmailUnread, url: "mailto:monowarhossain2155@gmail.com" },
  { Icon: FaLinkedin, url: "https://www.linkedin.com/in/monowar-hossain-283b65374 " },
];

const Hero = () => {
  const [about, setAbout] = useState(false);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <div className="relative w-full pointer-events-none min-h-screen flex items-center justify-start  overflow-hidden">
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Image src={heroLogo} alt="hero logo" className="opacity-70" />
      </div>

     
      <motion.div
        className="  flex flex-col justify-start  top-1/2 translate-y-1/10 ml-10 lg:ml-12 xl:ml-20 "
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h1 variants={item} className="text-2xl lg:text-4xl font-extrabold text-[#5a5858]">
          Hii..!
        </h1>
        <h4 variants={item} className="text-2xl lg:text-4xl font-extrabold text-white">
          I'am
        </h4>
        <h1 variants={item} className="text-3xl lg:text-4xl font-extrabold text-white">
          Monowar Hossain
        </h1>
        <motion.p variants={item} className="my-2 text-xl text-white">
          I am a:{" "}
          <TypeAnimation
            sequence={["WEB DEVELOPER", 2000, "SOFTWARE DEVELOPER", 2000, "NETWORKER", 2000]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="font-bold text-indigo-600 text-[16px]"
          />
        </motion.p>
        <motion.button
          onClick={() => setAbout(true)}
          variants={item}
          className="bg-indigo-600 cursor-pointer pointer-events-auto group relative transition duration-300 ease-in-out text-white w-1/2 py-3 rounded-lg text-lg font-medium hover:bg-indigo-700 mt-4"
        >
          About Me
          <LiaArrowRightSolid className="absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-10 transition-all duration-300" size={30} />
        </motion.button>
      </motion.div>

    
      <motion.ul
        className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {socialIcons.map(({Icon,url}, i,) => (
          <motion.li key={i} variants={item}>
            <Link href={url}>
              <Icon className="text-4xl pointer-events-auto text-blue-600 cursor-pointer hover:scale-125 hover:text-[#f78d60] transition-all duration-200" />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {about && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-50 bg-black/80 flex items-center justify-center transition-opacity duration-300"
        >
          <About setmanue={setAbout} />
        </motion.div>
      )}

      <motion.button
        onClick={() => setAbout(false)}
        className="absolute pointer-events-auto cursor-pointer left-1/2 -translate-x-1/2 bottom-20 xl:bottom-10 flex items-center justify-center bg-[#4858ec] text-white px-4 py-2 rounded-md border border-transparent hover:bg-transparent hover:text-[#4858ec] transition duration-500 group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/#latestWork">latest work</Link>
        <LiaArrowDownSolid className="absolute left-1/2 -translate-x-1/2 -bottom-7 group-hover:-bottom-10 transition-all duration-300" size={30} />
      </motion.button>
    </div>
  );
};

export default Hero;
