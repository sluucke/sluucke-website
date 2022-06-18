import styled from 'styled-components'
export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  
  padding: 0;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 100%;
    max-width: 800px;
  }
  margin-top: 100px;
  margin-bottom: 150px;
  background-color: #fafafa;
`

export const PostInfo = styled.div``

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const PostDate = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Epilogue', sans;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`
export const PostAuthor = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const PostDescription = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: 'Epilogue', serif;
  margin: 0;
  padding: 0;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const PostImage = styled.img`
  width: 100%;
  height: 300px;
  margin: 0;
  border-radius: 1rem;
  padding: 0;
  object-fit: cover;
`
