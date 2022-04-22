import { useEffect, useState } from "react"
import { Pagination } from "@mantine/core"
import { useRouter } from "next/router"

const PostPagination = ({
  total,
  currentPage,
}: {
  total: number
  currentPage: number
}) => {
  const [activePage, setPage] = useState(currentPage)

  const router = useRouter()

  useEffect(() => {
    if (activePage === 1) {
      router.push(`/berichte`)
    } else {
      router.push(`/berichte/seite/${activePage}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage])

  return (
    <Pagination
      page={activePage}
      onChange={setPage}
      total={total}
      color="red"
    />
  )
}

export default PostPagination
