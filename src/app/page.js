"use client";

import { useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import Hero from "@/components/mycomponents/Hero";
import Work from "@/components/mycomponents/Work";
import ClientRevew from "@/components/mycomponents/ClientRevew";
import ContactForm from "@/components/ContactForm.js";
import { Navigation } from "./navigation";

export default function Home() {
  const wrapperRef = useRef(null);

  const speak = useCallback((text) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 1;
      utter.pitch = 1;
      utter.volume = 1;
      utter.lang = "en-GB";
      window.speechSynthesis.speak(utter);
    }
  }, []); 

  const wishMe = useCallback(() => {
    const hours = new Date().getHours();
    let greeting;
    if (hours >= 5 && hours < 12) {
      greeting = "Good Morning Sir, Welcome to my Portfolio";
    } else if (hours >= 12 && hours < 17) {
      greeting = "Good Afternoon Sir, Welcome to my Portfolio";
    } else if (hours >= 17 && hours < 21) {
      greeting = "Good Evening Sir, Welcome to my Portfolio";
    } else {
      greeting = "Hello Sir, Welcome to my Portfolio";
    }
    speak(greeting);
  }, [speak]);

  const runMatter = () => {
    if (!wrapperRef.current || typeof window.Matter === 'undefined') return;

    const Matter = window.Matter;
    const { Engine, Events, Runner, Render, World, Body, Common, Bodies, Mouse } = Matter;

    const engine = Engine.create();
    engine.world.gravity.x = 0;
    engine.world.gravity.y = 0;

    const render = Render.create({
      element: wrapperRef.current,
      engine,
      options: { width: window.innerWidth, height: window.innerHeight, wireframes: false, background: "black" },
    });

    const runner = Runner.create();
    const world = engine.world;

    const attractiveBody = Bodies.circle(
      render.options.width / 14,
      render.options.height / 14,
      Math.max(render.options.width, render.options.height) / 48,
      {
        isStatic: true,
        render: { fillStyle: "#333", strokeStyle: "#fad691", lineWidth: 0 },
        plugin: {
          attractors: [
            (bodyA, bodyB) => ({
              x: (bodyA.position.x - bodyB.position.x) * 1e-6,
              y: (bodyA.position.y - bodyB.position.y) * 1e-6,
            }),
          ],
        },
      }
    );
    World.add(world, attractiveBody);

    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, render.options.width);
      const y = Common.random(0, render.options.height);
      const s = Common.random(4, 80);
      const poly = Common.random(3, 6);
      World.add(
        world,
        Bodies.polygon(x, y, poly, s, {
          mass: s / 80,
          friction: 0,
          frictionAir: 0.02,
          render: { fillStyle: "#fad691", strokeStyle: "#DDDDDD", lineWidth: 2 },
          angle: Math.random() * 360,
        })
      );
    }

    const mouse = Mouse.create(render.canvas);
    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    Runner.run(runner, engine);
    Render.run(render);

    const handleResize = () => {
      render.canvas.width = window.innerWidth;
      render.canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  };

  useEffect(() => {
    wishMe();

    const checkMatter = setInterval(() => {
      if (typeof window.Matter !== 'undefined') {
        clearInterval(checkMatter);
        
        if (window.Matter.use) {
            window.Matter.use("matter-attractors");
            window.Matter.use("matter-wrap");
        }
        
        runMatter();
      }
    }, 300);

    return () => clearInterval(checkMatter);
  }, [wishMe]); 

  return (
    <>
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/matter-js/0.12.0/matter.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/matter-wrap@0.2.0/build/matter-wrap.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/matter-attractors@0.1.6/build/matter-attractors.min.js" strategy="beforeInteractive" />
      <div className="w-full h-full ">
        <div ref={wrapperRef} style={{ width: "100%", height: "100vh", position: "absolute", top: "0", left: "0" }}></div>
        <div id="home_page">
          <Hero />
        </div>
      </div>
      <div className="w-full h-full">
        <Work/>
        <ClientRevew/>
      </div>
      <div className="w-full h-full">
        <ContactForm/>
      </div>
      <button
        onClick={wishMe}
        className="z-30 px-4 py-2 fixed right-5 bottom-5 bg-amber-400 text-black rounded-xl shadow-lg hover:bg-amber-500"
      >
        🎤 Greet Me
      </button>
      
    </>
  );
}
