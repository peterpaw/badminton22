import { Container, Text, Title, useMantineColorScheme } from "@mantine/core"

const pricingData = [
  {
    title: "Jugendliche",
    description: "Unter 18 Jahren",
    price: "11 Euro",
    additional: "2",
  },
  {
    title: "Erwachsene",
    description: "Ab 18 Jahren",
    price: "13 Euro",
    additional: "4",
  },
]

const PricingPlans = () => {
  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      {pricingData.map((plan) => {
        return (
          <Container
            key={plan.title}
            sx={(theme) => ({
              backgroundColor: dark ? theme.colors.dark[6] : "white",
            })}
            className="w-full shadow-lg py-8 px-0"
          >
            <Title order={3} className="text-2xl font-black">
              {plan.title}
            </Title>
            <Text
              component="p"
              sx={(theme) => ({
                color: dark ? theme.colors.dark[1] : theme.colors.dark[4],
              })}
              className="text-sm text-center mb-4"
            >
              {plan.description}
            </Text>
            <Container className="py-4 bg-lime-500">
              <Text
                component="p"
                sx={(theme) => ({
                  color: dark ? theme.colors.dark[5] : theme.colors.dark[4],
                })}
                className="text-center text-3xl font-black m-0 pb-0 leading-none"
              >
                {plan.price}
              </Text>
              <Text
                component="p"
                sx={(theme) => ({
                  color: theme.colors.dark[4],
                })}
                className="m-0 mt-1 p-0 leading-none text-sm text-center"
              >
                /Monat
              </Text>
            </Container>
            <Text
              component="p"
              sx={(theme) => ({
                color: dark ? theme.colors.dark[1] : theme.colors.dark[4],
              })}
              className="text-center text-sm mt-4 px-8 md:px-16"
            >
              Der Beitrag berechnet sich aus 9 Euro Basisgebühr und zusätzlich{" "}
              <strong>{plan.additional} Euro</strong> Ballgeld.
            </Text>
          </Container>
        )
      })}
    </Container>
  )
}

export default PricingPlans
