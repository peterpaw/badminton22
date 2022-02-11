import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-full w-full min-h-screen min-w-screen">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
