import { GetStaticProps } from "next"
import { GraphQLClient, gql } from "graphql-request"
import Link from "next/link"

import Pagination from "@components/Pagination"
import { useRouter } from "next/router"

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

  const router = useRouter()

  console.log(router.pathname)

  return (
    <main className="py-16 mx-auto max-w-3xl">
      <h1 className="text-4xl font-black text-center text-gray-600 mb-16">
        Presse
      </h1>
      <div className="py-8">
        <Pagination page={1} />
      </div>
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
      <div className="py-8">
        <Pagination page={1} />
      </div>
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
