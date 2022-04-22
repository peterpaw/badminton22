import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { AdjacentPostType } from "types"
import { Container, Text, useMantineColorScheme } from "@mantine/core"

const PrevNextLink = ({
  post,
  prev,
}: {
  post: {
    slug: string
    featuredImage: { url: string }
    title: string
    categories: [
      {
        name: string
        slug: string
        color: string
      }
    ]
    postPublishDate: Date
  }
  prev: boolean
}) => {
  const date = format(new Date(post.postPublishDate), "dd. MMMM yyyy", {
    locale: de,
  })

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Link href={`/berichte/${post.slug}`}>
      <Text component="a" className="mx-auto block w-full">
        <span
          className={`text-sm md:text-base my-2 flex justify-center items-center`}
        >
          {prev ? (
            <ArrowLeftIcon
              className="w-6 h-6"
              style={{ color: dark ? "#d2d2d2" : "#3d3d3d" }}
            />
          ) : (
            <ArrowRightIcon
              className="w-6 h-6"
              style={{ color: dark ? "#d2d2d2" : "#3d3d3d" }}
            />
          )}
        </span>
        <Container className="p-2">
          <div className="hidden md:block aspect-w-16 aspect-h-9 w-full overflow-hidden">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout="fill"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 my-2">
            <span className="text-xs">{date}</span>
          </div>
          <Text
            component="h3"
            className={`text-sm md:text-base md:mt-2 text-center md:text-center`}
          >
            {post.title}
          </Text>
        </Container>
      </Text>
    </Link>
  )
}

const ConnectedPosts = ({
  prevPost,
  nextPost,
  className,
}: {
  prevPost: AdjacentPostType
  nextPost: AdjacentPostType
  className: string
}) => {
  return (
    <div className={className}>
      {prevPost && <PrevNextLink post={prevPost} prev={true} />}
      {nextPost && <PrevNextLink post={nextPost} prev={false} />}
    </div>
  )
}

export default ConnectedPosts
