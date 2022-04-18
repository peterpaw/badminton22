import { Center, Text } from "@mantine/core"
import { useMantineColorScheme } from "@mantine/styles"
import { motion } from "framer-motion"
import Link from "next/link"

const Card = ({
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

export default Card
