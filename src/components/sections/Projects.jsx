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
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width="1440" height="900" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_30%,var(--project-color),transparent_55%)] p-8 text-center">
          <span className="font-mono text-[9px] tracking-[0.22em] text-ivory-300/40 uppercase">Preview coming soon</span>
          <strong className="mt-4 font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-ivory-200/15">{project.title}</strong>
        </div>
      )}
      {project.mobileImage && (
        <div className="mobile-preview">
          <img src={project.mobileImage} alt={`${project.title} compact viewport preview`} loading="lazy" decoding="async" width="390" height="844" className="h-full w-full object-cover object-top" />
        </div>
      )}
      <span className="absolute left-4 top-4 rounded-full border border-ivory-200/15 bg-graphite-950/90 px-3 py-1 font-mono text-[9px] tracking-[0.18em] text-ivory-200 uppercase">{project.category}</span>
    </div>
  )
}

function ProjectCard({ project, index, inView }) {
  const [expanded, setExpanded] = useState(index === 0)

  return (
    <article className={`group project-card transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100}ms` }}>
      <ProjectVisual project={project} />
      <div className="p-5 sm:p-7 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="font-mono text-[9px] tracking-[0.2em] text-beige-300/50 uppercase">{project.year} · {project.category}</p>
            <h3 className="mt-2 font-display text-3xl sm:text-4xl text-ivory-100">{project.title}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ivory-300/55">{project.summary}</p>
          </div>
          <div className="flex gap-2">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-action" aria-label={`Open ${project.title} live application`}><FiExternalLink /></a>}
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="project-action" aria-label={`Open ${project.title} source code on GitHub`}><FiGithub /></a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="skill-chip">{tag}</span>)}</div>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">{project.highlights.map((item) => <div key={item} className="rounded-lg border border-ivory-200/10 px-4 py-3 font-mono text-[9px] tracking-[0.12em] text-ivory-300/45 uppercase">{item}</div>)}</div>

        <button type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded} className="mt-7 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-beige-300/70 uppercase hover:text-beige-300">
          {expanded ? 'Hide case study' : 'Read case study'} <FiArrowUpRight className={`transition-transform ${expanded ? 'rotate-90' : ''}`} />
        </button>

        <div className={`grid transition-[grid-template-rows,opacity] duration-500 ${expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            <dl className="mt-7 grid gap-5 border-t border-ivory-200/10 pt-7 md:grid-cols-2">
              {Object.entries(project.caseStudy).map(([key, value]) => <div key={key}><dt className="font-mono text-[9px] tracking-[0.2em] text-beige-300/55 uppercase">{caseLabels[key]}</dt><dd className="mt-2 text-sm leading-relaxed text-ivory-300/50">{value}</dd></div>)}
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
    <section id="projects" className="section-shell bg-graphite-950">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="mb-14 lg:mb-20">
          <span className="section-tag">SELECTED CASE STUDIES</span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none">PRODUCTS, NOT<br /><span className="text-ivory-300/30">JUST SCREENS</span></h2>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter projects">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={`filter-button ${filter === item ? 'filter-button-active' : ''}`}>{item}</button>)}
          </div>
        </div>
        <div className="space-y-8">{filtered.map((project, index) => <ProjectCard key={project.id} project={project} index={index} inView={inView} />)}</div>
      </div>
    </section>
  )
}
