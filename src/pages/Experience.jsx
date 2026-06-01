import { useMemo } from 'react'
import ExperienceTimeline from '../components/ExperienceTimeline'
import SectionHeader from '../components/SectionHeader'
import { experienceItems } from '../data/experience'
import { programs } from '../data/programs'

const currentPattern = /current|in progress|ongoing|present/i

function getCurrentExperienceItem(items) {
  return items.find((item) => item.isCurrent || currentPattern.test(`${item.status || ''} ${item.type || ''}`))
}

function getProgramTimestamp(program) {
  const timestamp = Date.parse(program.completedDate || program.duration || '')
  return Number.isNaN(timestamp) ? Number.NEGATIVE_INFINITY : timestamp
}

function getProgramsNewestFirst(items) {
  return [...items].sort((first, second) => getProgramTimestamp(second) - getProgramTimestamp(first))
}

function Experience() {
  const currentItem = useMemo(() => getCurrentExperienceItem(experienceItems), [])
  const sortedPrograms = useMemo(() => getProgramsNewestFirst(programs), [])

  return (
    <section className="page experience-page" id="experience">
      <SectionHeader
        eyebrow="2 Experience"
        title="Learning & Practical Experience"
        subtitle="A clear view of my present Accenture journey, Salesforce-focused learning, and completed Virtual Experience Programs. No client work or job responsibilities are claimed unless confirmed."
      />

      <ExperienceTimeline
        currentItem={currentItem}
        programs={sortedPrograms}
      />
    </section>
  )
}

export default Experience
