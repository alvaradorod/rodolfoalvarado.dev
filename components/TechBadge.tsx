type Props = {
  label: string
  slug?: string      // simpleicons slug: ej. "react", "dotnet", "visualstudiocode"
  color?: string     // HEX sin #. ej. "61DAFB"
  href?: string
}

export default function TechBadge({ label, slug, color, href }: Props) {
  const icon = slug ? (
    <img
      src={`https://cdn.simpleicons.org/${slug}/${color || '808080'}`}
      alt=""
      width={16}
      height={16}
      className="inline-block"
      loading="lazy"
      decoding="async"
      aria-hidden
    />
  ) : (
    // Fallback para VB (no hay slug oficial con logo)
    <span
      aria-hidden
      className="inline-flex h-4 w-4 items-center justify-center rounded-[4px] text-[10px] font-bold bg-[#6A1B9A] text-white"
      style={{ lineHeight: 1 }}
    >
      VB
    </span>
  )

  const content = (
    <span className="badge gap-2">
      {icon}
      <span>{label}</span>
    </span>
  )

  return href ? (
    <a className="inline-block" href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : content
}
