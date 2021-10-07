import Head from 'next/head'
import type { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar';

import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Home | Centeurus</title>
      </Head>
      <GlobalStyle />
      <NextNprogress 
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
