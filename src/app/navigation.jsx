"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "./../../public/logo.png";
import profileimg from "../Photos/profile.jpeg";
import { useState } from "react";
import { usePathname } from "next/navigation"; 
import "./style.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navigation = () => {
    const [open, setOpen] = useState('hidden');

    const currentPath = usePathname();

    useGSAP(() => {
        gsap.from(".logo, .menue", {
            y: -20, 
            opacity: 0, 
            duration: 0.8,
            stagger: 0.1, 
            ease: "power2.out",
            delay: 0.2 
        });
    }, []); 

   
    const getLinkClasses = (path) => {
        const baseClasses = "menue rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150";
        if (currentPath === path) {
            return `${baseClasses} text-white bg-white/10 shadow-lg`; 
        } else {
            return `${baseClasses} text-gray-300 hover:bg-white/5 hover:text-white`; 
        }
    };
    
    const handleMobileLinkClick = () => {
        setOpen('hidden');
    };

    return (
        <>
            <div className="absolute z-10 top-0 pointer-events-none left-0 w-full">
                <nav className="relative bg-transparent top-0 left-0">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-18 items-center justify-between">
                            
                          
                            <div className="absolute pointer-events-auto inset-y-0 left-0 flex items-center sm:hidden">
                                <button onClick={() => setOpen(open === 'hidden' ? 'block' : 'hidden')} type="button" aria-expanded={open === 'block'} className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 cursor-pointer hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open main menu</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                        <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                
                                <div className="flex shrink-0 items-center justify-center">
                                    <Image src={logo} alt="My Company" className="h-12 logo w-auto" />
                                </div>
                                
                                
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex pointer-events-auto space-x-4 items-center ">
                                        <Link href="/" className={getLinkClasses("/")}>Home</Link>
                                        <Link href="/about" className={getLinkClasses("/about")}>About</Link>
                                        <Link href="/project" className={getLinkClasses("/project")}>Projects</Link>
                                        <Link href="/blog" className={getLinkClasses("/blog")}>Blog</Link>
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                               
                                <button type="button" className="relative rounded-full p-1 text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">View notifications</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" data-slot="icon" aria-hidden="true" className="size-6">
                                        <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                               
                                <el-dropdown className="relative ml-3">
                                    <button className="relative pointer-events-auto cursor-pointer flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <Image src={profileimg} alt="Profile Image" className="profile size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10 object-cover" />
                                    </button>
                                   
                                    <el-menu anchor="bottom end" popover className="w-48 pointer-events-auto origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition transition-discrete [--anchor-gap:--spacing(2)] data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Your profile</Link>
                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Settings</Link>
                                        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 focus:bg-gray-100 focus:outline-hidden">Sign out</Link>
                                    </el-menu>
                                </el-dropdown>
                            </div>
                        </div>
                    </div>

              
                    <el-disclosure id="mobile-menu" className={`${open} pointer-events-auto sm:hidden transition duration-200 ease-in-out bg-amber-950-50 `}>
                        <div className="space-y-1 px-2 pt-2 pb-3 z-50 bg-indigo-700">
                            <Link onClick={handleMobileLinkClick} href="/" aria-current={currentPath === '/' ? 'page' : undefined} className={getLinkClasses("/")}>Home</Link>
                            <Link onClick={handleMobileLinkClick} href="/about" className={getLinkClasses("/about")}>About</Link>
                            <Link onClick={handleMobileLinkClick} href="/project" className={getLinkClasses("/project")}>Projects</Link>
                            <Link onClick={handleMobileLinkClick} href="/blog" className={getLinkClasses("/blog")}>Blog</Link>
                        </div>
                    </el-disclosure>
                </nav>
            </div>
        </>
    )
}

