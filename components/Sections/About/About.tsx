import { Text } from '@/components/reusables/Text'
import { Title } from '@/components/reusables/Title'
import { useEffect, useRef } from 'react'
import { Container, AboutTextContainer, AboutText } from './styles'

const About = () => {
  const yearsOld = Math.abs(
    new Date(Date.now() - new Date('2004-07-18').getTime()).getUTCFullYear() -
      1970
  )
  const aboutTextContainer = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const animate = async () => {
      if (aboutTextContainer.current) {
        const scrollReveal = (await import('scrollreveal')).default
        scrollReveal().reveal(aboutTextContainer.current, {
          duration: 1000,
          easing: 'ease-in-out',
          delay: 500,
          reset: false,
        })
      }
    }
    animate()
  }, [])
  return (
    <Container>
      <Text>about</Text>
      <Title>Who I am?</Title>
      <AboutTextContainer ref={aboutTextContainer}>
        <AboutText>
          <>
            {`I'`}m a full-stack software developer with 3 years of experience
            and {yearsOld} years old, a passion for creating beautiful and
            functional interfaces. {`I'`}m currently freelance developer and{' '}
            {`I'`}m looking for new opportunities to grow my skills and
            knowledge.
          </>
        </AboutText>
        <AboutText ref={aboutTextContainer}>
          Actually {`I'`}m specialist in Web Development but in the future I
          want to learn more about the neural networks, C#, C and Java. {`I'`}m
          also interested in the machine learning and the artificial
          intelligence.
        </AboutText>
      </AboutTextContainer>
    </Container>
  )
}

export default About
