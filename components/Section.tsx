'use client'
import Reveal from './Reveal'

export default function Section(props: { title: string; subtitle?: string; children: React.ReactNode }) {
  const { title, subtitle, children } = props
  return (
    <Reveal>
      <section className="container mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle && <p className="text-gray-500 mt-1">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </section>
    </Reveal>
  )
}
