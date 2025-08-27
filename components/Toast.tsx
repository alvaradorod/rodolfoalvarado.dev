'use client'
import { useEffect, useState } from 'react'

export default function Toast({ show, text }: { show: boolean; text: string }) {
  const [visible, setVisible] = useState(show)
  useEffect(() => {
    if (show) {
      setVisible(true)
      const t = setTimeout(() => setVisible(false), 2200)
      return () => clearTimeout(t)
    }
  }, [show])
  if (!visible) return null
  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50">
      <div className="rounded-xl bg-green-600 text-white px-4 py-2 shadow">
        {text}
      </div>
    </div>
  )
}
