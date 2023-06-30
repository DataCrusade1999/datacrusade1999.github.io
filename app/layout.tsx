import Navbar from '@/components/navbar'
import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Home',
  description: 'my personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
