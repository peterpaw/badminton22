import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useMediaQuery } from "@mantine/hooks"

import { navigation } from "data/navigation"

import rwwLogo from "../public/rww-logo.png"

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 500px)")

  useEffect(() => {
    console.log(isMobile)
  }, [isMobile])

  return (
    <div className="sticky top-0 z-20 border-b bg-opacity-80 bg-gray-100 backdrop-filter backdrop-blur-lg shadow-lg shadow-slate-600/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative py-2 md:space-x-10 md:justify-between justify-center flex items-center flex-wrap content-center">
          <div className="justify-center flex">
            <Link href="/">
              <a className="leading-none">
                <span className="sr-only">badminton-walldorf.de</span>
                <Image
                  src={rwwLogo}
                  alt="Rot-Weiss Walldorf Logo"
                  width={50}
                  height={50}
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
        </div>
      </div>
    </div>
  )
}

export default Navbar
