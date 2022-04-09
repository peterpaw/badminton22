import { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { motion } from "framer-motion"

import gruppenFoto from "../public/badminton-jugend-gruppenfoto.jpg"
import redheadKid from "../public/jugendtraining-01.jpg"
import gasthausXXL from "../public/gasthaus-xxl.png"
import xxlWirt from "../public/wirt-joschi-mauri.jpg"
import joschiMats from "../public/joschi-mats.jpg"

import { jugend } from "data/jugend"
import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import BlurImg from "@components/BlurImg"

const JugendPage: NextPage = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const even = {
    hidden: { x: -300 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  }

  const odd = {
    hidden: { x: 300 },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.5,
      },
    },
  }

  return (
    <main>
      <Head>
        <title>Jugend | Rot-Weiss Walldorf Badminton</title>
      </Head>
      <Container className="pt-8 md:pt-16">
        <Title
          order={3}
          sx={(theme) => ({ color: theme.colors.red[5] })}
          className="-mb-1"
        >
          Badminton
        </Title>
        <Title order={1} className="mb-8 md:mb-16 font-black md:text-5xl">
          Jugend
        </Title>
        <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg mb-16">
          <BlurImg src={gruppenFoto} alt="Jugend-Minimannschaft mit Coaches" />
        </div>
      </Container>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.gray[9] : theme.colors.gray[0],
        })}
        className="py-8 md:py-16"
      >
        <Container>
          <Title order={2} className="mb-0 font-black md:text-3xl">
            Minimannschaft
          </Title>
          <Title
            order={3}
            sx={(theme) => ({ color: theme.colors.red[5] })}
            className="mb-8"
          >
            meet the players:
          </Title>
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-fluid-sm md:grid-cols-fluid gap-1"
          >
            {jugend
              .sort((a, b) => a.id - b.id)
              .filter((p) => p.role === "player")
              .map((person) => (
                <motion.div
                  key={person.id}
                  variants={item}
                  whileHover={{ y: -2 }}
                >
                  <div className="aspect-w-[27] aspect-h-[36] overflow-hidden rounded-lg">
                    <BlurImg
                      src={person.foto}
                      alt={`Spielerfoto von ${person.name}`}
                    />
                  </div>
                  <Text
                    component="h2"
                    className="text-base font-medium leading-none mt-4 mb-8"
                  >
                    {person.name}
                  </Text>
                </motion.div>
              ))}
          </motion.div>
        </Container>
      </Container>
      <Container className="py-8 md:py-16">
        <Title order={2} className="mb-0 font-black md:text-3xl">
          Trainerstab
        </Title>
        <Title
          order={3}
          sx={(theme) => ({ color: theme.colors.red[5] })}
          className="mb-8"
        >
          meet the coaches:
        </Title>
        <div className="grid grid-cols-fluid-16 mt-8 gap-1 justify-center">
          {jugend
            .sort((a, b) => a.id - b.id)
            .filter((p) => p.role === "coach")
            .map((person, i) => (
              <motion.div
                key={person.id}
                className="mb-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={i % 2 === 0 ? even : odd}
                whileHover={{ y: -2 }}
              >
                <div className="aspect-w-[27] aspect-h-[36] overflow-hidden rounded-lg">
                  <BlurImg
                    src={person.foto}
                    alt={`Foto von Trainer ${person.name}`}
                  />
                </div>
                <Text
                  component="h2"
                  className="text-base font-medium leading-none mt-4"
                >
                  {person.name}
                </Text>
              </motion.div>
            ))}
        </div>
      </Container>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.gray[8] : theme.colors.gray[0],
        })}
        className="py-8 md:py-16"
      >
        <Container className="px-12">
          <Title order={2} className="mb-0 font-black md:text-3xl">
            Kids
          </Title>
          <Title
            order={3}
            sx={(theme) => ({ color: theme.colors.red[5] })}
            className="mb-16"
          >
            Training für die ganz Kleinen
          </Title>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={even}
            >
              <Text component="p">
                Für die Jüngsten bieten wir ein gesondertes Training an.
              </Text>
              <Text component="p">
                Unser
                <strong>Jugendwart Joschi Kreuz</strong> ist seit vielen Jahren
                als Trainer aktiv und bringt unserem Nachwuchs mit all seiner
                Erfahrung von Anfang an das Badmintonspielen bei.
              </Text>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={odd}
              className="w-[202px] h-[277px] relative overflow-hidden rounded-lg mb-16 mx-auto"
            >
              <BlurImg src={joschiMats} alt="Jugendwart Joschi Kreuz" />
            </motion.div>
          </div>
        </Container>
      </Container>

      <section>
        <Container
          fluid
          sx={(theme) => ({
            backgroundColor: dark ? theme.colors.gray[8] : theme.colors.gray[0],
          })}
          className="text-center py-8 md:py-16"
        >
          <Text component="h2" className="mb-8 md:mb-16 font-black md:text-4xl">
            Jugendtraining
          </Text>
          <div className="flex flex-wrap text-center justify-center gap-4 leading-tight">
            <div className="bg-white p-8 rounded shadow-sm flex-1 min-w-[20rem] max-w-[45vw]">
              <h3 className="text-xl md:text-2xl mb-4">Montag</h3>
              <p>Bertha-von-Suttner-Schule</p>
              <p>An den Nußbäumen 1, Halle A</p>
              <p>17:30 - 19:30 Uhr</p>
            </div>
            <div className="bg-white p-8 rounded shadow-sm flex-1 min-w-[20rem] max-w-[45vw]">
              <h3 className="text-xl md:text-2xl mb-4">Mittwoch</h3>
              <p>Sporthalle Walldorf</p>
              <p>Okrifteler Str. 29</p>
              <p>17:30 - 19:30 Uhr</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-zinc-100 py-8 md:py-16">
        <h2 className="mb-8 font-black md:text-4xl">Jugendsponsor</h2>
        <a
          href="http://www.rotweiss-xxl.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mx-auto block text-center"
        >
          <Image
            src={gasthausXXL}
            alt="Logo Gasthaus XXL"
            width={150}
            height={150}
          />
        </a>
        <h3 className="font-normal text-lg mb-8">
          Übergabe der neuen Trikots an unsere Jugend-Minimannschaft
        </h3>
        <div className="relative text-center max-w-3xl mx-auto">
          <Image
            src={xxlWirt}
            alt="Rot-Weiss Wirt mit Vorstand Badminton"
            width={1024}
            height={768}
          />
          <small>
            {`Abteilungsleiter Janosch Kreuz, Gasthaus XXL Pächter Predrag "Pedja"
            Prodanovic, Jugendwart Maurizio Battaglia.`}
          </small>
          <p className="mt-8">
            Im Namen der Jugend-Minimannschaft ein{` `}
            <u>riesengroßes Dankeschön!</u>
          </p>
        </div>
      </section>
    </main>
  )
}

export default JugendPage
