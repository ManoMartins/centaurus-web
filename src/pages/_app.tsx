import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
