import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)')
    if (!finePointer.matches) return

    document.body.classList.add('custom-cursor-active')

    const onMove = (e) => {
      const position = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      if (dotRef.current) dotRef.current.style.transform = position
      if (ringRef.current) ringRef.current.style.transform = position
    }

    const onOver = (e) => ringRef.current?.classList.toggle('hovering', Boolean(e.target.closest('a, button')))
    const onLeaveWindow = () => document.body.classList.add('cursor-hidden')
    const onEnterWindow = () => document.body.classList.remove('cursor-hidden')

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.documentElement.addEventListener('mouseleave', onLeaveWindow)
    document.documentElement.addEventListener('mouseenter', onEnterWindow)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow)
      document.documentElement.removeEventListener('mouseenter', onEnterWindow)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
