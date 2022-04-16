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
  useMantineTheme,
  createStyles,
  Anchor,
  ColorSchemeProvider,
  ColorScheme,
  ActionIcon,
  Text,
} from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { SunIcon, MoonIcon } from "@heroicons/react/outline"

import { navigation } from "data/navigation"
// import Layout from "@components/Layout"

import "../styles/globals.css"
import Footer from "@components/Footer"

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
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
  })
  const dark = colorScheme === "dark"

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

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
          withGlobalStyles
          withNormalizeCSS
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
        >
          {/* <Layout> */}
          <AppShell
            padding={0}
            // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
            // navbarOffsetBreakpoint="xs"
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
                  className="max-w-5xl mx-auto"
                >
                  <div
                    style={{
                      width: 50,
                      padding: "0.25rem",
                    }}
                  >
                    <Anchor component={Link} href="/">
                      <a>
                        <img src="/rww-logo.svg" alt="Rot-Weiß Walldorf Logo" />
                      </a>
                    </Anchor>
                  </div>

                  <div className={classes.links}>
                    <div className="flex gap-4">
                      {navigation.map((navLink) => (
                        <Link href={navLink.href} key={navLink.name} passHref>
                          <Text
                            component="a"
                            className="text-sm font-medium duration-300 ease-in-out uppercase"
                            sx={(theme) => ({
                              color: dark
                                ? theme.colors.gray[5]
                                : theme.colors.gray[8],
                              "&:hover": { color: theme.colors.red[5] },
                            })}
                          >
                            {navLink.name}
                          </Text>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <ActionIcon
                    onClick={() => toggleColorScheme()}
                    title="Toggle color scheme"
                  >
                    {dark ? (
                      <SunIcon className="w-8 h-8" />
                    ) : (
                      <MoonIcon className="w-8 h-8" />
                    )}
                  </ActionIcon>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="md"
                      color={dark ? theme.colors.gray[2] : theme.colors.gray[8]}
                    />
                  </MediaQuery>
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
                <div className="flex flex-col gap-8 justify-center items-center mt-8">
                  {navigation.map((navLink) => (
                    <Link href={navLink.href} key={navLink.name} passHref>
                      <Text
                        component="a"
                        sx={(theme) => ({
                          color: dark
                            ? theme.colors.gray[5]
                            : theme.colors.gray[8],
                          "&:hover": { color: theme.colors.red[5] },
                        })}
                        onClick={() => setOpened(false)}
                        className="text-xl duration-300 ease-in-out uppercase"
                      >
                        {navLink.name}
                      </Text>
                    </Link>
                  ))}
                </div>
              </Navbar>
            }
          >
            <Component {...pageProps} />
            <Footer />
          </AppShell>

          {/* </Layout> */}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export default MyApp
