import { Text, useMantineColorScheme } from "@mantine/core"
import Link from "next/link"

const NavLink = ({ navLink }: { navLink: { name: string; href: string } }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Link href={navLink.href} passHref>
      <Text
        component="a"
        sx={(theme) => ({
          color: dark ? theme.colors.gray[5] : theme.colors.gray[8],
          "&:hover": { color: theme.colors.red[5] },
        })}
        className="text-sm font-medium duration-300 ease-in-out uppercase"
      >
        {navLink.name}
      </Text>
    </Link>
  )
}

export default NavLink
