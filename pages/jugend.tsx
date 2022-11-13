import { NextPage } from "next"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { motion, Variants } from "framer-motion"
import {
  Button,
  Container,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core"
import BlurImg from "@components/BlurImg"

import jugendTitle from "../public/jugend_title.jpg"
import gruppenFoto from "../public/badminton-jugend-gruppenfoto.jpg"
import gasthausXXL from "../public/gasthaus-xxl.png"
import xxlWirt from "../public/wirt-joschi-mauri.jpg"
import joschiMats from "../public/joschi-mats.jpg"
import kindertraining01 from "../public/training_kids-01.jpg"

import { jugend } from "data/jugend"

const JugendPage: NextPage = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

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

  const fadeIn: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <main>
      <Head>
        <title>Jugend | Rot-Weiss Walldorf Badminton</title>
        <meta
          name="description"
          content="Rot-Weiß Walldorf Badminton Jugend. Infos zur Minimannschaft, den Spielern und den Trainern. Infos über das Training der Kids."
        />
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
        <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden mb-16">
          <BlurImg
            src={jugendTitle}
            alt="Gruppenfoto der Rot-Weiss Walldorf Badminton Schülermannschaft mit Trainer Maurizio Battaglia"
            priority="true"
          />
        </div>
      </Container>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[8] : theme.colors.gray[1],
        })}
        className="py-16"
      >
        <Container className="text-lg">
          <Title className="text-2xl mb-12">
            Unsere Jugendabteilung wächst
          </Title>
          <Text className="mb-4">
            Der Nachwuchs hat die Freude am Badminton entdeckt. Erstmals seit
            vielen Jahren wieder hat die Abteilung wieder eine Jugend- und eine
            Schüler-Mannschaft gemeldet. Und es können noch mehr Mannschaften
            werden, denn im Training sind über 30 Kids mit dem Schläger aktiv.
          </Text>
          <Text>
            Der Trainer{" "}
            <span className="font-bold text-primary">Maurizio Battaglia</span>{" "}
            begeistert den Nachwuchs jeden Montag und jeden Mittwoch mit seinen
            sportlichen Ideen.
          </Text>
          <Text>
            Die Jüngsten werden von{" "}
            <span className="font-bold text-primary">Janosch Kreuz</span>{" "}
            spielerisch an den Schläger und Federball herangeführt , ca.
            Fünfzehn 6 -7 jährige Kids üben vorerst nur einmal die Woche,
            mittwochs von 17:30 - 18:30 Uhr, das schnelle Spiel.
          </Text>
          <Container className="relative mt-16 mx-0 px-0">
            <Image
              src={kindertraining01}
              alt="Kindertraining"
              width={1024}
              height={576}
            />
          </Container>
          <Title className="text-xl mt-16 mb-4 text-left">
            Training mit Plan und Konzept
          </Title>
          <Text>
            Das Trainingskonzept von Maurizio ist aufgebaut auf 3 Säulen,
            nämlich Grundlagen, Aufbau und Leistung. Jedes Kind, vom Hobby- bis
            Leistungslevel, wird entsprechend betreut und gefördert.
          </Text>
          <Text className="mt-4">
            Nicht nur Badminton spielt im Training eine grosse Rolle, sondern
            auch die körperliche Weiterentwicklung (Koordination, Stabilisation,
            Kraft/Ausdauer und Belastungssteuerung). Teamwork und Teamspirit
            wird ebenfalls gefordert und gefördert. Das Training ist
            entsprechend ausgewogen und lässt zudem ausreichend Zeit fürs freie
            Spielen.
          </Text>
          <Text>
            Die Kids bekommen eine Rundum-Betreuung bei den Rundenspielen und
            Teilnahmen an Turnieren, auch mit Hilfe der Eltern.
          </Text>
        </Container>
      </Container>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.gray[9] : theme.colors.gray[0],
        })}
        className="py-16"
      >
        <Container>
          <Title order={2} className="mb-0 font-black md:text-3xl">
            Jugend-Minimannschaft
          </Title>
          <Title
            order={3}
            sx={(theme) => ({ color: theme.colors.red[5] })}
            className="mb-16"
          >
            meet the players:
          </Title>
          <motion.div className="grid grid-cols-fluid-sm md:grid-cols-fluid gap-1">
            {jugend
              .sort((a, b) => a.id - b.id)
              .filter((p) => p.role === "player")
              .map((person) => (
                <motion.div key={person.id} whileHover={{ y: -2 }}>
                  <div className="aspect-w-[27] aspect-h-[36] overflow-hidden">
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
      <Container className="py-16">
        <Title order={2} className="mb-0 font-black md:text-3xl">
          Trainer
        </Title>
        <Title
          order={3}
          sx={(theme) => ({ color: theme.colors.red[5] })}
          className="mb-16"
        >
          meet the coach:
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
                <div className="aspect-w-[27] aspect-h-[36] overflow-hidden">
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
        className="py-16"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto justify-center">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn}
              className="col-span-2"
            >
              <Container
                sx={(theme) => ({
                  backgroundColor: dark
                    ? theme.colors.dark[6]
                    : theme.colors.gray[1],
                })}
                className="p-8"
              >
                <Text component="p">
                  Für die Jüngsten bieten wir ein gesondertes Training an.
                </Text>
                <Text component="p">
                  Unser{" "}
                  <strong>
                    Jugendwart{" "}
                    <span className="text-[#dc271e]">Joschi Kreuz</span>
                  </strong>{" "}
                  ist seit vielen Jahren als Trainer aktiv und bringt unserem
                  Nachwuchs mit all seiner Erfahrung von Anfang an das
                  Badmintonspielen bei.
                </Text>
              </Container>
            </motion.div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeIn}
              className="w-[202px] h-[277px] relative overflow-hidden mb-16 mx-auto -mt-8 md:mt-4 md:-ml-8"
            >
              <BlurImg src={joschiMats} alt="Jugendwart Joschi Kreuz" />
            </motion.div>
          </div>
        </Container>
      </Container>

      <Container fluid className="text-center py-16">
        <Title order={2} className="mb-0 font-black md:text-3xl">
          Wann und wo?
        </Title>
        <Title
          order={3}
          sx={(theme) => ({ color: theme.colors.red[5] })}
          className="mb-16"
        >
          Alle Infos zum Trainingsablauf
        </Title>

        <Link href="/training" passHref>
          <Button
            component="a"
            uppercase
            sx={(theme) => ({
              color: theme.colors.gray[0],
            })}
            className="bg-red-600 hover:bg-red-500 duration-300"
          >
            Hier klicken
          </Button>
        </Link>
      </Container>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[1],
        })}
        className="py-16"
      >
        <Container>
          <Title
            order={3}
            sx={(theme) => ({ color: theme.colors.red[5] })}
            className="-mb-1"
          >
            Jugend
          </Title>
          <Title order={2} className="mb-16 font-black md:text-3xl">
            Supporter
          </Title>
          <a
            href="http://www.rotweiss-xxl.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mx-auto block text-center mb-8"
          >
            <Image
              src={gasthausXXL}
              alt="Logo Gasthaus XXL"
              width={150}
              height={150}
            />
          </a>
          <div className="aspect-w-[1024] aspect-h-[768]">
            <BlurImg
              src={xxlWirt}
              alt="Rot-Weiss Wirt mit Vorstand Badminton"
            />
          </div>
          <Text
            component="small"
            sx={(theme) => ({
              color: dark ? theme.colors.gray[6] : theme.colors.gray[7],
            })}
            className="text-center block text-xs md:text-sm mt-2"
          >
            {`Jugendwart Janosch Kreuz, Gasthaus XXL Pächter Predrag "Pedja"
            Prodanovic, Jugendtrainer Maurizio Battaglia.`}
          </Text>
          <Title order={3} className="my-16">
            Ein <span className="text-[#dc271e]">großes Dankeschön</span> ❤️ im
            Namen der Jugend-Minimannschaft!
          </Title>
        </Container>
      </Container>
    </main>
  )
}

export default JugendPage
