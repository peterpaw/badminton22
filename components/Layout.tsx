import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
