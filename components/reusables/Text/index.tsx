import { useEffect, useRef } from 'react'
import * as Styled from './styles'
export const Text = (props: any) => {
  const textRef = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const animateText = async () => {
      if (textRef.current !== null) {
        const scrollReveal = (await import('scrollreveal')).default

        scrollReveal().reveal(textRef.current, {
          duration: 1000,
          distance: '10px',
          delay: 500,
          origin: 'bottom',
          viewFactor: 0.5,
          reset: false,
        })
      }
    }
    animateText()
  }, [])

  return (
    <Styled.Text {...props} ref={textRef}>
      {props.children}
    </Styled.Text>
  )
}
