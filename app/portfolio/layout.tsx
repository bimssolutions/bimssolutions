export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='bg-primary-black overflow-hidden w-full min-h-screen'>
        {children}
      </div>
    </>
  )
}