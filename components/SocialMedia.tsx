import { Center, Container, Title } from "@mantine/core"
import { useMantineColorScheme } from "@mantine/styles"
import { motion } from "framer-motion"
import { FaInstagram, FaFacebook } from "react-icons/fa"

const SocialMedia = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Container
      fluid
      sx={(theme) => ({
        backgroundColor: dark ? theme.colors.dark[9] : theme.colors.gray[0],
      })}
      className="py-8 lg:py-16 border-t-2 border-[#dc271e] relative overflow-hidden"
    >
      <Title order={2} className="mb-8 text-xl md:text-3xl">
        Folge uns...
      </Title>
      <Center className="flex gap-2">
        <motion.a
          href="https://instagram.com/rwwalldorf_badminton"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          aria-label="Link to Facebook page"
        >
          <FaInstagram size={48} color="#dc271e" />
        </motion.a>
        <motion.a
          href="https://facebook.com/rww.badminton"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          aria-label="Link to Facebook page"
        >
          <FaFacebook size={48} color="#1b74e4" />
        </motion.a>
      </Center>
    </Container>
  )
}

export default SocialMedia
