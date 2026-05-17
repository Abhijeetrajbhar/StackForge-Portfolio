import { useEffect, useRef } from 'react'
import { useTypewriter } from '../../hooks'
import { personalInfo } from '../../data'
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiArrowDown } from 'react-icons/fi'

const roles = ['FRONTEND ARTISAN', 'DIGITAL CRAFTSPERSON', 'EXPERIENCE ENGINEER']

export default function Hero() {
  const role = useTypewriter(roles, 80, 2500)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX / width - 0.5) * 20
      const y = (clientY / height - 0.5) * 20
      const orbs = heroRef.current.querySelectorAll('.parallax-orb')
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 0.4
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`
      })
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  const socials = [
    { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
    { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: FiTwitter, href: personalInfo.socials.twitter, label: 'Twitter' },
    { icon: FiDribbble, href: personalInfo.socials.dribbble, label: 'Dribbble' },
  ]

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-graphite-950"
    >
      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="parallax-orb absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 transition-transform duration-700 ease-out"
          style={{ background: 'radial-gradient(circle, #6b8f7c 0%, transparent 70%)' }}
        />
        <div
          className="parallax-orb absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 transition-transform duration-700 ease-out"
          style={{ background: 'radial-gradient(circle, #c97b3a 0%, transparent 70%)' }}
        />
        <div
          className="parallax-orb absolute top-1/2 right-1/3 w-64 h-64 rounded-full opacity-5 transition-transform duration-700 ease-out"
          style={{ background: 'radial-gradient(circle, #c9bfa9 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,191,169,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,191,169,1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Vertical labels */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-ivory-200/20" />
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ivory-300/25 hover:text-beige-300 transition-colors duration-300"
            aria-label={label}
          >
            <Icon size={14} />
          </a>
        ))}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-ivory-200/20" />
      </div>

      {/* Location indicator */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <span className="writing-vertical font-mono text-2xs tracking-[0.3em] text-ivory-300/20 uppercase">
          {personalInfo.location}
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-24">
        <div className="mb-8 animate-fade-in opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <span className="font-mono text-2xs tracking-[0.4em] text-beige-300/60 uppercase">
            {role}
            <span className="inline-block w-[2px] h-[0.85em] bg-beige-300/60 ml-1 animate-pulse" />
          </span>
        </div>

        <h1
          className="font-display text-[clamp(3rem,10vw,9rem)] leading-none tracking-tight mb-8 text-ivory-100 animate-fade-up opacity-0"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          CRAFTING
          <br />
          <em className="text-gradient-amber not-italic">DIGITAL</em>
          <br />
          <span className="text-ivory-300/40">EXCELLENCE</span>
        </h1>

        <p
          className="font-body text-ivory-300/50 text-lg max-w-lg mx-auto mb-14 leading-relaxed animate-fade-up opacity-0"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          {personalInfo.tagline}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up opacity-0"
          style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary w-full sm:w-auto text-center"
          >
            VIEW WORK
          </a>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            className="btn-outline w-full sm:w-auto text-center"
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* Mobile socials */}
        <div
          className="flex gap-6 justify-center mt-12 lg:hidden animate-fade-in opacity-0"
          style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory-300/25 hover:text-beige-300 transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30 hover:opacity-70 transition-opacity duration-300 animate-fade-in"
        style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}
        aria-label="Scroll down"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-ivory-300">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-ivory-200/60 to-transparent" />
        <FiArrowDown size={12} className="text-ivory-300 animate-bounce" />
      </button>
    </section>
  )
}
