import { GetStaticProps, NextPage } from "next"
import { GraphQLClient, gql } from "graphql-request"
import Link from "next/link"
import Head from "next/head"

import { config } from "@utils/config"

import PostCard from "@components/PostCard"
import CardGrid from "@components/CardGrid"
import { PageInfo, PostType } from "types"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

interface PageProps {
  data: {
    postsConnection: {
      edges: [
        {
          node: PostType
        }
      ]
      pageInfo: PageInfo
      aggregate: {
        count: number
      }
    }
  }
}

const PressePage: NextPage<PageProps> = ({ data }) => {
  const { edges, pageInfo, aggregate } = data?.postsConnection

  return (
    <main className="container-narrow max-w-4xl py-8 md:py-16">
      <Head>
        <title>Presseberichte Rot-Weiss Walldorf Badminton - Seite 1</title>
      </Head>
      <h1 className="text-4xl font-black text-center text-gray-600 mb-16">
        Presse
      </h1>
      <CardGrid>
        {edges?.map(({ node }: { node: any }, index) => (
          <PostCard post={node} index={index} key={node.slug} />
        ))}
      </CardGrid>
      <div className="py-8 flex justify-center gap-4 items-center">
        <div>
          <Link href={`/presse`} passHref>
            <button
              disabled={!pageInfo.hasPreviousPage}
              className="bg-indigo-700 text-white py-1 px-3 rounded disabled:bg-gray-300 disabled:text-gray-400"
            >
              zurück
            </button>
          </Link>
        </div>
        <div className="text-center text-xs text-gray-600">
          <div>{` Seite 1 von ${Math.ceil(
            aggregate.count / config.pagination.pageSize
          )}`}</div>
          <div>{`${aggregate.count} Beiträge insgesamt`}</div>
        </div>
        <div>
          <Link href={`/presse/seite/2`} passHref>
            <button
              disabled={!pageInfo.hasNextPage}
              className="bg-indigo-700 text-white py-1 px-3 rounded disabled:bg-gray-300 disabled:text-gray-400"
            >
              vor
            </button>
          </Link>
        </div>
      </div>
    </main>
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

export default PressePage
