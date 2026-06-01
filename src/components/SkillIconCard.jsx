import { motion } from 'framer-motion'

function SkillIconCard({ skill }) {
  const Icon = skill.icon
  const skillColor = skill.color || '#22D3EE'
  const iconColor = skill.iconColor || skillColor

  return (
    <motion.article
      className="skill-icon-card"
      style={{ '--skill-color': skillColor }}
      whileHover={{ y: -3, scale: 1.01 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <div
        className="skill-icon-box"
        style={{
          borderColor: `${skillColor}55`,
          boxShadow: `0 0 18px ${skillColor}33`,
        }}
      >
        <Icon className="skill-icon-svg" aria-hidden="true" style={{ color: iconColor }} />
      </div>
      <div>
        <h4>{skill.name}</h4>
      </div>
    </motion.article>
  )
}

export default SkillIconCard
