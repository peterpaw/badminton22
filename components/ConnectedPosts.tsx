import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Link from "next/link"
import { IPostIds } from "pages/presse/[slug]"

const ConnectedPosts = ({
  prevPost,
  nextPost,
}: {
  prevPost: IPostIds
  nextPost: IPostIds
}) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 my-4">
        {prevPost ? (
          <div>
            <Link href={`/presse/${prevPost.slug}`}>
              <a>
                <h4 className="text-sm md:text-base mb-2 flex justify-center items-center">
                  <ArrowLeftIcon className="w-6 h-6" />
                  <span className="ml-2">voriger Bericht</span>
                </h4>
                <div className="p-2">
                  <div className="hidden md:block relative h-48 aspect-video">
                    <Image
                      src={prevPost.featuredImage.url}
                      alt={prevPost.title}
                      layout="fill"
                    />
                  </div>
                  <h3 className="text-sm md:text-base">{prevPost.title}</h3>
                </div>
              </a>
            </Link>
          </div>
        ) : (
          <div />
        )}
        {nextPost ? (
          <div>
            <Link href={`/presse/${nextPost.slug}`}>
              <a>
                <h4 className="text-sm md:text-base mb-2 flex justify-center items-center">
                  <span className="mr-2">nächster Bericht</span>
                  <ArrowRightIcon className="w-6 h-6" />
                </h4>
                <div className="p-2">
                  <div className="hidden md:block relative h-48 aspect-video">
                    <Image
                      src={nextPost.featuredImage.url}
                      alt={nextPost.title}
                      layout="fill"
                    />
                  </div>
                  <h3 className="text-sm md:text-base">{nextPost.title}</h3>
                </div>
              </a>
            </Link>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

export default ConnectedPosts
