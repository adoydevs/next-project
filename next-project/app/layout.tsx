import type { Metadata } from 'next'
import {Hanken_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Hanken_Grotesk ({ subsets: ['latin'], weight: ["500", "700", "800"] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Created by Adoy ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
