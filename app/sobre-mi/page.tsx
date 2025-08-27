// app/sobre-mi/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import TechBadge from '@/components/TechBadge'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Desarrollo software útil con foco en experiencia y rendimiento. Flutter/Next.js, Node.js y PostgreSQL. Entregas claras y mantenibles.',
  alternates: { canonical: 'https://rodolfoalvarado.dev/sobre-mi' },
}

export default function SobreMiPage() {
  return (
    <section className="container mt-12">
      {/* Encabezado sección */}
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight gradient-text">Sobre mí</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-3xl">
        Directo, profesional y orientado a resultados. Desarrollo software útil con foco en
        experiencia y rendimiento. Menos capas, más claridad. Entregas cortas y feedback temprano.
      </p>

      {/* Card principal (mantén la estructura) */}
      <div className="card card-hover mt-6">
        <h2 className="text-lg md:text-xl font-semibold">
          Desarrollo software útil con foco en experiencia y rendimiento.
        </h2>
        <p className="mt-2 text-sm md:text-base text-gray-500 dark:text-gray-400">
          Trabajo con Flutter (móvil) y Next.js (web), con backends en Node.js o FastAPI y bases de
          datos PostgreSQL. Puedo llevar un producto desde el prototipo hasta producción en un VPS
          con Nginx, Docker básico y CI/CD (GitHub Actions).
        </p>

        {/* Grid de puntos fuertes (deja tu contenido si ya lo tienes) */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="card"><strong>Simplicidad</strong><br/>Menos capas, más claridad.</div>
          <div className="card"><strong>Utilidad</strong><br/>Funcionalidad que resuelve un problema real.</div>
          <div className="card"><strong>Rendimiento</strong><br/>Interfaces rápidas y despliegues limpios.</div>
          <div className="card"><strong>Entrega</strong><br/>Iteraciones cortas y producción con cuidado.</div>
          <div className="card"><strong>Móvil (Flutter)</strong><br/>MVPs ágiles con UI limpia.</div>
          <div className="card"><strong>Web (Next.js)</strong><br/>Sitios y dashboards rápidos.</div>
          <div className="card"><strong>Backend</strong><br/>APIs en Node/FastAPI con PostgreSQL.</div>
          <div className="card"><strong>Infra/DevOps</strong><br/>Nginx, VPS Linux, Docker, CI/CD.</div>
        </div>

        {/* Tecnologías (ahora con icono + texto, sin cambiar tu layout) */}
        <div className="mt-6">
          <h3 className="text-sm font-medium opacity-80 mb-2">Tecnologías</h3>
          <div className="flex flex-wrap gap-2">
            {/* Mantén las que ya mostrabas y añadimos iconos */}
            <TechBadge label="Next.js"        slug="nextdotjs"         color="000000" />
            <TechBadge label="TypeScript"     slug="typescript"        color="3178C6" />
            <TechBadge label="Flutter"        slug="flutter"           color="02569B" />
            <TechBadge label="Node.js"        slug="nodedotjs"         color="5FA04E" />
            <TechBadge label="PostgreSQL"     slug="postgresql"        color="4169E1" />
            <TechBadge label="Docker"         slug="docker"            color="2496ED" />
            <TechBadge label="Nginx"          slug="nginx"             color="009639" />
            <TechBadge label="GitHub Actions" slug="githubactions"     color="2088FF" />

            {/* extras solicitados */}
            <TechBadge label="C#"             slug="csharp"            color="68217A" />
            <TechBadge label=".NET"           slug="dotnet"            color="512BD4" />
            <TechBadge label="VB" />
            <TechBadge label="VS Code"        slug="visualstudiocode"  color="007ACC" />
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contacto" className="btn btn-primary">Hablemos</Link>
          <a className="btn btn-outline" href="/cv/rodolfo-alvarado-cv.pdf" download aria-label="Descargar CV en PDF">
            Descargar CV (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
