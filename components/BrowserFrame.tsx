export default function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-300 dark:border-gray-700 shadow overflow-hidden">
      {/* Barra superior */}
      <div className="flex items-center gap-1 px-3 h-7 bg-gray-200 dark:bg-gray-800">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>
      {/* Contenido (captura) */}
      <div className="bg-white dark:bg-gray-900">{children}</div>
    </div>
  )
}
