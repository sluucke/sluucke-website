import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    font-family: 'Yeseva One', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    background-color: ${(props) => props.theme.colors.background};
    
    background-image: url("/BackgroundFit.svg");
    background-repeat: no-repeat;
    background-position: center 100vh; 
    background-size: 100vw;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.black};
    width: 5px;
  }
  
  
`;
