import { ArrowRight, Download } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import EmptyState from './EmptyState'
import GlassCard from './GlassCard'
import GradientButton from './GradientButton'

function CertificationCard({ certification }) {
  const navigate = useNavigate()
  const detailPath = `/certifications/${certification.id}`

  const openCertification = () => {
    navigate(detailPath)
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openCertification()
  }

  return (
    <GlassCard
      className="certification-card clickable"
      role="link"
      tabIndex={0}
      aria-label={`View ${certification.title} details`}
      onClick={openCertification}
      onKeyDown={handleKeyDown}
    >
      <div className="certificate-preview">
        {certification.certificateImage ? (
          <img src={certification.certificateImage} alt={`${certification.title} certificate preview`} />
        ) : (
          <EmptyState title="Certificate image not added yet." message="Certificate file may still be available." />
        )}
      </div>
      <div className="certification-card-body">
        <h3>{certification.title}</h3>
        <p>{certification.provider}</p>
        <span>{certification.completedDate || 'Not added yet'}</span>
      </div>
      <div className="card-actions" onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
        <GradientButton to={`/certifications/${certification.id}`} icon={ArrowRight}>
          View Details
        </GradientButton>
        <GradientButton
          href={certification.certificateFile || certification.certificateImage || '#'}
          icon={Download}
          variant="secondary"
          disabled={!certification.certificateFile && !certification.certificateImage}
          target="_blank"
          rel="noreferrer"
        >
          View Certificate
        </GradientButton>
      </div>
    </GlassCard>
  )
}

export default CertificationCard
