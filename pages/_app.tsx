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
  Image,
  ColorSchemeProvider,
  ColorScheme,
  ActionIcon,
} from "@mantine/core"
import { useLocalStorage } from "@mantine/hooks"
import { SunIcon, MoonIcon } from "@heroicons/react/outline"

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
                >
                  <div
                    style={{
                      width: 50,
                      padding: "0.25rem",
                    }}
                  >
                    <Anchor component={Link} href="/">
                      <a>
                        <Image
                          radius="md"
                          src="/rww-logo.png"
                          alt="Rot-Weiß Walldorf Logo"
                        />
                      </a>
                    </Anchor>
                  </div>
                  <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                    <Burger
                      opened={opened}
                      onClick={() => setOpened((o) => !o)}
                      size="md"
                      color={theme.colors.gray[8]}
                    />
                  </MediaQuery>
                  <div className="flex gap-4 items-center">
                    <div className={classes.links}>
                      <div className="flex gap-4">
                        {navigation.map((navLink) => (
                          <Anchor
                            component={Link}
                            href={navLink.href}
                            key={navLink.name}
                          >
                            <a className="text-sm font-medium text-gray-700 tracking-wider">
                              {navLink.name}
                            </a>
                          </Anchor>
                        ))}
                      </div>
                    </div>
                    <ActionIcon
                      variant="outline"
                      color={dark ? "yellow" : "blue"}
                      onClick={() => toggleColorScheme()}
                      title="Toggle color scheme"
                    >
                      {dark ? (
                        <SunIcon className="w-8 h-8" />
                      ) : (
                        <MoonIcon className="w-8 h-8" />
                      )}
                    </ActionIcon>
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
                  <Anchor
                    component={Link}
                    href={navLink.href}
                    key={navLink.name}
                  >
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
      </ColorSchemeProvider>
    </>
  )
}

export default MyApp
