import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

function CertificateMiniCard({ certification }) {
  return (
    <article className="certificate-mini-card">
      <div className="certificate-mini-preview">
        {certification.certificateImage ? (
          <img src={certification.certificateImage} alt={`${certification.title} certificate preview`} />
        ) : (
          <span>Preview pending</span>
        )}
      </div>
      <div className="certificate-mini-body">
        <h3>{certification.title}</h3>
        <p>{certification.provider}</p>
        <span>{certification.completedDate || 'Date not added yet'}</span>
      </div>
      <div className="certificate-mini-actions">
        <Link to={`/certifications/${certification.id}`} className="text-link">
          View Details <ArrowRight size={14} />
        </Link>
        {certification.certificateFile ? (
          <a href={certification.certificateFile} className="text-link" target="_blank" rel="noreferrer">
            View Certificate <ExternalLink size={14} />
          </a>
        ) : (
          <span className="muted-link">Certificate pending</span>
        )}
      </div>
    </article>
  )
}

export default CertificateMiniCard
