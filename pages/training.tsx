import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { motion } from "framer-motion"
import { NextPage } from "next"
import Head from "next/head"

type Props = { day: string; gym: string; address: string }

const TrainingCard: React.FC<Props> = ({ day, gym, address, children }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <motion.div className="w-full">
      <Container
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
        })}
        className="p-0 w-full shadow-lg"
      >
        <div className="p-8">
          <Title order={3} className="text-xl mb-4 text-left">
            {day}
          </Title>
          <Text component="p" className="font-semibold text-red-600 italic p-0">
            {gym}
          </Text>
          <Text component="p" className="p-0 mb-4 text-sm">
            {address}
          </Text>
          <Title order={4} className="text-left text-base font-semibold mb-1">
            Trainingzeiten:
          </Title>
          <Text component="p" className="p-0 text-sm">
            <Text
              component="span"
              sx={(theme) => ({
                color: theme.colors.gray[6],
              })}
              className="leading-none"
            >
              Jugend:
            </Text>{" "}
            17:30 - 19:30 Uhr
          </Text>
          <Text component="p" className="p-0 text-sm ">
            <Text
              component="span"
              sx={(theme) => ({
                color: theme.colors.gray[6],
              })}
              className="leading-none"
            >
              Erwachsene:
            </Text>{" "}
            19:30 - 22:30 Uhr
          </Text>
        </div>
        {children}
      </Container>
    </motion.div>
  )
}

const TrainingPage: NextPage = () => {
  return (
    <Container className="py-16">
      <Head>
        <title>Training | Rot-Weiss Walldorf Badminton</title>
        <meta
          name="description"
          content="Übersicht über Trainingszeiten und Orte der Abteilung Badminton - Rot-Weiß Walldorf."
        />
      </Head>
      <Title order={1} className="mb-16 font-black md:text-4xl">
        Training
      </Title>
      <div className="grid md:grid-cols-2 gap-8">
        <TrainingCard
          day="Montag"
          gym="Bertha-von-Suttner-Schule, Halle A"
          address="An den Nußbäumen 1"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.15906016178!2d8.563788415426462!3d49.98962727941435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd75a8392d8f27%3A0x9ff8516d96158dd0!2sBertha-von-Suttner-Schule!5e0!3m2!1sen!2sde!4v1623850425359!5m2!1sen!2sde"
            width="100%"
            height="300"
            loading="lazy"
            className="my-2"
          ></iframe>
        </TrainingCard>

        <TrainingCard
          day="Mittwoch"
          gym="Sporthalle Walldorf"
          address="Okrifteler Str. 29"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.2398250408205!2d8.56615131542726!3d50.00685997941667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd751745cacf91%3A0xb2e11e1f6e6b3abd!2sSporthalle!5e0!3m2!1sen!2sde!4v1623850566906!5m2!1sen!2sde"
            width="100%"
            height="300"
            loading="lazy"
            className="my-2"
          ></iframe>
        </TrainingCard>
      </div>
    </Container>
  )
}

export default TrainingPage
