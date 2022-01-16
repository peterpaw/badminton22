import Team from "@components/Team"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"

import { ITeamsOverview } from "."

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

export interface ITeam extends ITeamsOverview {
  player: [
    {
      id: string
      name: string
      gender: string
      captain: boolean
    }
  ]
  nuligaUrl: string
}

const Slug = ({ data }: { data: { team: ITeam } }) => {
  return <Team team={data.team} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const query = gql`
    query Team($slug: String!) {
      team(where: { slug: $slug }) {
        slug
        mannschaft
        liga
        player {
          id
          name
          gender
          captain
        }
        teamPhoto {
          url
        }
        nuligaUrl
      }
    }
  `

  const data: { team: ITeam | null } = await client.request(query, { slug })

  if (!data.team) {
    return {
      notFound: true
    }
  }

  return {
    props: { data }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Teams {
      teams {
        slug
      }
    }
  `

  const data = await client.request(query)

  return {
    paths: data.teams.map((team: any) => ({ params: { slug: team.slug } })),
    fallback: "blocking"
  }
}

export default Slug
