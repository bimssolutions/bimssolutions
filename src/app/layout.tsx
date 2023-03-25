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
      <body>{children}</body>
    </html>
  )
}
