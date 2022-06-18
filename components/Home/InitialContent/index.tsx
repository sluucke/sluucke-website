import { Title, Text, Container, ContactContainer, Button } from './styles'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { BsArrowRight } from 'react-icons/bs'
import { useEffect, useRef } from 'react'
// @ts-ignore
import CircleType from 'circletype'

const InitialContent = () => {
  const circleInstance = useRef<HTMLParagraphElement>(null)
  const initialContentSection = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (circleInstance.current !== undefined) {
      new CircleType(circleInstance.current).radius(70)
    }
    const animate = async () => {
      if (
        initialContentSection.current !== null &&
        titleRef.current !== null &&
        subtitleRef.current !== null
      ) {
        const scrollReveal = (await import('scrollreveal')).default
        scrollReveal().reveal(initialContentSection.current, {
          duration: 1000,
          delay: 500,
          distance: '0px',
          easing: 'ease-in-out',
          reset: false,
        })
        scrollReveal().reveal(titleRef.current, {
          duration: 1000,
          distance: '50px',
          delay: 500,
          origin: 'bottom',
          viewFactor: 0.5,
          reset: false,
        })

        scrollReveal().reveal(subtitleRef.current, {
          duration: 1000,
          distance: '20px',
          delay: 800,
          origin: 'bottom',
          viewFactor: 0.5,
          reset: false,
        })
        scrollReveal().reveal(
          '.icons',
          {
            duration: 1000,
            distance: '10px',
            delay: 1000,
            origin: 'bottom',
            viewFactor: 0.5,
            reset: false,
          },
          1000
        )
      }
    }
    animate()
  }, [])
  return (
    <Container ref={initialContentSection}>
      <div className="user-info">
        <div>
          <Title ref={titleRef}>David William</Title>
          <Text ref={subtitleRef}>Full Stack developer</Text>
        </div>
        <div className="works-container">
          <Button>
            <p ref={circleInstance}>
              VIEW WORKS&nbsp;VIEW WORKS&nbsp;VIEW WORKS&nbsp;VIEW WORKS
            </p>
            <BsArrowRight />
          </Button>
        </div>
      </div>
      <ContactContainer>
        <p>david@dfery.com</p>
        <div className="icons">
          <a
            className="social-link"
            href="https://github.com/sluucke"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size="24px" />
          </a>
          <a
            className="social-link"
            href="https://www.linkedin.com/in/david-william-8070b41b0/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size="24px" />
          </a>
          <a
            className="social-link"
            href="mailto:david@dfery.com"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail size="24px" />
          </a>
        </div>
      </ContactContainer>
    </Container>
  )
}

export default InitialContent
