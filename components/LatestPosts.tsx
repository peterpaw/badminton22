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
      if (position < data.posts.length) {
        setPosition(position + 1)
      }
    },
  })

  return (
    <section className="py-8 bg-gradient-to-b from-red-600 to-white">
      <h1 className="text-white font-black text-4xl py-16">Aktuelles</h1>
      {/* <div className="grid grid-cols-fluid-24 gap-4 px-4 pb-16 justify-center">
        {data?.posts?.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-white shadow-2xl overflow-hidden max-w-sm mx-auto"
            >
              <div className="relative aspect-video h-56 w-full">
                <Image
                  src={post.featuredImage.url}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-lg">{post.title}</h3>
                <p className="text-sm">{post.excerpt}</p>
              </div>
            </div>
          )
        })}
      </div> */}

      {/* Slider */}

      <div
        {...handlers}
        className="container-narrow overflow-hidden flex justify-center items-center py-8 w-full h-[600px] relative"
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
                  scale: index === position ? 1 : 0.8,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="overflow-hidden absolute h-[600px] w-1/3 top-[-300px]"
              >
                <Link href={`/presse/${post.slug}`}>
                  <a>
                    <div
                      key={post.id}
                      className="bg-white shadow-2xl overflow-hidden max-w-sm mx-auto relative"
                    >
                      <div className="relative aspect-video h-48 w-full">
                        <Image
                          src={post.featuredImage.url}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="mb-4 text-lg leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-sm">{post.excerpt}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default LatestPosts
