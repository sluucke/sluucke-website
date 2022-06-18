import styled from 'styled-components'

export const WorkCardHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(12, 12, 12);
  min-height: 300px;
  width: 100%;
`

export const WorkHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.text.white};
`

export const WorkHeaderSubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.text.hover};
  font-family: 'Epilogue', serif;
`

export const WorkImage = styled.img`
  width: 100%;
  height: 100%;
`

export const WorkCardBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const WorkInformationContainer = styled.div`
  /* padding: 1rem; */
  margin: 0 1rem;
`
export const WorkInformationText = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-family: 'Epilogue', serif;
  margin-bottom: 0;
`

export const WorkInformationTitle = styled.h4`
  color: ${({ theme }) => theme.colors.text.black};
  margin-top: 0;
  font-size: 1.275rem;
`

export const WorkInformationButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  font-family: 'Epilogue', serif;
  font-weight: 500;
  cursor: pointer;

`
