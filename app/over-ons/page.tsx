"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TitleText, TypingText } from "../../components"
import { fadeIn, staggerContainer } from "../utils/animations"

const checklist = [
  "100% klanttevredenheid staat bij ons voorop",
  "Betrouwbare digitale oplossingen toepassen",
  "Hoge standaarden voor klantondersteuning",
]

const personas = [
  { name: 'Joshua Annan', image: 'joshua.jpg', title: 'UI/UX Designer, Product owner' },
  { name: 'Stefario Lowell', image: 'stefario.jpg', title: 'Software engineer' },
  { name: 'Kwame Chan Jong Chu', image: 'kwame.jpg', title: 'Software engineer' },
  { name: 'Shalom Annan', image: 'shalom.jpg', title: 'Software engineer' },
]

export default function page() {
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
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] flex justify-center flex-col"
        >
          <TypingText title="| Over ons" />
          <TitleText title="Passie voor creativiteit, gedreven door resultaten" />
          <div className="mt-[31px] lg:max-w-[370px] self-center lg:self-start text-left gap-[24px]">
            <p className="flex-1 font-normal text-[18px] leading-[32px]">
              Bimssolutions streeft ernaar om innovatieve digitale oplossingen te bieden aan start-ups en kleine bedrijven in Nederland.
              Onze focus ligt op het creëren van hoogwaardige, op maat gemaakte websites en applicaties.
              Dit doen we door onze klanten ondersteuning te bieden bij het oplossen van complexe processen en het ontwikkelen van effectieve marketingstrategieën.
              Wij geloven dat onze klantgerichte aanpak ons in staat stelt om waardevolle oplossingen te bieden voor elke uitdaging.
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
      </motion.div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl my-32 mx-auto flex lg:flex-row flex-col gap-8"
      >

        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-1 flex justify-left items-center"
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
          <TitleText title="Onze waarden" />
          <div className="mt-[31px] lg:max-w-[370px] self-center lg:self-start text-left gap-[24px]">
            <p className="flex-1 font-normal text-[18px] leading-[32px]">
              We streven ernaar om voortdurend te innoveren en op de noogte te bliven van de nieuwste trends en technologieën om on maat
              gemaakte digitale oplossingen te leveren. Met focus op kwaliteit en klanttevredenheid, zetten wij ons in om resultaatgerichte oplossingen te bieden die bedrijven helpen groeien.
            </p>
            <ul className="max-w-md my-8 space-y-1 list-inside">
              {checklist.map((text, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-3.5 h-3.5 mr-2" fill="#000000" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 184.751 184.751">
                    <path d="M0,92.375l46.188-80h92.378l46.185,80l-46.185,80H46.188L0,92.375z" />
                  </svg>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mt-32 mb-16 mx-auto flex justify-center items-center">
        <TitleText title="Een compact, maar toegeweid team" />
      </div >

      <motion.div
        variants={staggerContainer(0.04, 0.125)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8 text-center md:text-left"
      >
        {personas.map((persona, index) => (
          <motion.div
            key={index}
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="flex-1 flex flex-col justify-center items-center"
          >
            <Image
              src={`/assets/${persona.image}`}
              alt="bimss-joshua"
              priority={true}
              width={500}
              height={133}
              className='rounded-2xl object-contain'
            />
            <div className="my-4 text-center">
              <p className="font-semibold">{persona.name}</p>
              <span className="text-center text-sky-800">{persona.title}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  )
}
