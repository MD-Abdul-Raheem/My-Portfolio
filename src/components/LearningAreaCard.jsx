import { BadgeCheck, Brain, Cloud, Code2, Database, FileCheck2, MessageSquareText, PackageCheck, Sparkles } from 'lucide-react'

const iconMap = {
  assessment: FileCheck2,
  cloud: Cloud,
  code: Code2,
  database: Database,
  delivery: PackageCheck,
  professional: MessageSquareText,
  python: Code2,
  salesforce: Sparkles,
}

function LearningAreaCard({ item }) {
  const Icon = iconMap[item.icon] || Brain

  return (
    <article className="learning-area-card">
      <div className="learning-area-icon" aria-hidden="true">
        <Icon size={20} />
      </div>
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <div className="mini-chip-row">
        {item.skills.map((skill) => (
          <span key={skill}>
            <BadgeCheck size={13} />
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}

export default LearningAreaCard
