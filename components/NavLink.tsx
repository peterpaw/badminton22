import { Text, useMantineColorScheme } from "@mantine/core"
import Link from "next/link"

const NavLink = ({ navLink }: { navLink: { name: string; href: string } }) => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Link href={navLink.href} passHref>
      <span className="text-sm font-medium duration-300 ease-in-out uppercase">
        {navLink.name}
      </span>
    </Link>
  )
}

export default NavLink
