"use client"

import Image from "next/image";
import { color, motion } from "motion/react"
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any; }) => {
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
        window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const draw = {
    hidden: { pathLength: 0, opacity: 0, stroke: "#ffff"},
    visible: (i: number) => {
      const delay = 0.3 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        stroke: "#af8d19",
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          stroke: { delay, duration: 1.5 }
        }
      };
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <motion.svg
          onMouseEnter={textEnter} onMouseLeave={textLeave}
          className="cursor-cross"
          width="830"
          height="280"
          initial="hidden"
          animate="visible"
          scale="3"
          id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 830 280">
          <g fill="none" strokeWidth="30px">
            <motion.path 
              variants={draw}
              custom={0}
              d="M129.14,0v217c-.68,5.74-3.27,20.66-15.5,31.5-8.62,7.64-16.68,11.41-30,14-9.43,1.84-27.44,2.95-48-3-12.3-3.55-21.41-9.06-27-13"/>
            <motion.path 
              variants={draw}
              custom={1}
              d="M306.14,139c0,12.11-3.91,23.3-10.54,32.39-10,13.71-26.19,22.61-44.46,22.61-30.38,0-55-24.62-55-55s24.62-55,55-55,55,24.62,55,55Z"/>
            <motion.path 
              variants={draw}
              custom={2}
              d="M434.14,93c-26.67-1.72-37.33-3.89-52-2-15.82,2.04-27,9-29,20s11,28,38.96,33.55,31.53,21.5,29.04,31.45c-2,8-9.58,14.76-22,17-14.82,2.67-30.86.94-61-1"/>
            <motion.path 
              variants={draw}
              custom={3}
              d="M464.14,79c17.24,88.34,30.09,115.55,39.75,115,17.4-.98,23.12-92,39.75-92s22.35,91.02,39.75,92c9.66.55,22.51-26.66,39.75-115"/>
            <motion.line 
              variants={draw}
              custom={4}
              x1="680" y1="81" x2="680" y2="210"/>
            <motion.circle 
              variants={draw}
              custom={5}
              strokeWidth="20"
              strokeLinecap="round"
              strokeDasharray="1000"
              cx="680" cy="50" r="10"/>
            <motion.path 
              variants={draw}
              custom={6}
              d="M741.14,94v115-75c10.02-18.5,29.89-37.18,50-35,27.09,2.94,23.32,38.56,24,40v70"/>
          </g>
        </motion.svg>
        <div className="flex gap-4 justify-center flex-col sm:flex-row w-full">
          <Link href="/projects">
            <motion.button
              className="cursor-cross rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-lg sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              onMouseEnter={textEnter} onMouseLeave={textLeave}
            >
              <Image
                src="/file.svg"
                alt="File icon"
                width={20}
                height={20}
              />
              Projects
            </motion.button>
          </Link>
          <Link href="https://github.com/joswinjohn/">
            <motion.button
              className="cursor-cross rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              initial={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ opacity: 1 }}
              onMouseEnter={textEnter} onMouseLeave={textLeave}
            >
              <Image
                src="/github.svg"
                alt="Github logomark"
                width={20}
                height={20}
              />
              Github
            </motion.button>
          </Link>
          
        </div>
      </main>
      <motion.div
        className='cursor'
        variants={{default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            opacity: 0,
            backgroundColor: "#100f16",
          },
          text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "#100f16",
            mixBlendMode: "difference"
        }}}
        animate={cursorVariant}
      />
      
    </div>
  );
}
