'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sobre-mi', label: 'Sobre mí' },
  { href: '/contacto', label: 'Contacto' }
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200/20 sticky top-0 backdrop-blur bg-white/70 dark:bg-gray-900/70 z-10">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight" aria-label="Ir a inicio">
          Rodolfo Alvarado
        </Link>

        <nav className="hidden md:flex gap-6">
          {links.map(l => (
            <Link
              key={l.href}
              className={`navlink ${pathname === l.href ? 'opacity-100' : 'opacity-70'}`}
              href={l.href}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-xl border border-gray-200/30"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200/20">
          <nav className="container py-3 flex flex-col gap-3">
            {links.map(l => (
              <Link
                key={l.href}
                className="navlink"
                href={l.href}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
