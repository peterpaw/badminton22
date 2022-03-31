import Grid from "@components/Grid"
import { Text } from "@mantine/core"
import { config } from "@utils/config"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticProps } from "next"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const BerichtePage = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Text component="h1" className="text-4xl py-16 lg:py:24 font-black">
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
