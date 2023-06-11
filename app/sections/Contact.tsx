"use client"

import { motion } from "framer-motion";
import { TypingText, TitleText, StartSteps } from "../components";
import { startingFeatures } from "../constant";
import { staggerContainer, planetVariants, fadeIn } from "../utils/animations";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="sm:p-16 xs:p-8 px-4 py-12 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-1 flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        {/* <div className="feedback-gradient" /> */}
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px]">
            Neem contact op
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px]">
            Founder Metaverus
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px]">
          Voor vragen over hoe wij jou het beste kunnen helpen. Stuur een mail naar
        </p>
      </motion.div>
        {/* <motion.div
          variants={planetVariants('left')}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/assets/get-started.png"
            alt="get-started"
            width={600}
            height={550}
            className='w-[90%] h-[90%] object-contain'
          />
        </motion.div> */}
        {/* <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| Onze werkwijze" />
          <TitleText title="Onze werkwijze bestaat uit vijf belangrijke stappen" />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature.title}
                number={index+1}
                {...feature}
              />
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  )
}

