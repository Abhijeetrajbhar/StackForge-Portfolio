import { useInView } from '../../hooks'
import { personalInfo } from '../../data'
import { FiArrowUpRight, FiMail, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="section-shell">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div
          className={`contact-panel transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="min-w-0">
            <span className="section-tag">GET IN TOUCH</span>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[0.9] tracking-[-0.03em] max-w-4xl">
              HAVE A PROJECT?
              <br />
              <span className="text-ivory-300/30">LET'S BUILD IT WELL.</span>
            </h2>
            <p className="mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-ivory-300/50">
              I am open to software development roles, collaborations, and full-stack project opportunities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 lg:w-full lg:max-w-2xl">
            <a href={`mailto:${personalInfo.email}`} className="contact-link group">
              <FiMail size={18} />
              <span className="min-w-0">
                <span className="contact-label">Email</span>
                <span className="block break-all text-sm sm:text-base">{personalInfo.email}</span>
              </span>
              <FiArrowUpRight className="ml-auto shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <div className="contact-link">
              <FiMapPin size={18} />
              <span>
                <span className="contact-label">Location</span>
                <span className="block text-sm sm:text-base">{personalInfo.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
