import { ArrowLeft, Download, ExternalLink, ImageIcon } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import DetailInfoPanel from '../components/DetailInfoPanel'
import EmptyState from '../components/EmptyState'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'
import { getCertification } from '../utils/lookup'
import NotFound from './NotFound'

function CertificationDetail() {
  const { id } = useParams()
  const certification = getCertification(id)

  if (!certification) return <NotFound />

  const status = certification.certificateImage || certification.certificateFile
    ? 'Certificate Added'
    : certification.credentialLink
      ? 'Link Pending'
      : 'Not Added Yet'

  return (
    <section className="page detail-page certification-detail-page">
      <Link to="/certifications" className="back-link">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Certifications
      </Link>

      <div className="certification-detail-layout">
        <GlassCard className="certificate-large-preview" hover={false}>
          {certification.certificateImage ? (
            <img src={certification.certificateImage} alt={`${certification.title} certificate`} />
          ) : (
            <EmptyState title="Certificate image not added yet." message="Use the certificate file button if a PDF is available." />
          )}
          <div className="button-row centered">
            <GradientButton
              href={certification.certificateImage || '#'}
              icon={ImageIcon}
              variant="secondary"
              disabled={!certification.certificateImage}
              target="_blank"
              rel="noreferrer"
            >
              Open Full Image
            </GradientButton>
          </div>
        </GlassCard>

        <div className="detail-copy">
          <span className="console-eyebrow">Full Certification Detail</span>
          <h1>{certification.title}</h1>
          <p>{certification.summary}</p>
          <div className="button-row">
            <GradientButton
              href={certification.certificateFile || '#'}
              icon={Download}
              disabled={!certification.certificateFile}
              target="_blank"
              rel="noreferrer"
            >
              {certification.certificateFile ? 'Download Certificate' : 'Certificate File Not Added'}
            </GradientButton>
            <GradientButton
              href={certification.credentialLink || '#'}
              icon={ExternalLink}
              variant="secondary"
              disabled={!certification.credentialLink}
              target="_blank"
              rel="noreferrer"
            >
              {certification.credentialLink ? 'Open Credential Link' : 'Credential Link Pending'}
            </GradientButton>
          </div>
          <DetailInfoPanel
            title="Certification Details"
            rows={[
              { label: 'Provider', value: certification.provider },
              { label: 'Category', value: certification.category },
              { label: 'Completed Date', value: certification.completedDate },
              { label: 'Status', value: status },
              { label: 'Credential ID', value: certification.credentialId || 'Not provided' },
              { label: 'Credential Link', value: certification.credentialLink || 'Credential link pending' },
            ]}
          />
        </div>
      </div>

      <div className="detail-content-grid">
        <ListPanel title="Skills Covered" items={certification.skillsCovered} />
        <GlassCard>
          <h2>Learning Outcome</h2>
          <p>{certification.learningOutcome}</p>
        </GlassCard>
        <GlassCard className="span-2">
          <h2>Related Learning Areas</h2>
          <div className="pill-row">
            {certification.skillsCovered.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  )
}

function ListPanel({ title, items }) {
  return (
    <GlassCard>
      <h2>{title}</h2>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </GlassCard>
  )
}

export default CertificationDetail
