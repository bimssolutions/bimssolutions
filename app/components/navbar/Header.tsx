"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from "framer-motion"
import { navVariants } from '@/app/utils/animations'

interface NavItems {
  label: string,
  url: string,
}

const NAV_ITEMS: NavItems[] = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'Over ons',
    url: '/over-ons'
  },
  {
    label: 'Diensten',
    url: '/diensten'
  },
  {
    label: 'Portfolio',
    url: '/portfolios'
  },
  {
    label: 'Werkwijze',
    url: '/werkwijze'
  },
]

const Header = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <motion.header
      variants={navVariants}
      className='sticky bg-white border bg-opacity-70 backdrop-filter backdrop-blur-sm w-full top-0 sm:px-16 xs:px-8 px-4 h-20 z-20'
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className='flex items-center justify-between h-full max-w-7xl mx-auto'>
        <Link
          href="/"
          className="z-0"
        >
          <Image src={`/assets/bimssolutions-logo.svg`}
            width={204}
            height={45}
            alt="bimssolutions logo" />
        </Link>
        <div className={toggle ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500' : ''}></div>
        <nav className={`${toggle ? 'fixed right-0 flex-col space-y-8 md:flex md:space-x-6 md:space-y-0 md:flex-row flex top-0 w-[75%] sm:w-[60%] shadow-xl h-screen bg-white p-10 md:p-0 md:shadow-none md:h-auto md:static md:w-auto' :
          'hidden'} 
          md:flex`}
        >
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              scroll={false}
              className="relative group mr-4 font-light"
              onClick={() => setToggle(false)}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-[1px] inline-block w-0 bg-black group-hover:w-full transition-[width] ease duration-300" />
            </Link>
          ))}
        </nav>
        <button onClick={() => setToggle(prev => !prev)} className="md:hidden text-gray-500 w-10 h-10 relative focus:outline-none z-50">
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" className={`${toggle ? 'rotate-45' : '-translate-y-1.5' } block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out`}></span>
            <span aria-hidden="true" className={`${toggle ? '-rotate-45' : 'translate-y-1.5' } block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out`}></span>
          </div>
        </button>
      </div>
    </motion.header>
  )
}

export default Header

