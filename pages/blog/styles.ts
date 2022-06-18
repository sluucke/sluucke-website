import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-gap: 20px;
  margin-top: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;