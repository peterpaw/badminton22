import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import Hero from "@components/Hero"
import Faq from "@components/Faq"

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Badminton</title>
        <meta name="description" content="Badminton Rot-Weiss Walldorf e.V." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Faq />
    </main>
  )
}

export default Home
