import { useState } from "react"
import Image from "next/image"
import { Anchor, Text, useMantineColorScheme } from "@mantine/core"
import { cn } from "@utils/cn"
import { LatestPostsType, PostType } from "types"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import Link from "next/link"
import { useHover } from "@mantine/hooks"

const Grid = ({ posts }: { posts: [{ node: PostType }] }) => {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {posts.map(({ node }) => {
          return <BlurImage post={node} key={node.slug} />
        })}
      </div>
    </div>
  )
}

export function BlurImage({ post }: { post: PostType }) {
  const [isLoading, setIsLoading] = useState(true)
  const authorsList = post.authors.map((author) => author.name).join(", ")

  const date = format(new Date(post.postPublishDate), "dd. MMMM yyyy", {
    locale: de,
  })

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const { hovered, ref } = useHover()

  return (
    <div ref={ref}>
      <Anchor component={Link} href="/berichte">
        <a className="group">
          <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg bg-gray-200">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className={cn(
                "group-hover:opacity-75 duration-700 ease-in-out",
                isLoading
                  ? "grayscale blur-2xl scale-110"
                  : "grayscale-0 blur-0 scale-100"
              )}
              onLoadingComplete={() => setIsLoading(false)}
            />
          </div>
          <Text
            component="h3"
            className="my-2 text-base text-left font-medium duration-500 ease-in-out"
            sx={(theme) =>
              hovered
                ? { color: theme.colors.red[5] }
                : { color: dark ? theme.colors.gray[5] : theme.colors.gray[8] }
            }
          >
            {post.title}
          </Text>

          <Text
            component="p"
            className="text-sm p-0 font-medium"
            sx={(theme) => ({
              color: dark ? theme.colors.dark[3] : theme.colors.dark[1],
            })}
          >
            {date}
          </Text>
          <Text
            component="p"
            className="text-sm p-0 font-medium"
            sx={(theme) => ({
              color: dark ? theme.colors.dark[3] : theme.colors.dark[1],
            })}
          >
            {authorsList}
          </Text>
        </a>
      </Anchor>
    </div>
  )
}

export default Grid
