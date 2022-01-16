import { ITeam } from "pages/mannschaften/[slug]"

const Team = ({ team }: { team: ITeam }) => {
  return (
    <main className="text-center container py-16 mx-auto">
      <h1 className="text-3xl font-bold">{team.mannschaft}</h1>
      <h2 className="mb-8">{team.liga}</h2>
      <img
        src={team.teamPhoto.url}
        alt={`Mannschaftsfoto der ${team.mannschaft}`}
      />
      <div className="mt-16">
        {team?.player?.map((p) => (
          <div key={p.id}>
            <h4>
              {p.name}
              {p.captain &&
                ` (Mannschaftsführer${p.gender === "female" ? "in" : ""})`}
            </h4>
          </div>
        ))}
      </div>
      <div className="py-8">
        <a href={team.nuligaUrl} target="_blank" rel="noreferrer">
          Link zur HBV-Tabelle
        </a>
      </div>
    </main>
  )
}

export default Team
