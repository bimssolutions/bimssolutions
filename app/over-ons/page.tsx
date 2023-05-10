"use client"

import { motion } from "framer-motion"
import { fadeIn, planetVariants, staggerContainer } from "../utils/animations"
import { StartSteps, TitleText, TypingText } from "../components"
import Image from "next/image"

export default function page() {
  return (
    <section id="started" className="py-12 px-4 relative z-10">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8"
      >
        <motion.div
          variants={planetVariants('left')}
          className="flex-1 flex justify-center items-center"
        >
          <Image
            src="/assets/IMG_9416.jpeg"
            alt="get-started"
            width={500}
            height={400}
            className='rounded-2xl object-contain'
          />
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
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
            {/* {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={index+1}
                text={feature}
              />
            ))} */}
          </div>
        </motion.div>
      </motion.div>
    </section>
    // <section
    //   className="py-12 px-4 relative z-10"
    // >
    //   <motion.div
    //     variants={staggerContainer}
    //     initial="hidden"
    //     whileInView="show"
    //     viewport={{ once: true, amount: 0.25 }}
    //     className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8"
    //   >
    //     <p>Bimssolutions streeft ernaar om innovatieve digitale oplossingen te bieden aan start-ups en kleine bedrijven in Nederland.
    //       Onze focus ligt op het creëren van hoogwaardige, op maat gemaakte websites en applicaties.
    //       Dit doen we door onze klanten ondersteuning te bieden bij het oplossen van complexe processen en het ontwikkelen van effectieve marketingstrategieën.
    //       Wij geloven dat onze klantgerichte aanpak en gebruik van technologie ons in staat stellen om waardevolle oplossingen te bieden voor elke uitdaging.
    //     </p>
    //     <div>page</div>
    //   </motion.div>
    // </section>
  )
}
