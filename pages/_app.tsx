import { useState } from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core"
import { getCookie, setCookies } from "cookies-next"
import { GetServerSidePropsContext } from "next"

import Layout from "@components/Layout"

import "../styles/globals.css"

function MyApp(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark")
    setColorScheme(nextColorScheme)
    // when color scheme is updated save it to cookie
    setCookies("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  return (
    <>
      <Head>
        <title>Badminton - Rot-Weiß Walldorf e.V.</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            colorScheme,
            colors: {
              red: [
                "hsl(3deg 76% 69%)",
                "hsl(3deg 76% 65%)",
                "hsl(3deg 76% 61%)",
                "hsl(3deg 76% 57%)",
                "hsl(3deg 76% 53%)",
                "hsl(3deg 76% 49%)",
                "hsl(3deg 76% 45%)",
                "hsl(3deg 76% 41%)",
                "hsl(3deg 76% 37%)",
                "hsl(3deg 76% 33%)",
              ],
            },
          }}
          withGlobalStyles
          withNormalizeCSS
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

MyApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  colorScheme: getCookie("mantine-color-scheme", ctx) || "dark",
})

export default MyApp
