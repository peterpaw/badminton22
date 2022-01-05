import Link from "next/link"

export const navItems = [
  {
    id: 0,
    title: "Home",
    target: "/"
  },
  {
    id: 1,
    title: "Training",
    target: "/training"
  },
  {
    id: 2,
    title: "Presse",
    target: "/presse"
  },
  {
    id: 3,
    title: "Mannschaften",
    target: "/mannschaften"
  },
  {
    id: 4,
    title: "Jugend",
    target: "/jugend"
  },
  {
    id: 5,
    title: "Kontakt",
    target: "/kontakt"
  }
]

const Nav = () => {
  return (
    <nav className="container">
      <div className="flex gap-2 justify-end px-4 py-2">
        {navItems.map((item) => (
          <Link href={item.target} key={item.id}>
            <a className="hover:underline">{item.title}</a>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Nav
