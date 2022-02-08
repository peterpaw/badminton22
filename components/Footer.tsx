import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="grid md:grid-cols-3 justify-center gap-2 p-4 max-w-7xl mx-auto">
        <a
          href="https://www.b-schmitt.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-64 h-16 mx-auto my-4 block"
        >
          <Image
            src="/bschmitt.jpg"
            alt="Logo BSchmitt Mobile"
            layout="fill"
            objectFit="contain"
          />
        </a>
        <a
          href="https://www.ph-jourdan.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-64 h-16 mx-auto my-4 block"
        >
          <Image
            src="/phjourdan.jpg"
            alt="Logo Philipp Jourdan"
            layout="fill"
            objectFit="contain"
          />
        </a>
        <a
          href="https://www.plusline.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-64 h-16 mx-auto my-4 block"
        >
          <Image
            src="/plusline.jpg"
            alt="Logo PlusLine"
            layout="fill"
            objectFit="contain"
          />
        </a>
      </div>
      <a
        href="http://www.rotweiss-xxl.de/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-64 h-16 mx-auto my-4 block"
      >
        <Image
          src="/gasthaus-xxl.png"
          alt="Logo Gasthaus XXL"
          layout="fill"
          objectFit="contain"
        />
      </a>
      <div className=" bg-red-600 p-3 text-slate-200 text-sm">
        <div className="max-w-7xl flex flex-col lg:flex-row justify-between flex-wrap gap-2 mx-auto">
          <div className="flex justify-center lg:justify-start">
            &copy;{` `}
            {new Date().getFullYear()}
            {` `}Rot-Weiss Walldorf Badminton
          </div>
          <div className="flex justify-center lg:justify-end gap-2">
            <Link href="/impressum">
              <a className="">Impressum</a>
            </Link>
            <Link href="/datenschutz">
              <a className="">Datenschutzerklärung</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
