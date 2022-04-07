import { Anchor, Center, Container, Title } from "@mantine/core"
import { useMantineColorScheme } from "@mantine/styles"
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
      className="pt-16 pb-24 border-t-2 border-b-2 border-[#dc271e]"
    >
      <Title order={3} className="mb-16 text-2xl md:text-4xl">
        Folge uns auf Facebook
      </Title>
      <Center>
        <Anchor href="https://facebook.com/rww.badminton" target="_blank">
          <FaFacebook size={48} color="#1b74e4" />
        </Anchor>
      </Center>
    </Container>
  )
}

export default SocialMedia
