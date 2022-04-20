import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { motion } from "framer-motion"

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
    firstName: "Steffen",
    lastName: "Schöneberger",
    position: "Stellv. Sportwart",
  },
]

const Person = ({
  firstName,
  lastName,
  position,
  index,
}: {
  firstName: string
  lastName: string
  position: string
  index: number
}) => {
  return (
    <motion.div
      initial={{ x: index % 2 === 0 ? 200 : -200, opacity: 0 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          type: "spring",
          bounce: 0.4,
        },
      }}
      viewport={{ margin: "0px", once: true }}
    >
      <Title order={3}>{`${firstName} ${lastName}`}</Title>
      <Text className="my-32 p-8 bg-blue-500">{position}</Text>
    </motion.div>
  )
}

const Abteilung = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <>
      <Container fluid className="py-16">
        <Title order={1} className="font-black text-2xl md:text-4xl">
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
          backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
        })}
        className="py-16"
      >
        <Title order={2}>Vorstand</Title>
        {personData.map((person, index) => (
          <Person
            key={person.position}
            firstName={person.firstName}
            lastName={person.lastName}
            position={person.position}
            index={index}
          />
        ))}
      </Container>
    </>
  )
}

export default Abteilung
