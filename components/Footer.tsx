import Image from "next/image"
import Link from "next/link"

import bschmitt from "../public/bschmitt.jpg"
import pjourdan from "../public/phjourdan.jpg"
import plusline from "../public/plusline.jpg"
import gasthausXXL from "../public/gasthaus-xxl.png"
import {
  Anchor,
  Center,
  Container,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core"
import { FaFacebook } from "react-icons/fa"
import { navigation } from "data/navigation"
import { motion } from "framer-motion"

const Footer = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <footer>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[8] : "white",
        })}
        className="border-t-2 border-[#dc271e]"
      >
        <Container>
          <div className="grid md:grid-cols-3 justify-center gap-2 p-4 py-12 mx-auto">
            <motion.a
              href="https://www.b-schmitt.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-64 h-16 mx-auto my-4 block"
              whileHover={{ y: -2 }}
            >
              <Image
                src={bschmitt}
                alt="Logo BSchmitt Mobile"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
            <motion.a
              href="https://www.ph-jourdan.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-64 h-16 mx-auto my-4 block"
              whileHover={{ y: -2 }}
            >
              <Image
                src={pjourdan}
                alt="Logo Philipp Jourdan"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
            <motion.a
              href="https://www.plusline.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-64 h-16 mx-auto my-4 block"
              whileHover={{ y: -2 }}
            >
              <Image
                src={plusline}
                alt="Logo PlusLine"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
            <motion.a
              href="http://www.rotweiss-xxl.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-64 h-16 mx-auto my-4 block md:col-span-3"
              whileHover={{ y: -2 }}
            >
              <Image
                src={gasthausXXL}
                alt="Logo Gasthaus XXL"
                layout="fill"
                objectFit="contain"
              />
            </motion.a>
          </div>
        </Container>
      </Container>

      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[7] : theme.colors.gray[1],
        })}
        className="py-16 text-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto">
          <Title order={3} className="mb-8">
            Sitemap
          </Title>
          <div className="flex flex-col items-center">
            {navigation.map((link) => (
              <Anchor component={Link} href={link.href} key={link.name}>
                <Text
                  component="a"
                  className="cursor-pointer duration-300"
                  sx={(theme) => ({
                    "&:hover": {
                      color: theme.colors.red[5],
                    },
                  })}
                >
                  {link.name}
                </Text>
              </Anchor>
            ))}
          </div>
        </div>
      </Container>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[8] : theme.colors.gray[0],
        })}
        className="py-2 text-center"
      >
        <Container>
          <motion.a
            href="https://facebook.com/rww.badminton"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            className="inline-block"
          >
            <FaFacebook size={24} color="#1b74e4" className="inline" />
          </motion.a>
        </Container>
      </Container>

      <Container
        fluid
        sx={(theme) => ({ backgroundColor: theme.colors.red[5] })}
        className="p-3 text-slate-200 text-sm"
      >
        <Container className="flex flex-col lg:flex-row justify-between flex-wrap gap-2 mx-auto">
          <div className="flex justify-center lg:justify-start">
            &copy;{` `}
            {new Date().getFullYear()}
            {` `}Rot-Weiss Walldorf Badminton
          </div>
          <div className="flex justify-center lg:justify-end gap-2">
            <Link href="/impressum">
              <a className="">Impressum</a>
            </Link>
            <Link href="/datenschutz">
              <a className="">Datenschutzerklärung</a>
            </Link>
          </div>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
