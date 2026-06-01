import { ArrowLeft, Download, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import DetailInfoPanel from '../components/DetailInfoPanel'
import EmptyState from '../components/EmptyState'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'
import { getProgram } from '../utils/lookup'
import NotFound from './NotFound'

function ProgramDetail() {
  const { id } = useParams()
  const program = getProgram(id)

  if (!program) return <NotFound />

  return (
    <section className="page detail-page">
      <Link to="/experience" className="back-link">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Experience
      </Link>

      <div className="experience-detail-hero">
        <GlassCard className="program-proof-card" hover={false}>
          <span className="type-label virtual">Virtual Experience Program</span>
          {program.logo && (
            <div className="program-detail-logo">
              <img src={program.logo} alt={`${program.provider} logo`} />
            </div>
          )}
          <h2>{program.provider}</h2>
          <p>{program.platform}</p>
          {program.proofImage ? (
            <img src={program.proofImage} alt={`${program.title} proof`} />
          ) : (
            <EmptyState title="Program image not added yet." message="Certificate PDF may be available through the button." />
          )}
        </GlassCard>
        <div className="detail-copy">
          <span className="console-eyebrow">Virtual Experience Program</span>
          <h1>{program.title}</h1>
          <p>{program.summary}</p>
          <div className="pill-row">
            {program.focus.map((focus) => (
              <span key={focus}>{focus}</span>
            ))}
          </div>
          <div className="button-row">
            <GradientButton
              href={program.certificateFile || '#'}
              icon={Download}
              disabled={!program.certificateFile}
              target="_blank"
              rel="noreferrer"
            >
              {program.certificateFile ? 'View Program Certificate' : 'Certificate Not Added'}
            </GradientButton>
            <GradientButton
              href={program.credentialLink || '#'}
              icon={ExternalLink}
              variant="secondary"
              disabled={!program.credentialLink}
              target="_blank"
              rel="noreferrer"
            >
              {program.credentialLink ? 'Open Credential Link' : 'Credential Link Pending'}
            </GradientButton>
          </div>
        </div>
      </div>

      <div className="detail-content-grid">
        <DetailInfoPanel
          title="Program Details"
          rows={[
            { label: 'Type', value: 'Virtual Experience Program' },
            { label: 'Provider', value: program.provider },
            { label: 'Platform', value: program.platform },
            { label: 'Completed Date', value: program.completedDate },
          ]}
        />
        <ListPanel title="Tasks Completed" items={program.tasksCompleted} />
        <ListPanel title="Skills Practiced" items={program.skillsGained} />
        <ListPanel title="Related Tools" items={program.relatedTools} />
        <GlassCard className="span-2">
          <h2>What I Learned</h2>
          <p>{program.whatILearned}</p>
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

export default ProgramDetail
