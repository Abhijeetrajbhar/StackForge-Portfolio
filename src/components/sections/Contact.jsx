import { useState, useEffect } from 'react'
import { useInView } from '../../hooks'
import { personalInfo } from '../../data'
import { FiAlertCircle, FiArrowRight, FiCheck, FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiMail, FiMapPin } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GH' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LI' },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: 'TW' },
  { icon: FiDribbble, href: personalInfo.socials.dribbble, label: 'DR' },
].filter(({ href }) => Boolean(href))

function FloatingInput({ id, name, label, type = 'text', multiline = false, value, onChange, required = false }) {
  const Tag = multiline ? 'textarea' : 'input'
  return (
    <div className="relative group">
      <Tag
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        rows={multiline ? 4 : undefined}
        placeholder=" "
        className="w-full bg-transparent border-0 border-b border-ivory-200/15 py-5 text-ivory-100 text-sm focus:ring-0 focus:outline-none focus:border-beige-300/50 peer transition-colors duration-300 resize-none group-hover:border-ivory-200/25"
      />
      <label
        htmlFor={id}
        className="absolute left-0 top-5 font-mono text-2xs tracking-[0.2em] text-ivory-300/30 uppercase pointer-events-none transition-all duration-300 peer-focus:-translate-y-7 peer-focus:text-beige-300/70 peer-focus:text-[10px] peer-not-placeholder-shown:-translate-y-7 peer-not-placeholder-shown:text-[10px]"
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
  const [isSending, setIsSending] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const handler = (e) => {
      const { name = '', email = '', message = '' } = e.detail || {}
      if (!name && !email && !message) return
      setForm({ name, email, message })
      setSent(false)
      setError('')
      const el = document.querySelector('#contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    window.addEventListener('prefillContact', handler)
    return () => window.removeEventListener('prefillContact', handler)
  }, [])

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const fallbackMailto = `mailto:${personalInfo.email}?subject=${encodeURIComponent(`Portfolio inquiry from ${form.name || 'visitor'}`)}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setIsSending(true)
    setError('')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) throw new Error('Form submission failed')

      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    } catch {
      setError('Message service could not send right now. Use the email button below as a fallback.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="glass-card rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            {/* Info side */}
            <div className="min-w-0 p-6 sm:p-10 md:p-16 bg-graphite-800/30 border-b lg:border-b-0 lg:border-r border-ivory-200/5">
              <span className="section-tag">GET IN TOUCH</span>
              <h2
                className={`font-display text-[clamp(2rem,5vw,4rem)] leading-none mb-10 sm:mb-14 transition-all duration-1000 ${
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
                    className="font-heading text-base sm:text-lg text-ivory-200 hover:text-beige-300 transition-colors duration-300 break-all"
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
              className={`min-w-0 p-6 sm:p-10 md:p-16 transition-all duration-1000 delay-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {sent ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full border border-emerald-soft/40 flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="text-emerald-soft" size={24} />
                    </div>
                    <h3 className="font-display text-2xl text-ivory-100 mb-3">Message Sent</h3>
                    <p className="font-mono text-2xs tracking-[0.2em] text-ivory-300/40 uppercase">
                      I'll be in touch shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10 sm:space-y-12">
                  <FloatingInput
                    id="name"
                    name="name"
                    label="Your Name"
                    value={form.name}
                    onChange={handleChange('name')}
                    required
                  />
                  <FloatingInput
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={handleChange('email')}
                    required
                  />
                  <FloatingInput
                    id="message"
                    name="message"
                    label="Your Vision"
                    multiline
                    value={form.message}
                    onChange={handleChange('message')}
                    required
                  />
                  {error && (
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-lg border border-amber-warm/25 bg-amber-warm/10 p-4">
                      <FiAlertCircle size={16} className="shrink-0 text-amber-soft" />
                      <p className="text-sm leading-relaxed text-ivory-300/60">{error}</p>
                      <a
                        href={fallbackMailto}
                        className="font-mono text-2xs uppercase tracking-[0.15em] text-beige-300 hover:text-ivory-100 transition-colors"
                      >
                        Open Email
                      </a>
                    </div>
                  )}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSending}
                      className="group flex w-full sm:w-auto items-center justify-center gap-4 btn-primary disabled:cursor-wait disabled:opacity-60"
                    >
                      {isSending ? 'SENDING...' : 'SEND MESSAGE'}
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
