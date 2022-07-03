import styled from 'styled-components'

export const RepositoryListContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const RepositoryExternalLink = styled.p`
  transition: all 200ms ease-in-out;
`

interface RepositoryItemProps {
  themeColor: string
}

export const RepositoryItem = styled.a<RepositoryItemProps>`
  padding: 1rem;
  background: ${({ theme }) => theme.colors.black};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 4px solid ${({ themeColor }) => themeColor};
  transition: border 200ms ease-in-out;
  &:hover {
    border-left: 8px solid ${({ themeColor }) => themeColor};
    ${RepositoryExternalLink} {
      transform: rotate(-45deg);
    }
  }
`

export const RepositoryDate = styled.p`
  font-family: 'Epilogue', sans-serif;
  font-size: 0.675rem;
`

export const RepositoryInfo = styled.div`
  max-width: 80%;
`

export const RepositoryTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
