export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='overflow-hidden w-full min-h-screen'>
        {children}
      </div>
    </>
  )
}