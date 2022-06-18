import { Text } from '@/components/reusables/Text'
import { Title } from '@/components/reusables/Title'
import { Portfolio } from '@/interfaces/Portfolio'
import PortfolioService from '@/services/PortfolioService'
import { useEffect, useState } from 'react'
import WorkCard from '../Works/WorkCard'
import { MoreWorksContainer, WorkContainer } from './styles'

const MoreWorks = () => {
  const [works, setWorks] = useState<Portfolio[]>([])
  useEffect(() => {
    const works = PortfolioService.getAll()
    setWorks(works)
  }, [])
  return (
    <MoreWorksContainer>
      <Text>others</Text>
      <Title>Want to see more works?</Title>
      <WorkContainer>
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </WorkContainer>
    </MoreWorksContainer>
  )
}

export default MoreWorks
