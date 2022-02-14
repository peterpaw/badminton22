import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { motion } from "framer-motion"

import { IPost } from "pages/presse/[slug]"

const PostCard = ({ post, index }: { post: IPost; index: number }) => {
  const date = format(new Date(post.postPublishDate), "dd. MMMM yyyy", {
    locale: de,
  })

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
      }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.4,
        },
      }}
      className="mx-auto mb-8 md:grid md:grid-cols-3 shadow-md"
    >
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
            <div className="flex flex-col">
              <div className="ml-4">
                {post.authors.map((author) => (
                  <p
                    key={author.id}
                    className="text-gray-600 text-xs md:text-sm font-semibold"
                  >
                    {author.name}
                  </p>
                ))}
                <p className="text-gray-500 text-xs md:text-sm">{date}</p>
              </div>
            </div>

            <Link href={`/presse/${post.slug}`}>
              <a className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                  className="w-6 h-6"
                >
                  <path
                    d="M4.096 0C2.319 3.219 2.02 8.13 9 7.966V4l6 6l-6 6v-3.881C.641 12.337-.29 4.741 4.096 0z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PostCard
