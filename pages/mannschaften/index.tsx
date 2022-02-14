import { gql, GraphQLClient } from "graphql-request"
import { GetStaticProps } from "next"
import Link from "next/link"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

export interface ITeamsOverview {
  slug: string
  mannschaft: string
  liga: string
  teamPhoto: {
    url: string
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query Teams {
      teams {
        slug
        mannschaft
        liga
        teamPhoto {
          url
        }
      }
    }
  `

  const data = await client.request(query)

  return {
    props: {
      data,
    },
    revalidate: 60,
  }
}

const MannschaftenPage = ({ data }: { data: { teams: ITeamsOverview[] } }) => {
  return (
    <main className="text-center container py-16 max-w-sm mx-auto">
      <h1 className="text-4xl font-black mb-16">Mannschaften</h1>
      {data?.teams?.map((team) => (
        <div key={team.slug}>
          <Link href={`/mannschaften/${team.slug}`}>
            <a>
              <h2 className="text-2xl">{team.mannschaft}</h2>
              <p>{team.liga}</p>
            </a>
          </Link>
        </div>
      ))}
    </main>
  )
}

export default MannschaftenPage
