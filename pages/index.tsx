import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"

const Home: NextPage = () => {
  return (
    <main className="h-2/5 bg-gray-800">
      <Head>
        <title>Badminton</title>
        <meta name="description" content="Badminton Rot-Weiss Walldorf e.V." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-full place-content-center">
        <h1 className="text-4xl font-black text-center text-zinc-300">
          Badminton
        </h1>
        <h2 className="text-4xl font-black text-center text-red-600">
          Rot-Weiss Walldorf e.V.
        </h2>
      </div>

      <div>
        <Link href="/presse">
          <a>Presse</a>
        </Link>
      </div>
    </main>
  )
}

export default Home
