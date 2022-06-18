import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RepositoryList from '@/components/RepositoryList'
import { Container } from '@/components/reusables/Container'
import { Text } from '@/components/reusables/Text'
import { Title } from '@/components/reusables/Title'
import WorkCard from '@/components/Sections/Works/WorkCard'
import { Portfolio } from '@/interfaces/Portfolio'
import PortfolioService from '@/services/PortfolioService'
import {
  // GithubRepositoriesContainer,
  RecentWorksContainer,
  WorksCardContainer,
} from '@/styles/pages/portfolio'
import { GetStaticProps } from 'next'
import { useEffect, useRef } from 'react'

interface PortfolioWorksProps {
  works: Portfolio[]
}

const PortfolioWorks = ({ works }: PortfolioWorksProps) => {
  const worksContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateWorksContainer = async () => {
      if (worksContainer.current) {
        const scrollReveal = (await import('scrollreveal')).default
        scrollReveal().reveal(worksContainer.current, {
          duration: 1000,
          delay: 800,
          easing: 'ease-in-out',
          reset: false,
        })
      }
    }
    animateWorksContainer()
  }, [])

  return (
    <>
      <Header title="Portiflio | DW" />
      <Container>
        <RecentWorksContainer>
          <Text>Recent works</Text>
          <Title>Checkout my most recent jobs</Title>
          <WorksCardContainer ref={worksContainer}>
            {works.map((work) => (
              <WorkCard key={work.id} work={work} animation={false} />
            ))}
          </WorksCardContainer>
        </RecentWorksContainer>
        {/* <GithubRepositoriesContainer>
          <Text>repositories</Text>
          <Title>My Github repositories :D</Title>
          <RepositoryList />
        </GithubRepositoriesContainer> */}
      </Container>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps<PortfolioWorksProps> = async () => {
  return {
    props: {
      works: PortfolioService.getAll(),
    },
  }
}

export default PortfolioWorks
