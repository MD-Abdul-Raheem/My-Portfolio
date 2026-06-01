import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../components/Logo'
import { navigationItems } from '../data/navigation'

const mobileAnchorPaths = {
  intro: '/#intro',
  experience: '/#experience',
  'skills-projects': '/#skills-projects',
  certifications: '/#certifications',
  contact: '/#contact',
}

function MobileNavigation() {
  const [open, setOpen] = useState(false)

  return (
    <header className="mobile-nav">
      <Link to="/" className="mobile-logo" onClick={() => setOpen(false)}>
        <Logo compact label={false} />
      </Link>
      <button type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav className={open ? 'open' : ''} aria-label="Mobile navigation">
        {navigationItems.map((item) => (
          <NavLink key={item.id} to={mobileAnchorPaths[item.id] || item.path} onClick={() => setOpen(false)}>
            <span>{item.number}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default MobileNavigation
