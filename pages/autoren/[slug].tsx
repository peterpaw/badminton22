import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { gql, GraphQLClient } from "graphql-request"
import { Paper, Text, useMantineColorScheme } from "@mantine/core"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@utils/cn"
import { useState } from "react"
import { motion } from "framer-motion"

import { PostDetailsType } from "types"

interface PageProps {
  data: {
    postsConnection: {
      edges: [
        {
          node: PostDetailsType
        }
      ]
    }
    author: {
      name: string
      foto: {
        url: string
      }
    }
    authors: [
      {
        slug: string
        name: string
      }
    ]
    categories: [
      {
        name: string
        slug: string
      }
    ]
  }
}

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

function BlurImage({ src, authorName }: { src: string; authorName: string }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="aspect-w-1 w-16 h-16 overflow-hidden rounded-full mx-auto mb-16">
      <Image
        src={src}
        alt={authorName}
        layout="fill"
        objectFit="cover"
        className={cn(
          "duration-700 ease-in-out",
          isLoading
            ? "grayscale blur-2xl scale-110"
            : "grayscale-0 blur-0 scale-100"
        )}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

const AuthorPage: NextPage<PageProps> = ({ data }) => {
  const { edges } = data?.postsConnection
  const { author, authors, categories } = data

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <>
      <Head>
        <title>Beiträge von {author.name}</title>
      </Head>

      <main className="py-16 mx-auto max-w-3xl">
        <Text
          component="h1"
          className="text-xl md:text-2xl font-black text-center mb-0"
        >
          {author.name}
        </Text>
        <Text
          component="h3"
          sx={(theme) => ({
            color: dark ? theme.colors.gray[6] : theme.colors.gray[5],
          })}
          className="mb-4"
          size="xs"
        >
          {`${edges.length} ${edges.length === 1 ? "Beitrag" : "Beiträge"}`}
        </Text>
        <BlurImage src={author.foto.url} authorName={author.name} />

        <div className="md:grid md:grid-cols-12 gap-2">
          <div className="col-span-1 md:col-span-8">
            {edges.map(({ node }) => {
              const date = format(
                new Date(node.postPublishDate),
                "dd. MMMM yyyy",
                {
                  locale: de,
                }
              )

              return (
                <motion.div whileHover={{ translateX: 2 }} key={node.id}>
                  <Link href={`/berichte/${node.slug}`} passHref>
                    <Paper
                      component="a"
                      shadow="xs"
                      p="md"
                      m="sm"
                      sx={(theme) => ({
                        backgroundColor: dark
                          ? theme.colors.dark[6]
                          : theme.colors.gray[0],
                        "&:hover": { color: theme.colors.red[5] },
                      })}
                      className="duration-500 ease-in-out"
                    >
                      <Text component="h2" className="text-left">
                        {node.title}
                      </Text>
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
                        {node.excerpt}
                      </Text>
                    </Paper>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-16 md:mt-0 md:col-span-4">
            <div className="md:sticky md:top-16">
              <Paper
                shadow="xs"
                p="md"
                m="sm"
                sx={(theme) => ({
                  backgroundColor: dark
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                })}
              >
                <Text component="h3" mb="xs" align="left">
                  Autoren:
                </Text>

                {authors.map((author) => (
                  <Link
                    key={author.slug}
                    passHref
                    href={`/autoren/${author.slug}`}
                  >
                    <Text
                      component="a"
                      sx={(theme) => ({
                        color: dark
                          ? theme.colors.gray[6]
                          : theme.colors.gray[8],
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

              <Paper
                shadow="xs"
                p="md"
                m="sm"
                sx={(theme) => ({
                  backgroundColor: dark
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                })}
                className="relative md:sticky md:top-16"
              >
                <Text component="h3" mb="xs" align="left">
                  Tags:
                </Text>

                {categories.map((tag) => (
                  <Link
                    key={tag.slug}
                    passHref
                    href={`/berichte/tags/${tag.slug}`}
                  >
                    <Text
                      component="a"
                      sx={(theme) => ({
                        color: dark
                          ? theme.colors.gray[6]
                          : theme.colors.gray[8],
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
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const query = gql`
    query AuthorPosts($slug: String!) {
      postsConnection(
        where: { authors_some: { slug: $slug } }
        orderBy: postPublishDate_DESC
      ) {
        edges {
          node {
            id
            title
            slug
            postPublishDate
            excerpt
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          pageSize
        }
        aggregate {
          count
        }
      }
      author(where: { slug: $slug }) {
        name
        foto {
          url
        }
      }
      authors(where: { slug_not: $slug }, orderBy: name_ASC) {
        slug
        name
      }
      categories {
        name
        slug
      }
    }
  `

  const data = await client.request(query, { slug })

  return {
    props: {
      data,
      slug,
    },
    revalidate: 60 * 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const query = gql`
    query Authors {
      authors {
        slug
      }
    }
  `

  const data = await client.request(query)

  return {
    paths: data.authors.map(({ slug }: { slug: string }) => ({
      params: { slug },
    })),
    fallback: "blocking",
  }
}

export default AuthorPage
