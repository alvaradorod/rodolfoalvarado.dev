import Image from 'next/image'
import BrowserFrame from './BrowserFrame'

type Size = 'md' | 'lg'

export default function ProjectCard({
  title,
  summary,
  href,
  stack = [],
  image,
  size = 'md',
}: {
  title: string
  summary: string
  href: string
  stack?: string[]
  image?: string
  size?: Size
}) {
  const cardWidth = size === 'lg' ? 'max-w-2xl' : 'max-w-md'
  const imgMaxH = size === 'lg' ? 'max-h-[360px]' : 'max-h-72'

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`card card-hover block focus:outline-none focus:ring-2 focus:ring-blue-500 w-full ${cardWidth}`}
      aria-label={`Abrir ${title}`}
    >
      {/* Imagen dentro de un “marco de navegador” */}
      {image && (
        <div className="mb-4">
          <BrowserFrame>
            <div className={`relative aspect-[16/9] ${imgMaxH} overflow-hidden`}>
              <Image
                src={image}
                alt={`Captura de ${title}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-[1.02]"
                unoptimized
              />
            </div>
          </BrowserFrame>
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        {summary}
      </p>

      {stack.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map((s) => (
            <span key={s} className="badge">
              {s}
            </span>
          ))}
        </div>
      )}
    </a>
  )
}
