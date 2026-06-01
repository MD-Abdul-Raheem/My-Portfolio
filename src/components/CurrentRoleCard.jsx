import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CompanyLogoIcon from './CompanyLogoIcon'
import GlassCard from './GlassCard'

function CurrentRoleCard({ item, interactive = true }) {
  const navigate = useNavigate()

  const openDetails = () => {
    if (!interactive) return
    navigate(`/experience/${item.id}`)
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openDetails()
  }

  return (
    <GlassCard
      className={`current-role-card ${interactive ? 'clickable' : ''}`}
      role={interactive ? 'link' : undefined}
      tabIndex={interactive ? 0 : undefined}
      aria-label={interactive ? `View ${item.title} details` : undefined}
      onClick={interactive ? openDetails : undefined}
      onKeyDown={interactive ? handleKeyDown : undefined}
    >
      <div className="current-role-topline">
        <span className="current-chip">{item.status}</span>
        <span>{item.type}</span>
      </div>

      <div className="current-role-main">
        <div className="current-role-logo" aria-hidden="true">
          <CompanyLogoIcon provider={item.title} />
        </div>
        <div>
          <h2>{item.title}</h2>
          <p>{item.summary}</p>
        </div>
      </div>

      <div className="pill-row">
        {item.focus.map((focus) => (
          <span key={focus}>{focus}</span>
        ))}
      </div>

      {interactive ? (
        <span className="text-link">
          View Details <ArrowRight size={15} />
        </span>
      ) : null}
    </GlassCard>
  )
}

export default CurrentRoleCard
