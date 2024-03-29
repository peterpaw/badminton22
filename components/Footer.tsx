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
  Divider,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core"
import { FaFacebook, FaInstagram } from "react-icons/fa"
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
          <div className="grid lg:grid-cols-3 justify-center gap-2 p-4 py-12 mx-auto">
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
                width={256}
                height={64}
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
        className="pt-16 pb-8"
      >
        <Container className="grid grid-cols-2 mx-auto p-0 md:p-2">
          <div className="p-4 mx-auto">
            <Title
              order={3}
              className="mb-6 text-center text-lg text-[#dc271e]"
            >
              Hauptverein
            </Title>
            <motion.a
              whileHover={{ y: -2 }}
              href="http://rw-walldorf.de"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-20 md:w-24 mx-auto"
            >
              <Image
                src="/rww-logo.svg"
                alt="Rot-Weiß Walldorf Logo"
                width={96}
                height={96}
              />
            </motion.a>
          </div>
          <div className="p-4 mx-auto">
            <Title order={3} className="mb-4 text-left text-lg text-[#dc271e]">
              Navigation
            </Title>
            <div className="flex flex-col">
              {navigation.map((link) => (
                <Link passHref key={link.name} href={link.href}>
                  <Text
                    component="a"
                    sx={(theme) => ({
                      color: theme.colors.gray[6],
                      "&:hover": {
                        color: theme.colors.red[5],
                      },
                    })}
                    className="text-lg my-1 md:text-base cursor-pointer duration-300"
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Container>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[7] : theme.colors.gray[1],
        })}
        className="py-2 text-center"
      >
        <Container>
          <Divider my="lg" />
          <Center className="flex gap-2">
            <motion.a
              href="https://instagram.com/rwwalldorf_badminton"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              aria-label="Link to Facebook page"
            >
              <FaInstagram size={24} color="#dc271e" />
            </motion.a>
            <motion.a
              href="https://facebook.com/rww.badminton"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              aria-label="Link to Facebook page"
            >
              <FaFacebook size={24} color="#1b74e4" />
            </motion.a>
          </Center>
        </Container>
        <div className="flex justify-center gap-2 mt-4 leading-none">
          <Link href="/impressum" passHref>
            <Text
              component="a"
              sx={(theme) => ({
                color: theme.colors.gray[6],
                "&:hover": {
                  color: theme.colors.red[5],
                },
              })}
              className="cursor-pointer text-sm duration-300"
            >
              Impressum
            </Text>
          </Link>
          <Text
            className="text-sm"
            sx={(theme) => ({
              color: theme.colors.gray[6],
            })}
          >
            |
          </Text>
          <Link href="/datenschutz" passHref>
            <Text
              component="a"
              sx={(theme) => ({
                color: theme.colors.gray[6],
                "&:hover": {
                  color: theme.colors.red[5],
                },
              })}
              className="cursor-pointer text-sm duration-300"
            >
              Datenschutzerklärung
            </Text>
          </Link>
        </div>
      </Container>

      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[7] : theme.colors.gray[1],
        })}
        className="p-3 text-sm"
      >
        <Container className="flex flex-col lg:flex-row justify-between flex-wrap gap-2 mx-auto mt-4">
          <div className="lg:flex flex-wrap justify-center lg:justify-between w-full text-center">
            <Text
              component="p"
              sx={(theme) => ({
                color: theme.colors.gray[6],
              })}
              className="text-sm"
            >
              &copy;{` `}
              {new Date().getFullYear()}
              {` `}Rot-Weiss Walldorf Badminton
            </Text>
            <Text
              component="p"
              sx={(theme) => ({
                color: theme.colors.gray[6],
              })}
              className="text-sm"
            >
              Mit ❤️ erstellt von{" "}
              <a
                href="https://peterpaw.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Peter Pawelczyk
              </a>
            </Text>
          </div>
        </Container>
      </Container>
    </footer>
  )
}

export default Footer
