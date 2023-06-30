'use client'

import { motion } from 'framer-motion';
import { TypingText, TitleText, StartSteps } from '../components';

import { fadeIn, staggerContainer, planetVariants } from '../utils/animations';
import { startingFeatures } from '../constant';
import Image from 'next/image';

export default function GetStarted() {
  return (
    <section className="sm:p-16 xs:p-8 px-4 py-12 min-h-screen relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/assets/synergie.png"
            alt="Waar we kunnen helpen"
            width={600}
            height={550}
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          {/* <TypingText title="| Onze werkwijze" /> */}
          <TitleText title="Hoe wij u helpen" />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature.title}
                number={index + 1}
                {...feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
