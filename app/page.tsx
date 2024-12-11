"use client"

import Image from "next/image";
import { motion } from "motion/react"
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

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="font-title cursor-cross text-8xl font-extrabold bg-gradient-to-r from-purple-500 to-rose-700 bg-clip-text text-transparent">Joswin John</h1>

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
