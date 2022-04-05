import { NextPage } from "next"
import Head from "next/head"
import { Text } from "@mantine/core"

const KontaktPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Kontakt | Rot-Weiss Walldorf Badminton</title>
      </Head>
      <div className="container-narrow py-8 md:py-16">
        <Text component="h1" className="mb-8 md:mb-16 font-black md:text-4xl">
          Kontakt
        </Text>
      </div>
    </main>
  )
}

export default KontaktPage
