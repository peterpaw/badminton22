import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import { serialize } from "next-mdx-remote/serialize"

import Post from "@components/Post"
import { PostDetailsType, AdjacentPostType } from "types"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

export default function Slug({
  post,
  prevPost,
  nextPost,
}: {
  post: PostDetailsType
  prevPost: AdjacentPostType
  nextPost: AdjacentPostType
}) {
  return <Post post={post} prevPost={prevPost} nextPost={nextPost} />
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
      posts(orderBy: postPublishDate_DESC) {
        id
        slug
        title
        postPublishDate
        excerpt
        featuredImage {
          url
        }
        categories {
          name
          slug
          color
        }
        authors {
          id
          slug
          name
          foto {
            url
          }
        }
      }
    }
  `

  const data: { post: PostDetailsType | null; posts: AdjacentPostType[] } =
    await client.request(query, { slug })

  const currentPostIndex = data.posts.findIndex(
    (element) => element.id === data?.post?.id
  )

  const prevPost =
    currentPostIndex === 0 ? null : data.posts[currentPostIndex - 1]
  const nextPost =
    currentPostIndex === data.posts.length - 1
      ? null
      : data.posts[currentPostIndex + 1]

  if (!data.post) {
    return {
      notFound: true,
    }
  }

  const source = await serialize(data.post.content.markdown)

  return {
    props: { post: { ...data.post, source }, prevPost, nextPost },
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
