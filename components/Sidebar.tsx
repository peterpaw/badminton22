import Link from "next/link"
import { Dispatch, SetStateAction } from "react"

interface ISidebarProps {
  showSidebar: boolean
  setShowSidebar: Dispatch<SetStateAction<boolean>>
}

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Training", href: "/training", current: false },
  { name: "Mannschaften", href: "/mannschaften", current: false },
  { name: "Presse", href: "/presse", current: false },
  { name: "Jugend", href: "/jugend", current: false },
  { name: "Kontakt", href: "/kontakt", current: false }
]

const Sidebar: React.FC<ISidebarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className={`top-0 right-0 w-full sm:w-[75vw] md:w-[50vw] lg:w-[35vw] bg-red-600 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300
 ${showSidebar ? "translate-x-0 " : "translate-x-full"}`}
    >
      {navigation.map((link) => (
        <Link href={link.href} key={link.href}>
          <a>
            <h2 className="mt-20 text-4xl font-semibold text-white">
              {link.name}
            </h2>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
