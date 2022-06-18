import { useEffect, useRef } from 'react'
import * as Styled from './styles'
export const Title = (props: any) => {
  const titleRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const animateTitle = async () => {
      if (titleRef.current !== null) {
        const scrollReveal = (await import('scrollreveal')).default

        scrollReveal().reveal(titleRef.current, {
          duration: 1000,
          distance: '10px',
          delay: 800,
          origin: 'bottom',
          viewFactor: 0.5,
          reset: false,
        })
      }
    }
    animateTitle()
  }, [])

  return (
    <Styled.Title {...props} ref={titleRef}>
      {props.children}
    </Styled.Title>
  )
}
