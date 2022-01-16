import Link from "next/link"
import Head from "next/head"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { gql, GraphQLClient } from "graphql-request"

import type { IPosts } from "../"

import { config } from "@utils/config"

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
  currentPage: string
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const Page: NextPage<PageProps> = ({ data, currentPage }) => {
  const { edges, pageInfo, aggregate } = data?.postsConnection
  const page = parseInt(currentPage)

  return (
    <>
      <Head>
        <title>{`Presseberichte Rot-Weiss Walldorf Badminton - Seite ${currentPage}`}</title>
      </Head>
      <main className="py-16 mx-auto max-w-3xl">
        <h1 className="text-4xl font-black text-center text-gray-600 mb-16">
          Presse
        </h1>
        {edges?.map(({ node }: { node: any }) => {
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
            <Link href={`/presse/seite/${page - 1}`} passHref>
              <button
                disabled={!pageInfo.hasPreviousPage}
                className="bg-indigo-700 text-white py-1 px-3 rounded disabled:bg-gray-300 disabled:text-gray-400"
              >
                zurück
              </button>
            </Link>
          </div>
          <div className="text-center text-xs text-gray-600">
            <div>{` Seite ${page} von ${
              aggregate.count / pageInfo.pageSize
            }`}</div>
            <div>{`${aggregate.count} Seiten insgesamt`}</div>
          </div>
          <div>
            <Link href={`/presse/seite/${page + 1}`} passHref>
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

  const currentPage = parseInt(params?.page as string)
  const postsToSkip = currentPage === 1 ? 0 : (currentPage - 1) * pageSize

  const data = await client.request(query, { pageSize, postsToSkip })

  return {
    props: { data, currentPage },
    revalidate: 60 * 60
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
    fallback: "blocking"
  }
}

export default Page
