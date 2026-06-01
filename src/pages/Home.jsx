import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Certifications from './Certifications'
import Contact from './Contact'
import Experience from './Experience'
import Intro from './Intro'
import SkillsProjects from './SkillsProjects'

function Home() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const target = document.getElementById(location.hash.slice(1))
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [location.hash])

  return (
    <>
      <div className="desktop-home">
        <Intro />
      </div>
      <div className="mobile-scroll-home" aria-label="Mobile portfolio sections">
        <Intro />
        <Experience />
        <SkillsProjects />
        <Certifications />
        <Contact />
      </div>
    </>
  )
}

export default Home
