function normalizeProvider(provider = '') {
  const value = provider.toLowerCase()
  if (value.includes('accenture')) return 'accenture'
  if (value.includes('aws')) return 'aws'
  if (value.includes('bcg')) return 'bcg'
  if (value.includes('deloitte')) return 'deloitte'
  if (value.includes('tata')) return 'tata'
  return 'default'
}

function CompanyLogoIcon({ provider }) {
  const normalizedProvider = normalizeProvider(provider)

  if (normalizedProvider === 'accenture') {
    return (
      <svg viewBox="0 0 84 54" aria-hidden="true" className="company-logo-icon accenture-icon">
        <path d="M26 13 57 27 26 41v-9l18-5-18-5Z" />
      </svg>
    )
  }

  if (normalizedProvider === 'aws') {
    return (
      <svg viewBox="0 0 92 54" aria-hidden="true" className="company-logo-icon aws-icon">
        <text x="17" y="28">aws</text>
        <path d="M21 36c12 7 30 8 45 2.3" />
        <path d="M62 37.5 71 35.5 65 43" />
      </svg>
    )
  }

  if (normalizedProvider === 'bcg') {
    return (
      <svg viewBox="0 0 92 54" aria-hidden="true" className="company-logo-icon bcg-icon">
        <text x="11" y="35">BCG</text>
      </svg>
    )
  }

  if (normalizedProvider === 'deloitte') {
    return (
      <svg viewBox="0 0 110 54" aria-hidden="true" className="company-logo-icon deloitte-icon">
        <text x="7" y="33">Deloitte</text>
        <circle cx="95" cy="33" r="4.6" />
      </svg>
    )
  }

  if (normalizedProvider === 'tata') {
    return (
      <svg viewBox="0 0 104 54" aria-hidden="true" className="company-logo-icon tata-icon">
        <text x="9" y="35">TATA</text>
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 54" aria-hidden="true" className="company-logo-icon default-company-icon">
      <rect x="15" y="12" width="34" height="30" rx="8" />
      <path d="M23 27h18" />
    </svg>
  )
}

export default CompanyLogoIcon
