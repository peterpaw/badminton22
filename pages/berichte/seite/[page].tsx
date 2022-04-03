import Head from "next/head"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { gql, GraphQLClient } from "graphql-request"

import { config } from "@utils/config"
import { PostType } from "types"
import { Center, Text } from "@mantine/core"
import Grid from "@components/Grid"
import PostPagination from "@components/PostPagination"

interface PageProps {
  data: {
    postsConnection: {
      edges: [
        {
          node: PostType
        }
      ]
      pageInfo: {
        hasNextPage: boolean
        hasPreviousPage: boolean
        pageSize: number
      }
      aggregate: {
        count: number
      }
    }
  }
  currentPage: string
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const Page: NextPage<PageProps> = ({ data, currentPage }) => {
  const total = Math.ceil(
    data.postsConnection.aggregate.count / config.pagination.pageSize
  )

  return (
    <div>
      <Head>
        <title>{`Presseberichte Rot-Weiss Walldorf Badminton - Seite ${currentPage}`}</title>
      </Head>
      <Text component="h1" className="text-4xl pt-16 lg:py:24 font-black">
        Presseberichte
      </Text>
      <Grid posts={data.postsConnection.edges} />
      <Center className="mb-8">
        <PostPagination total={total} currentPage={parseInt(currentPage)} />
      </Center>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageSize } = config.pagination

  const query = gql`
    query Posts($pageSize: Int!, $postsToSkip: Int!) {
      postsConnection(
        first: $pageSize
        skip: $postsToSkip
        orderBy: postPublishDate_DESC
      ) {
        edges {
          node {
            title
            slug
            postPublishDate
            excerpt
            featuredImage {
              url
            }
            authors {
              id
              name
              foto {
                url
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
        aggregate {
          count
        }
      }
    }
  `

  const currentPage = parseInt(params?.page as string)
  const postsToSkip = currentPage === 1 ? 0 : (currentPage - 1) * pageSize

  const data = await client.request(query, { pageSize, postsToSkip })

  return {
    props: { data, currentPage },
    revalidate: 60 * 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { pageSize } = config.pagination

  const query = gql`
    query {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const data = await client.request(query)

  const totalPages = data.postsConnection.aggregate.count / pageSize

  let paths = []

  for (let page = 2; page <= totalPages; page++) {
    paths.push({ params: { page: page.toString() } })
  }

  return {
    paths,
    fallback: "blocking",
  }
}

export default Page
