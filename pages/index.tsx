import { useEffect } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const HomePage = () => {
  const [ref1, inView1] = useInView({ threshold: 0.4 })
  const [ref2, inView2] = useInView({ threshold: 0.4 })
  const animation = useAnimation()
  const animation2 = useAnimation()

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
  }, [inView1])

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
  }, [inView2])

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
        <section className="relative bg-gradient-to-r from-red-600 to-purple-900 w-full h-[60vh] max-h-[60vh]">
          <Image
            priority
            layout="fill"
            src="/landing02.jpg"
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
        <section className="container-narrow mt-[-6rem]">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              whileHover={{ translateY: -10 }}
              className="bg-white shadow-2xl z-10"
            >
              <Link href="/mannschaften">
                <a className="block p-8">
                  <h2 className="text-left mb-4 text-xl">Mannschaften</h2>
                  <p className="mb-4 text-sm">
                    Spieler, Fotos, Tabellen und weitere Infos
                  </p>
                  <div className="flex gap-2 text-sm">
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
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ translateY: -10 }}
              className="bg-white shadow-2xl z-10"
            >
              <Link href="/jugend">
                <a className="block p-8">
                  <h2 className="text-left mb-4 text-xl">Jugend</h2>
                  <p className="mb-4 text-sm">
                    Alle Infos zur Jugend, Minimannschaft, Trainigszeiten und
                    Coaches
                  </p>
                  <div className="flex gap-2 text-sm">
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
            </motion.div>

            <motion.div
              variants={item}
              whileHover={{ translateY: -10 }}
              className="bg-white shadow-2xl z-10"
            >
              <Link href="/training">
                <a className="block p-8">
                  <h2 className="text-left mb-4 text-xl">Training</h2>
                  <p className="mb-4 text-sm">
                    Trainingstage, Uhrzeiten und Trainingsorte
                  </p>
                  <div className="flex gap-2 text-sm">
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
            </motion.div>
          </motion.div>
        </section>
        <section className="py-32 overflow-x-hidden">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-32 justify-center container-narrow">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -100 }}
              animate={animation}
              className="relative aspect-[16/12] shadow-2xl"
            >
              <Image
                src="/niklas-sandra.jpg"
                alt="Niklas und Sandra"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 100 }}
              animate={animation2}
            >
              <h2 className="text-red-600 text-left font-black mb-8 mt-4 md:mt-0">
                Willkommen bei den Roten!
              </h2>
              <p>
                Wir trainieren zwei mal pro Woche und uns stehen jeweils bis zu
                9 Felder zur Verfügung.
              </p>
              <p>
                Am frühen Abend beginnen die Kids und Jugendlichen mit ihrem
                Training und werden von unseren erfahrenen Übungsleitern Annika
                Horbach und Maurizio Battaglia betreut. Anschließend geht es bei
                den Erwachsenen weiter.
              </p>
              <p>
                Von lockeren Matches bis hin zu ambitionierten Forderungsspielen
                im Rahmen der Vereinsrangliste ist alles dabei.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
