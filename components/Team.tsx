import { Container, Text, Title } from "@mantine/core"
import { TeamTypes } from "types"
import BlurImg from "./BlurImg"

const Team = ({ team }: { team: TeamTypes }) => {
  return (
    <Container className="text-center py-16 mx-auto">
      <Title order={1} className="text-3xl font-bold">
        {team.mannschaft}
      </Title>
      <Title order={2} className="mb-8 font-normal text-lg">
        {team.liga}
      </Title>
      <div className="aspect-w-16 aspect-h-9">
        <BlurImg
          src={team.teamPhoto.url}
          alt={`Mannschaftsfoto der ${team.mannschaft}`}
          priority="true"
        />
      </div>
      <div className="mt-16">
        {team?.player?.map((p) => (
          <div key={p.id}>
            <Text component="p" className="py-1">
              {p.name}
              {p.captain &&
                ` (Mannschaftsführer${p.gender === "female" ? "in" : ""})`}
            </Text>
          </div>
        ))}
      </div>
      <div className="py-8">
        <a href={team.nuligaUrl} target="_blank" rel="noreferrer">
          Link zur HBV-Tabelle
        </a>
      </div>
    </Container>
  )
}

export default Team
