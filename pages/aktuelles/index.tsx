import { NextPage, GetServerSideProps } from "next"
import { ParsedUrlQuery } from "querystring"
import { GraphQLClient, gql } from "graphql-request"
import Link from "next/link"

const AktuellesPage: NextPage<ParsedUrlQuery> = ({ data, query }) => {
  const { edges, pageInfo, aggregate } = data?.postsConnection
  const page = parseInt(query?.page as string)

  return (
    <main className='py-16 mx-auto max-w-3xl'>
      <h1 className='text-4xl font-black text-center text-gray-600 mb-16'>
        Presse
      </h1>
      {edges?.map(({ node }) => {
        return (
          <div className='p-4' key={node.slug}>
            <p>{node.title}</p>
            <p>{node.author.name}</p>
            <Link href={`/presse/${node.slug}`}>
              <a className='text-red-600 hover:underline'>Weiterlesen</a>
            </Link>
          </div>
        )
      })}
      <div className='py-8 flex justify-center gap-4 items-center'>
        <div>
          <Link href={`/aktuelles?page=${page - 1}`} passHref>
            <button
              disabled={!pageInfo.hasPreviousPage}
              className='bg-indigo-700 text-white py-1 px-3 rounded disabled:bg-gray-300 disabled:text-gray-400'
            >
              zurück
            </button>
          </Link>
        </div>
        <div className='text-center text-xs text-gray-600'>
          <div>{` Seite ${page} von ${
            aggregate.count / pageInfo.pageSize
          }`}</div>
          <div>{`${aggregate.count} Seiten insgesamt`}</div>
        </div>
        <div>
          <Link href={`/aktuelles?page=${page + 1}`} passHref>
            <button
              disabled={!pageInfo.hasNextPage}
              className='bg-indigo-700 text-white py-1 px-3 rounded disabled:bg-gray-300 disabled:text-gray-400'
            >
              vor
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { page = 1, count = 2 } = context.query
  const pageNumber = parseInt(page as string)
  const countNumber = parseInt(count as string)
  const postsToSkip = (pageNumber - 1) * countNumber

  const client = new GraphQLClient(
    process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
  )

  const query = gql`
    query Posts($postsToSkip: Int!) {
      postsConnection(
        first: 2
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

  const data = await client.request(query, { postsToSkip })

  return {
    props: {
      data,
      query: context.query
    }
  }
}

export default AktuellesPage
