
// app/sobre-mi/page.tsx
import Section from '@/components/Section'
import TechBadge from '@/components/TechBadge'
import { CheckCircle2, Gauge, Rocket, ServerCog, Smartphone, Globe, Database } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Experiencia, habilidades y enfoque de trabajo de Rodolfo Alvarado.',
  alternates: { canonical: 'https://rodolfoalvarado.dev/sobre-mi' },
}

const STACK = [
  'Flutter','Dart','Next.js','TypeScript','Tailwind CSS',
  'Node.js','Express','NestJS','PostgreSQL','Supabase',
  'Python','FastAPI','Docker','Nginx','Linux VPS',
  'GitHub Actions','Stripe','Binance Pay','Open Food Facts API'
]

const PRINCIPIOS = [
  { t: 'Simplicidad', d: 'Menos capas, más claridad. Soluciones que se entienden y se mantienen.', icon: CheckCircle2 },
  { t: 'Utilidad', d: 'Funcionalidad que resuelve un problema real. Sin relleno.', icon: Gauge },
  { t: 'Rendimiento', d: 'Interfaces rápidas, backends estables y despliegues limpios.', icon: Rocket },
  { t: 'Entrega', d: 'Iteraciones cortas, feedback temprano y foco en producción.', icon: CheckCircle2 },
]

const SERVICIOS = [
  { t: 'Móvil (Flutter)', d: 'MVPs y apps ligeras con UI limpia y navegación fluida.', icon: Smartphone },
  { t: 'Web (Next.js)', d: 'Sitios y dashboards rápidos, SSR/estático según el caso.', icon: Globe },
  { t: 'Backend', d: 'APIs en Node.js/FastAPI con PostgreSQL, autenticación y colas.', icon: ServerCog },
  { t: 'Infra/DevOps', d: 'Nginx, VPS Linux, Docker básico y CI/CD con GitHub Actions.', icon: Database },
]

export default function SobreMi() {
  return (
    <Section title="Sobre mí" subtitle="Directo, profesional y orientado a resultados.">
      <div className="card">
        <p className="text-sm flex items-center gap-2 text-gray-600 dark:text-gray-400">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" aria-hidden="true" />
          Disponible para proyectos nuevos
        </p>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Desarrollo software útil con foco en experiencia y rendimiento.
        </h2>

        <div className="prose prose-invert max-w-none mt-4">
          <p>
            Soy <strong>Rodolfo Alvarado</strong>. Trabajo con <strong>Flutter</strong> (móvil) y <strong>Next.js</strong> (web),
            con backends en <strong>Node.js</strong> o <strong>FastAPI</strong> y bases de datos <strong>PostgreSQL</strong>.
            Puedo llevar un producto desde el prototipo hasta producción en un <em>VPS</em> con <strong>Nginx</strong>, <strong>Docker</strong> básico
            y <strong>CI/CD</strong> (GitHub Actions). Actualmente desarrollo <em>FoodiScanApp</em>, y mantengo <em>FoodiScanWeb</em> y <em>DíasTrabajados</em>.
          </p>
        </div>

        {/* Principios con iconos */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {PRINCIPIOS.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.t}
                className="rounded-xl border border-gray-200/20 p-4 bg-white/40 dark:bg-gray-900/40 flex gap-3"
              >
                <Icon className="w-5 h-5 opacity-80 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{p.t}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{p.d}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Servicios con iconos */}
        <h3 className="mt-8 text-lg font-semibold">Cómo puedo ayudar</h3>
        <div className="mt-3 grid md:grid-cols-2 gap-4">
          {SERVICIOS.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.t}
                className="rounded-xl border border-gray-200/20 p-4 flex gap-3"
              >
                <Icon className="w-5 h-5 opacity-80 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium">{s.t}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{s.d}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stack */}
        <h3 className="mt-8 text-lg font-semibold">Tecnologías</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {STACK.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a className="btn btn-primary" href="/contacto">Hablemos</a>
          <a className="btn btn-outline" href="/cv/rodolfo-alvarado-cv.pdf" download>Descargar CV (PDF)</a>
        </div>
      </div>
    </Section>
  )
}
