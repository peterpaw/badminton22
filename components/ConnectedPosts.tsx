import Link from "next/link"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import CategoryBadge from "./CategoryBadge"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { AdjacentPostType } from "types"

const PrevNextLink = ({
  post,
  prev,
}: {
  post: {
    slug: string
    featuredImage: { url: string }
    title: string
    categories: [
      {
        name: string
        slug: string
        color: string
      }
    ]
    postPublishDate: Date
  }
  prev: boolean
}) => {
  const date = format(new Date(post.postPublishDate), "dd. MMMM yyyy", {
    locale: de,
  })
  return (
    <Link href={`/presse/${post.slug}`}>
      <a>
        <h4
          className={`text-sm md:text-base mb-2 flex justify-center items-center`}
        >
          {prev ? (
            <ArrowLeftIcon className="w-6 h-6" />
          ) : (
            <ArrowRightIcon className="w-6 h-6" />
          )}
        </h4>
        <div className="p-2">
          <div className="hidden md:block relative h-48 aspect-video mx-auto">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout="fill"
            />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 my-2">
            <span className="text-xs">{date}</span>
            <div className="flex">
              {post.categories.map((tag) => {
                return <CategoryBadge category={tag} key={tag.name} />
              })}
            </div>
          </div>
          <h3
            className={`text-sm md:text-base md:mt-2 text-center md:text-center`}
          >
            {post.title}
          </h3>
        </div>
      </a>
    </Link>
  )
}

const ConnectedPosts = ({
  prevPost,
  nextPost,
  className,
}: {
  prevPost: AdjacentPostType
  nextPost: AdjacentPostType
  className: string
}) => {
  return (
    <div className={className}>
      {prevPost && <PrevNextLink post={prevPost} prev={true} />}
      {nextPost && <PrevNextLink post={nextPost} prev={false} />}
    </div>
  )
}

export default ConnectedPosts
