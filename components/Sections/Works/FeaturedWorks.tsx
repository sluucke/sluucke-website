import { Text } from '@/components/reusables/Text'
import { Title } from '@/components/reusables/Title'
import { Portfolio } from '../../../interfaces/Portfolio'
import { Container, FeaturedWorksContainer } from './styles'
import WorkCard from './WorkCard'

interface FreatureWorksProps {
  portfolio: Portfolio[]
}

const FeaturedWorks = ({ portfolio }: FreatureWorksProps) => {
  return (
    <Container>
      <Text>featured works</Text>
      <Title>Some of my latest work</Title>

      <FeaturedWorksContainer>
        {portfolio.slice(0, 4).map((work, index) => (
          <WorkCard key={String(index + 1)} work={work} />
        ))}
      </FeaturedWorksContainer>
    </Container>
  )
}

export default FeaturedWorks
