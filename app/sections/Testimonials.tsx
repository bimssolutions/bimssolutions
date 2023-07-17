'use client'

import { TitleText, TypingText } from "@/components";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";

const testimonies = [
  {
    name: 'Davina Sarpong', organisation: 'Dependable', testimony: `"Withkkhh the development of today\'s technology, metaverse is very useful for today\'s work, or can be called web 3.0. by using metaverse you can use it as anything"`
  },
  {
    name: 'Davina Sarpong', organisation: 'Dependable', testimony: `"Withkkhh the development of today\'s technology, metaverse is very useful for today\'s work, or can be called web 3.0. by using metaverse you can use it as anything"`
  },
  {
    name: 'Davina Sarpong', organisation: 'Dependable', testimony: `"Withkkhh the development of today\'s technology, metaverse is very useful for today\'s work, or can be called web 3.0. by using metaverse you can use it as anything"`
  },
]

export default function Testimonials() {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12">
      <div className="mb-8">
        <TypingText title="| Getuigenissen" textStyles="text-center" />
        <TitleText title='Wat ze van ons vinden' textStyles='text-center' />
      </div>
      <motion.div
        variants={staggerContainer(0.04, 0.125)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8 text-center md:text-left"
      >
        {testimonies.map((testimony, index) => (
          <motion.div
            key={index}
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
          >
            <div className="feedback-gradient" />
            <div>
              <h4 className="font-bold sm:text-[30px] text-[22px] sm:leading-[36.32px] leading-[30px] text-primary-black">
                {testimony.name}
              </h4>
              <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-primary-black">
                {testimony.organisation}
              </p>
            </div>

            <p className="mt-[24px] font-normal sm:text-[20px] text-[16px] sm:leading-[36px] leading-[30px] text-primary-black">
              {testimony.testimony}

            </p>

          </motion.div>

        ))}
      </motion.div>
    </section>
  )
}
