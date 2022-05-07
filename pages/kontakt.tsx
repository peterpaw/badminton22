import { NextPage } from "next"
import Head from "next/head"
import { Anchor, Container, Text, Title } from "@mantine/core"

const KontaktPage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Kontakt | Rot-Weiss Walldorf Badminton</title>
        <meta
          name="description"
          content="Kontaktiere die Abteilung Badminton per Email."
        />
      </Head>
      <Container className="py-16 text-center">
        <Title order={1} className="mb-16 font-black md:text-4xl">
          Kontakt
        </Title>
        <Text component="p" className="text-2xl font-bold text- mb-8">
          Schick uns eine Email:
        </Text>
        <Anchor
          href="mailto:vorstand.rwwb@gmail.com"
          sx={(theme) => ({ color: theme.colors.red[5] })}
          className="text-xl"
        >
          vorstand.rwwb@gmail.com
        </Anchor>
      </Container>
    </main>
  )
}

export default KontaktPage
