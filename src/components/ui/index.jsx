import { useScrollProgress } from '../../hooks'

export function NoiseOverlay() {
  return <div className="noise-overlay" aria-hidden="true" />
}

export function ScrollProgress() {
  const progress = useScrollProgress()
  return (
    <div
      className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-beige-300 to-amber-warm z-50 transition-none"
      style={{ width: `${progress * 100}%` }}
      aria-hidden="true"
    />
  )
}

export function SectionTag({ children, className = '' }) {
  return (
    <span className={`section-tag block mb-6 ${className}`}>
      {children}
    </span>
  )
}

export function RevealText({ children, delay = 0, className = '' }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="animate-fade-up opacity-0"
        style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      >
        {children}
      </div>
    </div>
  )
}

export function Divider({ className = '' }) {
  return (
    <div className={`w-full h-px bg-gradient-to-r from-transparent via-ivory-200/10 to-transparent ${className}`} />
  )
}
