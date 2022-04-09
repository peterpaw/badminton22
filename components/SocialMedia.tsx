import { Center, Container, Title } from "@mantine/core"
import { useMantineColorScheme } from "@mantine/styles"
import { motion } from "framer-motion"
import { FaFacebook } from "react-icons/fa"

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
      <Title order={2} className="mb-8">
        Folge uns auf Facebook
      </Title>
      <Center>
        <motion.a
          href="https://facebook.com/rww.badminton"
          target="_blank"
          whileHover={{ y: -2 }}
        >
          <FaFacebook size={48} color="#1b74e4" />
        </motion.a>
      </Center>
    </Container>
  )
}

export default SocialMedia
