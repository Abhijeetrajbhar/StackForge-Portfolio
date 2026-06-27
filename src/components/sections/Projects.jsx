import { useState } from 'react'
import { useInView } from '../../hooks'
import { projects } from '../../data'
import { FiArrowUpRight, FiExternalLink, FiGithub } from 'react-icons/fi'

const caseLabels = {
  problem: 'Problem',
  contribution: 'My contribution',
  challenge: 'Technical challenge',
  result: 'Result',
}

function ProjectVisual({ project }) {
  return (
    <div className="project-visual" style={{ '--project-color': project.color }}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          width="1440"
          height="900"
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
        />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_30%,var(--project-color),transparent_55%)] p-8 text-center">
          <span className="font-mono text-[9px] tracking-[0.22em] text-ivory-300/40 uppercase">Preview coming soon</span>
          <strong className="mt-4 font-display text-[clamp(2rem,5vw,4.5rem)] leading-none text-ivory-200/15">{project.title}</strong>
        </div>
      )}
      <span className="absolute left-4 top-4 rounded-full border border-ivory-200/15 bg-graphite-950/90 px-3 py-1 font-mono text-[9px] tracking-[0.18em] text-ivory-200 uppercase">{project.category}</span>
    </div>
  )
}

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <article className={`group project-card transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <ProjectVisual project={project} />
      <div className="min-w-0 p-5 sm:p-6 lg:p-7">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige-300/50">{project.year} / {project.category}</p>
            <h3 className="mt-2 font-display text-2xl text-ivory-100 sm:text-3xl">{project.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory-300/55">{project.summary}</p>
          </div>
          <div className="flex gap-2">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-action" aria-label={`Open ${project.title} live application`}>
                <FiExternalLink />
              </a>
            )}
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-action" aria-label={`Open ${project.title} source code on GitHub`}>
              <FiGithub />
            </a>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="skill-chip">{tag}</span>)}
        </div>

        <div className="mt-5 grid gap-2 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
          {project.highlights.map((item) => (
            <div key={item} className="rounded-lg border border-ivory-200/10 px-3 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ivory-300/45">{item}</div>
          ))}
        </div>

        <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} className="mt-6 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-beige-300/70 hover:text-beige-300">
          {expanded ? 'Hide case study' : 'Read case study'} <FiArrowUpRight className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </button>

        <div className={`grid transition-[grid-template-rows,opacity] duration-500 ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <dl className="mt-6 grid gap-4 border-t border-ivory-200/10 pt-6 md:grid-cols-2">
              {Object.entries(project.caseStudy).map(([key, value]) => (
                <div key={key}>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-beige-300/55">{caseLabels[key]}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ivory-300/50">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('ALL')
  const [ref, inView] = useInView()
  const filters = ['ALL', ...new Set(projects.map((project) => project.category))]
  const filtered = filter === 'ALL' ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="bg-graphite-950 px-5 py-12 sm:px-6 sm:py-16 md:px-12 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div ref={ref} className="mb-8 grid gap-5 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <span className="section-tag">SELECTED CASE STUDIES</span>
            <h2 className="mt-3 max-w-3xl font-display text-[clamp(1.85rem,4.1vw,3.4rem)] leading-[0.95] text-ivory-100">
              PRODUCTS, <span className="text-ivory-300/30">NOT JUST SCREENS</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end" aria-label="Filter projects">
            {filters.map((item) => (
              <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`filter-button ${filter === item ? 'filter-button-active' : ''}`}>{item}</button>
            ))}
          </div>
        </div>
        <div className="space-y-5 lg:space-y-6">
          {filtered.map((project, index) => <ProjectCard key={project.id} project={project} index={index} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}
