import Image from "next/image"
import { LatestPostsType } from "pages"

const LatestPosts: React.FC<LatestPostsType> = ({ data }) => {
  return (
    <section className="py-8 bg-gradient-to-b from-red-600 to-white">
      <h1 className="text-white font-black text-4xl py-16">Aktuelles</h1>
      <div className="grid grid-cols-fluid-24 gap-4 px-4 pb-16 justify-center">
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
      </div>
    </section>
  )
}

export default LatestPosts
