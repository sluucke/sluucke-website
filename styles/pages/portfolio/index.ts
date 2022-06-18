import styled from 'styled-components'

export const RecentWorksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`

export const WorksCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const GithubRepositoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
`
