import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"
import { de } from "date-fns/locale"

import ConnectedPosts from "@components/ConnectedPosts"
import CategoryBadge from "./CategoryBadge"
import { AdjacentPostType, PostDetailsType } from "types"
import { Text, useMantineColorScheme } from "@mantine/core"

const Post = ({
  post,
  prevPost,
  nextPost,
}: {
  post: PostDetailsType
  prevPost: AdjacentPostType
  nextPost: AdjacentPostType
}) => {
  const date = format(new Date(post.postPublishDate), "dd. MMMM yyyy", {
    locale: de,
  })

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const components = {
    h1: (props: any) => (
      <h1
        {...props}
        className={dark ? "text-[#b4b4b4]" : "text-gray-800"}
        style={{ marginBottom: "1rem" }}
      />
    ),
    h2: (props: any) => (
      <h2
        {...props}
        className={dark ? "text-[#b4b4b4]" : "text-gray-800"}
        style={{ marginBottom: "1rem" }}
      />
    ),
    h3: (props: any) => (
      <h3
        {...props}
        className={dark ? "text-[#b4b4b4]" : "text-gray-800"}
        style={{ marginBottom: "1rem" }}
      />
    ),
    h4: (props: any) => (
      <h4
        {...props}
        className={dark ? "text-[#b4b4b4]" : "text-gray-800"}
        style={{ marginBottom: "1rem" }}
      />
    ),
    h5: (props: any) => (
      <h5
        {...props}
        className={dark ? "text-[#b4b4b4]" : "text-gray-800"}
        style={{ marginBottom: "1rem" }}
      />
    ),
    p: (props: any) => (
      <p
        {...props}
        className={dark ? "text-[#b4b4b4] text-lg" : "text-gray-800 text-lg"}
        style={{ marginBottom: "1rem" }}
      />
    ),
    strong: (props: any) => (
      <strong
        {...props}
        className={dark ? "text-[#b4b4b4]" : "text-gray-800"}
      />
    ),
    a: (props: any) => (
      <a
        {...props}
        className="text-[#dc271e] no-underline hover:text-red-500 duration-300"
      />
    ),
  }

  const authorsCount = post.authors.length

  return (
    <>
      <Head>
        <title>{`${post.title} - Rot-Weiß Walldorf Badminton`}</title>
        <meta name="description" content={post.seoMetaTag}></meta>
      </Head>
      <main className="py-16 px-4 container mx-auto max-w-3xl text-lg lg:text-xl">
        <div className="text-center">
          <Text component="h1" className="text-xl md:text-3xl font-black mb-4">
            {post.title}
          </Text>
          <div className="leading-none">
            {post.authors.map((author, index) => (
              <span key={author.id}>
                <Link href={`/autoren/${author.slug}`} passHref>
                  <Text
                    component="a"
                    sx={(theme) => ({
                      "&:hover": {
                        color: theme.colors.red[5],
                      },
                    })}
                    className="text-xs leading-none duration-300 ease-in-out"
                  >
                    {author.name}
                  </Text>
                </Link>
                {index + 1 === authorsCount ? (
                  ""
                ) : index === authorsCount - 2 ? (
                  <Text component="span" className="text-xs leading-none">
                    {" "}
                    und{" "}
                  </Text>
                ) : (
                  <Text component="span" className="text-xs leading-none">
                    ,{" "}
                  </Text>
                )}
              </span>
            ))}
          </div>
          <Text component="p" className="text-xs mt-2 leading-none">
            {date}
          </Text>
        </div>
        <div className="p-2 mb-4 flex justify-center items-center flex-wrap">
          {post.categories.map((category) => {
            return (
              <Link
                href={`/berichte/kategorie/${category.slug}`}
                key={category.slug}
              >
                <a>
                  <CategoryBadge category={category} key={category.name} />
                </a>
              </Link>
            )
          })}
        </div>
        <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden">
          <Image
            src={post.featuredImage.url}
            alt={post.title}
            layout="fill"
            className="my-4 mx-auto"
          />
        </div>
        <article className="mx-auto mt-8 text-white">
          {/* @ts-ignore */}
          <MDXRemote {...post.source} components={components} />
        </article>
        <ConnectedPosts
          prevPost={prevPost}
          nextPost={nextPost}
          className={
            prevPost === null || nextPost === null
              ? "grid grid-cols-1 my-4 justify-center mt-24 max-w-[50%] mx-auto"
              : "grid grid-cols-2 gap-2 md:gap-4 my-4 justify-center mt-24"
          }
        />
      </main>
    </>
  )
}

export default Post
