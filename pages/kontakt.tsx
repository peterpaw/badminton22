import { NextPage } from "next"
import Head from "next/head"
import {
  Anchor,
  Center,
  Container,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core"
import { motion } from "framer-motion"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const KontaktPage: NextPage = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

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
      <Center
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[9] : theme.colors.gray[0],
        })}
        className="py-16 flex flex-col"
      >
        <Text component="p" className="text-2xl font-bold text- mb-8">
          Social Media
        </Text>
        <Center className="flex gap-2">
          <motion.a
            href="https://instagram.com/rwwalldorf_badminton"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            aria-label="Link to Facebook page"
          >
            <FaInstagram size={48} color="#dc271e" />
          </motion.a>
          <motion.a
            href="https://facebook.com/rww.badminton"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            aria-label="Link to Facebook page"
          >
            <FaFacebook size={48} color="#1b74e4" />
          </motion.a>
        </Center>
      </Center>
    </main>
  )
}

export default KontaktPage
