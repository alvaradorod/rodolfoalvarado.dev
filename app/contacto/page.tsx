// app/contacto/page.tsx
import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Hablemos de tu proyecto. Respondo rápido.',
  alternates: { canonical: 'https://rodolfoalvarado.dev/contacto' },
}

export default function ContactoPage() {
  return <ContactForm />
}
