"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import { motion } from "framer-motion"

type Props = {}

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
    label: 'About us',
    url: '/'
  }, 
  {
    label: 'Portfolio',
    url: '/'
  },
  {
    label: 'Contact',
    url: '/'
  }
]

const Header = (props: Props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='fixed w-full top-0 px-4 h-20 z-20 shadow-sm'>
      <div className='flex items-center justify-between h-full max-w-7xl mx-auto'>
        <Image src={`/assets/bimss-logo.png`} width={125} height={40} alt="bimssolutions logo" />
        <div onClick={() => setToggle(prev => !prev)} className="block md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {/* {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
          ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
          )} */}
        </div>
        <nav className={`${toggle ? 'block' : 'hidden'} flex-col space-y-8 md:flex md:space-x-6 md:space-y-0 md:flex-row flex space-x-4`}>
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.url}
              className="relative group mr-4"
              onClick={() => setToggle(false)}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-[1px] inline-block w-0 bg-black group-hover:w-full transition-[width] ease duration-300" />
            </Link>
          ))}
        </nav>
      </div>
      {/* Mobile nav */}
      <div className={toggle ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500' : ''}>
        <div className={
          toggle
            ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div className="flex items-center justify-between w-full">
            <Image src={`/assets/bimss-logo.png`} width={125} height={40} alt="bimssolutions logo" />
            <div onClick={() => setToggle(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className="py-4">Laten we samen bouwen</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header


// export default Header