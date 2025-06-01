"use client"

import {motion} from "motion/react";
import {useState} from "react";

export default function LayoutButton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(prev => !prev);

  return (
        <div className="w-full h-screen flex items-center justify-center">
    <button
      onClick={toggleSwitch}
      className="rounded-full border-1 border-neutral-500 w-24 h-12 flex items-center justify-center px-1"
      style={{
        justifyContent: isOn ? "flex-end" : "flex-start",
        background: "var(--hue-4-transparent)",
      }}
    >
      <motion.div
        layout
        transition={{ type: "spring", duration: 0.4, bounce: 0.25 }}
        className="w-10 h-10 rounded-full bg-[#9911ff]"
      />
    </button>
    </div>
  );
} 

