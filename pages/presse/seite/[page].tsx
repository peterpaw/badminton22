import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { gql, GraphQLClient } from "graphql-request"

import Pagination from "@components/Pagination"
import { config } from "@utils/config"

const Page = () => {
  const router = useRouter()

  const { page } = router?.query

  return (
    <div>
      <h1>Seite {page}</h1>
      <Pagination page={page || "1"} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const client = new GraphQLClient(query)

  const data = await client.request(query)

  console.log(data)

  const totalPages = config.pagination.pageSize

  return {
    paths: [{ params: { page: "1" } }, { params: { page: "2" } }],
    fallback: false
  }
}

export default Page
