import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/styles'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import { useRef, useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  // const globalAnimation = useRef<HTMLDivElement>(null)
  // useEffect(() => {
  //   async function animateGlobal() {
  //     if (globalAnimation.current !== null) {
  //       const scrollReveal = (await import('scrollreveal')).default
  //       scrollReveal().reveal(globalAnimation.current, {
  //         duration: 1000,
  //         delay: 300,
  //         distance: '0px',
  //         easing: 'ease-in-out',
  //         reset: false,
  //       })
  //     }
  //   }
  //   animateGlobal()
  // }, [])
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <div ref={globalAnimation}> */}
      <Component {...pageProps} />
      {/* </div> */}
    </ThemeProvider>
  )
}

export default MyApp
