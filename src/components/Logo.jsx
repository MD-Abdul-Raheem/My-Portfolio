function Logo({ compact = false, label = true }) {
  return (
    <span className={`brand-logo${compact ? ' brand-logo--compact' : ''}`}>
      <span className="brand-logo-badge" aria-hidden="true">
        <img src="/assets/logo/ai-logo.png" alt="" />
      </span>
      {label && <span className="brand-logo-label">PORTFOLIO CONSOLE</span>}
    </span>
  )
}

export default Logo
