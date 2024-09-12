import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <main
      className='bg-loginbg w-screen h-screen bg-top bg-cover bg-black/60 bg-blend-color'
    >
        {children}
    </main>
  )
}