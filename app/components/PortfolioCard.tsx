'use client'

import { motion } from "framer-motion"
import { fadeIn } from '@/app/utils/animations'
import Image from "next/image"
import Link from "next/link"

interface ExploreCardType {
  id: string,
  name: string,
  imgUrl: string,
  index: number,
  categories: string
}

const colors = [
  'yellow',
  'green',
  'blue',
  'orange'
]

export default function PortfolioCard({ id, name, imgUrl, index, categories }: ExploreCardType) {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="relative lg:flex-[3.5] flex-[10] flex items-center justify-center min-w-[170px]
        h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer"
    >
      <Link className="h-full w-full" href={`/portfolios/${id}`}>
        <Image
          src={imgUrl}
          fill={true}
          style={{ objectFit: "cover" }}
          alt={name}
          className={`absolute w-full h-full bg-[${colors[index]}] object-cover rounded-[24px]`}
        />
        <div className="absolute bottom-0 p-8 flex justify-end h-full w-full flex-col bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent rounded-b-[24px]">
          <h2 className="mb-4 font-semibold sm:text-[32px] text-[24px] text-white">
            {name}
          </h2>
          <div className="flex flex-wrap">
            {JSON.parse(categories).map((tag: string, i: number) => (
              <span
                className='font-normal text-[16px] mb-2 leading-[20px] mr-2 border py-1 px-2 rounded-full border-white text-white uppercase'
                key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
