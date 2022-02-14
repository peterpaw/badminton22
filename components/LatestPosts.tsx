import Image from "next/image"

const LatestPosts = ({ data }) => {
  console.log(data)

  return (
    <section className="py-8 bg-gradient-to-b from-red-600 to-white">
      <h1 className="text-white font-black text-4xl py-16">Aktuelles</h1>
      <div className="grid grid-cols-3 gap-4 px-4 pb-16">
        {data?.posts?.map((post) => {
          return (
            <div
              key={post.id}
              className="h-64 bg-white shadow-xl overflow-hidden"
            >
              <div className="relative aspect-video h-56">
                <Image
                  src={post.featuredImage.url}
                  alt={post.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3>{post.title}</h3>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default LatestPosts
