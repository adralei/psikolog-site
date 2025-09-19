import Link from 'next/link'
import { useState } from 'react'

/*
 Basit, responsive Navbar
 Mobilde hamburger -> açılır menü
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-purple-600 flex items-center justify-center text-white font-semibold">EE</div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold">Psikolog Ece Erkan</div>
              <div className="text-xs text-muted">Klinik Psikolog</div>
            </div>
          </a>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/#egitimler"><a className="hover:underline">Eğitimler</a></Link>
          <Link href="/hizmetler"><a className="hover:underline">Hizmetler</a></Link>
          <Link href="/basin"><a className="hover:underline">Basın</a></Link>
          <Link href="/iletisim"><a className="px-4 py-2 rounded-md bg-accent text-white text-sm">İletişim</a></Link>
        </nav>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-3 space-y-2">
            <a href="/#egitimler" className="block">Eğitimler</a>
            <a href="/hizmetler" className="block">Hizmetler</a>
            <a href="/basin" className="block">Basın</a>
            <a href="/iletisim" className="block font-semibold text-accent">İletişim</a>
          </div>
        </div>
      )}
    </header>
  )
}
