import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import { motion, Variants } from "framer-motion"
import Link from "next/link"

const TeamSection = ({
  teams,
}: {
  teams: [{ mannschaft: string; liga: string; slug: string }]
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: theme.colors.red[5],
        })}
      >
        <Text
          component="h2"
          color="white"
          className="py-4 text-2xl md:text-3xl font-black"
        >
          Mannschaften
        </Text>
      </Container>
      <div className="flex flex-col justify-center max-w-xl mx-auto gap-y-8 py-24 px-8">
        {teams.map((team) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            key={team.slug}
          >
            <Link href={`/mannschaften/${team.slug}`} passHref>
              <motion.a
                variants={cardVariants}
                whileHover={{ translateY: -6 }}
                className="text-center block"
              >
                <Container
                  p="md"
                  sx={(theme) => ({
                    backgroundColor: dark
                      ? theme.colors.dark[5]
                      : theme.colors.gray[0],
                  })}
                >
                  <Title
                    order={3}
                    sx={(theme) => ({
                      color: theme.colors.red[5],
                    })}
                  >
                    {team.mannschaft}
                  </Title>
                  <Text
                    sx={(theme) => ({
                      color: dark ? theme.colors.gray[4] : theme.colors.gray[8],
                    })}
                  >
                    {team.liga}
                  </Text>
                </Container>
              </motion.a>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default TeamSection
