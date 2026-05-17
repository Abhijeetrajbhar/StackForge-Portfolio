import { useState } from 'react'
import { useInView } from '../../hooks'
import { testimonials } from '../../data'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView()

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)

  return (
    <section id="testimonials" className="py-32 px-6 md:px-12 bg-graphite-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="section-tag">RECOGNITION</span>
            <h2
              className={`font-display text-[clamp(2.5rem,6vw,5rem)] leading-none transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              CLIENT
              <br />
              <span className="text-ivory-300/30">PERSPECTIVES</span>
            </h2>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-ivory-200/15 flex items-center justify-center text-ivory-300/40 hover:border-beige-300/40 hover:text-beige-300 transition-all duration-300"
            >
              <FiArrowLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-ivory-200/15 flex items-center justify-center text-ivory-300/40 hover:border-beige-300/40 hover:text-beige-300 transition-all duration-300"
            >
              <FiArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`glass-card p-10 md:p-12 rounded-xl flex flex-col justify-between transition-all duration-700 ${
                i === active
                  ? 'border-beige-300/20 bg-graphite-800/50'
                  : 'opacity-50 hover:opacity-75'
              } ${
                inView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setActive(i)}
            >
              {/* Quote mark */}
              <div className="text-6xl font-display text-beige-300/10 leading-none mb-6 select-none">"</div>

              <blockquote className="font-heading text-xl md:text-2xl text-ivory-200/80 leading-relaxed mb-10">
                {t.quote}
              </blockquote>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center border border-beige-300/20">
                  <span className="font-mono text-2xs text-beige-300">{t.initial}</span>
                </div>
                <div>
                  <p className="font-heading text-lg text-ivory-100">{t.author}</p>
                  <p className="font-mono text-2xs tracking-[0.15em] text-beige-300/50 uppercase mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-px transition-all duration-300 ${
                i === active ? 'w-8 bg-beige-300' : 'w-4 bg-ivory-200/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
