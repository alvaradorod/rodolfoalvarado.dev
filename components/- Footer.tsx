import { Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200/20 mt-16">
      <div className="container py-10 text-sm opacity-80 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Rodolfo Alvarado.</p>
        <p className="flex items-center gap-4">
          <a href="mailto:contacto@rodolfoalvarado.dev" className="link">contacto@rodolfoalvarado.dev</a>
          <a className="flex items-center gap-1 link" href="https://github.com/" target="_blank" rel="noreferrer">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a className="flex items-center gap-1 link" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </p>
      </div>
    </footer>
  )
}
