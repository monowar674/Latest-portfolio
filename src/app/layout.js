"use client";

import { useEffect, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./navigation";
import { motion, useInView, useAnimation } from "framer-motion";
import { metadata } from "./metadata"; // server metadata import
import Footer from "@/components/mycomponents/Footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const ref = useRef(null);
  const isinView = useInView(ref, { once: true });
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (!isinView) return;
    mainControl.start("visible");
    slideControl.start("visible");
  }, [isinView, mainControl, slideControl]);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        <Navigation />

        <div ref={ref} className="w-full h-full relative">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControl}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {children}
          </motion.div>

          <motion.div
            variants={{
              hidden: { left: 0 },
              visible: { left: "100%" },
            }}
            initial="hidden"
            animate={slideControl}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="absolute top-1 left-0 right-0 bottom-1 bg-gray-900 z-30"
          />
        </div>
        <Footer/>
      </body>
    </html>
  );
}
