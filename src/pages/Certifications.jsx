import { useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import BadgeFilter from '../components/BadgeFilter'
import CertificationCard from '../components/CertificationCard'
import EmptyState from '../components/EmptyState'
import ProgramCard from '../components/ProgramCard'
import SectionHeader from '../components/SectionHeader'
import { certificationBadges, certificationFilters, certifications } from '../data/certifications'
import { programs } from '../data/programs'

function Certifications() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selectedBadge, setSelectedBadge] = useState(null)

  const visibleCertifications = useMemo(() => {
    if (activeFilter === 'ALL') return certifications
    if (activeFilter === 'VEP') return []
    if (activeFilter === 'Accenture Learnings') {
      return certifications.filter((certification) => certification.category === 'Accenture Learning')
    }
    return certifications.filter((certification) => certification.category === activeFilter)
  }, [activeFilter])

  const showPrograms = activeFilter === 'ALL' || activeFilter === 'VEP'

  return (
    <section className="page certifications-page" id="certifications">
      <SectionHeader
        eyebrow="4 Certifications & Learning Proof"
        title="Certifications & Learning Proof"
        subtitle="Verified learning assets, certificate files, and virtual experience program proof kept separate and clearly labeled."
      />

      <section className="certification-badge-section" aria-label="Certification badges">
        <div>
          <h2>Credential Badges</h2>
        </div>
        <div className="certification-badge-row">
          {certificationBadges.map((badge) => (
            <button
              type="button"
              className="credential-badge-card"
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              aria-label={`Show full badge for ${badge.title}`}
            >
              <img src={badge.image} alt={`${badge.title} image`} />
              <span>
                <strong>{badge.title}</strong>
                <small>{badge.provider}</small>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedBadge && createPortal(
        <div className="badge-modal-backdrop" role="presentation" onClick={() => setSelectedBadge(null)}>
          <div
            className="badge-modal glass-card"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedBadge.title} full badge`}
            onClick={(event) => event.stopPropagation()}
          >
            <button type="button" className="badge-modal-close" onClick={() => setSelectedBadge(null)}>
              Close
            </button>
            <img src={selectedBadge.image} alt={`${selectedBadge.title} full badge`} />
            <h2>{selectedBadge.title}</h2>
            <p>{selectedBadge.provider}</p>
          </div>
        </div>,
        document.body,
      )}

      <BadgeFilter
        items={certificationFilters}
        active={activeFilter}
        onChange={setActiveFilter}
        ariaLabel="Certification filters"
      />

      {activeFilter !== 'VEP' && (
        <div className="certification-grid">
          {visibleCertifications.length > 0 ? (
            visibleCertifications.map((certification) => (
              <CertificationCard key={certification.id} certification={certification} />
            ))
          ) : (
            <EmptyState title="No certifications in this category yet." message="Add the certificate data when it is ready." />
          )}
        </div>
      )}

      {showPrograms && (
        <section className="subsection">
          <div className="subsection-heading">
            <h2>Virtual Experience Programs</h2>
            <p>These are learning programs and proof items, not internships, jobs, or employment.</p>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>
      )}
    </section>
  )
}

export default Certifications
