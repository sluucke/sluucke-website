import { GetStaticProps } from 'next'
import { FiArrowUpRight, FiChevronRight } from 'react-icons/fi'
import Header from '../../../components/Header'
import { Container } from '../../../components/reusables/Container'
import { Portfolio } from '../../../interfaces/Portfolio'
import PortfolioService from '../../../services/PortfolioService'
import {
  WorkCardBodyContainer,
  WorkCardHeaderContainer,
  WorkHeaderSubTitle,
  WorkHeaderTitle,
  WorkImage,
  WorkInformationContainer,
  WorkInformationText,
  WorkInformationTitle,
  WorkInformationButton,
} from './styles'

interface WorkProps {
  work: Portfolio
}
const Work = ({ work }: WorkProps) => {
  return (
    <>
      <Header />
      <WorkCardHeaderContainer>
        <WorkHeaderTitle>{work.title}</WorkHeaderTitle>
        <WorkHeaderSubTitle>{work.description}</WorkHeaderSubTitle>
      </WorkCardHeaderContainer>
      <Container>
        <WorkCardBodyContainer>
          <div>
            <WorkImage src={work.image} alt={work.slug + ' Image'} />
          </div>
          <div>
            <WorkInformationContainer>
              <WorkInformationText>Done in</WorkInformationText>
              <WorkInformationTitle>{work.doneIn}</WorkInformationTitle>
            </WorkInformationContainer>
            <WorkInformationContainer>
              <WorkInformationText>Technologies</WorkInformationText>
              <WorkInformationTitle>
                {work.tags.join(', ')}
              </WorkInformationTitle>
            </WorkInformationContainer>
            <WorkInformationContainer>
              <WorkInformationText>Github Repository</WorkInformationText>
              {work.github_repository?.url && (
                <WorkInformationTitle>
                  {work.github_repository.url}
                </WorkInformationTitle>
              )}
            </WorkInformationContainer>
            <WorkInformationContainer>
              <a href={work.url} target="_blank" rel="noreferrer">
                <WorkInformationButton>
                  Demo <FiArrowUpRight />
                </WorkInformationButton>
              </a>
            </WorkInformationContainer>
          </div>
        </WorkCardBodyContainer>
      </Container>
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

  const work = await PortfolioService.getBySlug(slug)
  return {
    props: {
      work,
    },
  }
}

export default Work
