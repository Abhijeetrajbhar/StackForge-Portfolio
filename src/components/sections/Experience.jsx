import { useInView } from '../../hooks'
import { experience } from '../../data'
import { FiCheck } from 'react-icons/fi'

function ExperienceItem({ item, index, parentInView }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`relative pl-10 pb-16 transition-all duration-700 ${
        parentInView ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-beige-300/30 to-transparent" />

      {/* Timeline dot */}
      <div
        className={`absolute left-[-4px] top-0 w-[9px] h-[9px] rounded-full border transition-all duration-500 ${
          inView
            ? 'border-beige-300 bg-beige-300/20 shadow-[0_0_12px_rgba(201,191,169,0.4)]'
            : 'border-ivory-200/20 bg-transparent'
        }`}
      />

      <div
        className={`glass-card-hover p-5 sm:p-8 rounded-lg transition-all duration-700 ${
          inView ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
        }`}
        style={{ transitionDelay: `${100 + index * 50}ms` }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
          <div>
            <span className="font-mono text-2xs tracking-[0.2em] text-beige-300/50 uppercase block mb-2">
              {item.period}
            </span>
            <h3 className="font-display text-2xl text-ivory-100 mb-1">{item.role}</h3>
            <p className="font-mono text-2xs tracking-[0.15em] text-beige-300/70 uppercase">
              {item.company} — {item.location}
            </p>
          </div>
        </div>

        <p className="text-ivory-300/50 text-sm leading-relaxed mb-6">{item.description}</p>

        <div className="flex flex-col gap-2">
          {item.achievements.map((ach, i) => (
            <div key={i} className="flex items-start gap-3">
              <FiCheck size={12} className="text-emerald-soft mt-0.5 shrink-0" />
              <span className="font-mono text-2xs tracking-[0.1em] text-ivory-300/50 uppercase">
                {ach}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left label */}
          <div className="lg:col-span-4">
            <span className="section-tag">CURRICULUM VITAE</span>
            <h2
              className={`font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none mb-8 transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              PROFESSIONAL
              <br />
              <span className="text-ivory-300/30">JOURNEY</span>
            </h2>
            <p
              className={`text-ivory-300/40 text-sm leading-relaxed max-w-xs transition-all duration-1000 delay-200 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Building scalable full-stack projects with responsive interfaces, secure APIs, and clean user flows.
            </p>

            {/* Decorative element */}
            <div
              className={`mt-12 transition-all duration-1000 delay-400 ${
                inView ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-16 h-px bg-gradient-to-r from-beige-300/40 to-transparent mb-4" />
              <span className="font-mono text-2xs tracking-[0.2em] text-ivory-300/20 uppercase">
                2021 — Present
              </span>
            </div>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8">
            {experience.map((item, i) => (
              <ExperienceItem key={item.company} item={item} index={i} parentInView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
