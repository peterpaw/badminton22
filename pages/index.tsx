import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

import Hero from "@components/Hero"

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Badminton</title>
        <meta name="description" content="Badminton Rot-Weiss Walldorf e.V." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </main>
  )
}

export default Home
