// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200/20 mt-16 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm opacity-80">© {year} Rodolfo Alvarado.</p>

        <nav className="flex items-center gap-5">
          <a href="mailto:contacto@rodolfoalvarado.dev" className="link">
            contacto@rodolfoalvarado.dev
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="navlink">
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="navlink">
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}
