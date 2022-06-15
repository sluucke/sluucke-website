import styled from 'styled-components';

interface ButtonProps {
  color: 'white' | 'black';
}

export const Button = styled.button<ButtonProps>`
  color: ${({ theme, color }) =>
    color == 'black' ? theme.colors.black : theme.colors.white};
  background: transparent;
  border: none;
  padding: 10px;
  font-size: 1rem;
  font-family: 'Epilogue', serif;
  align-self: flex-start;
  font-weight: 500;
  cursor: pointer;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.5s ease-in-out;
    color: ${({ theme, color }) =>
      color == 'black' ? theme.colors.black : theme.colors.white};
  }
  #arrow {
    margin-left: -5px;
    transition: all 0.2s ease;
  }
  #arrow path {
    transform: translateX(0px);
    transition: all 0.2s ease;
    fill: ${({ theme, color }) =>
      color == 'black' ? theme.colors.black : theme.colors.white};
  }
  #btn-text {
    overflow: hidden;
    width: 0;
    white-space: nowrap;
    transition: all 0.2s ease-in-out;
    transition-delay: .1,5s;
  }
  &:hover {
    #arrow {
      margin-left: 0px;
    }
    #arrow path {
      transform: translateX(5px);
    }
    #btn-text {
      width: 100%;
    }
  }
`;
