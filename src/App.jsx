import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CertificationDetail from './pages/CertificationDetail'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import Experience from './pages/Experience'
import ExperienceDetail from './pages/ExperienceDetail'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProgramDetail from './pages/ProgramDetail'
import ProjectDetail from './pages/ProjectDetail'
import SkillsProjects from './pages/SkillsProjects'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills-projects" element={<SkillsProjects />} />
        <Route path="projects" element={<Navigate to="/skills-projects" replace />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="certifications/:id" element={<CertificationDetail />} />
        <Route path="experience/:id" element={<ExperienceDetail />} />
        <Route path="programs/:id" element={<ProgramDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
