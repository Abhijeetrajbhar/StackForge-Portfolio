import { useState } from 'react'
import { personalInfo } from '../../data'
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiMail } from 'react-icons/fi'
import { RiArrowUpLine } from 'react-icons/ri'

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: 'Twitter' },
  { icon: FiDribbble, href: personalInfo.socials.dribbble, label: 'Dribbble' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const [quickOpen, setQuickOpen] = useState(false)
  const [quickForm, setQuickForm] = useState({ name: '', email: '', message: '' })

  const handleQuickChange = (field) => (e) => setQuickForm((f) => ({ ...f, [field]: e.target.value }))

  const handleQuickSubmit = (e) => {
    e.preventDefault()
    const { name, email, message } = quickForm
    if (!name || !email || !message) return setQuickOpen(true)
    // Dispatch a custom event that Contact listens for
    window.dispatchEvent(new CustomEvent('prefillContact', { detail: { name, email, message, autoSend: true } }))
    // Scroll to contact section
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setQuickForm({ name: '', email: '', message: '' })
    setQuickOpen(false)
  }

  return (
    <footer className="border-t border-ivory-200/5 py-12 px-6 md:px-12 bg-graphite-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 relative">
            <div className="absolute inset-0 border border-beige-300/40 rounded-full" />
            <div className="absolute inset-[3px] bg-beige-300/30 rounded-full" />
          </div>
          <span className="font-mono text-2xs tracking-[0.2em] text-ivory-300/30 uppercase">
            ©{new Date().getFullYear()} STACKFORGE. Curated Excellence.
          </span>
        </div>

          <div className="flex items-center gap-8">
            {/* Quick message (small footer form) */}
            <div className="hidden sm:block">
              <button
                onClick={() => setQuickOpen((s) => !s)}
                className="text-ivory-300/40 hover:text-beige-300 transition-colors duration-300"
                aria-expanded={quickOpen}
              >
                <FiMail size={16} />
              </button>
              {quickOpen && (
                <form onSubmit={handleQuickSubmit} className="mt-2 p-3 bg-graphite-900/70 rounded-md border border-ivory-200/5">
                  <input
                    placeholder="Name"
                    value={quickForm.name}
                    onChange={handleQuickChange('name')}
                    className="w-40 mb-2 px-2 py-1 bg-transparent border border-ivory-200/10 text-ivory-200 text-sm rounded"
                  />
                  <input
                    placeholder="Email"
                    value={quickForm.email}
                    onChange={handleQuickChange('email')}
                    className="w-40 mb-2 px-2 py-1 bg-transparent border border-ivory-200/10 text-ivory-200 text-sm rounded"
                  />
                  <input
                    placeholder="Message"
                    value={quickForm.message}
                    onChange={handleQuickChange('message')}
                    className="w-40 mb-2 px-2 py-1 bg-transparent border border-ivory-200/10 text-ivory-200 text-sm rounded"
                  />
                  <div className="text-right">
                    <button type="submit" className="btn-primary text-2xs py-2 px-3">Send</button>
                  </div>
                </form>
              )}
            </div>
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-ivory-300/30 hover:text-beige-300 transition-colors duration-300"
            >
              <Icon size={16} />
            </a>
          ))}

          <button
            onClick={scrollTop}
            className="w-9 h-9 border border-ivory-200/10 hover:border-beige-300/40 flex items-center justify-center text-ivory-300/40 hover:text-beige-300 transition-all duration-300 rounded-full ml-4"
            aria-label="Back to top"
          >
            <RiArrowUpLine size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
