import { useState } from "react"
import Image from "next/image"

import { cn } from "@utils/cn"
import { StaticImageData } from "next/image"

const BlurImg = ({
  src,
  alt,
}: {
  src: string | StaticImageData
  alt: string
}) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      className={cn(
        "group-hover:opacity-75 duration-700 ease-in-out",
        isLoading
          ? "grayscale blur-2xl scale-110"
          : "grayscale-0 blur-0 scale-100"
      )}
      onLoadingComplete={() => setIsLoading(false)}
    />
  )
}

export default BlurImg
