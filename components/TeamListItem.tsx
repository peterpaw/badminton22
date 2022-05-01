import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { motion } from "framer-motion"
import Link from "next/link"

import BlurImg from "./BlurImg"

import { TeamListTypes } from "types"

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

  const { hovered: hovered1, ref: ref1 } = useHover()
  const { hovered: hovered2, ref: ref2 } = useHover()

  return (
    <Container
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
          <Link href={`/mannschaften/${team.slug}`}>
            <a>
              <Title
                ref={ref1}
                order={2}
                sx={(theme) => ({
                  backgroundColor:
                    hovered1 || hovered2
                      ? theme.colors.red[2]
                      : theme.colors.red[5],
                })}
                className="text-base md:text-2xl mb-2 px-0 md:px-32 py-1 text-white duration-300"
              >
                {team.mannschaft}
              </Title>
            </a>
          </Link>
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
              color: dark ? theme.colors.dark[0] : theme.colors.gray[7],
            })}
            className="text-base md:text-xl font-bold italic text-center duration-300"
          >
            {team.liga}
          </Text>
        </motion.div>
        <motion.div
          ref={ref2}
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
          className="aspect-w-16 aspect-h-9 w-full col-start-1 md:col-start-4 col-span-12 md:col-span-6"
        >
          <Link href={`/mannschaften/${team.slug}`}>
            <a>
              <BlurImg
                src={team.teamPhoto.url}
                alt={`Mannschaftsfoto ${team.mannschaft}`}
                priority="true"
              />
            </a>
          </Link>
        </motion.div>
      </Container>
    </Container>
  )
}

export default TeamListItem
