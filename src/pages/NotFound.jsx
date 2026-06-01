import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import GlassCard from '../components/GlassCard'

function NotFound() {
  return (
    <section className="page detail-page not-found-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={17} aria-hidden="true" />
        Back to Intro
      </Link>
      <GlassCard>
        <span className="console-eyebrow">Not Found</span>
        <h1>That portfolio item is not available.</h1>
        <p>Use the navigation rail or project cards to open an existing page.</p>
      </GlassCard>
    </section>
  )
}

export default NotFound
