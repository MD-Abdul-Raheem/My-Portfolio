import { motion } from 'framer-motion'
import CurrentRoleCard from './CurrentRoleCard'
import ExperienceTimelineNode from './ExperienceTimelineNode'
import ProgramMiniCard from './ProgramMiniCard'

const entryVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

function TimelineEntry({ nodeLabel, children, current = false }) {
  return (
    <motion.div
      className="experience-sketch-entry"
      variants={entryVariants}
      transition={{ duration: 0.24, ease: 'easeOut' }}
    >
      <ExperienceTimelineNode label={nodeLabel} current={current} />
      {children}
    </motion.div>
  )
}

function ExperienceTimeline({ currentItem, programs = [] }) {
  return (
    <motion.div
      className="experience-sketch-timeline accenture-journey-timeline"
      aria-label="Accenture learning journey timeline"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      <TimelineEntry nodeLabel="Now" current>
        <CurrentRoleCard item={currentItem} />
      </TimelineEntry>

      <TimelineEntry nodeLabel="VEP">
        <section className="vep-completed-card glass-card" aria-labelledby="completed-vep-title">
          <div className="vep-card-header">
            <div>
              <span className="console-eyebrow">Completed Proof</span>
              <h2 id="completed-vep-title">Completed Virtual Experience Programs</h2>
              <p>Hands-on learning programs completed through platforms like Forage. These are not internships, jobs, or employment.</p>
            </div>
            <span className="vep-count">{programs.length} Completed</span>
          </div>
          <div className="program-mini-grid">
            {programs.map((program) => (
              <ProgramMiniCard key={program.id} program={program} />
            ))}
          </div>
        </section>
      </TimelineEntry>
    </motion.div>
  )
}

export default ExperienceTimeline
