'use client'

import Hero from '@/components/Hero'
import TechBadge from '@/components/TechBadge'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function useCountUp(to: number, ms = 800) {
  const [n, setN] = useState(0)
  useEffect(() => {
    const start = performance.now()
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / ms)
      // easing: ease-out cúbica
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, ms])
  return n
}

function Stat({ k, v }: { k: string; v: number }) {
  const n = useCountUp(v)
  return (
    <div>
      <p className="text-sm text-gray-500">{k}</p>
      <p className="text-2xl font-semibold mt-1 tabular-nums">{n}</p>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Hero />

      {/* Stats compactos + CTAs */}
      <section className="container mt-6">
        <div className="card mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-3">
            <Stat k="Sitios en producción" v={2} />
            <Stat k="App en desarrollo" v={1} />
            <div>
              <p className="text-sm text-gray-500">Acciones</p>
              <div className="mt-2 flex gap-3">
                <Link href="/proyectos" className="btn btn-primary" aria-label="Ver proyectos">
                  Ver proyectos
                </Link>
                <Link href="/contacto" className="btn btn-outline" aria-label="Ir a contacto">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
