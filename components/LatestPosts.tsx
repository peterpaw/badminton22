import {
  Container,
  Image,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core"
import { PostType } from "types"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Link from "next/link"
import { format } from "date-fns"
import { de } from "date-fns/locale"
// import { useEffect } from "react"

const LatestPosts = ({ posts }: { posts: PostType[] }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const [emblaRef, embla] = useEmblaCarousel(
    { loop: true, inViewThreshold: 0.5 },
    [Autoplay({ stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  // embla?.on("settle", () => {
  //   console.log(embla.slidesInView())
  // })

  // console.log(embla)

  // embla?.off("scroll", () => {
  //   console.log("off")
  // })

  // useEffect(() => {
  //   embla?.on("scroll", () => {
  //     console.log(embla.slidesInView())
  //   })
  // }, [])

  return (
    <Container
      fluid
      sx={(theme) => ({
        backgroundColor: dark ? theme.colors.gray[9] : theme.colors.gray[0],
      })}
      className="pb-16 md:pb-32"
    >
      <Container className="embla__container">
        <Text component="h2" className="py-16 text-2xl md:text-3xl font-black">
          Neueste Beiträge
        </Text>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-0">
            {posts.map((post) => {
              const date = format(
                new Date(post.postPublishDate),
                "dd. MMMM yyyy",
                {
                  locale: de,
                }
              )

              return (
                // flex-grow: 0 = take space dependent on own content, 1 = all elements take equal space
                <Link href={`/berichte/${post.slug}`} key={post.id}>
                  <a
                    key={post.id}
                    className="block relative flex-[1_0_80%] px-2 md:px-8"
                  >
                    <Image src={post.featuredImage.url} alt={post.title} />
                    <Title
                      order={3}
                      className="text-xs md:text-xl font-bold mt-4"
                    >
                      {post.title}
                    </Title>
                    <Text
                      component="p"
                      sx={(theme) => ({ color: theme.colors.gray[6] })}
                      className="text-center text-sm"
                    >
                      {date}
                    </Text>
                  </a>
                </Link>
              )
              // return <BlurImage post={post} key={post.slug} />
            })}
          </div>
        </div>
      </Container>
    </Container>
  )
}

export default LatestPosts
