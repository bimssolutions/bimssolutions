'use client'

import { motion } from 'framer-motion';
import { TypingText } from '../components/CustomTexts';

import { fadeIn, staggerContainer } from '../utils/animations';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="sm:p-16 xs:p-8 py-12 px-4 min-h-screen flex relative z-10">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex justify-center items-center flex-col max-w-7xl mx-auto"
      >
        <TypingText title="| Over Bimssolutions" textStyles="text-center" />
        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[8px] sm:text-[32px] text-[20px] font-extralight text-center"
        >Een <b>full-service agency</b> dat zich richt op <b>design</b> en <b>development</b> van prachtige digitale producten, merken en ervaringen.
        </motion.p>
        <motion.button
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="bg-transparant rounded-full border border-black hover:bg-violet-50/25 font-medium py-2 px-4 mt-5"
        >
          <Link href="/over-ons">
            meer
          </Link>
        </motion.button>
      </motion.div>
    </section>
  )
}
