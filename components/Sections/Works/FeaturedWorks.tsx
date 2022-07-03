import { Text } from '@/components/reusables/Text'
import { Title } from '@/components/reusables/Title'
import { Portfolio } from '../../../interfaces/Portfolio'
import { Container, FeaturedWorksContainer } from './styles'
import WorkCard from './WorkCard'

interface FreaturedWorksProps {
  portfolio: Portfolio[]
}

const FeaturedWorks = ({ portfolio }: FreaturedWorksProps) => {
  return (
    <Container>
      <Text>featured works</Text>
      <Title>Some of my latest work</Title>

      <FeaturedWorksContainer>
        {portfolio.slice(0, 4).map((work, index) => (
          <WorkCard
            key={String(index + 1)}
            work={work}
            style={{ width: '100%' }}
          />
        ))}
      </FeaturedWorksContainer>
    </Container>
  )
}

export default FeaturedWorks
