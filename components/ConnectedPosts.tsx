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
          className={`text-sm md:text-base mb-2 flex justify-${
            prev === true ? "start" : "end"
          } items-center`}
        >
          {prev ? (
            <>
              <ArrowLeftIcon className="w-6 h-6" />
              <span className="ml-2">voriger Bericht</span>
            </>
          ) : (
            <>
              <span className="mr-2">nächster Bericht</span>
              <ArrowRightIcon className="w-6 h-6" />
            </>
          )}
        </h4>
        <div className="p-2">
          <div className="hidden md:block relative h-48 aspect-video">
            <Image
              src={post.featuredImage.url}
              alt={post.title}
              layout="fill"
            />
          </div>
          <h3
            className={`text-sm md:text-base md:mt-4 text-${
              prev === true ? "left" : "right"
            } md:text-center`}
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
}: {
  prevPost: IPostIds
  nextPost: IPostIds
}) => {
  const oneColumn = prevPost === null || nextPost === null

  return (
    <div>
      <div
        className={`grid grid-cols-${
          oneColumn ? "1" : "2"
        } gap-4 my-4 justify-center`}
      >
        {prevPost && <PrevNextLink post={prevPost} prev={true} />}
        {nextPost && <PrevNextLink post={nextPost} prev={false} />}
      </div>
    </div>
  )
}

export default ConnectedPosts
