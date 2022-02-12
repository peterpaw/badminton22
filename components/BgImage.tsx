function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height,
  }
}

const BgImage = () => {
  const { width, height } = getWindowDimensions()

  return (
    <div>
      <h1>image</h1>
    </div>
  )
}

export default BgImage
