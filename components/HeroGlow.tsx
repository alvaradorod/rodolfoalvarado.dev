// components/HeroGlow.tsx
export default function HeroGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="
          mx-auto mt-[-4rem]
          h-[14rem] w-[75%] max-w-5xl
          rounded-full blur-3xl
          bg-gradient-to-r from-blue-500/40 via-indigo-500/35 to-violet-500/40
        "
      />
    </div>
  )
}
