import Team from "@components/Team"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import { TeamTypes } from "types"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const TeamPage = ({
  data,
}: {
  data: {
    team: TeamTypes
    teams: [{ slug: string; liga: string; mannschaft: string }]
  }
}) => {
  return <Team team={data.team} teams={data.teams} />
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
          firstName
          lastName
          clubRank
        }
        teamPhoto {
          url
        }
        imageCaption
        nuligaUrl
      }
      teams(where: { NOT: { slug: $slug } }) {
        slug
        liga
        mannschaft
      }
    }
  `

  const data: { team: TeamTypes | null } = await client.request(query, { slug })

  if (!data.team) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
    revalidate: 60 * 30,
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
    fallback: "blocking",
  }
}

export default TeamPage
