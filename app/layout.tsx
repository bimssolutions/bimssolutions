import { Header, Footer } from './components'
import './globals.css'

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
      <body>
        <Header />
        <main className='bg-primary-black overflow-hidden w-full min-h-screen'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
