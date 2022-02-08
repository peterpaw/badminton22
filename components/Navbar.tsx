import { navigation } from "data/navigation"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="sticky top-0 z-20 border-b bg-opacity-80 bg-gray-100 backdrop-filter backdrop-blur-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="relative py-2 md:space-x-10 md:justify-between justify-center flex items-center flex-wrap content-center">
          <div className="justify-center flex">
            <Link href="/">
              <a className="leading-none">
                <span className="sr-only">badminton-walldorf.de</span>
                <Image
                  src="/rww-logo.png"
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
                    <button className="flex flex-wrap content-center whitespace-nowrap text-sm font-semibold tracking-wider text-slate-500 uppercase hover:text-red-600">
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
