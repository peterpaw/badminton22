import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { gql, GraphQLClient } from "graphql-request"

import CardGrid from "@components/CardGrid"
import PostCard from "@components/PostCard"
import { PostDetailsType } from "types"

interface PageProps {
  data: {
    postsConnection: {
      edges: [
        {
          node: PostDetailsType
        }
      ]
    }
    author: {
      name: string
      foto: {
        url: string
      }
    }
  }
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const AuthorPage: NextPage<PageProps> = ({ data }) => {
  const { edges } = data?.postsConnection
  const { author } = data

  return (
    <div className="bg-gray-50">
      <Head>
        <title>Posts von {author.name}</title>
      </Head>
      <main className="py-16 mx-auto max-w-3xl">
        <h1 className="text-4xl font-black text-center text-gray-600 mb-16">
          Beiträge von {author.name}
        </h1>
        <CardGrid>
          {edges?.map(({ node }: { node: any }, index: number) => (
            <PostCard key={node.slug} post={node} index={index} />
          ))}
        </CardGrid>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const query = gql`
    query AuthorPosts($slug: String!) {
      postsConnection(
        where: { authors_some: { slug: $slug } }
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
      author(where: { slug: $slug }) {
        name
        foto {
          url
        }
      }
    }
  `

  const data = await client.request(query, { slug })

  return {
    props: {
      data,
      slug,
    },
    revalidate: 60 * 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Authors {
      authors {
        slug
      }
    }
  `

  const data = await client.request(query)

  return {
    paths: data.authors.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  }
}

export default AuthorPage
