export const theme = {
  colors: {
    white: '#FFF',
    black: '#000',
    background: '#fff',
    text: {
      black: '#000',
      white: '#FFF',
      hover: '#E1E1E6',
      gray: '#C6C6C6',
      text: '#c9c8c8',
    },
  },
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof theme.colors
  }
}
