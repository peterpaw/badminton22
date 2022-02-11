import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion"

const LandingPage = () => {
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
        <title>Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container-narrow">
        <section className="before:gradient-header-before after:gradient-header-after">
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
            className="text-left text-7xl font-black pt-48 pb-4 text-gray-700"
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
            className="text-left text-5xl font-black pb-[370px] text-gray-700"
          >
            Rot-Weiss Walldorf
          </motion.h1>

          <motion.div
            className="grid grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div
              variants={item}
              whileHover={{ translateY: -10 }}
              className="bg-white shadow-2xl"
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
              className="bg-white shadow-2xl"
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
              className="bg-white shadow-2xl"
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
      </main>
    </>
  )
}

export default LandingPage
