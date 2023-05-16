import { Header, Footer } from './components'
import { Inter } from 'next/font/google'
import './styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Bimssolutions',
  description: 'Op maat gemaakte weboplossingen voor jou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="w-full overflow-hidden min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
