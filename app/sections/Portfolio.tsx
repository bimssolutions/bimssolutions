import Image from "next/image"

const portfolios = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

const Portfolio = () => {
  return (
    <ul className="divide-y divide-gray-200">
      {portfolios.map((portfolio) => (
        <li key={portfolio.email} className="py-4 flex">
          {/* <Image
              src={portfolio.image}
              alt="image"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{portfolio.name}</p>
            <p className="text-sm text-gray-500">{portfolio.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Portfolio