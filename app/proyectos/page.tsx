// app/proyectos/page.tsx
import type { Metadata } from 'next'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Casos reales y proyectos en los que he trabajado.',
  alternates: { canonical: 'https://rodolfoalvarado.dev/proyectos' },
}

export default function ProyectosPage() {
  return (
    <Section title="Proyectos" subtitle="Vitrina técnica: stack y propósito de cada proyecto.">
      <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {/* FoodiScan (sitio web) */}
        <ProjectCard
          title="FoodiScan (web)"
          summary="Sitio informativo multi-idioma y página comercial. Animaciones suaves y formulario de contacto."
          href="https://foodiscan.com"
          image="/proyectos/foodiscan-1.webp"
          stack={[
            'Next.js 15',
            'TypeScript',
            'Tailwind CSS',
            'i18next / next-i18next',
            'Framer Motion',
            'Nodemailer',
          ]}
        />

        {/* DíasTrabajados */}
        <ProjectCard
          title="DíasTrabajados"
          summary="Gestión de jornadas y reportes. Generación de PDF/Excel y sesiones seguras."
          href="https://diastrabajados.com"
          image="/proyectos/diastrabajados-1.webp"
          stack={[
            'Python',
            'Flask 3',
            'MySQL',
            'Jinja2',
            'WeasyPrint (PDF)',
            'Excel (openpyxl, XlsxWriter)',
            'Pillow',
            'Gunicorn',
            'Nginx',
            'VPS Linux',
          ]}
        />

        {/* Portafolio */}
        <ProjectCard
          title="Portafolio personal"
          summary="Sitio minimalista, accesible y rápido. Export estático, servido con Nginx."
          href="#"
          image="/proyectos/portfolio-1.webp"
          stack={[
            'Next.js (export)',
            'TypeScript',
            'Tailwind CSS',
            'Framer Motion',
            'Nginx',
            'VPS Linux',
          ]}
        />
      </div>
    </Section>
  )
}
