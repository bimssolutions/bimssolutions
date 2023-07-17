"use client"

import { TitleText, TypingText } from "@/components"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/animations"

export default function page() {
  return (
    <section id="started" className="py-20 px-4 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="flex flex-1 justify-center flex-col"
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
