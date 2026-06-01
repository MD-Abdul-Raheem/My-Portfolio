import { certifications } from '../data/certifications'
import { experienceItems } from '../data/experience'
import { programs } from '../data/programs'
import { projects } from '../data/projects'

export function getProject(id) {
  return projects.find((project) => project.id === id)
}

export function getProgram(id) {
  return programs.find((program) => program.id === id)
}

export function getCertification(id) {
  return certifications.find((certification) => certification.id === id)
}

export function getExperience(id) {
  return experienceItems.find((item) => item.id === id)
}
