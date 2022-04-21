import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { motion } from "framer-motion"
import { PlayerType, TeamTypes } from "types"
import BlurImg from "./BlurImg"

const Team = ({ team }: { team: TeamTypes }) => {
  let men: PlayerType[] = []
  let women: PlayerType[] = []

  team.player.forEach((p) => {
    if (p.gender === "male") {
      men = [...men, p]
    } else if (p.gender === "female") {
      women = [...women, p]
    }
  })

  const menSorted: PlayerType[] = men.sort((a, b) => a.clubRank - b.clubRank)
  const womenSorted: PlayerType[] = women.sort(
    (a, b) => a.clubRank - b.clubRank
  )

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Container className="py-16 mx-auto">
      <Title order={1} className="text-3xl font-bold">
        {team.mannschaft}
      </Title>
      <Title
        order={2}
        sx={(theme) => ({
          color: theme.colors.red[5],
        })}
        className="mb-8 font-medium text-xl"
      >
        {team.liga}
      </Title>
      <div className="aspect-w-16 aspect-h-9">
        <BlurImg
          src={team.teamPhoto.url}
          alt={`Mannschaftsfoto der ${team.mannschaft}`}
          priority="true"
        />
      </div>

      {/* Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 max-w-xl mx-auto md:gap-x-8 px-4 gap-y-8">
        <div>
          <Title
            order={3}
            sx={(theme) => ({
              color: dark ? theme.colors.gray[3] : theme.colors.dark[5],
            })}
            className="text-left mb-8 text-xl tracking-wide border-b mr-8 md:-ml-16 md:pl-16 pb-1 font-light uppercase"
          >
            Herren
          </Title>
          {menSorted.map((p) => (
            <div className="mb-4 p-0" key={p.id}>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
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
              >
                <Text
                  component="p"
                  className="m-0 p-0 leading-none font-semibold"
                >
                  {p.firstName}
                </Text>
              </motion.div>
              <motion.div
                key={p.id}
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
              >
                <Text
                  component="p"
                  sx={(theme) => ({ color: theme.colors.red[5] })}
                  className="m-0 p-0 leading-none text-2xl font-black"
                >
                  {p.lastName}
                </Text>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="text-right">
          <Title
            order={3}
            sx={(theme) => ({
              color: dark ? theme.colors.gray[3] : theme.colors.dark[5],
            })}
            className="text-right mb-8 text-xl border-b ml-8 md:-mr-16 md:pr-16 pb-1 font-light uppercase"
          >
            Damen
          </Title>
          {womenSorted.map((p) => (
            <div className="mb-4 p-0" key={p.id}>
              <motion.div
                initial={{ x: -200, opacity: 0 }}
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
              >
                <Text
                  component="p"
                  className="m-0 p-0 leading-none font-semibold"
                >
                  {p.firstName}
                </Text>
              </motion.div>
              <motion.div
                key={p.id}
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
              >
                <Text
                  component="p"
                  sx={(theme) => ({ color: theme.colors.red[5] })}
                  className="m-0 p-0 leading-none text-2xl font-black"
                >
                  {p.lastName}
                </Text>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <Container className="py-8 text-center mt-16">
        <a
          href={team.nuligaUrl}
          target="_blank"
          rel="noreferrer"
          className="bg-[#dc271e] px-4 py-2 rounded text-white uppercase tracking-wider font-semibold hover:bg-red-500 duration-300"
        >
          Tabelle
        </a>
      </Container>
    </Container>
  )
}

export default Team
