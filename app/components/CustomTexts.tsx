'use client'

import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/animations"

interface TypeProps {
  title: string,
  textStyles?: string,
}

export const TypingText = ({title, textStyles}:TypeProps) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === '' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)

export const TitleText = ({title, textStyles}:TypeProps) => (
    <motion.h2
      variants={textVariant2}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] font-bold text-[40px] ${textStyles}`}
    >
      {title}
    </motion.h2>
)