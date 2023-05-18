'use client'

import { motion } from 'framer-motion';
import { TypingText, TitleText, NewFeatures } from '../components';

import { fadeIn, staggerContainer, planetVariants } from '../utils/animations';
import { newFeatures } from '../constant';
import Image from 'next/image';

export default function Services() {
  return (
    <section id="services" className="sm:p-16 xs:p-8 px-4 py-12 min-h-screen flex relative z-10">
      <motion.div
        variants={staggerContainer(0.04, 0.125)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8 text-center md:text-left"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-1 flex justify-center flex-col"
        >
          <TypingText title="| Diensten" />
          <TitleText title="Wat doet Bimssolutions?" />
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures
                key={feature.title}
                {...feature}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/assets/web-design.webp"
            alt="whats-new"
            height={500}
            width={500}
            style={{objectFit: "contain"}}
            className='w-[90%] h-[90%]'
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
