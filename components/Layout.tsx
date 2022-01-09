import { useState } from "react"
import Nav from "./Nav"

import Sidebar from "./Sidebar"

const Layout: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <>
      <div className="md:hidden">
        {showSidebar ? (
          <button
            className="flex text-4xl text-white items-center cursor-pointer fixed right-10 top-6 z-50"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            x
          </button>
        ) : (
          <svg
            onClick={() => setShowSidebar(!showSidebar)}
            className="fixed  z-30 flex items-center cursor-pointer right-10 top-6"
            fill="#da261e"
            viewBox="0 0 100 80"
            width="40"
            height="40"
          >
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        )}
      </div>

      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <Nav />

      <div className="bg-zinc-200 min-h-screen">{children}</div>
    </>
  )
}

export default Layout
