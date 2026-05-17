import { useState, useEffect } from 'react'
import { useInView } from '../../hooks'
import { personalInfo } from '../../data'
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiMail, FiMapPin } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GH' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LI' },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: 'TW' },
  { icon: FiDribbble, href: personalInfo.socials.dribbble, label: 'DR' },
]

function FloatingInput({ id, label, type = 'text', multiline = false, value, onChange }) {
  const Tag = multiline ? 'textarea' : 'input'
  return (
    <div className="relative group">
      <Tag
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        rows={multiline ? 4 : undefined}
        placeholder=" "
        className="w-full bg-transparent border-0 border-b border-ivory-200/15 py-4 text-ivory-100 text-sm focus:ring-0 focus:outline-none focus:border-beige-300/50 peer transition-colors duration-300 resize-none group-hover:border-ivory-200/25"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-4 font-mono text-2xs tracking-[0.2em] text-ivory-300/30 uppercase pointer-events-none transition-all duration-300 peer-focus:-translate-y-6 peer-focus:text-beige-300/70 peer-focus:text-[10px] peer-not-placeholder-shown:-translate-y-6 peer-not-placeholder-shown:text-[10px]"
      >
        {label}
      </label>
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      const { name = '', email = '', message = '', autoSend = false } = e.detail || {}
      if (!name && !email && !message) return
      setForm({ name, email, message })
      if (autoSend) {
        setSent(true)
        setTimeout(() => setSent(false), 4000)
        setForm({ name: '', email: '', message: '' })
      }
      const el = document.querySelector('#contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('prefillContact', handler)
    return () => window.removeEventListener('prefillContact', handler)
  }, [])

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="glass-card rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Info side */}
            <div className="lg:w-2/5 p-10 md:p-16 bg-graphite-800/30 border-b lg:border-b-0 lg:border-r border-ivory-200/5">
              <span className="section-tag">GET IN TOUCH</span>
              <h2
                className={`font-display text-[clamp(2rem,5vw,4rem)] leading-none mb-14 transition-all duration-1000 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                LET'S CREATE
                <br />
                <span className="text-ivory-300/30">SOMETHING</span>
                <br />
                EXTRAORDINARY.
              </h2>

              <div
                className={`space-y-10 transition-all duration-1000 delay-200 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FiMail size={12} className="text-beige-300/50" />
                    <span className="font-mono text-2xs tracking-[0.2em] text-ivory-300/30 uppercase">Email</span>
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-heading text-lg text-ivory-200 hover:text-beige-300 transition-colors duration-300"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <FiMapPin size={12} className="text-beige-300/50" />
                    <span className="font-mono text-2xs tracking-[0.2em] text-ivory-300/30 uppercase">Location</span>
                  </div>
                  <p className="font-heading text-lg text-ivory-200">{personalInfo.location}</p>
                </div>

                <div className="flex gap-4 pt-4">
                  {socials.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-ivory-200/15 rounded-full text-ivory-300/40 hover:border-beige-300/40 hover:text-beige-300 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form side */}
            <div
              className={`lg:w-3/5 p-10 md:p-16 transition-all duration-1000 delay-300 ${
                inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {sent ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border border-emerald-soft/40 flex items-center justify-center mx-auto mb-6">
                      <span className="text-emerald-soft text-2xl">✓</span>
                    </div>
                    <h3 className="font-display text-2xl text-ivory-100 mb-3">Message Sent</h3>
                    <p className="font-mono text-2xs tracking-[0.2em] text-ivory-300/40 uppercase">
                      I'll be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <FloatingInput
                    id="name"
                    label="Your Name"
                    value={form.name}
                    onChange={handleChange('name')}
                  />
                  <FloatingInput
                    id="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                  />
                  <FloatingInput
                    id="message"
                    label="Your Vision"
                    multiline
                    value={form.message}
                    onChange={handleChange('message')}
                  />
                  <div className="pt-4">
                    <button type="submit" className="group flex items-center gap-4 btn-primary">
                      SEND MESSAGE
                      <FiArrowRight
                        size={14}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
