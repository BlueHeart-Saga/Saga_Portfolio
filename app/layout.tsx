import '../styles/globals.css'
import { Inter, Poppins } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ReactNode } from 'react'



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
