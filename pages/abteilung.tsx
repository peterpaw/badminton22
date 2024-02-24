import Image from "next/image"
import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { motion } from "framer-motion"
import Head from "next/head"

import PricingPlans from "@components/PricingPlans"

import passiv from "assets/images/rww_mitgliedschaft_passiv.jpg"

const personData = [
  {
    firstName: "Florian",
    lastName: "Bernhard-Kolbe",
    position: "1. Vorsitzender",
  },
  {
    firstName: "Stefanie",
    lastName: "Kreuz",
    position: "2. Vorsitzende",
  },
  {
    firstName: "Antonio",
    lastName: "Morsi",
    position: "Sportwart",
  },
  {
    firstName: "Janosch",
    lastName: "Kreuz",
    position: "Jugendwart",
  },
  {
    firstName: "Patrick",
    lastName: "Coutandin",
    position: "Stellv. Sportwart",
  },
]

const Person = ({
  firstName,
  lastName,
  position,
}: {
  firstName: string
  lastName: string
  position: string
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Container className="my-8 max-w-lg mx-auto">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.2,
            type: "spring",
            bounce: 0.4,
          },
        }}
        viewport={{ margin: "0px", once: true }}
      >
        <Text
          component="p"
          sx={(theme) => ({
            color: dark ? theme.colors.gray[5] : theme.colors.gray[6],
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
          })}
          className="py-2 px-4 mr-8 ml-8 text-lg md:text-xl font-semibold border-b-4 border-red-600"
        >
          {`${position}:`}
        </Text>
      </motion.div>
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1.2,
            type: "spring",
            bounce: 0.4,
            delay: 0.1,
          },
        }}
        viewport={{ margin: "0px", once: true }}
        whileHover={{ x: -4 }}
      >
        <Text
          component="p"
          sx={(theme) => ({
            color: dark ? theme.colors.gray[1] : theme.colors.gray[7],
            backgroundColor: dark ? theme.colors.dark[5] : theme.colors.gray[1],
          })}
          className="font-bold text-xl lg:text-2xl py-2 px-4 text-right ml-16 mr-8 leading-none"
        >
          <Text
            component="span"
            sx={(theme) => ({
              color: theme.colors.red[5],
            })}
            className="block font-medium text-base leading-none"
          >
            {firstName}
          </Text>
          {lastName}
        </Text>
      </motion.div>
    </Container>
  )
}

const Abteilung = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <>
      <Head>
        <title>Abteilung - Rot-Weiß Walldorf Badminton</title>
        <meta
          name="description"
          content="Abteilung Rot-Weiß Walldorf Badminton: Infos zum Vorstand und der Mitgliedschaft im Verein."
        />
      </Head>
      <Container fluid className="py-16">
        <Title order={1} className="font-black text-3xl md:text-4xl">
          Abteilung
        </Title>
        <Title
          sx={(theme) => ({
            color: theme.colors.red[5],
          })}
          className="text-base md:text-2xl"
        >
          Badminton
        </Title>
      </Container>

      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[9] : theme.colors.gray[1],
        })}
        className="py-16 px-0"
      >
        <Title
          order={2}
          sx={(theme) => ({
            color: dark ? theme.colors.gray[3] : theme.colors.gray[7],
          })}
          className="text-2xl md:text-3xl font-black mb-16"
        >
          Mitgliedschaft
        </Title>
        <PricingPlans />
        <Container
          fluid
          sx={(theme) => ({
            backgroundColor: dark ? theme.colors.dark[5] : theme.colors.gray[0],
          })}
          className="py-16 mb-16 text-center"
        >
          <Text
            component="p"
            className="text-center text-lg leading-tight font-bold"
          >
            <span className="underline">Mitgliedsantrag</span> im PDF-Format:
          </Text>
          <a
            href="/Mitgliedsantrag.pdf"
            className="inline-block bg-[#dc271e] px-4 py-2 mt-8 text-white uppercase font-semibold hover:bg-red-500 duration-300"
          >
            Download
          </a>
        </Container>
        <div className="max-w-md mx-auto">
          <Image
            src={passiv}
            alt="Passive Mitgliedschaft mit QR-Code"
            width={800}
            height={1131}
            layout="responsive"
          />
        </div>
      </Container>

      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
        })}
        className="py-16"
      >
        <Title
          order={2}
          sx={(theme) => ({
            color: dark ? theme.colors.gray[3] : theme.colors.gray[7],
          })}
          className="text-2xl md:text-3xl font-black mb-16"
        >
          Vorstand
        </Title>
        {personData.map((person, index) => (
          <Person
            key={person.position}
            firstName={person.firstName}
            lastName={person.lastName}
            position={person.position}
          />
        ))}
      </Container>
    </>
  )
}

export default Abteilung
