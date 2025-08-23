import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { GetStaticProps, NextPage } from "next";
import { gql, GraphQLClient } from "graphql-request";
import { Container, Text, Title, useMantineColorScheme } from "@mantine/core";

import LatestPosts from "@components/LatestPosts";

import { PostType } from "types";

import landing from "../public/landing02.jpg";
import niklasSandra from "../public/niklas-sandra.jpg";
import TeamSection from "@components/TeamSection";
import SocialMedia from "@components/SocialMedia";
import BlurImg from "@components/BlurImg";
import Card from "@components/Card";

import passiv from "assets/images/rww_mitgliedschaft_passiv.jpg";
import CardTraining from "@components/CardTraining";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_URL as string
);

interface PageProps {
  posts: PostType[];
  teams: [{ mannschaft: string; slug: string; liga: string }];
}

const HomePage: NextPage<PageProps> = ({ posts, teams }) => {
  const [ref1, inView1] = useInView({ threshold: 0.4 });
  const [ref2, inView2] = useInView({ threshold: 0.4 });
  const animation = useAnimation();
  const animation2 = useAnimation();

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  useEffect(() => {
    if (inView1) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        },
      });
    } else if (!inView1) {
      animation.start({
        opacity: 0,
        x: -100,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView1, animation]);

  useEffect(() => {
    if (inView2) {
      animation2.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
        },
      });
    } else if (!inView2) {
      animation2.start({
        opacity: 0,
        x: 100,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView2, animation2]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Badminton | Rot-Weiss Walldorf</title>
        <meta
          name="description"
          content="Webseite der Badmintonabteilung von Rot-Weiß Walldorf. Trainingszeiten, Presseberichte, Mannschaften und Tabellen sowie Infos über unsere Abteilung."
        />
      </Head>
      <main>
        <section className="relative bg-gradient-to-r from-red-600 to-purple-900 w-full md:min-h-[500px] h-[60vh] max-h-[60vh]">
          <Image
            priority
            layout="fill"
            src={landing}
            alt="Badminton Spieler beim Smash"
            className="absolute w-full h-full mix-blend-overlay object-cover object-right"
          />
          <Container>
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
              className="md:text-left text-5xl md:text-7xl lg:text-9xl font-black pt-[20vh] pb-0 text-white"
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
              className="md:text-left text-xl md:text-2xl lg:text-4xl font-light text-white md:ml-2"
            >
              Rot-Weiss Walldorf e.V.
            </motion.h1>
          </Container>
        </section>
        <Container className="mt-[-6rem]">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <Card
              heading="Mannschaften"
              text="Spieler, Fotos, Tabellen und weitere Infos"
              href="/mannschaften"
            />
            <Card
              heading="Jugend"
              text="Alle Infos zur Jugend, Minimannschaft, Trainigszeiten und Coaches"
              href="/jugend"
            />
            <Card
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
        <Container
          fluid
          sx={(theme) => ({
            backgroundColor: dark ? theme.colors.dark[5] : "white",
          })}
          className="py-16 text-center"
        >
          <Title
            order={3}
            className="text-center text-3xl leading-tight font-bold"
          >
            Mitgliedschaft
          </Title>
          <Text
            component="p"
            sx={(theme) => ({
              color: dark ? theme.colors.dark[1] : theme.colors.dark[4],
            })}
            className="text-center my-4 font-semibold md:text-lg"
          >
            Du möchtest wissen was es kostet bei Rot-Weiß Walldorf Badminton zu
            spielen?
            <br />
            Hier erfährst du mehr:
          </Text>
          <Link href="/abteilung">
            <a className="inline-block bg-[#dc271e] px-4 py-2 mt-8 text-white uppercase font-semibold hover:bg-red-500 duration-300">
              MITGLIEDSCHAFT{" "}
            </a>
          </Link>
        </Container>
        <Container
          fluid
          sx={(theme) => ({
            backgroundColor: dark ? theme.colors.dark[7] : theme.colors.gray[0],
          })}
          className="py-16"
        >
          <div className="max-w-md mx-auto">
            <Image
              src={passiv}
              alt="Passive Mitgliedschaft mit QR-Code"
              width={800}
              height={1131}
              layout="responsive"
            />
          </div>
        </Container>
      </main>
    </>
  );
};

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
  `;

  const data = await client.request(query);

  return {
    props: {
      // @ts-ignore
      posts: data.posts,
      // @ts-ignore
      teams: data.teams,
    },
    revalidate: 60 * 30,
  };
};

export default HomePage;
