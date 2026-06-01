import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import BadgeCard from '../components/BadgeCard'
import CertificateMiniCard from '../components/CertificateMiniCard'
import CurrentRoleCard from '../components/CurrentRoleCard'
import DetailInfoPanel from '../components/DetailInfoPanel'
import EmptyState from '../components/EmptyState'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'
import LearningAreaCard from '../components/LearningAreaCard'
import { accentureBadges } from '../data/badges'
import { certifications } from '../data/certifications'
import { accentureCertificateIds, accentureLearningAreas, accentureSkillGroups } from '../data/experience'
import { getExperience } from '../utils/lookup'
import NotFound from './NotFound'

function ExperienceDetail() {
  const { id } = useParams()
  const item = getExperience(id)

  if (!item) return <NotFound />

  if (item.id === 'accenture-current') {
    const accentureCertificates = accentureCertificateIds
      .map((id) => certifications.find((certification) => certification.id === id))
      .filter(Boolean)

    return (
      <section className="page detail-page accenture-detail-page">
        <Link to="/experience" className="back-link">
          <ArrowLeft size={17} aria-hidden="true" />
          Back to Experience
        </Link>

        <div className="accenture-detail-grid">
          <CurrentRoleCard item={item} interactive={false} />
          <DetailInfoPanel
            title="Current Journey Details"
            rows={[
              { label: 'Status', value: item.status },
              { label: 'Type', value: item.type },
              { label: 'Provider', value: 'Accenture LearnVantage' },
              { label: 'Credential Link', value: 'Credential link pending' },
            ]}
          />
        </div>

        <section className="accenture-proof-section glass-card">
          <div className="accenture-proof-heading">
            <span className="console-eyebrow">Overview</span>
            <h2>Overview</h2>
            <p>{item.summary}</p>
          </div>
        </section>

        <section className="accenture-proof-section glass-card">
          <div className="accenture-proof-heading">
            <span className="console-eyebrow">Learning Areas</span>
            <h2>What I Am Learning</h2>
            <p>These areas reflect structured learning and assessment proof, not client or project work claims.</p>
          </div>
          <div className="learning-area-grid">
            {accentureLearningAreas.map((area) => (
              <LearningAreaCard key={area.title} item={area} />
            ))}
          </div>
        </section>

        <section className="accenture-proof-section glass-card">
          <div className="accenture-proof-heading">
            <span className="console-eyebrow">Skills Developed</span>
            <h2>Skills Developed</h2>
            <p>Skill statuses are intentionally modest: learned, practiced, or currently learning.</p>
          </div>
          <div className="accenture-skill-grid">
            {accentureSkillGroups.map((skill) => (
              <span className="accenture-skill-chip" key={skill.name}>
                <strong>{skill.name}</strong>
                <small>{skill.status}</small>
              </span>
            ))}
          </div>
        </section>

        <section className="accenture-proof-section glass-card">
          <div className="accenture-proof-heading">
            <span className="console-eyebrow">Certificates</span>
            <h2>Certificates Earned</h2>
            <p>Certificate files are included from the uploaded Accenture certificates folder.</p>
          </div>
          <div className="certificate-mini-grid">
            {accentureCertificates.map((certification) => (
              <CertificateMiniCard key={certification.id} certification={certification} />
            ))}
          </div>
        </section>

        <section className="accenture-proof-section glass-card">
          <div className="accenture-proof-heading">
            <span className="console-eyebrow">Badges</span>
            <h2>Badges Earned</h2>
            <p>Badge titles follow the uploaded reference. These are learning achievements.</p>
          </div>
          <div className="accenture-badge-grid">
            {accentureBadges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </section>
      </section>
    )
  }

  return (
    <section className="page detail-page">
      <Link to="/experience" className="back-link">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Experience
      </Link>

      <div className="experience-detail-hero">
        <GlassCard className="detail-proof-card" hover={false}>
          {item.proofImage ? (
            <img src={item.proofImage} alt={`${item.title} proof preview`} />
          ) : (
            <EmptyState title="Proof image not added yet." message="This item is documented through the written details below." />
          )}
        </GlassCard>
        <div className="detail-copy">
          <span className="console-eyebrow">{item.type}</span>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          {item.focus?.length ? (
            <div className="pill-row">
              {item.focus.map((focus) => (
                <span key={focus}>{focus}</span>
              ))}
            </div>
          ) : null}
          <GradientButton
            href={item.credentialLink || '#'}
            icon={ExternalLink}
            disabled={!item.credentialLink}
            target="_blank"
            rel="noreferrer"
          >
            {item.credentialLink ? 'Open Proof Link' : 'Proof Link Pending'}
          </GradientButton>
        </div>
      </div>

      <div className="detail-content-grid">
        <DetailInfoPanel
          title="Experience Details"
          rows={[
            { label: 'Type', value: item.type },
            { label: 'Status', value: item.status || 'Not added yet' },
            { label: 'Provider', value: item.provider || 'Not applicable' },
            { label: 'Platform', value: item.platform || 'Not applicable' },
            { label: 'Duration', value: item.duration || item.year || 'Not added yet' },
          ]}
        />
        <ListPanel title="Tasks Completed" items={item.tasksCompleted} />
        <ListPanel title="Skills Gained" items={item.skillsGained} />
        <ListPanel title="Related Tools" items={item.relatedTools} />
        <GlassCard className="span-2">
          <h2>What I Learned</h2>
          <p>{item.whatILearned}</p>
        </GlassCard>
      </div>
    </section>
  )
}

function ListPanel({ title, items }) {
  return (
    <GlassCard>
      <h2>{title}</h2>
      {items?.length ? (
        <ul className="detail-list">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <EmptyState title="Details pending." message="This information will be updated soon." />
      )}
    </GlassCard>
  )
}

export default ExperienceDetail
