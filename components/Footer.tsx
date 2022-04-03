import Image from "next/image"
import Link from "next/link"

import bschmitt from "../public/bschmitt.jpg"
import pjourdan from "../public/phjourdan.jpg"
import plusline from "../public/plusline.jpg"
import gasthausXXL from "../public/gasthaus-xxl.png"
import { Container, useMantineColorScheme } from "@mantine/core"

const Footer = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <footer>
      <Container
        fluid
        sx={(theme) => ({
          backgroundColor: dark ? theme.colors.dark[8] : theme.colors.dark[7],
        })}
      >
        <div className="grid md:grid-cols-3 justify-center gap-2 p-4 max-w-7xl mx-auto">
          <a
            href="https://www.b-schmitt.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-16 mx-auto my-4 block"
          >
            <Image
              src={bschmitt}
              alt="Logo BSchmitt Mobile"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.ph-jourdan.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-16 mx-auto my-4 block"
          >
            <Image
              src={pjourdan}
              alt="Logo Philipp Jourdan"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a
            href="https://www.plusline.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-16 mx-auto my-4 block"
          >
            <Image
              src={plusline}
              alt="Logo PlusLine"
              layout="fill"
              objectFit="contain"
            />
          </a>
          <a
            href="http://www.rotweiss-xxl.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-16 mx-auto my-4 block md:col-span-3"
          >
            <Image
              src={gasthausXXL}
              alt="Logo Gasthaus XXL"
              layout="fill"
              objectFit="contain"
            />
          </a>
        </div>
      </Container>
      <Container
        fluid
        sx={(theme) => ({ backgroundColor: theme.colors.red[5] })}
        className="p-3 text-slate-200 text-sm"
      >
        <div className="max-w-7xl flex flex-col lg:flex-row justify-between flex-wrap gap-2 mx-auto">
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
        </div>
      </Container>
    </footer>
  )
}

export default Footer
