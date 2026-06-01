function ExperienceTimelineNode({ label, current = false }) {
  return (
    <div className={`experience-timeline-node ${current ? 'current' : ''}`} aria-hidden="true">
      <span>{label}</span>
    </div>
  )
}

export default ExperienceTimelineNode
