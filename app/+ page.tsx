// app/page.tsx
import Link from 'next/link'
import TechBadge from '@/components/TechBadge'

export default function HomePage() {
  return (
    <main className="container mt-12">
      <section className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold gradient-text">
          Rodolfo Alvarado — Desarrollador
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Desarrollo web y móvil. Construyo productos rápidos, accesibles y mantenibles.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 justify-center">
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

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/proyectos" className="btn btn-primary">Ver proyectos</Link>
          <Link href="/contacto"  className="btn btn-outline">Hablemos</Link>
        </div>
      </section>
    </main>
  )
}
