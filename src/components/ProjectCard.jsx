import { useNavigate } from 'react-router-dom'
import { GitHubMark } from '../layouts/SocialMarks'
import GlassCard from './GlassCard'
import GradientButton from './GradientButton'

function ProjectCard({ project }) {
  const navigate = useNavigate()
  const detailPath = `/projects/${project.id}`

  const openProject = () => {
    navigate(detailPath)
  }

  const handleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return
    event.preventDefault()
    openProject()
  }

  return (
    <GlassCard
      className="project-card clickable"
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} details`}
      onClick={openProject}
      onKeyDown={handleKeyDown}
    >
      <div className="project-image-link" aria-hidden="true">
        <img src={project.thumbnail} alt={`${project.title} preview`} />
      </div>
      <div className="project-card-body">
        <div className="card-title-row">
          <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
          <span className="status-label">{project.status}</span>
        </div>
        {project.useCases?.length > 0 && (
          <div className="project-use-cases">
            <strong>Use cases</strong>
            <span>{project.useCases.slice(0, 3).join(' · ')}</span>
          </div>
        )}
        <div className="meta-line">
          <span>{project.category}</span>
        </div>
        <div className="pill-row">
          {project.techStack.slice(0, 5).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="card-actions" onClick={(event) => event.stopPropagation()}>
          <GradientButton
            href={project.githubRepo || '#'}
            icon={GitHubMark}
            disabled={!project.githubRepo}
            target="_blank"
            rel="noreferrer"
          >
            {project.githubRepo ? 'Repository' : 'Repository pending'}
          </GradientButton>
        </div>
      </div>
    </GlassCard>
  )
}

export default ProjectCard
