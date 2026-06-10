import { useInView } from '../../hooks'
import { skillGroups } from '../../data'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="section-shell">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-14 lg:mb-20">
          <span className="section-tag">TECHNICAL TOOLKIT</span>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end">
            <h2 className={`font-display text-[clamp(2.5rem,6vw,5rem)] leading-none transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              SKILLS BUILT
              <br />
              <span className="text-ivory-300/30">THROUGH PROJECTS</span>
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-ivory-300/45 lg:justify-self-end">
              An honest view of the technologies I can use today and the areas I am actively strengthening.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article key={group.level} className={`glass-card-hover rounded-xl p-6 sm:p-8 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <span className="font-mono text-[9px] tracking-[0.22em] text-beige-300/55 uppercase">0{index + 1}</span>
              <h3 className="mt-3 font-display text-3xl text-ivory-100">{group.level}</h3>
              <p className="mt-3 min-h-10 text-sm leading-relaxed text-ivory-300/45">{group.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.items.map((skill) => <span key={skill} className="skill-chip">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
