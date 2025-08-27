# Portafolio — rodolfoalvarado.dev

Plantilla minimalista con Next.js (App Router) + Tailwind.
Construye estático con `next export` para servirlo en Nginx.

## Uso
```bash
npm i
npm run dev
npm run build   # genera ./out
```

## Despliegue en VPS
- Copia `./out` a `/var/www/rodolfoalvarado` y apunta Nginx al `root`.
- SSL con Let's Encrypt (certbot).

## Edita
- `app/page.tsx` (home)
- `app/proyectos/page.tsx`
- `app/sobre-mi/page.tsx`
- `app/contacto/page.tsx`
