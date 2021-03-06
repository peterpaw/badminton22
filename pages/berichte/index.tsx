import Grid from "@components/Grid"
import PostPagination from "@components/PostPagination"
import { Center, Text, useMantineColorScheme } from "@mantine/core"
import { config } from "@utils/config"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { PageInfo, PostType } from "types"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

interface PageProps {
  data: {
    postsConnection: {
      edges: [{ node: PostType }]
      pageInfo: PageInfo
      aggregate: {
        count: number
      }
    }
  }
}

const BerichtePage: NextPage<PageProps> = ({ data }) => {
  const total = Math.ceil(
    data.postsConnection.aggregate.count / config.pagination.pageSize
  )

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <div>
      <Head>
        <title>{`Presseberichte Seite 1 Rot-Weiss Walldorf Badminton`}</title>
        <meta
          name="description"
          content="Auflistung aller Presseartikel und Berichte von Rot-Weiß Walldorf Badminton."
        />
      </Head>
      <Text
        component="h1"
        className="text-3xl md:text-4xl pt-16 lg:py:24 font-black"
      >
        Presseberichte
      </Text>
      <Text
        component="p"
        sx={(theme) => ({
          color: dark ? theme.colors.gray[6] : theme.colors.gray[7],
        })}
        className="text-center mt-2 text-sm"
      >
        Seite 1 von {total}
      </Text>
      <Grid posts={data.postsConnection.edges} />
      <Center className="mb-8">
        <PostPagination total={total} currentPage={1} />
      </Center>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query Posts($pageSize: Int!) {
      postsConnection(
        first: $pageSize
        skip: 0
        orderBy: postPublishDate_DESC
      ) {
        edges {
          node {
            id
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
            categories {
              name
              slug
              color
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

  const { pageSize } = config.pagination

  const data = await client.request(query, { pageSize })

  return {
    props: {
      data,
    },
    revalidate: 60 * 30,
  }
}

export default BerichtePage
