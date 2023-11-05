import Head from "next/head"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Title } from "@mantine/core"
import SlimPost from "@components/SlimPost"
import AuthorBox from "@components/AuthorBox"
import TagBox from "@components/TagBox"
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
    authors: [
      {
        slug: string
        name: string
        posts: [{ id: string }]
      }
    ]
    categories: [
      {
        name: string
        slug: string
        post: [{ id: string }]
      }
    ]
  }
  slug: string
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const PostsByTags: NextPage<PageProps> = ({ data, slug }) => {
  const { edges } = data?.postsConnection
  const { categories, authors } = data

  return (
    <>
      <Head>
        <title>Kategorie: {slug.toUpperCase()} | Presse</title>
      </Head>
      <main className="py-16 mx-auto max-w-3xl">
        <Title
          order={1}
          className="text-3xl md:text-4xl font-black text-center"
        >
          Presseberichte
        </Title>
        <Title
          order={2}
          sx={(theme) => ({ color: theme.colors.red[5] })}
          className="mb-16 font-black text-xl"
        >
          {slug.toUpperCase()}
        </Title>

        <div className="md:grid md:grid-cols-12 gap-2">
          <div className="col-span-1 md:col-span-8">
            {edges.map(({ node }) => (
              <SlimPost post={node} key={node.id} />
            ))}
          </div>

          <div className="mt-16 md:mt-0 md:col-span-4">
            <div className="md:sticky md:top-16">
              <AuthorBox authors={authors} />
              <TagBox categories={categories} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const query = gql`
    query CategoryPosts($slug: String!) {
      postsConnection(
        where: { categories_some: { slug: $slug } }
        orderBy: postPublishDate_DESC
      ) {
        edges {
          node {
            id
            title
            slug
            postPublishDate
            excerpt
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
      authors(orderBy: name_ASC) {
        slug
        name
        posts {
          id
        }
      }
      categories {
        name
        slug
        post {
          id
        }
      }
    }
  `

  const data = await client.request(query, { slug })

  return {
    props: { data, slug },
    revalidate: 60 * 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Categories {
      categories {
        slug
      }
    }
  `

  const data = await client.request(query)

  return {
    // @ts-ignore
    paths: data.categories.map((category: any) => ({
      params: { slug: category.slug },
    })),
    fallback: "blocking",
  }
}

export default PostsByTags
