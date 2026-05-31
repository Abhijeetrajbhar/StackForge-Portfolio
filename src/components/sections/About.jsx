import { useInView, useCountUp } from '../../hooks'
import { personalInfo, stats } from '../../data'

function StatCard({ value, label, inView }) {
  const isNumber = /^\d+/.test(value)
  const numericPart = parseInt(value)
  const suffix = value.replace(/^\d+/, '')
  const count = useCountUp(numericPart, 2000, inView)

  return (
    <div className="glass-card-hover p-8 rounded-lg flex flex-col gap-3">
      <span className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-none text-gradient">
        {isNumber ? `${count}${suffix}` : value}
      </span>
      <span className="font-mono text-2xs tracking-[0.2em] text-ivory-300/40 uppercase">
        {label}
      </span>
    </div>
  )
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-32 px-5 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left column */}
        <div className="lg:col-span-6">
          <span className="section-tag">THE JOURNEY</span>
          <h2
            className={`font-display text-[clamp(2.5rem,6vw,5rem)] leading-none mb-10 transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Bridging the gap between{' '}
            <em className="text-ivory-300/30 not-italic">imagination</em>
            <br />
            and execution.
          </h2>

          <div
            className={`space-y-5 text-ivory-300/60 text-base leading-relaxed max-w-xl transition-all duration-1000 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p>{personalInfo.bio}</p>
            <p>{personalInfo.bio2}</p>
          </div>

          {/* Visual accent */}
          <div
            className={`mt-12 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 transition-all duration-1000 delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="w-12 h-px bg-beige-300/40" />
            <span className="font-mono text-2xs tracking-[0.2em] sm:tracking-[0.3em] text-beige-300/50 uppercase break-all">
              {personalInfo.email}
            </span>
          </div>
        </div>

        {/* Right column — stats + visual */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          {/* Portrait placeholder with ambient glow */}
          <div
            className={`relative aspect-[4/3] rounded-lg overflow-hidden glass-card transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Geometric art in lieu of photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 border border-beige-300/10 rounded-full animate-spin-slow" />
                <div className="absolute inset-4 border border-emerald-soft/15 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
                <div className="absolute inset-8 border border-amber-warm/20 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />
                <div className="absolute inset-[50%] w-4 h-4 -translate-x-2 -translate-y-2 bg-beige-300/60 rounded-full" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-graphite-900/80 to-transparent">
              <span className="font-mono text-2xs tracking-[0.3em] text-ivory-300/50 uppercase">
                {personalInfo.name} — {personalInfo.title}
              </span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 100}ms` }}
              >
                <StatCard {...stat} inView={inView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
