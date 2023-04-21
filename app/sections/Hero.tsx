"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { riseWithFade } from "../utils/animations";

export default function Hero() {
  return (
    <motion.section
      className="py-12 px-4 md:px-0"
      initial='initial'
      animate='animate'
    >
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        <div className="hero-copy">
          <motion.h1
            className="text-6xl font-bold leading-[90%] trailing-[-2px]"
            variants={riseWithFade}
          >
            ’t Passende stukje voor jouw digitale oplossingen
          </motion.h1>
          <button>Call to action</button>
        </div>
        <div>Image</div>
      </div>
    </motion.section>
  )
}
