import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import Link from "next/link"
import { format } from "date-fns"
import { de } from "date-fns/locale"

import ConnectedPosts from "@components/ConnectedPosts"
import CategoryBadge from "./CategoryBadge"
import { AdjacentPostType, PostDetailsType } from "types"

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

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className="py-16 px-4 container mx-auto max-w-3xl text-lg lg:text-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <p className="text-gray-500 text-xs mt-8 pb-1">von</p>
          <div className="mb-2 flex gap-2 flex-wrap justify-center mt-0">
            {post.authors.map((author) => (
              <Link href={`/presse/autoren/${author.slug}`} key={author.id}>
                <a>
                  <div className="flex items-center rounded-full bg-gray-100 pr-5 h-6">
                    <img
                      className="rounded-full float-left h-full"
                      src={author.foto.url}
                      alt={`Profilfoto von ${author.name}`}
                    />
                    <span className="ml-3 text-xs">{`${author.name}`}</span>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <p className="text-gray-500 text-xs ">{date}</p>
        </div>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="my-4 mx-auto"
        />
        <div className="p-4 flex justify-center items-center flex-wrap">
          {post.categories.map((category) => {
            return (
              <Link
                href={`/presse/kategorie/${category.slug}`}
                key={category.slug}
              >
                <a>
                  <CategoryBadge category={category} key={category.name} />
                </a>
              </Link>
            )
          })}
        </div>
        <article className="px-2 prose md:prose-lg mx-auto">
          <MDXRemote {...post.source} />
        </article>
        <ConnectedPosts
          prevPost={prevPost}
          nextPost={nextPost}
          className={
            prevPost === null || nextPost === null
              ? "grid grid-cols-1 gap-4 my-4 justify-center mt-24"
              : "grid grid-cols-2 gap-4 my-4 justify-center mt-24"
          }
        />
      </main>
    </>
  )
}

export default Post
