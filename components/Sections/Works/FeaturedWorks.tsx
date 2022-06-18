import { Portfolio } from '../../../interfaces/Portfolio';
import { Container, Text, Title, FeaturedWorksContainer } from './styles';
import WorkCard from './WorkCard';

interface FreatureWorksProps {
portfolio: Portfolio[]
}

const FeaturedWorks = ({portfolio} :FreatureWorksProps) => {
  return (
    <Container>
      <Text>featured works</Text>
      <Title>Some of my latest work</Title>

      <FeaturedWorksContainer>
        {portfolio.map((work, index) => (
          <WorkCard key={String(index + 1)} work={work} />
        ))}
      </FeaturedWorksContainer>
    </Container>
  );
};
const WORKS_MOCK = [
  {
    title: 'UrStyle E-Commerce',
    description: 'UI/UX Front-end development & Backend development',
    link: '#',
    mainColor: '#6E2887',
  },
  {
    title: 'Ilusion - Roleplay',
    description: 'UI/UX Front-end development & Backend development',
    link: '#',
    mainColor: '#702323',
  },
];

export default FeaturedWorks;
