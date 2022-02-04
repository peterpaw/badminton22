import Navbar from "./Navbar"

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="h-full w-full min-h-screen min-w-screen bg-gray-50">
        {children}
      </div>
    </>
  )
}

export default Layout
