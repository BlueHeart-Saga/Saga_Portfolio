import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Saga | Portfolio',
  description: 'Frontend Developer | Next.js & React',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
