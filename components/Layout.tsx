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
import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

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

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [opened, setOpened] = useState(false)
  const theme = useMantineTheme()
  const { classes } = useStyles()

  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

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
                padding: "0.25rem",
              }}
            >
              <Anchor component={Link} href="/">
                <a className="block leading-none">
                  <Image
                    src="/rww-logo.svg"
                    alt="Rot-Weiß Walldorf Logo"
                    width={40}
                    height={40}
                  />
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
                aria-label="Toggle Mobile Menu"
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="flex flex-col gap-y-8 justify-center items-center mt-8"
          >
            {navigation.map((navLink) => (
              <motion.div variants={item} key={navLink.name}>
                <Link href={navLink.href} passHref>
                  <Text
                    component="a"
                    sx={(theme) => ({
                      color: dark ? theme.colors.gray[5] : theme.colors.gray[7],
                      "&:hover": { color: theme.colors.red[5] },
                    })}
                    onClick={() => setOpened(false)}
                    className="text-2xl duration-300 ease-in-out uppercase font-semibold tracking-normal"
                  >
                    {navLink.name}
                  </Text>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Navbar>
      }
    >
      {children}
      <Footer />
    </AppShell>
  )
}

export default Layout
