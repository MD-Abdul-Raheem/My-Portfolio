import { Award, BriefcaseBusiness, Code2, Home, Mail, Send } from 'lucide-react'
import { NavLink, useLocation } from 'react-router-dom'
import { SiWhatsapp } from 'react-icons/si'
import Logo from '../components/Logo'
import { navigationItems } from '../data/navigation'
import { profile } from '../data/profile'
import { GitHubMark, LinkedInMark } from './SocialMarks'

const icons = {
  intro: Home,
  experience: BriefcaseBusiness,
  'skills-projects': Code2,
  certifications: Award,
  contact: Send,
}

function isItemActive(pathname, item) {
  if (item.path === '/') return pathname === '/'
  if (item.id === 'skills-projects') return pathname === '/skills-projects' || pathname.startsWith('/projects')
  if (item.id === 'certifications') return pathname.startsWith('/certifications')
  if (item.id === 'experience') return pathname.startsWith('/experience') || pathname.startsWith('/programs')
  return pathname === item.path
}

function Navigation() {
  const location = useLocation()

  return (
    <aside className="right-nav" aria-label="Portfolio navigation">
      <NavLink className="nav-logo" to="/" aria-label="AI Portfolio Console home">
        <Logo />
      </NavLink>
      <nav className="nav-links">
        {navigationItems.map((item) => {
          const Icon = icons[item.id]
          const active = isItemActive(location.pathname, item)
          return (
            <NavLink key={item.id} to={item.path} className={active ? 'active' : ''}>
              <span>{item.number}</span>
              <Icon size={18} aria-hidden="true" />
              <strong>{item.label}</strong>
            </NavLink>
          )
        })}
      </nav>
      <div className="nav-socials">
        <p>Let's Connect</p>
        <div>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubMark size={18} />
          </a>
          <a href={profile.linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInMark size={18} />
          </a>
          <a href={profile.whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <SiWhatsapp size={18} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Navigation
