import TeamListItem from "@components/TeamListItem"
import { Container, Title } from "@mantine/core"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticProps } from "next"
import Head from "next/head"
import { TeamListTypes } from "types"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

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
    revalidate: 60 * 30,
  }
}

const MannschaftenPage = ({ data }: { data: { teams: TeamListTypes[] } }) => {
  return (
    <>
      <Head>
        <title>Mannschaften - Badminton Rot-Weiß Walldorf</title>
        <meta
          name="description"
          content="Rot-Weiß Walldorf Badminton Mannschaften. Alle Infos zu Spielern, Ligen, und Tabellen."
        />
      </Head>
      <Container fluid className="text-center py-16 px-0">
        <Title order={1} className="text-4xl font-black mb-16">
          Mannschaften
        </Title>
        {data?.teams?.map((team, index) => (
          <TeamListItem team={team} index={index} key={team.slug} />
        ))}
      </Container>
    </>
  )
}

export default MannschaftenPage
