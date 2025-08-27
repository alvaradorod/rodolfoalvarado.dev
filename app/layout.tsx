// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'
import Header from '@/components/Header'
import Backdrop from '@/components/Backdrop'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://rodolfoalvarado.dev'),
  title: {
    default: 'Rodolfo Alvarado — Desarrollador',
    template: '%s — Rodolfo Alvarado',
  },
  description: 'Portafolio de Rodolfo Alvarado: desarrollo web y móvil, proyectos y contacto.',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    siteName: 'Rodolfo Alvarado',
    title: 'Rodolfo Alvarado — Portafolio',
    description: 'Proyectos destacados y formas de contacto.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rodolfo Alvarado — Portafolio',
    description: 'Proyectos destacados y formas de contacto.',
    images: ['/og-image.png'],
  },
  themeColor: '#0b1220',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />           {/* <-- AQUÍ ESTABA EL FALLO: renderiza el header */}
        {children}
        <Footer />

        {/* JSON-LD */}
        <Script id="ld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Rodolfo Alvarado',
            url: 'https://rodolfoalvarado.dev',
            jobTitle: 'Desarrollador',
            sameAs: [
              // 'https://github.com/tu-usuario',
              // 'https://www.linkedin.com/in/tu-perfil'
            ],
          })}
        </Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Rodolfo Alvarado',
            url: 'https://rodolfoalvarado.dev',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://rodolfoalvarado.dev/?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </body>
    </html>
  )
}
