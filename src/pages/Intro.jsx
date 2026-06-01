import { ArrowRight, Bot, BrainCircuit, Cloud, Code2, Database, Download, Mail, Sparkles, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SiWhatsapp } from 'react-icons/si'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'
import SkillIconCard from '../components/SkillIconCard'
import { certifications } from '../data/certifications'
import { profile } from '../data/profile'
import { programs } from '../data/programs'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import { GitHubMark, LinkedInMark } from '../layouts/SocialMarks'

function Intro() {
  const skillsCount = skillGroups.reduce((total, group) => total + group.items.length, 0)
  const previewSkills = skillGroups.flatMap((group) => group.items).slice(0, 8)
  const stats = [
    { label: 'Built Projects', value: `${projects.length}+`, path: '/skills-projects' },
    { label: 'Certifications', value: `${certifications.length}+`, path: '/certifications' },
    { label: 'Virtual Experience Programs', value: `${programs.length}+`, path: '/experience' },
    { label: 'Skills Listed', value: `${skillsCount}+`, path: '/skills-projects' },
  ]
  const tagTargets = {
    'GenAI Apps': '/skills-projects',
    'Cloud Projects': '/skills-projects',
    'Web Development': '/skills-projects',
    'Problem Solving': '/skills-projects',
  }

  return (
    <section className="page intro-page" id="intro">
      <motion.div
        className="intro-hero"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <div className="intro-copy">
          <span className="console-eyebrow">GenAI & Cloud Developer</span>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <p>{profile.summary}</p>
          <div className="tag-list">
            {profile.tags.map((tag) => <Link key={tag} to={tagTargets[tag] || '/skills-projects'}>{tag}</Link>)}
          </div>
          <div className="hero-actions">
            <GradientButton to="/skills-projects" icon={ArrowRight}>View Projects</GradientButton>
            <GradientButton
              href={profile.resumeUrl || '#'}
              icon={Download}
              variant="secondary"
              download="Mohammed-Abdul-Raheem-Resume.pdf"
              disabled={!profile.resumeUrl}
            >
              {profile.resumeUrl ? 'Download Resume' : 'Resume Not Added Yet'}
            </GradientButton>
          </div>
          <div className="social-strip" aria-label="Social links">
            <span>Let's Connect</span>
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
        </div>
        <motion.div
          className="intro-visual-stage"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12, duration: 0.45, ease: 'easeOut' }}
        >
          <span className="hero-tech-chip hero-tech-chip--brain"><BrainCircuit size={19} aria-hidden="true" /></span>
          <span className="hero-tech-chip hero-tech-chip--code"><Code2 size={19} aria-hidden="true" /></span>
          <span className="hero-tech-chip hero-tech-chip--data"><Database size={19} aria-hidden="true" /></span>
          <div className="hero-image-card">
            <img className="profile-main-image" src={profile.avatar} alt={`${profile.name} portrait`} />
          </div>
          <span className="hero-orbit-dot hero-orbit-dot--one" aria-hidden="true" />
          <span className="hero-orbit-dot hero-orbit-dot--two" aria-hidden="true" />
          <span className="hero-orbit-dot hero-orbit-dot--three" aria-hidden="true" />
        </motion.div>
      </motion.div>

      <div className="stat-grid">
        {stats.map((stat) => (
          <Link key={stat.label} className="stat-card-link" to={stat.path} aria-label={`Open ${stat.label}`}>
            <GlassCard className="stat-card">
              <Sparkles size={18} aria-hidden="true" />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </GlassCard>
          </Link>
        ))}
      </div>

      <div className="intro-panels">
        <Link className="intro-panel-link" to="/contact" aria-label="Open contact page">
          <GlassCard>
            <h3>About Me</h3>
            <p>
              I am focused on building practical projects around GenAI, cloud, and web development.
              I prefer clear interfaces, honest project presentation, and learning through real builds.
            </p>
          </GlassCard>
        </Link>
        <GlassCard>
          <h3>What I Build</h3>
          <div className="mini-build-grid">
            <Link to="/skills-projects"><Bot size={20} /> GenAI-powered applications</Link>
            <Link to="/skills-projects"><Cloud size={20} /> Cloud-native web projects</Link>
            <Link to="/skills-projects"><Wrench size={20} /> Problem-solving projects</Link>
          </div>
        </GlassCard>
        <Link className="intro-panel-link" to="/skills-projects" aria-label="Open skills page">
          <GlassCard className="tech-preview-card">
            <h3>Tech I Work With</h3>
            <div className="mini-skill-grid">
              {previewSkills.map((skill) => <SkillIconCard key={skill.name} skill={skill} />)}
            </div>
          </GlassCard>
        </Link>
      </div>
    </section>
  )
}

export default Intro
