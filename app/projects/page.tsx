"use client"

import Image from "next/image";
import { motion } from "motion/react"
import { useEffect, useState } from 'react';
import Link from "next/link";

export default function Projects() {
    
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
        <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className="pb-4 font-title cursor-cross text-8xl font-extrabold bg-gradient-to-r from-red-500 to-amber-600 bg-clip-text text-transparent">Projects</h1>
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
