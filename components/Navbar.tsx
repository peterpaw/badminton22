import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "@mantine/hooks"
import { MenuIcon } from "@heroicons/react/outline"

import { navigation } from "data/navigation"

import rwwLogo from "../public/rww-logo.png"
import { useMantineColorScheme } from "@mantine/styles"

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <div className="sticky top-0 z-20 border-b bg-opacity-80 bg-gray-100 backdrop-filter backdrop-blur-lg shadow-lg shadow-slate-600/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative py-2 md:space-x-10 justify-between flex items-center flex-wrap content-center">
          <div className="justify-center flex">
            <Link href="/">
              <a className="leading-none relative h-10 w-10 md:h-12 md:w-12">
                <span className="sr-only">badminton-walldorf.de</span>
                <Image
                  src={rwwLogo}
                  alt="Rot-Weiss Walldorf Logo"
                  layout="fill"
                />
              </a>
            </Link>
          </div>
          <nav className="hidden md:flex">
            <div className="flex gap-4">
              {navigation.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a>
                    <button className="flex flex-wrap content-center whitespace-nowrap text-sm font-medium tracking-wider text-slate-700 hover:text-red-600">
                      {link.name}
                    </button>
                  </a>
                </Link>
              ))}
            </div>
          </nav>
          {!isDesktop && <MenuIcon className="w-8 h-8" />}
        </div>
      </div>
    </div>
  )
}

export default Navbar
