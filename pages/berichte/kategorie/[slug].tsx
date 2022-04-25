import Link from "next/link"
import Head from "next/head"
import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import CardGrid from "@components/CardGrid"
import PostCard from "@components/PostCard"
import { useMantineColorScheme } from "@mantine/styles"
import { Title } from "@mantine/core"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const CategorySlug = ({
  data,
  slug,
  categories,
}: {
  data: any
  slug: string
  categories: [{ name: string; slug: string }]
}) => {
  const { edges } = data?.postsConnection

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <>
      <Head>
        <title>Kategorie: {slug.toUpperCase()} | Presse</title>
      </Head>
      <main className="py-16 mx-auto max-w-3xl">
        <Title order={1} className="text-4xl font-black text-center">
          Presseberichte
        </Title>
        <Title order={2} className="mb-16">
          {slug.toUpperCase()}
        </Title>
        {/* <CardGrid>
          {edges?.map(({ node }: { node: any }, index: number) => (
            <PostCard key={node.slug} post={node} index={index} />
          ))}
        </CardGrid> */}

        <p className="text-gray-500 text-xs md:text-sm text-center">
          Alle Kategorien:
        </p>
        <div className="p-4 flex justify-center items-center flex-wrap">
          {categories.map((category) => (
            <Link
              href={`/presse/kategorie/${category.slug}`}
              key={category.slug}
            >
              <a>
                <span className="inline-flex items-center justify-center px-4 py-2 mr-2 text-sm font-medium leading-none bg-gray-100 rounded-full">
                  {category.name}
                </span>
              </a>
            </Link>
          ))}
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
      categories {
        name
        slug
      }
    }
  `

  const data = await client.request(query, { slug })

  return {
    props: { data, slug, categories: data.categories },
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
    paths: data.categories.map((category: any) => ({
      params: { slug: category.slug },
    })),
    fallback: "blocking",
  }
}

export default CategorySlug
