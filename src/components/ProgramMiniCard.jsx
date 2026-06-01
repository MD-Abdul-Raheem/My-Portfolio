import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import CompanyLogoIcon from './CompanyLogoIcon'

function getProviderLabel(program) {
  if (program.provider?.toLowerCase().includes('aws')) return 'AWS'
  return program.provider || program.title
}

function ProgramMiniCard({ program }) {
  const navigate = useNavigate()
  const providerLabel = getProviderLabel(program)

  const openProgram = () => {
    navigate(`/programs/${program.id}`)
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openProgram()
  }

  return (
    <article
      className="program-mini-card clickable"
      role="link"
      tabIndex={0}
      aria-label={`View ${program.title} details`}
      onClick={openProgram}
      onKeyDown={handleKeyDown}
    >
      <div className="program-mini-logo-frame">
        <div className="program-mini-logo" aria-hidden="true">
          <CompanyLogoIcon provider={program.provider} />
        </div>
      </div>
      <div className="program-mini-copy">
        <h3>{providerLabel}</h3>
        <p>{program.platform || 'Platform not added yet'}</p>
        <span className="type-label virtual">Virtual Experience Program</span>
      </div>
      <div className="program-mini-footer">
        <span>{program.completedDate || program.duration || 'Date not added yet'}</span>
        <ArrowRight size={15} aria-hidden="true" />
      </div>
    </article>
  )
}

export default ProgramMiniCard
