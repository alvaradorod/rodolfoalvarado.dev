// components/Backdrop.tsx
// Fondo global con dos manchas radiales azul/violeta (ligeras y con blur)
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Mancha azul (arriba-izquierda) */}
      <div
        className="absolute -top-24 -left-24 h-[44rem] w-[44rem] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(closest-side, rgba(59,130,246,0.55), transparent 70%)',
        }}
      />
      {/* Mancha violeta (abajo-derecha) */}
      <div
        className="absolute -bottom-24 -right-24 h-[44rem] w-[44rem] rounded-full blur-3xl opacity-25"
        style={{
          background: 'radial-gradient(closest-side, rgba(99,102,241,0.55), transparent 70%)',
        }}
      />
    </div>
  )
}
