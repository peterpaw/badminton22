import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { cn } from "@utils/cn"
import { motion } from "framer-motion"
import Link from "next/link"
import { TeamListTypes } from "types"
import BlurImg from "./BlurImg"

const TeamListItem = ({
  team,
  index,
}: {
  team: TeamListTypes
  index: number
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const even = index % 2 === 0

  const { hovered, ref } = useHover()

  return (
    <Container
      ref={ref}
      fluid
      sx={(theme) => ({
        backgroundColor: dark
          ? index % 2 === 0
            ? theme.colors.dark[7]
            : theme.colors.dark[8]
          : index % 2 === 0
          ? "white"
          : theme.colors.gray[0],
      })}
      className="pb-16 md:pt-8"
    >
      <Link href={`/mannschaften/${team.slug}`}>
        <a>
          <Container className="grid grid-cols-12">
            <motion.div
              initial={{ x: even ? 200 : -200, opacity: 0 }}
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
              className="col-span-12 md:col-span-8 col-start-1 md:col-start-3"
            >
              <Title
                order={2}
                sx={(theme) => ({ backgroundColor: theme.colors.red[5] })}
                className="text-base md:text-2xl mb-2 px-0 md:px-32 py-1 text-white"
              >
                {team.mannschaft}
              </Title>
            </motion.div>
            <motion.div
              initial={{ x: even ? -200 : 200, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.4,
                },
              }}
              viewport={{ margin: "0px", once: true }}
              className="col-span-12"
            >
              <Text
                component="p"
                sx={(theme) => ({
                  color: hovered
                    ? theme.colors.red[5]
                    : dark
                    ? theme.colors.dark[0]
                    : theme.colors.gray[7],
                })}
                className="text-base md:text-xl font-bold italic text-center duration-300"
              >
                {team.liga}
              </Text>
            </motion.div>
            <motion.div
              initial={{ x: even ? 200 : -200, opacity: 0 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.4,
                  delay: 0.8,
                },
              }}
              viewport={{ margin: "0px", once: true }}
              className={cn(
                "aspect-w-16 aspect-h-9 w-full col-start-1 md:col-start-4 col-span-12 md:col-span-6 bg-gray-200",
                hovered ? "opacity-75 duration-300 ease-in-out" : ""
              )}
            >
              <BlurImg
                src={team.teamPhoto.url}
                alt={`Mannschaftsfoto ${team.mannschaft}`}
                priority="true"
                hovered={hovered}
              />
            </motion.div>
          </Container>
        </a>
      </Link>
    </Container>
  )
}

export default TeamListItem
