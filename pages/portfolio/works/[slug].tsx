import { GetStaticProps } from 'next'
import { FiArrowUpRight } from 'react-icons/fi'
import Header from '@/components/Header'
import { Container } from '@/components/reusables/Container'
import { Portfolio } from '@/interfaces/Portfolio'
import PortfolioService from '@/services/PortfolioService'
import {
  WorkCardBodyContainer,
  WorkCardHeaderContainer,
  WorkHeaderSubTitle,
  WorkHeaderTitle,
  WorkImage,
  WorkInformationContainer,
  WorkInformationItem,
  WorkInformationText,
  WorkInformationTitle,
  WorkInformationButton,
  WorkDescription,
} from '@/styles/pages/portfolio/works'
import Footer from '@/components/Footer'
import MoreWorks from '@/components/Sections/MoreWorks'
import { useEffect, useRef } from 'react'

interface WorkProps {
  work: Portfolio
}
const Work = ({ work }: WorkProps) => {
  const workTitle = useRef<HTMLHeadingElement>(null)
  const workSubtitle = useRef<HTMLHeadingElement>(null)
  const workInformation = useRef<HTMLElement>(null)

  useEffect(() => {
    const animateWork = async () => {
      if (
        workTitle.current &&
        workSubtitle.current &&
        workInformation.current
      ) {
        const scrollReveal = (await import('scrollreveal')).default
        scrollReveal().reveal(workTitle.current, {
          duration: 500,
          distance: '10px',
          origin: 'bottom',
          easing: 'ease-in-out',
          reset: false,
          delay: 500,
        })
        scrollReveal().reveal(workSubtitle.current, {
          duration: 500,
          distance: '10px',
          origin: 'bottom',
          easing: 'ease-in-out',
          reset: false,
          delay: 800,
        })
        scrollReveal().reveal(workInformation.current, {
          duration: 1000,
          easing: 'ease-in-out',
          reset: false,
          delay: 1000,
        })
      }
    }

    animateWork()
  }, [])
  return (
    <>
      <Header title="Portfolio | David William" />
      <WorkCardHeaderContainer>
        <WorkHeaderTitle ref={workTitle}>{work.title}</WorkHeaderTitle>
        <WorkHeaderSubTitle ref={workSubtitle}>
          {work.description}
        </WorkHeaderSubTitle>
      </WorkCardHeaderContainer>
      <Container as="main" ref={workInformation}>
        <WorkCardBodyContainer>
          <div>
            <WorkImage src={work.image} alt={work.slug + ' Image'} />
          </div>
          <WorkInformationContainer>
            <WorkDescription>{work.long_description}</WorkDescription>
            <div>
              <WorkInformationItem>
                <WorkInformationText>Done in</WorkInformationText>
                <WorkInformationTitle>{work.doneIn}</WorkInformationTitle>
              </WorkInformationItem>
              <WorkInformationItem>
                <WorkInformationText>Technologies</WorkInformationText>
                <WorkInformationTitle>
                  {work.tags.join(', ')}
                </WorkInformationTitle>
              </WorkInformationItem>

              {work.github_repository?.url && (
                <WorkInformationItem>
                  <WorkInformationText>Github Repository</WorkInformationText>
                  <WorkInformationTitle>
                    {work.github_repository.url}
                  </WorkInformationTitle>
                </WorkInformationItem>
              )}
              <WorkInformationItem>
                <a href={work.url} target="_blank" rel="noreferrer">
                  <WorkInformationButton>
                    view website <FiArrowUpRight />
                  </WorkInformationButton>
                </a>
              </WorkInformationItem>
            </div>
          </WorkInformationContainer>
        </WorkCardBodyContainer>

        <MoreWorks />
      </Container>
      <Footer />
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: PortfolioService.getAll().map((work) => ({
      params: { slug: work.slug },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<WorkProps> = async ({ params }) => {
  const { slug } = params as { slug: string }

  const work = PortfolioService.getBySlug(slug)
  return {
    props: {
      work,
    },
  }
}

export default Work
