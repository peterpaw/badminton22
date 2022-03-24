import { useState } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout: React.FC = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  )
}

export default Layout
