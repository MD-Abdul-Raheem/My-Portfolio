import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname, search, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return

    const resetScroll = () => {
      const root = document.documentElement
      const body = document.body
      const rootScrollBehavior = root.style.scrollBehavior
      const bodyScrollBehavior = body.style.scrollBehavior

      root.style.scrollBehavior = 'auto'
      body.style.scrollBehavior = 'auto'
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      root.scrollTop = 0
      body.scrollTop = 0
      document.querySelector('.main-content')?.scrollTo?.({ top: 0, left: 0, behavior: 'auto' })

      root.style.scrollBehavior = rootScrollBehavior
      body.style.scrollBehavior = bodyScrollBehavior
    }

    resetScroll()
    const frameOne = window.requestAnimationFrame(resetScroll)
    const frameTwo = window.requestAnimationFrame(() => window.requestAnimationFrame(resetScroll))
    const timeoutId = window.setTimeout(resetScroll, 80)

    return () => {
      window.cancelAnimationFrame(frameOne)
      window.cancelAnimationFrame(frameTwo)
      window.clearTimeout(timeoutId)
    }
  }, [pathname, search, hash])

  return null
}

export default ScrollToTop
