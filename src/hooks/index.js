import { useEffect, useRef, useState } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (options.once !== false) observer.disconnect()
        }
      },
      { threshold: 0.15, ...options }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame
    const handleScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.body.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? scrollTop / docHeight : 0)
        frame = null
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return progress
}

export function useTypewriter(words, speed = 100, pause = 2000) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]
    const delay = !isDeleting && text === currentWord ? pause : isDeleting ? speed / 2 : speed
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text === currentWord) {
          setIsDeleting(true)
        } else {
          setText(currentWord.slice(0, text.length + 1))
        }
      } else {
        setText(currentWord.slice(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, wordIndex, isDeleting, words, speed, pause])

  return text
}

export function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime = null
    let frame
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])

  return count
}
