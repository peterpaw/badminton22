import { GetStaticProps, NextPage } from "next"
import { GraphQLClient, gql } from "graphql-request"
import Link from "next/link"
import Head from "next/head"
import { config } from "@utils/config"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

export interface IPosts {
  title: string
  slug: string
  postPublishDate: Date
  excerpt: string
  featuredImage: {
    url: string
  }
  author: {
    name: string
  }
}

interface PageProps {
  data: {
    postsConnection: {
      edges: [
        {
          node: IPosts
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
}

const PressePage: NextPage<PageProps> = ({ data }) => {
  const { edges, pageInfo, aggregate } = data?.postsConnection

  return (
    <>
      <Head>
        <title>Presseberichte Rot-Weiss Walldorf Badminton - Seite 1</title>
      </Head>
      <main className="py-16 mx-auto max-w-3xl">
        <h1 className="text-4xl font-black text-center text-gray-600 mb-16">
          Presse
        </h1>
        {edges?.map(({ node }) => {
          return (
            <div className="p-4" key={node.slug}>
              <p>{node.title}</p>
              <p>{node.author.name}</p>
              <Link href={`/presse/${node.slug}`}>
                <a className="text-red-600 hover:underline">Weiterlesen</a>
              </Link>
            </div>
          )
        })}
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
            <div>{` Seite 1 von ${aggregate.count / pageInfo.pageSize}`}</div>
            <div>{`${aggregate.count} Seiten insgesamt`}</div>
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
    </>
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
            author {
              name
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
      data
    },
    revalidate: 60 * 60
  }
}

export default PressePage
