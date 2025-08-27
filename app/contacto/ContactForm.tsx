// app/contacto/ContactForm.tsx
'use client'

import { useState } from 'react'
import { Mail, CheckCircle2 } from 'lucide-react'
import Toast from '@/components/Toast'

type Status = 'idle' | 'enviando' | 'ok' | 'error'
const ACCESS_KEY = '010d5ba5-0856-4efe-a625-d632d1fce77f' // Web3Forms

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [toast, setToast] = useState(false)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot
    const website = (fd.get('website') as string) || ''
    if (website.trim() !== '') return

    setStatus('enviando')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          from_name: 'Portafolio rodolfoalvarado.dev',
          subject: 'Nuevo mensaje desde el portafolio',
          name: fd.get('nombre'),
          email: fd.get('email'),
          message: fd.get('mensaje'),
          botcheck: website,
        }),
      })

      const data = await res.json().catch(() => ({} as any))
      const ok = res.ok && data?.success !== false

      setStatus(ok ? 'ok' : 'error')
      if (ok) {
        form.reset()
        setToast(true)
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="container mt-12">
      <div className="w-full max-w-xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <Mail className="w-5 h-5 opacity-80" />
          <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
        </div>
        <p className="text-gray-500 mt-1">Cuéntame de tu proyecto.</p>

        {status === 'ok' ? (
          <div className="card p-6 mt-6 text-center" role="status" aria-live="polite" aria-atomic="true">
            <CheckCircle2 className="w-10 h-10 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">¡Mensaje enviado!</h3>
            <p className="text-gray-500 mt-1">Gracias por escribirme. Te responderé lo antes posible.</p>
            <button className="btn btn-secondary mt-4" onClick={() => setStatus('idle')}>
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="card grid gap-3 mt-6" noValidate>
            <div className="grid gap-1">
              <label className="text-sm" htmlFor="nombre">Nombre</label>
              <input id="nombre" name="nombre" required className="border rounded-xl p-2 bg-transparent" autoComplete="name" />
            </div>

            <div className="grid gap-1">
              <label className="text-sm" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required className="border rounded-xl p-2 bg-transparent" autoComplete="email" inputMode="email" />
            </div>

            <div className="grid gap-1">
              <label className="text-sm" htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" required rows={5} className="border rounded-xl p-2 bg-transparent" />
            </div>

            {/* Honeypot anti-spam */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="flex items-center gap-3">
              <button disabled={status === 'enviando'} className="btn btn-primary" type="submit">
                {status === 'enviando' ? 'Enviando…' : 'Enviar'}
              </button>
              {status === 'error' && <span className="text-red-600 text-sm">Error al enviar. Inténtalo de nuevo.</span>}
            </div>

            <p className="text-xs opacity-70">
              Al enviar aceptas que guardaré estos datos para responderte. No comparto tu información.
            </p>
          </form>
        )}
      </div>

      <Toast show={toast} text="Gracias, te responderé pronto." />
    </section>
  )
}
