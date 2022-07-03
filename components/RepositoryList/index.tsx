import { GithubRepositoryInterface } from '@/interfaces/GithubRepository'
import { BsArrowRight } from 'react-icons/bs'
import {
  RepositoryDate,
  RepositoryExternalLink,
  RepositoryInfo,
  RepositoryItem,
  RepositoryListContainer,
  RepositoryTitle,
} from './styles'

interface RepositoryListProps {
  repositories: GithubRepositoryInterface[]
}

const RepositoryList = ({ repositories }: RepositoryListProps) => {
  return (
    <RepositoryListContainer>
      {repositories
        .sort((a, b) => (a.updated_at > b.updated_at ? -1 : 1))
        .map((repository) => {
          const randomColor =
            'hsl(' +
            360 * Math.random() +
            ',' +
            (25 + 70 * Math.random()) +
            '%,' +
            (70 + 10 * Math.random()) +
            '%)'
          return (
            <RepositoryItem
              themeColor={randomColor}
              key={repository.id}
              href={repository.html_url}
              target="_blank"
            >
              <RepositoryInfo>
                <RepositoryTitle>{repository.name}</RepositoryTitle>
                <RepositoryDate>
                  {new Date(repository.created_at).toLocaleDateString('en-us')}
                </RepositoryDate>
              </RepositoryInfo>
              <RepositoryExternalLink>
                <BsArrowRight />
              </RepositoryExternalLink>
            </RepositoryItem>
          )
        })}
    </RepositoryListContainer>
  )
}

export default RepositoryList
