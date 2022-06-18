import styled from 'styled-components'
interface WorkCardContainerProps {
  mainColor: string
  isVisible?: boolean
  animation?: boolean
}
export const WorkCardContainer = styled.div<WorkCardContainerProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.black};
  justify-content: space-between;
  padding: 30px;

  width: auto;
  min-height: 300px;
  transform-style: preserve-3d;
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    height: 100%;
    background: ${(props) => props.mainColor};
    transition: 400ms all;

    bottom: -4px;
    left: 0;
    transition: 1.5s all;

    transform: ${({ animation }) => !animation && 'translateZ(-1px)'};
    ${({ isVisible, animation }) =>
      isVisible &&
      animation && {
        height: '4px',
      }};
  }
  /* &:hover {
    &::after {
      transform: rotate(1deg) translateZ(-1px) scale(1.015);
    }
  } */
`

export const WorkTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.15rem;
  font-weight: 500;
  font-family: 'Epilogue', serif;
`
export const WorkDescription = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  font-family: 'Epilogue', serif;
`
