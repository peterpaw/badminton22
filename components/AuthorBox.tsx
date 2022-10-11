import { Paper, Text, useMantineColorScheme } from "@mantine/core"
import Link from "next/link"

const AuthorBox = ({
  authors,
}: {
  authors: [
    {
      slug: string
      name: string
      posts: [{ id: string }]
    }
  ]
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const sortedByPosts = authors.sort((a, b) => b.posts.length - a.posts.length)

  return (
    <Paper
      shadow="xs"
      p="md"
      m="sm"
      sx={(theme) => ({
        backgroundColor: dark ? theme.colors.dark[6] : theme.colors.gray[0],
      })}
    >
      <Text component="h3" mb="xs" align="left">
        Autoren:
      </Text>

      {sortedByPosts.map((author) => {
        return (
          <Link key={author.slug} passHref href={`/autoren/${author.slug}`}>
            <Text
              component="a"
              sx={(theme) => ({
                color: dark ? theme.colors.gray[6] : theme.colors.gray[8],
                "&:hover": {
                  color: theme.colors.red[5],
                },
              })}
              className="duration-300 ease-in-out font-normal block text-md"
            >
              {`${author.name} (${author.posts.length})`}
            </Text>
          </Link>
        )
      })}
    </Paper>
  )
}

export default AuthorBox
