import { useState } from 'react'
import { useInView } from '../../hooks'
import { projects } from '../../data'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const filters = ['ALL', 'ECOMMERCE', 'DASHBOARD', 'SAAS', 'PORTFOLIO', 'FINTECH']

function ProjectCard({ project, index, inView }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`group relative transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${project.featured ? 'md:col-span-2' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card visual area */}
      <div
        className="relative overflow-hidden rounded-lg aspect-video glass-card-hover mb-6 cursor-none"
        style={{ aspectRatio: project.featured ? '16/9' : '4/3' }}
      >
        {/* Abstract visual */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${project.color}20 0%, transparent 60%), linear-gradient(135deg, #1c1b1a 0%, #0d0c0b 100%)`,
          }}
        >
          <div className="text-center">
            <div
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-none font-bold transition-all duration-700 group-hover:scale-110"
              style={{ color: `${project.color}25`, WebkitTextStroke: `1px ${project.color}20` }}
            >
              {project.title.split(' ')[0]}
            </div>
          </div>
        </div>

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-500 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ background: 'rgba(13,12,11,0.7)', backdropFilter: 'blur(8px)' }}
        >
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-beige-300/40 flex items-center justify-center text-beige-300 hover:bg-beige-300 hover:text-graphite-900 transition-all duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <FiExternalLink size={16} />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-ivory-200/20 flex items-center justify-center text-ivory-300/60 hover:bg-ivory-200/10 transition-all duration-300"
            onClick={(e) => e.preventDefault()}
          >
            <FiGithub size={16} />
          </a>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1 rounded-full"
            style={{
              background: `${project.color}20`,
              border: `1px solid ${project.color}30`,
              color: project.color,
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Project info */}
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-baseline gap-3 mb-2">
            <h3 className="font-display text-2xl text-ivory-100 group-hover:text-beige-300 transition-colors duration-300">
              {project.title}
            </h3>
            <span className="font-mono text-2xs text-ivory-300/30">{project.year}</span>
          </div>
          <p className="text-ivory-300/50 text-sm leading-relaxed max-w-sm">{project.description}</p>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] tracking-[0.15em] uppercase px-3 py-1 border border-ivory-200/10 text-ivory-300/40 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('ALL')
  const [ref, inView] = useInView()

  const filtered = filter === 'ALL' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-graphite-950">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-20">
          <span className="section-tag">SELECTED WORKS</span>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <h2
              className={`font-display text-[clamp(2.5rem,6vw,5rem)] leading-none transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              CRAFTED
              <br />
              <span className="text-ivory-300/30">EXPERIENCES</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`font-mono text-2xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-300 rounded-full ${
                  filter === f
                    ? 'border-beige-300/50 text-beige-300 bg-beige-300/10'
                    : 'border-ivory-200/10 text-ivory-300/40 hover:border-ivory-200/30 hover:text-ivory-300/70'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
