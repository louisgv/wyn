import type { AppProps } from "next/app"
import React from "react"

import Head from "next/head"
import { Provider } from "use-pouchdb"
import PouchDB from "pouchdb"
import { NextSeo } from "next-seo"
import { Constant } from "core/constant"

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
      <NextSeo
        title={Constant.NAME}
        description={Constant.DESCRIPTION}
        canonical="https://wyn.vercel.app/"
        additionalMetaTags={[
          {
            name: "keywords",
            content: "thinking, kb, pwa"
          },
          {
            name: "author",
            content: Constant.AUTHOR
          },
          {
            name: "viewport",
            content:
              "initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=0"
          }
        ]}
        openGraph={{
          images: [
            {
              url: "https://wyn.vercel.app/logo.svg",
              width: 450,
              height: 450,
              alt: "Og Image Alt",
              type: "image/svg+xml"
            }
          ],
          site_name: "WYN"
        }}
      />
      <Head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default RootApp
