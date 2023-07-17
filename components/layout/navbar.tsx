"use client"

import useScroll from '@/lib/hooks/use-scroll';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
  // {
  //   label: 'Portfolio',
  //   url: '/portfolios'
  // },
  {
    label: 'Diensten',
    url: '/diensten'
  },
  // {
  //   label: 'Werkwijze',
  //   url: '/werkwijze'
  // },
]

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const pathname = usePathname();
  const scrolled = useScroll(50);

  return (
    <header
      className={`fixed top-0 w-full flex justify-center ${scrolled
        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
        : "bg-white/0"
        } z-30 transition-all`}
    >
      {/* <div className="absolute w-[50%] inset-0 gradient-01" /> */}
      <div className='mx-5 flex h-20 max-w-screen-xl items-center justify-between w-full'>
        <Link
          href="/"
          className="relative h-10 w-52"
        >
          <Image src='/assets/bimssolutions-logo.svg'
            fill
            priority={true}
            alt="Bimssolutions logo" />
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
              className="relative group mr-4 font-light"
              onClick={() => setToggle(false)}
            >
              <span className={`'text-primary-black'}`}>{item.label}</span>
              <span
                className={`absolute -bottom-0.5 left-0 h-[1px] inline-block w-full bg-primary-black opacity-0 group-hover:opacity-100 ${pathname === item.url ? 'opacity-100' : 'opacity-0'} transition-all ease duration-300`}
              />
            </Link>
          ))}
        </nav>
        <button onClick={() => setToggle(prev => !prev)} className="md:hidden text-gray-500 w-10 h-10 relative focus:outline-none z-50">
          <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <span aria-hidden="true" className={`${toggle ? 'rotate-45' : '-translate-y-1'} block absolute h-0.5 w-5 bg-black transform transition duration-500 ease-in-out`}></span>
            <span aria-hidden="true" className={`${toggle ? '-rotate-45' : 'translate-y-1'} block absolute  h-0.5 w-5 bg-black transform  transition duration-500 ease-in-out`}></span>
          </div>
        </button>
      </div>
    </header>
  )
}
