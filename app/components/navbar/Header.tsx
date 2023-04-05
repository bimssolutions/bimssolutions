"use client"
import Link from 'next/link'
import { useState } from 'react'
// import { motion } from "framer-motion"

type Props = {}

const Header = (props: Props) => {
  const [toggle, setToggle] = useState(false)
  return (
    <header className='sticky top-0 flex items-center shadow-sm h-20 justify-between max-w-7xl mx-auto ease-in duration-300'>
      <h1 className="font-bold">
        Bimssolutions
      </h1>
      <nav className="hidden md:inline-flex space-x-4">
        {[
          ['Home', '/'],
          ['About us', '/'],
          ['Portfolio', '/portfolio'],
          ['Contact', '/'],
        ].map(([title, url]) => (
          <Link key={title} href={url} className="relative group mr-4">
            {title}
            <span className="absolute -bottom-0.5 left-0 h-[1px] inline-block w-0 bg-black group-hover:w-full transition-[width] ease duration-300" />
          </Link>
        ))}
      </nav>
      <div onClick={() => setToggle(prev => !prev)} className="block md:hidden">
        {toggle ? 'menu' : 'menu-icon'}
      </div>
    </header>
  )
}

export default Header


// export default Header