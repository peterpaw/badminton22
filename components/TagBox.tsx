import { Paper, Text, useMantineColorScheme } from "@mantine/core"
import Link from "next/link"

const TagBox = ({
  categories,
}: {
  categories: [
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
      className="relative md:sticky md:top-16"
    >
      <Text component="h3" mb="xs" align="left">
        Tags:
      </Text>

      {categories.map((tag) => (
        <Link key={tag.slug} passHref href={`/berichte/tags/${tag.slug}`}>
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
            {tag.name}
          </Text>
        </Link>
      ))}
    </Paper>
  )
}

export default TagBox
