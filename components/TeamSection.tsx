import {
  Center,
  Container,
  Grid,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core"
import Image from "next/image"
import Link from "next/link"

import trikot from "../assets/images/trikot.png"

const TeamSection = ({
  teams,
}: {
  teams: [{ mannschaft: string; liga: string; slug: string }]
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: theme.colors.red[5],
        })}
      >
        <Text component="h2" color="white" className="py-4 text-3xl font-black">
          Mannschaften
        </Text>
      </Container>
      <Container className="py-16">
        <Grid>
          <Grid.Col span={12} md={6}>
            <Center className="h-full flex-col gap-8">
              {teams.map((team) => (
                <Link
                  href={`/mannschaften/${team.slug}`}
                  passHref
                  key={team.slug}
                >
                  <a className="w-full text-center border-2 border-[#dc271e] max-w-[75%] px-4 py-2">
                    <Title order={3} className="text-[#dc271e]">
                      {team.mannschaft}
                    </Title>
                    <Text
                      sx={(theme) => ({
                        color: dark
                          ? theme.colors.gray[6]
                          : theme.colors.gray[6],
                      })}
                    >
                      {team.liga}
                    </Text>
                  </a>
                </Link>
              ))}
            </Center>
          </Grid.Col>
          <Grid.Col span={12} md={6}>
            <div className="aspect-w-1 aspect-h-1 w-[70%] md:w-full mx-auto overflow-hidden mt-8">
              <Image
                src={trikot}
                alt="Trikot Badminton Rot-Weiß Walldorf"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default TeamSection
