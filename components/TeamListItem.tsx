import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"
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
      className="py-16"
    >
      <Link href={`/mannschaften/${team.slug}`}>
        <a>
          <Container>
            <div className="aspect-w-16 aspect-h-9">
              <Image
                src={team.teamPhoto.url}
                alt={`Mannschaftsfoto ${team.mannschaft}`}
                layout="fill"
                objectFit="cover"
                className="rounded"
                priority
              />
            </div>
            <Title order={2} className="text-2xl mt-4">
              {team.mannschaft}
            </Title>
            <Text
              component="p"
              sx={(theme) => ({ color: theme.colors.red[5] })}
            >
              {team.liga}
            </Text>
          </Container>
        </a>
      </Link>
    </Container>
  )
}

export default TeamListItem
