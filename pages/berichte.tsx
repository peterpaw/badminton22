import Grid from "@components/Grid"
import { Text } from "@mantine/core"
import { config } from "@utils/config"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticProps, NextPage } from "next"
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
  return (
    <div>
      <Text component="h1" className="text-4xl pt-16 lg:py:24 font-black">
        Berichte
      </Text>
      <Grid posts={data.postsConnection.edges} />
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
  }
}

export default BerichtePage
