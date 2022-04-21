import Team from "@components/Team"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import { TeamTypes } from "types"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const TeamPage = ({ data }: { data: { team: TeamTypes } }) => {
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
          firstName
          lastName
          clubRank
        }
        teamPhoto {
          url
        }
        nuligaUrl
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
