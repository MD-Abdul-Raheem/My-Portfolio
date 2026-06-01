import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import GlassCard from './GlassCard'

function ProgramCard({ program }) {
  const navigate = useNavigate()
  const detailPath = `/programs/${program.id}`

  const openProgram = () => {
    navigate(detailPath)
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openProgram()
  }

  return (
    <GlassCard
      className="program-card clickable"
      role="link"
      tabIndex={0}
      aria-label={`View ${program.title} details`}
      onClick={openProgram}
      onKeyDown={handleKeyDown}
    >
      <div>
        <span className="type-label virtual">Virtual Experience Program</span>
        <h3>{program.title}</h3>
        <p>{program.provider} · {program.platform}</p>
        <p className="program-summary">{program.summary}</p>
        <div className="pill-row">
          {program.focus.slice(0, 3).map((focus) => (
            <span key={focus}>{focus}</span>
          ))}
        </div>
      </div>
      <span className="text-link">
        View Details <ArrowRight size={15} />
      </span>
    </GlassCard>
  )
}

export default ProgramCard
