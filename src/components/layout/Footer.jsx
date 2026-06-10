import { personalInfo } from '../../data'
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble, FiMail } from 'react-icons/fi'
import { RiArrowUpLine } from 'react-icons/ri'

const socials = [
  { icon: FiGithub, href: personalInfo.socials.github, label: 'GitHub' },
  { icon: FiLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
  { icon: FiTwitter, href: personalInfo.socials.twitter, label: 'Twitter' },
  { icon: FiDribbble, href: personalInfo.socials.dribbble, label: 'Dribbble' },
].filter(({ href }) => Boolean(href))

export default function Footer() {
  return (
    <footer className="border-t border-ivory-200/10 px-5 py-10 sm:px-6 md:px-12 bg-graphite-950">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-2xl text-ivory-100">{personalInfo.name}</p>
          <a href={`mailto:${personalInfo.email}`} className="mt-2 inline-flex items-center gap-2 text-sm text-ivory-300/50 hover:text-beige-300 transition-colors">
            <FiMail size={14} />
            <span className="break-all">{personalInfo.email}</span>
          </a>
          <p className="mt-5 font-mono text-[9px] tracking-[0.18em] text-ivory-300/25 uppercase">
            © {new Date().getFullYear()} StackForge. Built with care.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="footer-icon">
              <Icon size={15} />
            </a>
          ))}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="footer-icon ml-2" aria-label="Back to top">
            <RiArrowUpLine size={15} />
          </button>
        </div>
      </div>
    </footer>
  )
}
