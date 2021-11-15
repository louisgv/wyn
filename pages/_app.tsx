import type { AppProps } from "next/app"
import React from "react"

import Head from "next/head"
import { Provider } from "use-pouchdb"
import PouchDB from "pouchdb"

const todoDb = new PouchDB(".db/todo", {
  auto_compaction: true,
  revs_limit: 10
})

function RootApp({ Component, pageProps }: AppProps) {
  return (
    <Provider
      default="todo"
      databases={{
        todo: todoDb
      }}>
      <Head>
        <title>Wyn</title>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
        />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default RootApp
