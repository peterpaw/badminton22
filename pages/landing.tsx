import Image from "next/image"

const LandingPage = () => {
  return (
    <div className="relative w-full h-full">
      <div className="h-full w-full absolute flex justify-center items-center">
        <Image
          src="/landing-gradient.jpg"
          alt="Landing Photo"
          layout="fill"
          objectFit="cover"
        />
        <h1 className="absolute font-inter">Landing Page</h1>
      </div>
    </div>
  )
}

export default LandingPage
