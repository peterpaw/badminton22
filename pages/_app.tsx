import type { AppProps } from "next/app"

// import Nav from "@components/Nav"
import Layout from "@components/Layout"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Nav /> */}

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
