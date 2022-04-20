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
import { useEffect } from "react"

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
      className="pb-16"
    >
      <Container className="embla__container">
        <Text component="h2" className="py-16 text-3xl font-black">
          Neueste Beiträge
        </Text>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-0">
            {posts.map((post) => {
              return (
                // flex-grow: 0 = take space dependent on own content, 1 = all elements take equal space
                <div
                  key={post.id}
                  className="relative flex-[1_0_80%] px-2 md:px-8"
                >
                  <Image src={post.featuredImage.url} alt={post.title} />
                  <Title
                    order={4}
                    className="text-xs md:text-base font-normal mt-4"
                  >
                    {post.title}
                  </Title>
                </div>
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
