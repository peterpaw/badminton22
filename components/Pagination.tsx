import { gql, GraphQLClient } from "graphql-request"
import { useState } from "react"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const Pagination = ({ page }: { page: string }) => {
  const [totalPages, setTotalPages] = useState()

  const query = gql`
    query {
      postsConnection {
        aggregate {
          count
        }
      }
    }
  `

  const fetchData = async () => {
    const res = await client.request(query)
    if (res) {
      setTotalPages(res.postsConnection.aggregate.count)
    }
  }

  fetchData()

  return (
    <div className="flex flex-col items-center">
      <h1>Pagination</h1>
      <div className="flex mt-4">
        <button>prev</button>
        <span className="inline-block py-1 px-4 border-2 border-gray-300 mx-4">
          total pages: {totalPages}
        </span>
        <button>next</button>
      </div>
    </div>
  )
}

export default Pagination
