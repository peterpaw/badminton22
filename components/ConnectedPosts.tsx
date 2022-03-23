import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Link from "next/link"
import { IPostIds } from "pages/presse/[slug]"

const PrevNextLink = ({
  post,
  prev,
}: {
  post: { slug: string; featuredImage: { url: string }; title: string }
  prev: boolean
}) => {
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
          <h3
            className={`text-sm md:text-base md:mt-4 text-center md:text-center`}
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
  prevPost: IPostIds
  nextPost: IPostIds
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
