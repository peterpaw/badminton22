import { Container, Text } from "@mantine/core"

const TeamSection = ({
  teams,
}: {
  teams: [{ mannschaft: string; liga: string; slug: string }]
}) => {
  return (
    <Container
      fluid
      sx={(theme) => ({
        backgroundColor: theme.colors.red[5],
      })}
    >
      <Text component="h2" color="white" className="py-16 text-3xl font-black">
        Mannschaften
      </Text>
      {teams.map((team) => (
        <div key={team.slug}>{team.mannschaft}</div>
      ))}
    </Container>
  )
}

export default TeamSection
