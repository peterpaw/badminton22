import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import { serialize } from "next-mdx-remote/serialize"

import Post from "@components/Post"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

export interface IPost {
  id: string
  title: string
  slug: string
  postPublishDate: Date
  excerpt: string
  featuredImage: {
    url: string
  }
  authors: [
    {
      id: string
      slug: string
      name: string
      foto: {
        url: string
      }
    }
  ]
  seoMetaTag: string
  categories: [
    {
      name: string
      slug: string
      color: string
    }
  ]
  content: {
    markdown: string
  }
  source: {
    compiledSource: string
  }
}

export default function Slug({ post }: { post: IPost }) {
  return <Post post={post} />
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const query = gql`
    query Posts($slug: String!) {
      post(where: { slug: $slug }) {
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
          slug
          name
          foto {
            url
          }
        }
        seoMetaTag
        categories {
          name
          slug
          color
        }
        content {
          markdown
        }
      }
    }
  `

  const data: { post: IPost | null } = await client.request(query, { slug })

  if (!data.post) {
    return {
      notFound: true,
    }
  }

  const source = await serialize(data.post.content.markdown)

  return {
    props: { post: { ...data.post, source } },
    revalidate: 60 * 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Posts {
      posts {
        slug
      }
    }
  `

  const data = await client.request(query)

  return {
    paths: data.posts.map((post: any) => ({ params: { slug: post.slug } })),
    fallback: "blocking",
  }
}
