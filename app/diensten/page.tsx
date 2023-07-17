"use client"

import { NewFeatures, TitleText, TypingText } from "@/components"
import { motion } from "framer-motion"
import Image from "next/image"
import { serviceFeatures } from "../constant"
import { fadeIn, staggerContainer } from "../utils/animations"

export default function page() {
  return (
    <section className="sm:p-16 xs:p-8 px-4 py-12 min-h-screen" id="portfolio">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col max-w-7xl mx-auto"
      >
        <div className="lg:max-w-[700px] self-center">
          <TypingText title="| WordPress design" textStyles="text-center" />
          <TitleText title='Resultaat gericht ontwerp, met een persoonlijke uitstraling' textStyles='text-center' />
        </div>

        <div className="pt-32 flex lg:flex-row flex-col z-10 gap-5">
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TitleText title="Custom design" />
            <div className="mt-[31px] lg:max-w-[370px] self-center lg:self-start text-left gap-[24px]">
              <p className="flex-1 font-normal text-[18px] leading-[32px]">
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 flex justify-center items-center"
          >
            <Image
              src="/assets/bims-group.jpeg"
              alt="get-started"
              priority={true}
              width={500}
              height={133}
              className='rounded-2xl object-contain'
            />
          </motion.div>
        </div>

        {/* P2 */}
        <div className="pt-32 flex lg:flex-row flex-col z-10 gap-5">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 flex justify-center lg:justify-start items-center"
          >
            <Image
              src="/assets/bims-group.jpeg"
              alt="get-started"
              priority={true}
              width={500}
              height={133}
              className='rounded-2xl object-contain'
            />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TitleText title="Kwaliteit" />
            <div className="mt-[31px] lg:max-w-[370px] self-center lg:self-start text-left gap-[24px]">
              <p className="flex-1 font-normal text-[18px] leading-[32px]">
                We maken gebruik van Elementor builder om de wordpress site te maken. Met deze builder is het voor u eenvoudig om wijzigingen aan te brengen, zoals afbeeldingen en teksten. nieuwe pagina creeeren               </p>
            </div>
          </motion.div>
        </div>

        {/* P3 */}
        <div className="pt-32 flex lg:flex-row flex-col z-10 gap-5">
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TitleText title="Betrouwbaar" />
            <div className="mt-[31px] lg:max-w-[370px] self-center lg:self-start text-left gap-[24px]">
              <p className="flex-1 font-normal text-[18px] leading-[32px]">
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 flex justify-center items-center"
          >
            <Image
              src="/assets/bims-group.jpeg"
              alt="get-started"
              priority={true}
              width={500}
              height={133}
              className='rounded-2xl object-contain'
            />
          </motion.div>
        </div>

        {/* P4 */}
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-1 flex pt-32 justify-center flex-col"
        >
          <div className="lg:max-w-[600px]">
            <TypingText title="| WordPress management" />
            <TitleText title="Ontzorging en optimalisatie voor jouw WordPress-website" />
          </div>

          <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceFeatures.map((feature, index) => (
              <NewFeatures
                key={index}
                {...feature}
              />
            ))}
          </div>
        </motion.div>

        {/* P5 */}
        <div className="pt-32 flex lg:flex-row flex-col z-10 gap-5">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 flex justify-center lg:justify-start items-center"
          >
            <Image
              src="/assets/bims-group.jpeg"
              alt="get-started"
              priority={true}
              width={500}
              height={133}
              className='rounded-2xl object-contain'
            />
          </motion.div>
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="flex-[0.75] flex justify-center flex-col"
          >
            <TypingText title="Hosting" />
            <TitleText title="Betrouwbare hostingoplossingen voor optimale prestaties en veiligheid" />
            <div className="mt-[31px] lg:max-w-[370px] self-center lg:self-start text-left gap-[24px]">
              <p className="flex-1 font-normal text-[18px] leading-[32px]">
                We maken gebruik van Elementor builder om de wordpress site te maken. Met deze builder is het voor u eenvoudig om wijzigingen aan te brengen, zoals afbeeldingen en teksten. nieuwe pagina creeeren               </p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  )
}

