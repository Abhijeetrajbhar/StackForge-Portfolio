import CustomCursor from './components/ui/CustomCursor'
import { NoiseOverlay } from './components/ui'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-graphite-950 text-ivory-100 overflow-x-clip">
      <NoiseOverlay />
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
