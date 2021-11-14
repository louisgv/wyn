import type { AppProps } from "next/app"
import "raf/polyfill" // add this at the top
import { AnimatePresence } from "moti"
import Head from "next/head"
import { PageContainer } from "features/page-container"

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Head>
        <title>WYN</title>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"
          name="viewport"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" sizes="any" />
      </Head>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </AnimatePresence>
  )
}

export default RootApp
