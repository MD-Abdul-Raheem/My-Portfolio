function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="section-header">
      {eyebrow && <span className="console-eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </header>
  )
}

export default SectionHeader
