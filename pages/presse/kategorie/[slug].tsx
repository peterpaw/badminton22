import { gql, GraphQLClient } from "graphql-request"
import { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const CategorySlug = ({
  posts,
  slug,
  categories
}: {
  posts: [{ title: string; slug: string }]
  slug: string
  categories: [{ name: string; slug: string }]
}) => {
  return (
    <div>
      <h1>Presseberichte sortiert nach Kategorie: {slug.toUpperCase()}</h1>
      <div>
        {posts.map((post: any) => (
          <div key={post.slug}>
            <Link href={`/presse/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        {categories.map((category) => (
          <div key={category.slug}>
            <Link href={`/presse/kategorie/${category.slug}`}>
              <a>{category.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const query = gql`
    query Posts($slug: String!) {
      posts(where: { categories_every: { slug: $slug } }) {
        title
        slug
      }
      categories {
        name
        slug
      }
    }
  `

  const data = await client.request(query, { slug })

  return {
    props: { posts: data.posts, slug, categories: data.categories }
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
      params: { slug: category.slug }
    })),
    fallback: "blocking"
  }
}

export default CategorySlug
