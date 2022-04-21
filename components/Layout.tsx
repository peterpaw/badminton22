import Link from "next/link"
import {
  AppShell,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Anchor,
  ActionIcon,
  Text,
  createStyles,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core"
import { SunIcon, MoonIcon } from "@heroicons/react/outline"

import NavLink from "@components/NavLink"
import Footer from "@components/Footer"
import { navigation } from "data/navigation"
import { useState } from "react"

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

const Layout: React.FC = ({ children }) => {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  const { classes } = useStyles()

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
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
                  <NavLink key={navLink.name} navLink={navLink} />
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
          <div className="flex flex-col gap-y-12 justify-center items-center mt-8">
            {navigation.map((navLink) => (
              <Link href={navLink.href} key={navLink.name} passHref>
                <Text
                  component="a"
                  sx={(theme) => ({
                    color: dark ? theme.colors.gray[5] : theme.colors.gray[7],
                    "&:hover": { color: theme.colors.red[5] },
                  })}
                  onClick={() => setOpened(false)}
                  className="text-2xl duration-300 ease-in-out uppercase font-bold tracking-normal"
                >
                  {navLink.name}
                </Text>
              </Link>
            ))}
          </div>
        </Navbar>
      }
    >
      {children}
      <Footer />
    </AppShell>
  )
}

export default Layout
