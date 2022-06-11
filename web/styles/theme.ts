export const theme = {
  colors: {
    white: '#FFF',
    black: '#000',
    background: '#fff',
    text: {
      black: '#000',
      white: '#FFF',
      hover: '#F2F2F2',
      gray: '#C6C6C6',
    },
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
  }
}
