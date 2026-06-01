import { ArrowLeft, BookOpen } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import DetailInfoPanel from '../components/DetailInfoPanel'
import EmptyState from '../components/EmptyState'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'
import { GitHubMark } from '../layouts/SocialMarks'
import { getProject } from '../utils/lookup'
import NotFound from './NotFound'

function ProjectDetail() {
  const { id } = useParams()
  const project = getProject(id)

  if (!project) return <NotFound />

  return (
    <section className="page detail-page">
      <Link to="/skills-projects" className="back-link">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Projects
      </Link>

      <div className="project-detail-hero">
        <GlassCard className="detail-preview-card" hover={false}>
          <img src={project.thumbnail} alt={`${project.title} project preview`} />
        </GlassCard>
        <div className="detail-copy">
          <span className="console-eyebrow">Project Detail Page</span>
          <h1>{project.title}</h1>
          <div className="detail-meta-row">
            <span>{project.category}</span>
            <span>{project.status}</span>
          </div>
          <p>{project.shortDescription}</p>
          <div className="button-row">
            <GradientButton href={project.githubRepo || '#'} icon={GitHubMark} variant="secondary" disabled={!project.githubRepo} target="_blank" rel="noreferrer">
              {project.githubRepo ? 'GitHub Repository' : 'GitHub Link Pending'}
            </GradientButton>
            <GradientButton href={project.documentation || '#'} icon={BookOpen} variant="secondary" disabled={!project.documentation} target="_blank" rel="noreferrer">
              {project.documentation ? 'Documentation' : 'Docs Not Added Yet'}
            </GradientButton>
          </div>
        </div>
      </div>

      <div className="detail-content-grid">
        <GlassCard className="span-2">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </GlassCard>
        <ListPanel title="Tech Stack" items={project.techStack} />
        <ListPanel title="Features" items={project.features} />
        {project.useCases?.length > 0 && <ListPanel title="Use Cases" items={project.useCases} />}
        <GlassCard>
          <h2>What I Learned</h2>
          <p>{project.whatILearned}</p>
        </GlassCard>
        <DetailInfoPanel
          title="My Role"
          rows={[
            { label: 'Role', value: project.role },
            { label: 'Category', value: project.category },
            { label: 'Status', value: project.status },
          ]}
        />
        <GlassCard className="span-2 gallery-card">
          <h2>Gallery</h2>
          {project.gallery?.length ? (
            <div className="gallery-grid">
              {project.gallery.map((image) => (
                <img key={image} src={image} alt={`${project.title} screenshot`} />
              ))}
            </div>
          ) : (
            <EmptyState title="Gallery not added yet." message="Additional screenshots can be added later." />
          )}
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

export default ProjectDetail
