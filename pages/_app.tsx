import type { AppProps } from "next/app"
import React from "react"

import Head from "next/head"

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wyn</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default RootApp
