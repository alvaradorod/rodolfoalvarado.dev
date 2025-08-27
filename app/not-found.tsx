import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="container py-20 text-center">
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <p className="mt-2 text-gray-500">Vuelve al inicio y seguimos.</p>
      <Link href="/" className="btn btn-primary mt-6 inline-block">Ir al inicio</Link>
    </div>
  )
}
