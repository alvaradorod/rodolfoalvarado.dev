'use client'
import { motion } from 'framer-motion'
import BackgroundGlow from './BackgroundGlow'

import Link from 'next/link'
import { useState } from 'react'

const COMPACT_STACK = ['Next.js','TypeScript','Flutter','Node.js','PostgreSQL']

export default function Hero() {
  const [open, setOpen] = useState(false)

  return (
    <section className="container py-12">
       <BackgroundGlow />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card"
      >
        <p className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
          Sólo Proyectos Nuevos
        </p>

        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Desarrollo productos simples
          </span>{' '}
          que resuelven problemas reales.
        </h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
          Flutter (móvil) y Next.js (web). Backend con Node.js y PostgreSQL. Enfoque en utilidad, rendimiento y claridad.
        </p>

        {/* Métricas compactas */}
        <div className="mt-3 flex flex-wrap gap-2">
          {['2 sitios en producción', '1 app en desarrollo'].map(m => (
            <span key={m} className="badge">{m}</span>
          ))}
        </div>

        {/* Stack compacto (una fila) */}
        <div className="mt-4 flex flex-wrap gap-2">
          {COMPACT_STACK.map(t => <span key={t} className="badge">{t}</span>)}
          <Link href="/sobre-mi#stack" className="badge">Ver stack completo</Link>
        </div>

        {/* CTAs: orden y pesos */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link className="btn btn-primary" href="/proyectos" aria-label="Ver proyectos">
            Ver proyectos
          </Link>
          <Link className="btn btn-outline" href="/contacto" aria-label="Ir a contacto">
            Contacto
          </Link>
          <a className="btn btn-outline" href="/cv/rodolfo-alvarado-cv.pdf" download aria-label="Descargar CV en PDF">
            Descargar CV (PDF)
          </a>
          
        </div>
      </motion.div>
    </section>
  )
}
