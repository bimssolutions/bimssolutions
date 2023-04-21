import Link from 'next/link'

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

export default function Navbar() {
  return (
    <nav className="hidden md:inline-flex space-x-4">
      {NAV_ITEMS.map((item, idx) => (
        <Link
          key={idx}
          href={item.url}
          className="relative group mr-4"
        >
          {item.label}
          <span className="absolute -bottom-0.5 left-0 h-[1px] inline-block w-0 bg-black group-hover:w-full transition-[width] ease duration-300" />
        </Link>
      ))}
    </nav>
  )
}
