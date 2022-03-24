import { useState } from "react"
import Link from "next/link"
import type { AppProps } from "next/app"
import Head from "next/head"
import {
  MantineProvider,
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
  createStyles,
  Anchor,
  Image,
} from "@mantine/core"

import { navigation } from "data/navigation"
// import Layout from "@components/Layout"

import "../styles/globals.css"

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}))

function MyApp({ Component, pageProps }: AppProps) {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <>
      <Head>
        <title>Badminton - Rot-Weiß Walldorf e.V.</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        {/* <Layout> */}
        <AppShell
          // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
          navbarOffsetBreakpoint="sm"
          // fixed prop on AppShell will be automatically added to Header and Navbar
          fixed
          header={
            <Header height={55} p="md">
              {/* Handle other responsive styles with MediaQuery component or createStyles function */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: 50,
                    padding: "0.125rem",
                  }}
                >
                  <Image
                    radius="md"
                    src="/rww-logo.png"
                    alt="Rot-Weiß Walldorf Logo"
                  />
                </div>
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
                <div className={classes.links}>
                  <div className="flex gap-1">
                    {navigation.map((navLink) => (
                      <Anchor
                        component={Link}
                        href={navLink.href}
                        key={navLink.name}
                      >
                        <a className="text-sm font-medium text-gray-700">
                          {navLink.name}
                        </a>
                      </Anchor>
                    ))}
                  </div>
                </div>
              </div>
            </Header>
          }
          navbar={
            <Navbar
              className={classes.navbar}
              p="md"
              // Breakpoint at which navbar will be hidden if hidden prop is true
              hiddenBreakpoint="sm"
              // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
              hidden={!opened}
              // when viewport size is less than theme.breakpoints.sm navbar width is 100%
              // viewport size > theme.breakpoints.sm – width is 300px
              // viewport size > theme.breakpoints.lg – width is 400px
              width={{ base: "100%", sm: 0 }}
            >
              {navigation.map((navLink) => (
                <Anchor component={Link} href={navLink.href} key={navLink.name}>
                  <a onClick={() => setOpened(false)}>{navLink.name}</a>
                </Anchor>
              ))}
            </Navbar>
          }
        >
          <Component {...pageProps} />
        </AppShell>

        {/* </Layout> */}
      </MantineProvider>
    </>
  )
}

export default MyApp
