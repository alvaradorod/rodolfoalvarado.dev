export default function BackgroundGlow() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-120px] h-[380px] w-[380px] -translate-x-1/2 rounded-full blur-3xl opacity-30
                      bg-gradient-to-r from-blue-600 to-violet-600" />
    </div>
  )
}
