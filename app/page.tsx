"use client";

import {motion } from "motion/react"


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div className="h-24 w-24 bg-cyan-700 rounded-full"   
        whileTap={{scale:0.84}} 
        initial={{scale:0}}
        transition={{duration:0.5}}
        animate={{scale:1}}>
      </motion.div>
    </div>
);
}
