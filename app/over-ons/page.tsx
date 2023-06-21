"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/animations"
import { TitleText, TypingText } from "../components"
import Image from "next/image"

export default function page() {
  return (
    <section className="sm:p-16 xs:p-8 py-12 px-4 min-h-screen flex relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.1, 1)}
          className="relative"
        >
          <Image
            src="/assets/bims-group.jpeg"
            alt="get-started"
            priority={true}
            width={500}
            height={333}
            className='rounded-2xl object-contain'
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex justify-center flex-col"
        >
          <TypingText title="| Over ons" />
          <TitleText title="Welkom bij Bimssolutions" />
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            <p className="flex-1 font-normal text-[18px] leading-[32px]">
              Bimssolutions streeft ernaar om innovatieve digitale oplossingen te bieden aan start-ups en kleine bedrijven in Nederland.
              Onze focus ligt op het creëren van hoogwaardige, op maat gemaakte websites en applicaties.
              Dit doen we door onze klanten ondersteuning te bieden bij het oplossen van complexe processen en het ontwikkelen van effectieve marketingstrategieën.
              Wij geloven dat onze klantgerichte aanpak ons in staat stelt om waardevolle oplossingen te bieden voor elke uitdaging.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
