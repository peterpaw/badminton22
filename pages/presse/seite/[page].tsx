import Pagination from "@components/Pagination"
import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"

const Page = () => {
  const router = useRouter()

  const { page } = router?.query

  return (
    <div>
      <h1>Seite {page}</h1>
      <Pagination page={page || page[0] || "1"} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {}
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { page: "1" } }, { params: { page: "2" } }],
    fallback: "blocking"
  }
}

export default Page
