import { GetStaticProps, NextPage } from "next"
import { GraphQLClient, gql } from "graphql-request"
import Link from "next/link"

import Pagination from "@components/Pagination"
import { useRouter } from "next/router"
import { useState } from "react"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

interface IPosts {
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
  const [skip, setSkip] = useState(0)

  console.log(skip)

  const { edges, pageInfo, aggregate } = data?.postsConnection

  const router = useRouter()

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
          <button
            onClick={() => {
              setSkip(skip - pageInfo.pageSize)
            }}
            disabled={!pageInfo.hasPreviousPage}
            className='bg-indigo-700 text-white py-1 px-3 rounded disabled:bg-gray-300 disabled:text-gray-400'
          >
            prev
          </button>
        </div>
        <div>
          <span>{`${aggregate.count / pageInfo.pageSize} Seiten`}</span>
        </div>
        <div>
          <button
            onClick={() => {
              setSkip(skip + pageInfo.pageSize)
            }}
            disabled={!pageInfo.hasNextPage}
            className='bg-indigo-700 text-white py-1 px-3 rounded disabled:bg-gray-300 disabled:text-gray-400'
          >
            next
          </button>
        </div>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query Posts {
      postsConnection(first: 2, skip: 0, orderBy: postPublishDate_DESC) {
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

  const data = await client.request(query)

  return {
    props: {
      data
    },
    revalidate: 60 * 60
  }
}

export default PressePage
