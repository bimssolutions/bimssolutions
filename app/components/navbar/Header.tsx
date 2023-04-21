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
    <header className='top-0 px-4 shadow-sm'>
      <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <Image src={`/assets/bimss-logo.png`} width={125} height={40} alt="bimssolutions logo" />
        <div onClick={() => setToggle(prev => !prev)} className="block md:hidden">
          {toggle ? (
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
          )}
        </div>
        <nav className={`${toggle ? 'block' : 'hidden'} flex-col space-y-8 md:flex md:space-x-6 md:space-y-0 md:flex-row flex md:inline-flex space-x-4`}>
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
      {/* <div className='fixed left-0 top-0 w-full h-screen bg-black/70'>

      </div> */}
    </header>
  )
}

export default Header


// export default Header