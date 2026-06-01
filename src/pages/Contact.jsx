import { CheckCircle2, Download, Mail, MapPin, MessageSquare, Phone, Sparkles } from 'lucide-react'
import { SiInstagram, SiWhatsapp } from 'react-icons/si'
import ContactForm from '../components/ContactForm'
import GlassCard from '../components/GlassCard'
import GradientButton from '../components/GradientButton'
import SectionHeader from '../components/SectionHeader'
import { profile } from '../data/profile'
import { GitHubMark, LinkedInMark } from '../layouts/SocialMarks'

const contactMethods = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: Phone,
  },
  {
    label: 'Instagram',
    value: '@_md_abdul_raheem_',
    href: profile.instagramUrl,
    icon: SiInstagram,
    color: '#E4405F',
  },
]

function Contact() {
  return (
    <section className="page contact-page" id="contact">
      <SectionHeader
        eyebrow="5 Contact"
        title="Contact"
        subtitle="Let's connect for opportunities, collaborations, or project discussions."
      />

      <div className="contact-console-grid">
        <GlassCard className="profile-contact-card">
          <div className="contact-profile-hero">
            <div className="avatar-ring">
              <img src={profile.avatar} alt={`${profile.name} portrait`} />
            </div>
            <div>
              <span className="console-eyebrow">Portfolio Contact</span>
              <h2>{profile.name}</h2>
              <p>{profile.role}</p>
              <span className="contact-location"><MapPin size={15} aria-hidden="true" /> {profile.location}</span>
            </div>
          </div>
          <p className="contact-summary">
            I am open to conversations around GenAI projects, cloud projects, frontend development, and problem-solving work.
          </p>
          <div className="contact-method-list">
            {contactMethods.map((method) => {
              const Icon = method.icon
              return (
                <a key={method.label} href={method.href} target={method.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <Icon size={18} aria-hidden="true" style={method.color ? { color: method.color } : undefined} />
                  <span>
                    <small>{method.label}</small>
                    {method.value}
                  </span>
                </a>
              )
            })}
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} download="Mohammed-Abdul-Raheem-Resume.pdf">
                <Download size={18} aria-hidden="true" />
                <span>
                  <small>Resume</small>
                  Download PDF
                </span>
              </a>
            ) : (
              <span className="disabled-contact-row">
                <Download size={18} aria-hidden="true" />
                <span>
                  <small>Resume</small>
                  Not added yet
                </span>
              </span>
            )}
          </div>
        </GlassCard>

        <GlassCard className="contact-form-card">
          <div className="contact-card-heading">
            <MessageSquare size={20} aria-hidden="true" />
            <h2>Send a Message</h2>
          </div>
          <ContactForm />
        </GlassCard>

        <GlassCard className="contact-console-card">
          <div className="contact-card-heading">
            <Sparkles size={20} aria-hidden="true" />
            <h2>Availability</h2>
          </div>
          <div className="status-row">
            <span />
            <strong>Open to opportunities</strong>
          </div>
          <h3>Preferred areas</h3>
          <div className="console-chip-list">
            {profile.preferredAreas.map((area) => (
              <span key={area}>{area}</span>
            ))}
          </div>
          <div className="contact-note-list">
            <span><CheckCircle2 size={16} aria-hidden="true" /> Project discussions</span>
            <span><CheckCircle2 size={16} aria-hidden="true" /> Learning collaborations</span>
            <span><CheckCircle2 size={16} aria-hidden="true" /> Recruiter conversations</span>
          </div>
          <h3>Response method</h3>
          <p>Email works best for quick and detailed communication.</p>
          <div className="contact-link-grid opportunity-links" aria-label="Opportunity contact links">
            <a href={profile.githubUrl} target="_blank" rel="noreferrer">
              <GitHubMark size={24} aria-hidden="true" />
              <span>
                <strong>GitHub</strong>
                View repositories
              </span>
            </a>
            <a href={profile.linkedInUrl} target="_blank" rel="noreferrer">
              <LinkedInMark size={24} aria-hidden="true" />
              <span>
                <strong>LinkedIn</strong>
                Connect professionally
              </span>
            </a>
            <a href={profile.whatsappUrl} target="_blank" rel="noreferrer">
              <SiWhatsapp size={24} aria-hidden="true" style={{ color: '#25D366' }} />
              <span>
                <strong>WhatsApp</strong>
                Message directly
              </span>
            </a>
          </div>
          <GradientButton href={`mailto:${profile.email}`} icon={Mail} className="full-width-button">
            Email Directly
          </GradientButton>
        </GlassCard>
      </div>
    </section>
  )
}

export default Contact
