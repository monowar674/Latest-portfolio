"use client";

import { useEffect, useRef } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./navigation";
import Script from "next/script";

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

      <Script id="meta-pixel" strategy="afterInteractive">
        {`
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');

  fbq('init', '3691914937781792'); 
  fbq('track', 'PageView');
`}
      </Script>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}>
        <noscript>
  <img height="1" width="1" style={{display: "none"}}
    src="https://www.facebook.com/tr?id=3691914937781792&ev=PageView&noscript=1"
  />
</noscript>
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
        <Footer />
      </body>
    </html>
  );
}
