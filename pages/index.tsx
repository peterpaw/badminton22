import { useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { GetStaticProps, NextPage } from "next"
import { gql, GraphQLClient } from "graphql-request"
import { Center, Container, Text, useMantineColorScheme } from "@mantine/core"

import LatestPosts from "@components/LatestPosts"

import { PostType } from "types"

import landing from "../public/landing02.jpg"
import niklasSandra from "../public/niklas-sandra.jpg"
import TeamSection from "@components/TeamSection"
import SocialMedia from "@components/SocialMedia"
import BlurImg from "@components/BlurImg"

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL as string)

const Box = ({
  heading,
  text,
  href,
}: {
  heading: string
  text: string
  href: string
}) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <motion.div
      variants={item}
      whileHover={{ translateY: -4 }}
      className="shadow-2xl z-10"
    >
      <Center
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.gray[9] : theme.colors.gray[0],
        })}
        className="h-full flex items-start justify-start relative"
      >
        <Link href={href}>
          <a className="block p-8 pb-16">
            <Text
              component="h2"
              className="text-left mb-4 text-lg md:text-xl font-bold "
              sx={(theme) => ({ color: theme.colors.red[5] })}
            >
              {heading}
            </Text>
            <Text component="p" className="md:mb-4 text-sm md:text-base">
              {text}
            </Text>
            <div className="flex gap-2 text-sm absolute bottom-8 left-8">
              Mehr erfahren
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </a>
        </Link>
      </Center>
    </motion.div>
  )
}

interface PageProps {
  posts: PostType[]
  teams: [{ mannschaft: string; slug: string; liga: string }]
}

const HomePage: NextPage<PageProps> = ({ posts, teams }) => {
  const [ref1, inView1] = useInView({ threshold: 0.4 })
  const [ref2, inView2] = useInView({ threshold: 0.4 })
  const animation = useAnimation()
  const animation2 = useAnimation()

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  useEffect(() => {
    if (inView1) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        },
      })
    } else if (!inView1) {
      animation.start({
        opacity: 0,
        x: -100,
        transition: {
          duration: 0.5,
        },
      })
    }
  }, [inView1, animation])

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        },
      })
    } else if (!inView2) {
      animation2.start({
        opacity: 0,
        x: 100,
        transition: {
          duration: 0.5,
        },
      })
    }
  }, [inView2, animation2])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  }

  return (
    <>
      <Head>
        <title>Badminton | Rot-Weiss Walldorf</title>
      </Head>
      <main className="">
        <section className="relative bg-gradient-to-r from-red-600 to-purple-900 w-full md:min-h-[500px] h-[60vh] max-h-[60vh]">
          <Image
            priority
            layout="fill"
            src={landing}
            alt="Badminton Spieler beim Smash"
            className="absolute w-full h-full mix-blend-overlay object-cover object-right"
          />
          <div className="container-narrow">
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: 100 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
              className="md:text-left text-5xl md:text-7xl lg:text-9xl font-black pt-[20vh] pb-0 lg:pb-2 text-white"
            >
              Badminton
            </motion.h1>
            <motion.h1
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0, y: 100 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                  },
                },
              }}
              className="md:text-left text-xl md:text-3xl lg:text-5xl font-normal  text-white"
            >
              Rot-Weiss Walldorf e.V.
            </motion.h1>
          </div>
        </section>
        <Container className="mt-[-6rem]">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <Box
              heading="Mannschaften"
              text="Spieler, Fotos, Tabellen und weitere Infos"
              href="/mannschaften"
            />
            <Box
              heading="Jugend"
              text="Alle Infos zur Jugend, Minimannschaft, Trainigszeiten und Coaches"
              href="/jugend"
            />
            <Box
              heading="Training"
              text="Trainingstage, Uhrzeiten und Trainingsorte"
              href="/training"
            />
          </motion.div>
        </Container>
        <section className="py-32 overflow-x-hidden">
          <Container className="grid md:grid-cols-2 gap-8 lg:gap-16 justify-center">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -100 }}
              animate={animation}
            >
              <div className="aspect-w-16 aspect-h-12 w-full overflow-hidden">
                <BlurImg
                  src={niklasSandra}
                  alt="Niklas und Sandra posen"
                  priority="true"
                />
              </div>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 100 }}
              animate={animation2}
            >
              <Text
                component="h2"
                className="text-left font-black mb-8 mt-4 md:mt-0 text-2xl md:text-3xl"
              >
                Willkommen bei den <span className="text-[#dc271e]">Roten</span>
                !
              </Text>
              <Text component="p">
                Bei uns kannst du zwei mal pro Woche auf 9 Feldern trainieren.
              </Text>
              <Text component="p">
                Für die Kids und Jugendlichen geht das Training bereits ab{" "}
                <strong>17:30</strong> Uhr los.
              </Text>
              <Text component="p">
                Ab <strong>19:30</strong> Uhr starten die Erwachsenen mit ihrem
                Training.
              </Text>
              <Text component="p">
                Von lockeren Matches bis hin zu ambitionierten Forderungsspielen
                im Rahmen der Vereinsrangliste ist alles dabei. Falls du
                interesse hast reinzuschnuppern schau einfach vorbei.{" "}
                <Link href="/training" passHref>
                  <Text
                    component="a"
                    sx={(theme) => ({
                      color: theme.colors.red[5],
                      "&:hover": { color: theme.colors.red[3] },
                    })}
                  >
                    Hier
                  </Text>
                </Link>{" "}
                bekommst du alle nötigen Informationen zum Training.
              </Text>
            </motion.div>
          </Container>
        </section>
        <LatestPosts posts={posts} />
        <TeamSection teams={teams} />
        <SocialMedia />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const query = gql`
    query LandingPageQuery {
      posts(first: 3, orderBy: postPublishDate_DESC) {
        title
        id
        slug
        authors {
          name
        }
        excerpt
        postPublishDate
        featuredImage {
          url
        }
        categories {
          name
        }
      }
      teams(orderBy: mannschaft_ASC) {
        mannschaft
        slug
        liga
      }
    }
  `

  const data = await client.request(query)

  return {
    props: {
      posts: data.posts,
      teams: data.teams,
    },
    revalidate: 60 * 30,
  }
}

export default HomePage
