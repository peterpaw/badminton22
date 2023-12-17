import Team from "@components/Team"
import axios from "axios"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import { Table, TeamTypes } from "types"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const TeamPage = ({
  data,
  table
}: {
  data: {
    team: TeamTypes
    teams: [{ slug: string; liga: string; mannschaft: string }]
  },
  table: Table
}) => {
  return <Team team={data.team} teams={data.teams} table={table} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  let teamAsNumber: string

  switch (slug) {
    case "mannschaft-1":
      teamAsNumber = "1"
      break
    case "mannschaft-2":
      teamAsNumber = "2"
      break
    case "mannschaft-3":
      teamAsNumber = "3"
      break
    case "mannschaft-4":
      teamAsNumber = "4"
      break
    default:
      teamAsNumber = "1"
  }

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

  let table = [];

  async function fetchTableData() {
    try {
      const tableData = await axios.get(`${process.env.TABLES_API_URL}${teamAsNumber}`);
      return tableData.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  table = await fetchTableData();

  if (!data.team) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data, table },
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
    // @ts-ignore
    paths: data.teams.map((team: any) => ({ params: { slug: team.slug } })),
    fallback: "blocking",
  }
}

export default TeamPage
