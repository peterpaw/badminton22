import { useState } from "react"
import Image from "next/image"
import { Text } from "@mantine/core"
import { cn } from "@utils/cn"
import { PostType } from "types"

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

function BlurImage({ post }: { post: PostType }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <a href="#" className="group">
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
      <Text component="h3" className="mt-4 text-sm text-left font-medium">
        {post.title}
      </Text>
      <Text component="p" className="mt-2 text-xs font-normal">
        {post.authors[0].name}
      </Text>
    </a>
  )
}

export default Grid