import { Paper, Text, useMantineColorScheme } from "@mantine/core"
import Link from "next/link"

const AuthorBox = ({
  authors,
}: {
  authors: [
    {
      slug: string
      name: string
    }
  ]
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

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

      {authors.map((author) => (
        <Link key={author.slug} passHref href={`/autoren/${author.slug}`}>
          <Text
            component="a"
            sx={(theme) => ({
              color: dark ? theme.colors.gray[6] : theme.colors.gray[8],
              "&:hover": {
                color: theme.colors.red[5],
              },
            })}
            className="duration-300 ease-in-out font-normal block text-sm"
          >
            {author.name}
          </Text>
        </Link>
      ))}
    </Paper>
  )
}

export default AuthorBox
