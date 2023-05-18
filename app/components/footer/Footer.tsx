"use client"

import { socials } from "@/app/constant";
import { footerVariants } from "@/app/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Footer() {
  return (
    <motion.footer
      variants={footerVariants}
      className="sm:p-16 xs:p-8 px-4 pb-12 pt-32 w-full overflow-x-hidden relative"
    >
      <div className="footer-gradient" />
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[48px] text-[40px]">
            Contact
          </h4>
          <a href="mailto:contact@bimssolutions.nl">
            <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#02015C] rounded-[32px] gap-[12px]">
              <Image
                src={'/assets/mail.svg'}
                width={25}
                height={20}
                alt='mail'
              />
              <span className="font-normal text-white text-[16px]">
                Mail ons
              </span>
            </button>
          </a>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-black opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-xl">
              BIMSSOLUTIONS
            </h4>
            <p className="font-normal text-[14px] opacity-50">
              Copyright © 2023 Bimssolutions. All rights reserved.
            </p>

            {/* <div className="flex gap-4">
          {socials.map((social) => (
              <Image
                height={70}
                width={70}
                key={social.name}
                src={`/assets${social.url}`}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div> */}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
