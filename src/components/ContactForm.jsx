import { useState } from 'react'
import { Send } from 'lucide-react'

function ContactForm() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Contact form backend is not connected yet. Please email me directly.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="your@email.com" />
      </label>
      <label>
        <span>Subject</span>
        <input type="text" name="subject" placeholder="Project discussion" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows="5" placeholder="Tell me about your idea..." />
      </label>
      <button type="submit" className="send-button">
        <Send size={17} aria-hidden="true" />
        Send Message
      </button>
      {message && <p className="form-message" role="status">{message}</p>}
    </form>
  )
}

export default ContactForm
