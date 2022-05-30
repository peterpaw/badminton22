import { Text, Title, useMantineColorScheme } from "@mantine/core"
import { TableData } from "types"

const Table = ({ tableData }: { tableData: TableData }) => {
  const { data, placing } = tableData

  const { colorScheme } = useMantineColorScheme()
  const dark = colorScheme === "dark"

  return (
    <div className="my-16">
      <Title order={2} className="">
        Tabelle
      </Title>
      <Title
        order={3}
        sx={(theme) => ({
          color: dark ? theme.colors.gray[6] : theme.colors.gray[7],
        })}
        className="mb-16 text-base"
      >
        Saison 2021 / 22
      </Title>
      <div className="text-left max-w-fit mx-auto">
        {tableData.data.map((team, index) => {
          const isHomeTeam = placing === index + 1
          return (
            <Text
              key={team.id}
              component="p"
              sx={(theme) => ({
                color: isHomeTeam
                  ? theme.colors.red[5]
                  : dark
                  ? theme.colors.gray[6]
                  : theme.colors.gray[7],
              })}
              className="font-semibold"
            >
              {`${team.position}. ${team.team_name}`}
            </Text>
          )
        })}
      </div>
    </div>
  )
}

export default Table
