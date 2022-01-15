import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import Link from "next/link"
import { IPost } from "pages/presse/[slug]"

const Post = ({ post }: { post: IPost }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className="py-16 container mx-auto max-w-3xl text-lg lg:text-xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{post.title}</h1>
          <h2 className="py-2">{`von ${post.author.name}`}</h2>
          <h2 className="pb-4">{post.postPublishDate}</h2>
        </div>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="my-4 mx-auto"
        />
        <div className="p-4 flex justify-center items-center flex-wrap">
          {post.categories.map((category) => (
            <Link
              href={`/presse/kategorie/${category.slug}`}
              key={category.slug}
            >
              <a>
                <span
                  className={`m-2 px-3 py-1 bg-${category.color}-200 hover:bg-${category.color}-300 rounded-full text-sm font-semibold text-${category.color}-600`}
                >
                  {category.name}
                </span>
              </a>
            </Link>
          ))}
        </div>
        <article className="px-2 prose md:prose-lg mx-auto">
          <MDXRemote {...post.source} />
        </article>
      </main>
    </>
  )
}

export default Post
