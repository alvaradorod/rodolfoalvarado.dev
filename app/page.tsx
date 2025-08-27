// app/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import TechBadge from '@/components/TechBadge'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Desarrollo productos simples que resuelven problemas reales. Flutter (móvil) y Next.js (web). Backend con Node.js y PostgreSQL.',
  alternates: { canonical: 'https://rodolfoalvarado.dev/' },
}

export default function HomePage() {
  return (
    <main className="container mt-12">
      {/* HERO */}
      <section className="card card-hover p-6 md:p-10">
        {/* Indicador superior */}
        <p className="flex items-center gap-2 text-sm opacity-80 mb-3">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" aria-hidden />
          Sólo Proyectos Nuevos
        </p>

        {/* Título con tu degradado */}
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          <span className="gradient-text">Desarrollo productos simples</span>{' '}
          <span className="font-extrabold">que resuelven problemas reales.</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
          Flutter (móvil) y Next.js (web). Backend con Node.js y PostgreSQL. Enfoque en utilidad,
          rendimiento y claridad.
        </p>

        {/* Métricas/chips de estado */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="badge">2 sitios en producción</span>
          <span className="badge">1 app en desarrollo</span>
          <Link href="/sobre-mi" className="badge">Ver stack completo</Link>
        </div>

        {/* Tecnologías (ahora con icono + texto) */}
        <div className="mt-5 flex flex-wrap gap-2">
          <TechBadge label="Next.js"        slug="nextdotjs"         color="000000" />
          <TechBadge label="TypeScript"     slug="typescript"        color="3178C6" />
          <TechBadge label="Flutter"        slug="flutter"           color="02569B" />
          <TechBadge label="Node.js"        slug="nodedotjs"         color="5FA04E" />
          <TechBadge label="PostgreSQL"     slug="postgresql"        color="4169E1" />

          {/* extras solicitados */}
          <TechBadge label="C#"             slug="csharp"            color="68217A" />
          <TechBadge label=".NET"           slug="dotnet"            color="512BD4" />
          <TechBadge label="VB" />
          <TechBadge label="VS Code"        slug="visualstudiocode"  color="007ACC" />
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/proyectos" className="btn btn-primary">Ver proyectos</Link>
          <Link href="/contacto"  className="btn btn-outline">Contacto</Link>
          <a className="btn btn-outline" href="/cv/rodolfo-alvarado-cv.pdf" download aria-label="Descargar CV en PDF">
            Descargar CV (PDF)
          </a>
        </div>
      </section>

      

      {/* --- debajo puedes dejar tal cual tus secciones existentes --- */}
      {/* Ejemplo de contenedor para tus tablas/cards siguientes */}
      {/* <section className="mt-10"> ... </section> */}

      


    </main>
  )
}
