import { useEffect, useRef } from 'react'

function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const touchPointer = window.matchMedia('(hover: none), (pointer: coarse)')

    if (reducedMotion.matches || touchPointer.matches) {
      glow.style.display = 'none'
      return undefined
    }

    let frameId = 0
    let visible = false
    const position = { x: window.innerWidth / 2, y: window.innerHeight / 2 }

    const updateGlow = () => {
      glow.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`
      frameId = 0
    }

    const moveGlow = (event) => {
      position.x = event.clientX
      position.y = event.clientY
      if (!visible) {
        visible = true
        glow.style.opacity = '0.28'
      }
      if (!frameId) frameId = window.requestAnimationFrame(updateGlow)
    }

    const hideGlow = () => {
      visible = false
      glow.style.opacity = '0'
    }

    window.addEventListener('pointermove', moveGlow, { passive: true })
    window.addEventListener('pointerleave', hideGlow)

    return () => {
      window.removeEventListener('pointermove', moveGlow)
      window.removeEventListener('pointerleave', hideGlow)
      if (frameId) window.cancelAnimationFrame(frameId)
    }
  }, [])

  return <span className="cursor-glow" ref={glowRef} aria-hidden="true" />
}

export default CursorGlow
