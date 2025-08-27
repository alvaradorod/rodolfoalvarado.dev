// app/sitemap.ts
import type { MetadataRoute } from 'next'

const base = 'https://rodolfoalvarado.dev'

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date()
  return [
    { url: `${base}/`,        lastModified: today, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/sobre-mi`,lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/proyectos`,lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/contacto`, lastModified: today, changeFrequency: 'yearly',  priority: 0.5 },
  ]
}
