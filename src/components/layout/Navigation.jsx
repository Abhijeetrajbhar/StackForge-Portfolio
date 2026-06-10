import { useState, useEffect } from 'react'
import { useScrollProgress } from '../../hooks'

const navLinks = [
  { label: 'WORK', href: '#projects' },
  { label: 'EXPERTISE', href: '#skills' },
  { label: 'JOURNEY', href: '#experience' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const progress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['hero', 'about', ...navLinks.map(({ href }) => href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55%', threshold: 0 }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    const closeOnEscape = (event) => event.key === 'Escape' && setMobileOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [mobileOpen])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[1px] bg-gradient-to-r from-beige-300/50 to-amber-warm/50 z-50 transition-none pointer-events-none"
        style={{ width: `${progress * 100}%` }}
      />

      <header
        className={`fixed top-0 w-full z-40 transition-all duration-700 ${
          scrolled
            ? 'bg-graphite-900/95 border-b border-ivory-200/10 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => handleNav(e, '#hero')}
          >
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 border border-beige-300/60 rounded-full group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-[4px] bg-beige-300/40 rounded-full group-hover:bg-beige-300/70 transition-all duration-500" />
            </div>
            <span className="font-display text-base text-ivory-100 tracking-[0.35em] hidden sm:block">
              STACK<span className="text-beige-300">FORGE</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                className={`font-mono text-2xs tracking-[0.16em] hover:text-ivory-100 transition-colors duration-300 relative group ${activeSection === link.href.slice(1) ? 'text-beige-300' : 'text-ivory-300/50'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-beige-300 transition-all duration-300 ${activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="hidden lg:block btn-primary text-graphite-900 bg-ivory-200 text-2xs py-3 px-7"
          >
            LET'S TALK
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            <span className={`block w-6 h-px bg-ivory-200 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-4 h-px bg-ivory-200/60 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-ivory-200 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-navigation"
          className={`lg:hidden transition-all duration-500 overflow-hidden ${
            mobileOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-6 bg-graphite-900 border-t border-ivory-200/5 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
                className={`font-mono text-2xs tracking-[0.2em] hover:text-ivory-100 transition-colors ${activeSection === link.href.slice(1) ? 'text-beige-300' : 'text-ivory-300/70'}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="btn-primary text-center mt-2"
            >
              LET'S TALK
            </a>
          </div>
        </div>
      </header>
    </>
  )
}
