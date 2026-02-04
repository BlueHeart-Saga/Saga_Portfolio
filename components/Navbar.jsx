import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
      <h1 className="text-xl font-bold">Saga</h1>
      <div className="space-x-6 text-gray-300">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
