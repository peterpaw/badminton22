import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"

import { IPost } from "pages/presse/[slug]"
import { de } from "date-fns/locale"

const PostCard = ({ post }: { post: IPost }) => {
  const date = format(new Date(post.postPublishDate), "dd. MMMM yyyy", {
    locale: de
  })

  return (
    <div className="mx-auto mb-8 md:grid md:grid-cols-3">
      <div className="relative aspect-[16/9] md:h-auto md:aspect-auto">
        <Image
          src={post.featuredImage.url}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="rounded-tr-md rounded-tl-md md:rounded-bl-md md:rounded-tr-none"
        />
      </div>
      <div className="bg-white p-8 rounded-bl-md rounded-br-md md:rounded-bl-none md:rounded-tr-md md:col-span-2">
        <Link href={`/presse/${post.slug}`}>
          <a>
            <h2 className="text-gray-700 font-semibold text-lg leading-tight">
              {post.title}
            </h2>
          </a>
        </Link>
        <p className="text-sm text-gray-600 mt-4">{post.excerpt}</p>
        <div className="flex items-center mt-8">
          <div className="flex items-center w-full">
            <div className="relative h-10 w-10">
              <Image
                src={post.author.foto.url}
                alt={`Avatar von Autor ${post.author.name}`}
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div className="ml-4">
              <p className="text-gray-600 text-xs md:text-sm font-semibold">
                {post.author.name}
              </p>
              <p className="text-gray-500 text-xs md:text-sm">{date}</p>
            </div>
            <Link href={`/presse/${post.slug}`}>
              <a className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
