import useOnScreen from '@/utils/useOnScreen'
import Link from 'next/link'
import { useRef } from 'react'
import { Portfolio } from '../../../../interfaces/Portfolio'
import { Button } from '../../../reusables/Button'
import { WorkCardContainer, WorkDescription, WorkTitle } from './styles'

interface Work {
  title: string
  description: string
  image?: string
  link: string
  mainColor: string
}

interface WorkCardProps {
  work: Portfolio
  animation?: boolean
  animationDelay?: string
}

const WorkCard = ({
  work,
  animationDelay = '-50px',
  animation = true,
}: WorkCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isContainerVisible = useOnScreen(containerRef, animationDelay)
  return (
    <WorkCardContainer
      ref={containerRef}
      isVisible={isContainerVisible}
      animation={animation}
      mainColor={work.mainColor}
    >
      <WorkTitle>{work.title}</WorkTitle>
      <WorkDescription>{work.description}</WorkDescription>
      <Button color="white">
        <Link href={`/portfolio/works/${work.slug}`} passHref>
          <a>
            <div>
              <svg
                width="51"
                height="8"
                viewBox="0 0 51 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                id="arrow"
              >
                <path
                  d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <span id="btn-text">view details</span>
          </a>
        </Link>
      </Button>
    </WorkCardContainer>
  )
}

export default WorkCard
