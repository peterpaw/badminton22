import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { gql, GraphQLClient } from "graphql-request"

import { PostDetailsType } from "types"
import { Paper, Text, useMantineColorScheme } from "@mantine/core"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@utils/cn"
import { useState } from "react"

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
          "hover:opacity-75 duration-700 ease-in-out",
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
  const { author } = data

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
        >
          {edges.length} Beiträge
        </Text>
        <BlurImage src={author.foto.url} authorName={author.name} />
        {edges.map(({ node }) => {
          const date = format(new Date(node.postPublishDate), "dd. MMMM yyyy", {
            locale: de,
          })

          return (
            <Link href={`/berichte/${node.slug}`} passHref key={node.id}>
              <Paper
                component="a"
                shadow="xs"
                p="md"
                my="sm"
                sx={(theme) => ({
                  backgroundColor: dark
                    ? theme.colors.dark[4]
                    : theme.colors.gray[0],
                  "&:hover": { color: theme.colors.red[5] },
                })}
                className="duration-500 ease-in-out"
              >
                <Text component="h2" className="text-left">
                  {node.title}
                </Text>
                <Text component="p" size="xs">
                  {date}
                </Text>
                <Text component="p" size="xs">
                  {node.excerpt}
                </Text>
              </Paper>
            </Link>
          )
        })}
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
