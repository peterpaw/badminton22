import Image from "next/image"
import Link from "next/link"
import { ITeamsOverview } from "pages/mannschaften"

const TeamListItem = ({ team }: { team: ITeamsOverview }) => {
  console.log(team)

  return (
    <Link href={`/mannschaften/${team.slug}`}>
      <a className="mb-8 block">
        <div className="relative aspect-[16/9] md:h-48 md:aspect-auto">
          <Image
            src={team.teamPhoto.url}
            alt={`Mannschaftsfoto ${team.mannschaft}`}
            layout="fill"
            objectFit="cover"
            className="rounded-tr-md rounded-tl-md md:rounded-bl-md md:rounded-tr-none"
          />
        </div>
        <h2 className="text-2xl">{team.mannschaft}</h2>
        <p>{team.liga}</p>
      </a>
    </Link>
  )
}

export default TeamListItem
