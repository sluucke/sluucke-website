import { useEffect, useState } from 'react'

export default function useOnScreen(ref: any, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin }
    )
    if (ref) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}
