import { Container, Text, useMantineColorScheme } from "@mantine/core"
import { PostType } from "types"
import { BlurImage } from "./Grid"

const LatestPosts = ({ posts }: { posts: PostType[] }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Container
      fluid
      sx={(theme) => ({
        backgroundColor: dark ? theme.colors.gray[9] : theme.colors.gray[0],
      })}
    >
      <Container>
        <Text component="h2" className="py-16 text-3xl font-black">
          Neueste Beiträge
        </Text>
        <div className="max-w-2xl mx-auto pb-16 sm:pb-24 lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-3">
            {posts.map((post) => {
              return <BlurImage post={post} key={post.slug} />
            })}
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default LatestPosts
