import Footer from '@/components/Footer'
import Header from '@/components/Header'
import RepositoryList from '@/components/RepositoryList'
import { Container } from '@/components/reusables/Container'
import { Text } from '@/components/reusables/Text'
import { Title } from '@/components/reusables/Title'
import WorkCard from '@/components/Sections/Works/WorkCard'
import { GithubRepositoryInterface } from '@/interfaces/GithubRepository'
import { Portfolio } from '@/interfaces/Portfolio'
import GithubService from '@/services/GithubService'
import PortfolioService from '@/services/PortfolioService'
import {
  GithubRepositoriesContainer,
  RecentWorksContainer,
  WorksCardContainer,
} from '@/styles/pages/portfolio'
import { GetServerSideProps, GetStaticProps } from 'next'
import { useEffect, useRef } from 'react'

interface PortfolioWorksProps {
  works: Portfolio[]
  repositories: GithubRepositoryInterface[]
}

const PortfolioWorks = ({ works, repositories }: PortfolioWorksProps) => {
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
              <WorkCard
                key={work.id}
                work={work}
                animation={false}
                style={{ width: '100%' }}
              />
            ))}
          </WorksCardContainer>
        </RecentWorksContainer>
        <GithubRepositoriesContainer>
          <Text>repositories</Text>
          <Title>My Github repositories :D</Title>
          <RepositoryList repositories={repositories} />
        </GithubRepositoriesContainer>
      </Container>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  PortfolioWorksProps
> = async () => {
  const githubRepositories = (await GithubService.getAllRepositories()).data
  return {
    props: {
      works: PortfolioService.getAll(),
      repositories: githubRepositories,
    },
  }
}

export default PortfolioWorks
