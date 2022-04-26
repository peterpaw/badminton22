import { Paper, Text, Title, useMantineColorScheme } from "@mantine/core"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { motion } from "framer-motion"
import Link from "next/link"
import { PostDetailsType } from "types"

const SlimPost = ({ post }: { post: PostDetailsType }) => {
  const date = format(new Date(post.postPublishDate), "dd. MMMM yyyy", {
    locale: de,
  })

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <motion.div whileHover={{ translateX: 2 }} key={post.id}>
      <Link href={`/berichte/${post.slug}`} passHref>
        <Paper
          component="a"
          shadow="xs"
          p="md"
          m="sm"
          sx={(theme) => ({
            backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
            "&:hover": { color: theme.colors.red[5] },
          })}
          className="duration-500 ease-in-out"
        >
          <Title
            order={2}
            className="text-left text-base md:text-lg leading-tight"
          >
            {post.title}
          </Title>
          <Text
            component="p"
            size="xs"
            sx={(theme) => ({
              color: theme.colors.gray[6],
            })}
          >
            {date}
          </Text>
          <Text
            component="p"
            size="xs"
            sx={(theme) => ({
              color: theme.colors.gray[6],
            })}
          >
            {post.excerpt}
          </Text>
        </Paper>
      </Link>
    </motion.div>
  )
}

export default SlimPost
