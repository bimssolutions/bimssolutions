"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/animations";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="sm:p-16 xs:p-8 py-12 px-4 h-screen flex items-center"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto"
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="py-12">
          <motion.h1
            className="text-6xl font-bold leading-[90%] trailing-[-2px] mb-6"
            variants={textVariant(1.1)}
          >
            ’t Passende stukje voor jouw digitale oplossingen
          </motion.h1>

          <motion.button
            variants={textVariant(1.2)}
            className="btn_outline"
          >
            <Link href="/portfolios">
              Ons werk
            </Link>
          </motion.button>
        </div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
        >
          <Image
            src="/assets/bimssolutions-git.svg"
            alt="bimssolutions landing page repo image"
            width={400}
            priority={true}
            height={583}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
