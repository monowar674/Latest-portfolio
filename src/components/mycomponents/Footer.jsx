import Link from 'next/link';
import React from 'react';
import flogo from "../../../public/hero-logo.png"
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Image src={flogo} alt={flogo} className='w-30 h-30'/>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">

          <div>
            <p className="text-sm text-gray-400">
              "I am Monowar Hosaain, an experienced Web Developer. My primary goal is to create user-friendly and effective websites using modern technology and coding expertise. I am eager to take on new challenges and transform web solutions into reality."
            </p>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">Servises</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Web Design</Link>
              </li>
              <li>
                <Link href='/about' className="text-gray-400 hover:text-white transition duration-300"> Domain & web Hosting Servise</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">BDIX Server Solution</Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About Me</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition duration-300">My Blog</Link>
              </li>
            </ul>
          </div>


          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media.</h4>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/mst.jara.9847" className="text-gray-400 hover:text-blue-500 transition duration-300" aria-label="Facebook">
                <FaFacebookF className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-sky-400 transition duration-300" aria-label="Twitter">
                <FaTwitter className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com/md.monowar.090909" className="text-gray-400 hover:text-pink-500 transition duration-300" aria-label="Instagram">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/monowar-hossain-283b65374" className="text-gray-400 hover:text-blue-700 transition duration-300" aria-label="LinkedIn">
                <FaLinkedinIn className="w-6 h-6" />
              </Link>
            </div>
          </div>

        </div>


        <div className="mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;