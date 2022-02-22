import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { LatestPostsType } from "pages"
import { useSwipeable } from "react-swipeable"
import Link from "next/link"

const LatestPosts: React.FC<LatestPostsType> = ({ data }) => {
  const [position, setPosition] = useState(0)

  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (position > 0) {
        setPosition(position - 1)
      }
    },
    onSwipedLeft: () => {
      if (position < data.posts.length - 1) {
        setPosition(position + 1)
      }
    },
  })

  const clickLeft = () => {
    if (position > 0) {
      setPosition(position - 1)
    }
  }

  const clickRight = () => {
    if (position < data.posts.length - 1) {
      setPosition(position + 1)
    }
  }

  return (
    <section className="py-8 bg-gradient-to-b from-red-600 to-white">
      <h1 className="text-white font-black text-4xl py-16">Aktuelles</h1>

      <div
        {...handlers}
        className="container-narrow overflow-hidden flex justify-center items-center py-8 w-full h-[300px] relative"
      >
        <div className="relative w-full">
          {data?.posts?.map((post, index) => {
            return (
              <motion.div
                key={index}
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  rotate: 0,
                  left: `${(index - position) * 33 + 33}%`,
                  scale: index === position ? 1 : 0.7,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="overflow-hidden absolute h-[300px] w-1/3 top-[-150px]"
              >
                <Link href={`/presse/${post.slug}`}>
                  <a>
                    <div
                      key={post.id}
                      className="overflow-hidden max-w-sm mx-auto relative"
                    >
                      <div className="relative aspect-video h-56 w-full">
                        <Image
                          src={post.featuredImage.url}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="absolute bottom-2 left-2 right-2">
                        <h3
                          className="text-base font-mediumif (position > 0) {
      setPosition(position - 1)
    } leading-tight bg-red-600 text-white p-2 text-center"
                        >
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button onClick={clickLeft}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
        </button>
        <button onClick={clickRight}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
      <div className="mt-4 text-center">
        <Link href="/presse" passHref>
          <button className="py-2 capitalize">Alle Presseberichte</button>
        </Link>
      </div>
    </section>
  )
}

export default LatestPosts
