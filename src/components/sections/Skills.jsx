import { useInView } from '../../hooks'
import { skills } from '../../data'

function SkillBar({ name, level, inView, delay }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-2xs tracking-[0.15em] text-ivory-300/60 uppercase">{name}</span>
        <span className="font-mono text-2xs text-beige-300/70">{level}%</span>
      </div>
      <div className="h-px bg-graphite-600 overflow-hidden">
        <div
          className="progress-fill h-full bg-gradient-to-r from-beige-300/60 to-emerald-soft/60"
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

function SkillCard({ category, items, index, inView }) {
  const [cardRef, cardInView] = useInView()

  return (
    <div
      ref={cardRef}
      className={`glass-card-hover p-8 rounded-lg transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="mb-8">
        <span className="font-mono text-2xs tracking-[0.3em] text-beige-300/50 uppercase mb-1 block">
          0{index + 1}
        </span>
        <h3 className="font-display text-2xl text-ivory-100">{category}</h3>
      </div>
      <div className="space-y-5">
        {items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            {...skill}
            inView={cardInView}
            delay={200 + i * 100}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-20">
          <span className="section-tag">TECHNICAL ECOSYSTEM</span>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <h2
              className={`w-full md:w-auto font-display text-[clamp(2.5rem,6vw,5rem)] leading-none transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              SKILLS &<br />
              <span className="text-ivory-300/30">EXPERTISE</span>
            </h2>
            <p
              className={`text-ivory-300/40 font-mono text-2xs tracking-[0.2em] text-left md:text-right uppercase transition-all duration-1000 delay-200 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Q4 2024
              <br />
              VERSION
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
