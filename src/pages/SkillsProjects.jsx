import { useMemo, useState } from 'react'
import BadgeFilter from '../components/BadgeFilter'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import SkillIconCard from '../components/SkillIconCard'
import { projectFilters, projects } from '../data/projects'
import { skillGroups } from '../data/skills'

function SkillsProjects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter((project) => {
      if (activeFilter === 'Problem Solving') return project.relatedSkills.includes('Problem Solving')
      return project.category === activeFilter || project.techStack.includes(activeFilter)
    })
  }, [activeFilter])

  return (
    <section className="page" id="skills-projects">
      <SectionHeader
        eyebrow="3 Skills & Built Projects"
        title="Skills & Built Projects"
        subtitle="A focused view of the technologies I work with and the projects I have built to practice real-world problem solving."
      />
      <div className="skill-section">
        <h2>Skills Overview</h2>
        {skillGroups.map((group) => (
          <div className="skill-band" key={group.title}>
            <h3>{group.title}</h3>
            <div className="skill-grid">
              {group.items.map((skill) => <SkillIconCard key={skill.name} skill={skill} />)}
            </div>
          </div>
        ))}
      </div>
      <div className="projects-header-row">
        <h2>Featured Projects</h2>
        <BadgeFilter items={projectFilters} active={activeFilter} onChange={setActiveFilter} ariaLabel="Project filters" />
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
      </div>
    </section>
  )
}

export default SkillsProjects
