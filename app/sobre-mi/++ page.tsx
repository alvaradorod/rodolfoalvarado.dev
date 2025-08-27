// app/sobre-mi/page.tsx
import type { Metadata } from 'next'
import TechBadge from '@/components/TechBadge'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: 'Experiencia, habilidades y enfoque de trabajo de Rodolfo Alvarado.',
  alternates: { canonical: 'https://rodolfoalvarado.dev/sobre-mi' },
}

export default function SobreMiPage() {
  return (
    <section className="container mt-12">
      <h1 className="text-2xl md:text-3xl font-semibold tracking-tight gradient-text">
        Sobre mí
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl">
        Soy desarrollador con foco en experiencias rápidas y accesibles. Me gusta trabajar
        con stacks modernos, buenas prácticas y despliegues sólidos.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <TechBadge label="JavaScript"       slug="javascript"        color="F7DF1E" />
        <TechBadge label="TypeScript"       slug="typescript"        color="3178C6" />
        <TechBadge label="React"            slug="react"             color="61DAFB" />
        <TechBadge label="Next.js"          slug="nextdotjs"         color="000000" />
        <TechBadge label="Node.js"          slug="nodedotjs"         color="5FA04E" />
        <TechBadge label="Tailwind CSS"     slug="tailwindcss"       color="38BDF8" />
        <TechBadge label="C#"               slug="csharp"            color="68217A" />
        <TechBadge label=".NET"             slug="dotnet"            color="512BD4" />
        <TechBadge label="VB" />
        <TechBadge label="VS Code"          slug="visualstudiocode"  color="007ACC" />
      </div>

      {/* Añade aquí tu historia, experiencia, educación, etc. */}
    </section>
  )
}
