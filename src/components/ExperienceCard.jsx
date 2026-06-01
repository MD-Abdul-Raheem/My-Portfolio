import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CompanyLogoIcon from './CompanyLogoIcon'
import GlassCard from './GlassCard'

function ExperienceCard({ item }) {
  const navigate = useNavigate()
  const hasDetailRoute = Boolean(item?.id)

  const openDetails = () => {
    if (hasDetailRoute) navigate(`/experience/${item.id}`)
  }

  const handleKeyDown = (event) => {
    if (!hasDetailRoute || (event.key !== 'Enter' && event.key !== ' ')) return
    event.preventDefault()
    openDetails()
  }

  return (
    <GlassCard
      className="current-experience-card clickable"
      role={hasDetailRoute ? 'link' : undefined}
      tabIndex={hasDetailRoute ? 0 : undefined}
      aria-label={hasDetailRoute ? `View ${item.title} details` : undefined}
      onClick={hasDetailRoute ? openDetails : undefined}
      onKeyDown={hasDetailRoute ? handleKeyDown : undefined}
    >
      <div className="experience-card-topline">
        <span className="current-chip">Present</span>
        <span>{item.type || 'Current Journey'}</span>
      </div>

      <div className="current-experience-main">
        <div className="current-experience-icon" aria-hidden="true">
          <CompanyLogoIcon provider={item.provider || item.title} />
        </div>
        <div>
          <h2>{item.title}</h2>
          <p>{item.summary || 'Current journey details pending.'}</p>
        </div>
      </div>

      {item.focus?.length ? (
        <div className="pill-row">
          {item.focus.map((focus) => (
            <span key={focus}>{focus}</span>
          ))}
        </div>
      ) : null}

      {hasDetailRoute && (
        <span className="text-link">
          View Details <ArrowRight size={15} />
        </span>
      )}
    </GlassCard>
  )
}

export default ExperienceCard
