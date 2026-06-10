import { useInView } from '../../hooks'
import { education, certifications } from '../../data'
import { FiAward, FiBookOpen } from 'react-icons/fi'

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="section-shell bg-graphite-950">
      <div ref={ref} className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2">
        <div>
          <span className="section-tag">EDUCATION</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none">ACADEMIC<br /><span className="text-ivory-300/30">FOUNDATION</span></h2>
          <div className="mt-10 space-y-4">
            {education.map((item, index) => (
              <article key={item.degree} className={`credential-card ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <FiBookOpen className="mt-1 shrink-0 text-beige-300/60" />
                <div><p className="font-display text-xl text-ivory-100">{item.degree}</p><p className="mt-1 text-sm text-ivory-300/50">{item.institution} · {item.location}</p><p className="mt-3 font-mono text-[9px] tracking-[0.18em] uppercase text-beige-300/50">{item.period}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div>
          <span className="section-tag">CERTIFICATIONS</span>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none">CONTINUOUS<br /><span className="text-ivory-300/30">LEARNING</span></h2>
          <div className="mt-10 space-y-4">
            {certifications.map((item, index) => (
              <article key={item.title} className={`credential-card ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${200 + index * 100}ms` }}>
                <FiAward className="mt-1 shrink-0 text-amber-soft/70" />
                <div><p className="font-display text-xl text-ivory-100">{item.title}</p><p className="mt-1 text-sm text-ivory-300/50">{item.issuer}</p><p className="mt-3 font-mono text-[9px] tracking-[0.18em] uppercase text-beige-300/50">{item.year}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
