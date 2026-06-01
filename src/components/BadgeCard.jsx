function BadgeIcon() {
  return (
    <svg viewBox="0 0 64 64" className="achievement-badge-icon" aria-hidden="true">
      <path d="M22 39 16 58l14-8 14 8-6-19Z" />
      <circle cx="32" cy="27" r="19" />
      <path d="m32 16 3.4 7 7.7 1.1-5.6 5.4 1.3 7.7-6.8-3.6-6.8 3.6 1.3-7.7-5.6-5.4 7.7-1.1Z" />
    </svg>
  )
}

function BadgeCard({ badge }) {
  return (
    <article className="accenture-badge-card">
      <div className="accenture-badge-icon-wrap">
        <BadgeIcon />
      </div>
      <div>
        <h3>{badge.title}</h3>
        <p>{badge.category}</p>
        <span>{badge.status}</span>
      </div>
    </article>
  )
}

export default BadgeCard
