import { GetStaticProps } from "next"
import { GraphQLClient, gql } from "graphql-request"
import Link from "next/link"

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

const PressePage = ({ data }: { data: { posts: IPosts[] } }) => {
  const { posts } = data

  return (
    <main className="py-16">
      <h1 className="text-4xl font-black text-center text-gray-600">Presse</h1>
      {posts?.map((post: IPosts) => {
        return (
          <div className="p-4" key={post.slug}>
            <p>{post.title}</p>
            <p>{post.author.name}</p>
            <Link href={`/presse/${post.slug}`}>
              <a className="text-red-600 hover:underline">Weiterlesen</a>
            </Link>
          </div>
        )
      })}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query Posts {
      posts {
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
